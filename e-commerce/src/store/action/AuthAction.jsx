import { createAction,  createSlice } from "@reduxjs/toolkit";

const initialState = {
  WISHLIST: [],
  ADDTOCART: [],
  LISTFOPRODUCT: [],
  // QUANTITYFIND: [],
  CARTTOREMOVE: [],
  QUANTITYCART: [],
  SUBTOTAL: "",
  QUANTITY: [],
};

const authAction = createSlice({
  name: "user",
  initialState,
  reducers: {
    ADDTOPRODUCT: (state, action) => {
      state.LISTFOPRODUCT = action.payload;
      const productIds = action.payload.map((product) => product.id);
      console.log("Product Ids:", productIds);
    },
    UPDATEWISHLIST: (state, action) => {
      
      state.WISHLIST = [...state.WISHLIST, action.payload];
    },
    UpDateQuantity: (state, action) => {
      state.QUANTITYFIND = action.payload;
    },
    UpDatCart: (state, action) => {
      const object = state.ADDTOCART.filter((obj) => action.payload);
      console.log("object ADDTOCART", object);
      state.ADDTOCART = [...state.ADDTOCART, action.payload];
    },
    UpDatQUANTITYCART: (state, action) => {
      const list = [...state.ADDTOCART];
      list[action.payload.index].quantity = Number(action.payload.quantity);
      state.ADDTOCART = list;
    },
    updateSUBTOTAL: (state, action) => {
      // console.log('action', action);
      state.SUBTOTAL = action.payload;
    },
    RemoveToCart: (state, action) => {
      const object = state.ADDTOCART.filter((obj) => obj.id !== action.payload);
      state.ADDTOCART = object;
    },
    RemoveToWish: (state, action) => {
      const object = state.WISHLIST.filter((obj) => obj.id !== action.payload);
      state.WISHLIST = object;
    },
    QUANTITYREDUCER: (state, action) => {
      const object = state.QUANTITYCART.map((obj) => obj.id !== action.payload);
      state.QUANTITYCART = object;
      console.log("state.QUANTITYCART", state.QUANTITYCART);
    },
  },
});

export const AuthAction = authAction.actions;
export const setPosts = createAction("SET_POSTS");
export default authAction.reducer;
// // a WISHLIST can



