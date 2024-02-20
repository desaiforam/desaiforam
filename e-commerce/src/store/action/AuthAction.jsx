import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  advocaat: [],
  listfoproduct: [],
  quntityfind: [],
  carttoremove: [],
  quantitycart: [],
  addToCart:[],
  subtotal: "",
};

const authAction = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToProduct: (state, action) => {
      // const object = state.advocaat.filter(action.payload);
      // console.log("advocaat object", object);
      state.listfoproduct = action.payload;
      // console.log(" action.payload", action.payload);
    },
    addToCart:(state,action ) => {
      state.listofcart = action.payload;
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
      list[action.payload.index].quantity = Number(action.payload.quantity);
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
export const setPosts = createAction("SET_POSTS");
export default authAction.reducer;
//api can be a store a redux then all product is also store  redux list
// add to cart product is also store  redux list
// product list can be a store a redux then it will be a display using list can display a redux list
