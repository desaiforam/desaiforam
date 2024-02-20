import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  WISHLISYT: [],
  ADDTOCART: [],
  LISTOFPRODUCT: [],
  QUANTITYFIND: [],
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
      state.LISTOFPRODUCT = action.payload;
    
    },
    addToCart:(state,action ) => {
      state.listofcart = action.payload;
    },

    UpDateWishList: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    UpDateQuantity: (state, action) => {
      state.QUANTITYFIND = action.payload;
    },
    UpDatCart: (state, action) => {
      const object = state.ADDTOCART.filter((obj) => action.payload);
    
      state.ADDTOCART = [...state.ADDTOCART, action.payload];
    },
    UpDatQuantityCart: (state, action) => {
      const list = [...state.ADDTOCART];
      list[action.payload.index].quantity = Number(action.payload.quantity);
      state.ADDTOCART = list;
    },
    updateSubtotal: (state, action) => {
      // console.log('action', action);
      state.subtotal = action.payload;
    },
    RemoveToCart: (state, action) => {
      const object = state.ADDTOCART.filter((obj) => obj.id !== action.payload);
      state.ADDTOCART = object;
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
