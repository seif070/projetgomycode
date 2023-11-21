const express = require('express')


const {registerauth,loginuser,updateuser}=require('../controllers/usercontroller')
const authRouter = express.Router()

const {registerValidation,Logvalidation,validation}=require('../middelwares/RegisterValidator')
const {isAuth}=require('../middelwares/isAuth')


// partie authentification

authRouter.post('/register',registerValidation,validation,registerauth)


authRouter.post('/loginuser',Logvalidation,validation,loginuser)

authRouter.get('/account',isAuth,async(req,res)=>{
    res.send(req.user)
})


// partie update profil user 

 authRouter.put('/updateprofil/:id',isAuth,updateuser)



module.exports = authRouter