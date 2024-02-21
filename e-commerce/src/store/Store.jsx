import { configureStore } from "@reduxjs/toolkit";
import Authredaucre from "./action/AuthAction";
import logger from "redux-logger";
import QuantityReducer from "./QuantitySlice";

const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger);
};
const store = configureStore({
  reducer: {
    Auth: Authredaucre,
    // quantity: QuantityReducer,
    // QuantityReducer: QuantityReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return middleware(getDefaultMiddleware);
  },
});

export default store;
