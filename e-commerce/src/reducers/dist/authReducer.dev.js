"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authActions = require("../actions/authActions");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  posts: []
};
var authReducer = (0, _toolkit.createReducer)(initialState, _defineProperty({}, _authActions.setPosts, function (state, action) {
  state.posts = action.payload;
}));
var _default = authReducer;
exports["default"] = _default;