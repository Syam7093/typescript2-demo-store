import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { userSlice } from "./slices/userSlice"


const reducer=combineReducers({
    reusableStore:userSlice.reducer
})

export const store=configureStore({
       reducer:reducer
})