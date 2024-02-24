import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  WishList: [],
  addToCart: [],
  listOfProduct: [],
  quantity: "",
  // quantityFind: '',
  // quantityCart:'',
  subTotal: 0,
};

const authAction = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToProduct: (state, action) => {
      state.listOfProduct = action.payload;
      
    },
    upDateCart: (state, action) => {
      state.addToCart = [...state.addToCart, action.payload];
      // const object = state.addToCart.filter((obj) => action.payload.id);
    },
    upDateWishList: (state, action) => {
      state.WishList = [...state.WishList, action.payload];
    },
    removeToCart: (state, action) => {
      state.addToCart = action.payload;
    },
    removeToWish: (state, action) => {
      state.WishList = action.payload;
    },
    upDateQuantity: (state, action) => {
      state.quantityFind = action.payload;
    },
    upDateQuantityCart: (state, action) => {
      const list = [...state.listOfProduct];
      const index = list.findIndex((item) => Number(item.id) === Number(action.payload.id));
      list[index].quantity = Number(action.payload.quantity);
      state.listOfProduct = list;
    },
    upDatesubTotal: (state, action) => {
      // console.log('action', action);
      state.subTotal = action.payload;
    },
    quantityReducer: (state, action) => {
      const object = state.quantityCart.map((obj) => obj.id !== action.payload);
      state.quantityCart = object;
      console.log("state.quantityCart", state.quantityCart);
    },
  },
});
export const AuthAction = authAction.actions;
export const setPosts = createAction("SET_POSTS");
export default authAction.reducer;

//set a quantity event in add to cart
