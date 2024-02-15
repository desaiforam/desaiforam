import { createSlice } from "@reduxjs/toolkit";
// import { act } from "@testing-library/react";

const initialState = {
    wishlist: [],
    addtocart: [],
    quntityfind: [],
    carttoremove: [],
    quantitycart: [],
    subtotal: "",
}
const authAction = createSlice({
    name: 'user',
    initialState,
    reducers: {
        UpDateWishList: (state, action) => {

            state.wishlist = [...state.wishlist, action.payload]

        },
        UpDateQuantity: (state, action) => {
            console.log('action', action);
            state.quntityfind = action.payload
        },
        UpDatCart: (state, action) => {
            state.addtocart = [...state.addtocart, action.payload]
        },
        UpDatQuantityCart: (state, action) => {
            const list = [...state.addtocart]
            list[action.payload.index].profundity = Number(action.payload.quantity)
            state.addtocart = list
        },
        updateSubtotal: (state, action) => {
            // console.log('action', action);
            state.subtotal = action.payload
        },
        RemoveToCart: (state, action) => {
            const object = state.addtocart.filter(obj => obj.id !== action.payload);
            state.addtocart = object
        },
        RemoveToWish: (state, action) => {
            const object = state.wishlist.filter(obj => obj.id !== action.payload);
            state.wishlist = object
        }


    }

})

export const AuthAction = authAction.actions

export default authAction.reducer


