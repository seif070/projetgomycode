// userRoutes.js

const express = require('express');
const authRouter = express.Router();
const { registerauth, loginuser, updateuser } = require('../controllers/usercontroller');
const { registerValidation, Logvalidation, validation } = require('../middelwares/RegisterValidator');
const { isAuth } = require('../middelwares/isAuth');

// partie authentification
authRouter.post('/register', registerValidation, validation, registerauth);


authRouter.post('/login', Logvalidation, validation, loginuser);

// ... other routes ...
authRouter.get('/account',isAuth,async(req,res)=>{
    res.send(req.user)
})
module.exports = authRouter;
