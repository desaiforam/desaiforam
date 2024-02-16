import { createSlice } from "@reduxjs/toolkit";
// import { act } from "@testing-library/react";

const initialState = {
    wishlist: [],
    advocaat: [],
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
           
            state.quntityfind = action.payload
        },
        UpDatCart: (state, action) => {
            state.advocaat= [...state.advocaat, action.payload]
        },
        UpDatQuantityCart: (state, action) => {
            const list = [...state.advocaat]
            list[action.payload.index].profundity = Number(action.payload.quantity)
            state.advocaat= list
        },
        updateSubtotal: (state, action) => {
            // console.log('action', action);
            state.subtotal = action.payload
        },
        RemoveToCart: (state, action) => {
            const object = state.advocaat.filter(obj => obj.id !== action.payload);
            state.advocaat= object
        },
        RemoveToWish: (state, action) => {
            const object = state.wishlist.filter(obj => obj.id !== action.payload);
            state.wishlist = object
        }


    }

})

export const AuthAction = authAction.actions

export default authAction.reducer


