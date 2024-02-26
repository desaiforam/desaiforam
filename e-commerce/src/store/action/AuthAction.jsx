import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  WishList: [],
  addToCart: [],
  listOfProduct: [],
  quantity: "",
  color:null,
  sizes: [],
  // // quantityFind: '',
  // // quantity:'',
  // subTotal: 0,
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
    updateQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    upDateQuantityCart: (state, action) => {
      state.quantity = action.payload;
      const list = [...state.listOfProduct];
      const index = list.findIndex(
        (item) => Number(item.id) === Number(action.payload.id)
      );
      list[index].quantity = Number(action.payload.quantity);
      state.listOfProduct = list;
      
    },
    upDateColor: (state, action) => {
      state.color = action.payload;
      
    
    },
    upDateSize: (state, action) => {
      state.sizes = action.payload;
    },
    setSizeInProduct: (state, action) => {
      const { productId, size } = action.payload;
      const productIndex = state.listOfProduct.findIndex(
        (product) => product.id === productId
      );
      if (productIndex !== -1) {
        state.listOfProduct[productIndex].size = size;
      }
    },
    upDatesubTotal: (state, action) => {
      state.subTotal = action.payload;
    },
  },
});
export const AuthAction = authAction.actions;
export const setPosts = createAction("SET_POSTS");
export default authAction.reducer;
