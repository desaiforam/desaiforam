// reducers/quantityReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { setQuantity } from '../actions/quantityActions';

const initialState = {
  quantity: 1
};

const quantityReducer = createReducer(initialState, {
  [setQuantity]: (state, action) => {
    state.quantity = action.payload;
  }
});

export default quantityReducer;
