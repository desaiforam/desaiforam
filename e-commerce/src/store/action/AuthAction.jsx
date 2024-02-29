import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  WishList: [],
  addToCart: [],
  listOfProduct: [],
  quantity: [],
  color: [],
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
      const index = state.quantity.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index === -1) {
        state.quantity = [...state.quantity, action.payload];
      } else {
        state.quantity[index].quantity = action.payload.quantity;
      }
    },
    upOnChangeQuantity: (state, action) => {
      state.quantity = [...state.quantity, action.payload];
      const list = [...state.listOfProduct];
      const index = state.quantity.findIndex(
        // (item) => item.id === action.payload.id, 
        (item) => Number(item.id) === Number(action.payload.id)
      );
      list[index].quantity = Number(action.payload.quantity);
       state.listOfProduct = list;
      
    },  
    upDateColor: (state, action) => {
      const index = state.color.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("index", index);
      if (index === -1) {
        state.color = [...state.color, action.payload];
      } else {
        state.color[index].colorName = action.payload.colorName;
      }
    },  
    upDateSize: (state, action) => {
      const index = state.sizes.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.sizes = [...state.sizes, action.payload];
      } else {
        state.sizes[index].size = action.payload.size;
      }
    },
    setSizeInProduct: (state, action) => {
      const { productId, size } = [...state.addToCart, action.payload];
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

//get the quantity value of console  