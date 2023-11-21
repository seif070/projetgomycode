const mongoose = require('mongoose')




const connecdb=async()=>{
    try{
        await mongoose.connect('mongodb+srv://seif070:MlLzgJEqBrqLKEly@atlascluster.dpqjgmx.mongodb.net/ ')
        console.log('you did it ur connected to ur db')
    }catch(err){
        console.log(err)
    }
}

module.exports = connecdb