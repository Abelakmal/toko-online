import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.data.find((item) => item.id === action.payload.id);
      if (isExist) {
        isExist.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = testSlice.actions;
export default testSlice.reducer;
