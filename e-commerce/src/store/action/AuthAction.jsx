import { createSlice } from "@reduxjs/toolkit";
// import { act } from "@testing-library/react";

const initialState = {
    wishlist: [],
    Listwish: [],
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
        uapdateWishlist: (state, action) => {

            state.wishlist = [...state.wishlist, action.payload]

        },
        updateQunty: (state, action) => {
            console.log('action', action);
            state.quntityfind = action.payload
        },
        updatCart: (state, action) => {
            state.addtocart = [...state.addtocart, action.payload]
        },
        updatQuantitycart: (state, action) => {
            const list = [...state.addtocart]
            list[action.payload.index].proquantity = Number(action.payload.quntity)
            state.addtocart = list
        },
        updateSubtotal: (state, action) => {
            // console.log('action', action);
            state.subtotal = action.payload
        },
        removetoCart: (state, action) => {
            const object = state.addtocart.filter(obj => obj.id !== action.payload);
            state.addtocart = object
        },
        removetowish: (state, action) => {
            const object = state.wishlist.filter(obj => obj.id !== action.payload);
            state.wishlist = object
        }


    }

})

export const AuthAction = authAction.actions

export default authAction.reducer


