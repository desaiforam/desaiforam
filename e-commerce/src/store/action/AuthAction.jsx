import { createAction, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  WishList: [],
  addToCart: [],
  listOfProduct: [],
  quantity: [],
  color: [],
  sizes: [],
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
    },
    upDateWishList: (state, action) => {
      state.WishList = [...state.WishList, action.payload];
    },
    removeToCart: (state, action) => {
      
      // state.addToCart = action.payload;
    },
    removeData: (state, action) => {
      if (!action.payload) {
        state.addToCart = [];
      } else {
        const oldData = current(state.addToCart);
        const newData = oldData.filter((item) => item !== action.payload);
        state.addToCart = newData;
      }
    },
    removeToWish: (state, action) => {
      state.WishList = action.payload;
    },
    updateQuantity: (state, action) => {
      const index = state.quantity.findIndex(
        (item) => item.id === action.payload.id
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
        (item) => Number(item.id) === Number(action.payload.id)
      );
      list[index].quantity = Number(action.payload.quantity);
      state.listOfProduct = list;
    },
    removeQuantity: (state, action) => {
      if (!action.payload) {
        state.quantity = [];
      } else {
        const oldQuantity = current(state.quantity);
        const newQuantity = oldQuantity.filter((index) => index.id !== action.payload);
        state.quantity = newQuantity
      }
    },

    upDateColor: (state, action) => {
      const index = state.color.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.color = [...state.color, action.payload];
      } else {
        state.color[index].colorName = action.payload.colorName;
      }
    },
    removeColor: (state, action) => {
      if (!action.payload) {
        state.color = [];
      } else {
        const oldData = current(state.color);
        const newData = oldData.filter((item) => item.id !== action.payload);
        state.color = newData;
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
    removeSize: (state, action) => {
      if (!action.payload) {
        state.sizes = [];
      } else {
        const oldDataSize = current(state.sizes);

        const newDataSize = oldDataSize.filter(
          (item) => item.id !== action.payload
        );
        state.sizes = newDataSize;
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

// remove a quantity to
