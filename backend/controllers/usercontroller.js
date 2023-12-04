const UserSchema = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerauth = async (req, res) => {
  try {
    const { name, lastname, email, password, phone, address } = req.body;


    const foundUser = await UserSchema.findOne({ email });
    if (foundUser) {
      return res.status(409).json({ msg: 'Vous avez déjà un compte. Veuillez vous connecter.' });
    }

    const newUser = new UserSchema({ name, lastname, email, password, phone, address });

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    newUser.password = hash;

    await newUser.save();

    res.status(201).json({ msg: 'Bienvenue sur la plateforme !', newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Une erreur s\'est produite lors de l\'inscription.' });
  }
};

exports.loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

  

    const foundUser = await UserSchema.findOne({ email });
    if (!foundUser) {
      return res.status(404).json({ msg: 'Aucun compte trouvé. Veuillez vous inscrire.' });
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(401).json({ msg: 'Mot de passe incorrect.' });
    }

    const payload = { id: foundUser._id };
    const token = jwt.sign(payload, process.env.privateKey);

    res.status(200).json({ msg: 'Bienvenue !', foundUser,token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Une erreur s\'est produite lors de la connexion.' });
  }
};

exports.updateuser = async (req, res) => {
  const { id } = req.params;
  try {
    const { password, ...updateData } = req.body;

    if (password) {
      const saltRounds = 10;
      updateData.password = bcrypt.hashSync(password, saltRounds);
    }

    const updatedUser = await UserSchema.findByIdAndUpdate(id, { $set: { ...updateData } });

    if (!updatedUser) {
      return res.status(404).json({ msg: 'Utilisateur non trouvé.' });
    }

    res.status(200).json({ msg: 'Profil utilisateur mis à jour.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Une erreur s\'est produite lors de la mise à jour du profil utilisateur.' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserSchema.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
