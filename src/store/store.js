import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../store/authSlice.js"

const store = configureStore({
    reducer:{
        authSlice
    }
})

export default store



