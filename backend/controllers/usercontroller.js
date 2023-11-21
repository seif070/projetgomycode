const userSchema = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


exports.registerauth=async(req,res)=>{
    try{
  
      const {name,lastname,email,password} = req.body 
  
  
  // talwij mte3 el user  email deja mwjoud 
  
  
  const founduser = await userSchema.findOne({email})
if(founduser){return res.status(404).json({msg:'vous avez deja un compte voir le login'})}
    

const newuser = await new userSchema(req.body)
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
  
      newuser.password = hash
      newuser.save()
   
      res.status(200).json({msg:'you did a good job welcome to the platform',newuser})
   
  
  }catch(err){
      console.log(err)
      res.status(400).jsonc({msg:'there is something wrong'})
    }
  }







  exports.loginuser=async(req,res)=>{
    try{


      const {email,password} = req.body 
      const founduser = await userSchema.findOne({email})
      if(!founduser){return res.status(404).json({msg:'pas de compte voir le register'})}
          
      const match = await bcrypt.compare(password, founduser.password)
      if(!match){return res.status(404).json({msg:'error partie mdp'})}
      // creation mt3 el token 
      
      const payload = { id : founduser._id}
      var token = jwt.sign(payload,process.env.privateKey )
      
      res.status(200).send({msg:'ur welcome',token , founduser})
      
    }catch(err){
      console.log(err)
    }
  }

  exports.updateuser=exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
      }
      const updatedUser = await UserSchema.findByIdAndUpdate(id, {
        $set: { ...req.body },
      });
      if (!updatedUser) {
        return res.status(400).json({ msg: "User not exist" });
      }
      return res.status(200).send({ msg: "User updated" });
    } catch (error) {
      console.log(err)
      return res.status(500).send({ err: error });
    }
  };