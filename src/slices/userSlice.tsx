import { createSlice } from "@reduxjs/toolkit";

interface kk{
    user:string[]
}
const initialState:kk={
    user:[],
}

export const userSlice=createSlice({
   name:"reducerpath",
    initialState,
    reducers:{
        setUser:(state,action)=>{
           state.user=action.payload
        }
    }

})

export const {setUser}=userSlice.actions