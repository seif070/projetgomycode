
const Avis = require('../models/avis');

exports.ajouterAvis = async (req, res) => {
  try {
    const { user, text, rating } = req.body;

    const nouvelAvis = new Avis({
      user,
      text,
      rating,
    });

    const avisEnregistre = await nouvelAvis.save();

    res.status(201).json(avisEnregistre);
  } catch (erreur) {
    console.error(erreur);
    res.status(500).json({ message: "Erreur lors de l'ajout de l'avis" });
  }
};
