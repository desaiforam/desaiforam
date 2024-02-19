import { createAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
  wishlist: [],
  advocaat: [],
  productcart: [],
  quntityfind: [],
  carttoremove: [],
  quantitycart: [],
  subtotal: "",
};


const authAction = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    addToProduct: (state, action) => {
      state.productcart = action.payload;
      console.log(" action.payload", action.payload);
    },

    UpDateWishList: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    UpDateQuantity: (state, action) => {
      state.quntityfind = action.payload;
    },
    UpDatCart: (state, action) => {
      const object = state.advocaat.filter((obj) => action.payload);
      console.log("object advocaat", object);
      state.advocaat = [...state.advocaat, action.payload];
    },
    UpDatQuantityCart: (state, action) => {
      const list = [...state.advocaat];
      list[action.payload.index].profundity = Number(action.payload.quantity);
      state.advocaat = list;
    },
    updateSubtotal: (state, action) => {
      // console.log('action', action);
      state.subtotal = action.payload;
    },
    RemoveToCart: (state, action) => {
      const object = state.advocaat.filter((obj) => obj.id !== action.payload);
      state.advocaat = object;
    },
    RemoveToWish: (state, action) => {
      const object = state.wishlist.filter((obj) => obj.id !== action.payload);
      state.wishlist = object;
    },
  },
});

export const AuthAction = authAction.actions;
export const setPosts = createAction('SET_POSTS');
export default authAction.reducer;
