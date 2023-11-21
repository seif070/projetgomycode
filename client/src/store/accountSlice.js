import { createSlice } from "@reduxjs/toolkit";


const accountSlice = createSlice({
    name:"account",
    initialState:{
        name:"redux account",
        lastname:"redux",
        email:"redux@gmail.com",
        password:"redux",
        role:"user"
    },
    reducers:{
        setAccount:(state,action)=>{
            return action.payload
        }
    }
})


export const {setAccount} = accountSlice.actions

export default accountSlice.reducer