import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/userName.slice'

export default configureStore({
    reducer: {
        userName
    }
})



