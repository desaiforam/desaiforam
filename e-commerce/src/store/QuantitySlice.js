import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  QUANTITYCART: 1,
};

const QuantitySlice = createSlice({
    name: "quantity",
    initialState,
    reducers: {
        setQuantity: (state, action) => {
        console.log("action.payload",typeof action.payload);
      state.QUANTITYCART = action.payload;
    },
  },
});
export const { setQuantity } = QuantitySlice.actions;
export default QuantitySlice.reducer;
  