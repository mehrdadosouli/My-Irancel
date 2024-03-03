import { configureStore } from "@reduxjs/toolkit";
import irancellSlice from '../features/irancellSlice.js'

const store = configureStore({
    reducer:{
        irancell:irancellSlice
    }
})

export default store