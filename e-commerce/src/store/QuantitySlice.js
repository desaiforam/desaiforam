import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  QuantityCart: 1,
};

const QuantitySlice = createSlice({
    name: "quantity",
    initialState,
    reducers: {
        setQuantity: (state, action) => {
        console.log("action.payload",typeof action.payload);
      state.QuantityCart = action.payload;
    },
  },
});
export const { setQuantity } = QuantitySlice.actions;
export default QuantitySlice.reducer;
  