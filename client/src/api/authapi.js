import axios from "axios"


export const registerUser =async(values)=>{
const registerUserAuth = await axios.post('http://localhost:5002/auth/register',{...values})

}

export const fetchaccount = async()=>{
    const token = localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:5002/auth/account',{headers:{Authorization:token}})
return data 
}