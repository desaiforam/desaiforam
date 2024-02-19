// File: src/reducers/authReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { setPosts } from '../actions/authActions';

const initialState = {
  posts: [],
};

const authReducer = createReducer(initialState, {
  [setPosts]: (state, action) => {
    state.posts = action.payload;
  },
});

export default authReducer;