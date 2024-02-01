import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
    addtocart: [],
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
        updatCart: (state, action) => {

            state.addtocart = [...state.addtocart, action.payload]
        },
        updateSubtotal: (state, action) => {
            // console.log('action', action);
            state.subtotal =  action.payload
        },
       

    }

})

export const AuthAction = authAction.actions

export default authAction.reducer


