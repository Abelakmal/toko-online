import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice(
    {
        name: "cart",
        initialState: {
            data: [{ id: 1, qyt: 15}],
        },
        reducers: {
            addToCart: (state, action) => {
                state.data.push(action.payload)
            }
        }
    }
)

export const {addToCart} = testSlice.actions;
export default testSlice.reducer