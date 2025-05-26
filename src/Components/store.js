// store.js or store/index.js
import { configureStore } from "@reduxjs/toolkit";
// import CartReducer from '../Components/CartSlice';

export default configureStore({
    reducer: {
        // cart: CartReducer,
    },
});
