import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  ADDTOCART: [],
  LISTFOPRODUCT: [],
  QUANTITYFIND: [],
  CARTTOREMOVE: [],
  QUANTITYCART: [],
  SUBTOTAL: "",
  QUANTITY:[]
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
    UPDATEWISHLIST: (state, action) => {
      // state.wishlist = action.payload.map((item) => item.id)
      state.wishlist = [...state.wishlist, action.payload];
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
      const object = state.wishlist.filter((obj) => obj.id !== action.payload);
      state.wishlist = object;
    },
   QUANTITYREDUCER : (createReducer,state, action)=>{
     const QUANTITY =   action.payload;
      }
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
//   QUANTITYFIND: [],
//   CARTTOREMOVE: [],
//   QUANTITYCART: [],
//   SUBTOTAL: "",
// };

// const authAction = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     ADDTOPRODUCT: (state, action) => {
//       state.LISTFOPRODUCT = action.payload.map(item => item.id); // Extracting ids
//       console.log("LISTFOPRODUCT ids:", state.LISTFOPRODUCT); // Logging only the ids
//     },
//     UPDATEWISHLIST: (state, action) => {
//       state.wishlist = [...state.wishlist, action.payload];
//     },
//     UpDateQuantity: (state, action) => {
//       state.QUANTITYFIND = action.payload;
//     },
//     UpDatCart: (state, action) => {
//       const object = state.ADDTOCART.filter((obj) => action.payload);
//       console.log("object ADDTOCART", object);
//       state.ADDTOCART = [...state.ADDTOCART, action.payload];
//     },
//     UpDatQUANTITYCART: (state, action) => {
//       const list = [...state.ADDTOCART];
//       list[action.payload.index].quantity = Number(action.payload.quantity);
//       state.ADDTOCART = list;
//     },
//     updateSUBTOTAL: (state, action) => {
//       // console.log('action', action);
//       state.SUBTOTAL = action.payload;
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
//   QUANTITYFIND: [],
//   CARTTOREMOVE: [],
//   QUANTITYCART: [],
//   SUBTOTAL: "",
// };

// const authAction = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     ADDTOPRODUCT: (state, action) => {
//       // state.LISTFOPRODUCT = action.payload.map(item => item.id); // Extracting IDs
//       state.LISTFOPRODUCT = action.payload ;
//     },
//     UPDATEWISHLIST: (state, action) => {
//       state.wishlist = [...state.wishlist, action.payload.id]; // Storing only ID in wishlist
//     },
//     UpDateQuantity: (state, action) => {
//       state.QUANTITYFIND = action.payload;
//     },
//     UpDatCart: (state, action) => {
//       state.ADDTOCART = [...state.ADDTOCART, action.payload.id]; // Storing only ID in ADDTOCART
//     },
//     UpDatQUANTITYCART: (state, action) => {
//       const index = state.ADDTOCART.findIndex(item => item.id === action.payload.id);
//       if (index !== -1) {
//         state.ADDTOCART[index].quantity = Number(action.payload.quantity);
//       }
//     },
//     updateSUBTOTAL: (state, action) => {
//       state.SUBTOTAL = action.payload;
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
