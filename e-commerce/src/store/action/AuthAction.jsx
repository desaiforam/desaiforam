import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
    Listwish: [],
    addtocart: [],
    carttoremove: [],
    subtotal: "",
}
const authAction = createSlice({
    name: 'user',
    initialState,
    reducers: {
        uapdateWishlist: (state, action) => {
            // console.log('state', state);
            // console.log('[...state.wishlist,action.payload]', [...state.wishlist, action.payload]);
            state.wishlist = [...state.wishlist, action.payload]

        },
        // uapdateListwish : (state, action) => {
        //     state.Listwish =[...state.Listwish,action.payload]
        // },
        updatCart: (state, action) => {

            state.addtocart = [...state.addtocart, action.payload]
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


