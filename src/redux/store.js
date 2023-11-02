import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./slices/test"

export const store = configureStore({
    reducer : {cart : cartreducer}
});

console.log("oncreate store: ", store.getState())

store.subscribe(() => {
    console.log("store change :", store.getState())
})

export default store;