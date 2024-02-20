import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  ADDTOCART: [],
  LISTFOPRODUCT: [],
  quntityfind: [],
  carttoremove: [],
  quantitycart: [],
  subtotal: "",
};

const authAction = createSlice({
  name: "user",
  initialState,
  reducers: {
    ADDTOPRODUCT: (state, action) => {
      // state.LISTFOPRODUCT = action.payload.map((item) => item.id);
      // console.log("LISTFOPRODUCT ids:", state.LISTFOPRODUCT);
      state.LISTFOPRODUCT = action.payload;
      // state.LISTFOPRODUCT =[...state.LISTFOPRODUCT,action.payload]
    },
    

    UpDateWishList: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    UpDateQuantity: (state, action) => {
      state.quntityfind = action.payload;
    },
    UpDatCart: (state, action) => {
      const object = state.ADDTOCART.filter((obj) => action.payload);
      console.log("object ADDTOCART", object);
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

// import { createAction, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   wishlist: [],
//   ADDTOCART: [],
//   LISTFOPRODUCT: [],
//   quntityfind: [],
//   carttoremove: [],
//   quantitycart: [],
//   subtotal: "",
// };

// const authAction = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     ADDTOPRODUCT: (state, action) => {
//       state.LISTFOPRODUCT = action.payload.map(item => item.id); // Extracting ids
//       console.log("LISTFOPRODUCT ids:", state.LISTFOPRODUCT); // Logging only the ids
//     },
//     UpDateWishList: (state, action) => {
//       state.wishlist = [...state.wishlist, action.payload];
//     },
//     UpDateQuantity: (state, action) => {
//       state.quntityfind = action.payload;
//     },
//     UpDatCart: (state, action) => {
//       const object = state.ADDTOCART.filter((obj) => action.payload);
//       console.log("object ADDTOCART", object);
//       state.ADDTOCART = [...state.ADDTOCART, action.payload];
//     },
//     UpDatQuantityCart: (state, action) => {
//       const list = [...state.ADDTOCART];
//       list[action.payload.index].quantity = Number(action.payload.quantity);
//       state.ADDTOCART = list;
//     },
//     updateSubtotal: (state, action) => {
//       // console.log('action', action);
//       state.subtotal = action.payload;
//     },
//     RemoveToCart: (state, action) => {
//       const object = state.ADDTOCART.filter((obj) => obj.id !== action.payload);
//       state.ADDTOCART = object;
//     },
//     RemoveToWish: (state, action) => {
//       const object = state.wishlist.filter((obj) => obj.id !== action.payload);
//       state.wishlist = object;
//     },
//   },
// });

// export const AuthAction = authAction.actions;
// export const setPosts = createAction("SET_POSTS");
// export default authAction.reducer;

// import { createAction, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   wishlist: [],
//   ADDTOCART: [],
//   LISTFOPRODUCT: [],
//   quntityfind: [],
//   carttoremove: [],
//   quantitycart: [],
//   subtotal: "",
// };

// const authAction = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     ADDTOPRODUCT: (state, action) => {
//       // state.LISTFOPRODUCT = action.payload.map(item => item.id); // Extracting IDs
//       state.LISTFOPRODUCT = action.payload ;
//     },
//     UpDateWishList: (state, action) => {
//       state.wishlist = [...state.wishlist, action.payload.id]; // Storing only ID in wishlist
//     },
//     UpDateQuantity: (state, action) => {
//       state.quntityfind = action.payload;
//     },
//     UpDatCart: (state, action) => {
//       state.ADDTOCART = [...state.ADDTOCART, action.payload.id]; // Storing only ID in ADDTOCART
//     },
//     UpDatQuantityCart: (state, action) => {
//       const index = state.ADDTOCART.findIndex(item => item.id === action.payload.id);
//       if (index !== -1) {
//         state.ADDTOCART[index].quantity = Number(action.payload.quantity);
//       }
//     },
//     updateSubtotal: (state, action) => {
//       state.subtotal = action.payload;
//     },
//     RemoveToCart: (state, action) => {
//       state.ADDTOCART = state.ADDTOCART.filter(item => item !== action.payload); // Removing ID from ADDTOCART
//     },
//     RemoveToWish: (state, action) => {
//       state.wishlist = state.wishlist.filter(item => item !== action.payload); // Removing ID from wishlist
//     },
//   },
// });

// export const AuthAction = authAction.actions;
// export const setPosts = createAction("SET_POSTS");
// export default authAction.reducer;
