import { configureStore, createReducer } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { setPosts,upDateSize,upDateColor,upDateQuantity } from '../store/action/AuthAction';

const initialState = {
  posts: [],
  addCartItem : [],
 
};

const authReducer = createReducer(initialState, {
  [setPosts]: (state, action) => {
    state.posts = action.payload;
  },
  [upDateSize]: (state, action) => {
    const { id, size  } = action.payload;
    const itemToUpdate = state.addCartItem.find(item => item.id === id);

    if (itemToUpdate) {
      itemToUpdate.size = size;
    }

  },
  [upDateColor] : (state, action)  =>{
    const { id ,color} = action.payload;
    const itemedUpdate = state.addCartItem.find(item => item.id === id);

    if(itemedUpdate){
      itemedUpdate.color = color;
    }

  },
  [upDateQuantity] :(state , action ) =>{
    const {id , quantity} = action.payload;
    const sizeUpdate = state.addCartItem.find(item =>  item.id === id);

    if(sizeUpdate) {

      sizeUpdate.quantity = quantity;
    }
  }


});

const persistConfig ={
  key: 'root', 
  storage: storage, 
  keyPrefix: 'redux-', 
  serialize: true, 
  deserialize: true, 
  whitelist: ['addtocart', 'wishlist',"addCartItem"],
}

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persist = persistStore(store)
export default authReducer;