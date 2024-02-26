import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1,
};

const QuantitySlice = createSlice({
    name: "quantity",
    initialState,
    reducers: {
        setQuantity: (state, action) => {
    
      state.quantity = action.payload;
    },
  },
});
export const { setQuantity } = QuantitySlice.actions;
export default QuantitySlice.reducer;
  