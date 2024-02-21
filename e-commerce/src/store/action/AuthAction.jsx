import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  WishList: [],
  AddToCart: [],
  Listofproduct: [],
  QuantityFind: [],
  CartToRemove: [],
  QuantityCart: [],
  SubTotal: "",
  // QUANTITY: [],
};

const authAction = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddToProduct: (state, action) => {
      state.Listofproduct = action.payload;
    },
    UpDateWishList: (state, action) => {
      state.WishList = [...state.WishList, action.payload];
      
    },
    UpDateQuantity: (state, action) => {
      state.QuantityFind = action.payload;
    },
    UpDateCart: (state, action) => {
      const object = state.AddToCart.filter((obj) => action.payload.id);
      console.log("object AddToCart", object);
      state.AddToCart = [...state.AddToCart, action.payload];
    },
    UpDateQuantityCart: (state, action) => {
      const list = [...state.AddToCart];
      list[action.payload.index].quantity = Number(action.payload.quantity);
      state.AddToCart = list;
    },
    UpDateSubTotal: (state, action) => {
      // console.log('action', action);
      state.SubTotal = action.payload;
    },
    RemoveToCart: (state, action) => {
      const object = state.AddToCart.filter((obj) => obj.id !== action.payload);
      state.AddToCart = object;
    },
    RemoveToWish: (state, action) => {
      const object = state.WishList.filter((obj) => obj.id !== action.payload.id);
      state.WishList = object;
    },  
    QuantityReducer: (state, action) => {
      const object = state.QuantityCart.map((obj) => obj.id !== action.payload);
      state.QuantityCart = object;
      console.log("state.QuantityCart", state.QuantityCart);
    },
  },
});

export const AuthAction = authAction.actions;
export const setPosts = createAction("SET_POSTS");
export default authAction.reducer;
