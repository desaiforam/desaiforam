import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Authredaucre from "./action/AuthAction";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";


const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger);
};

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  Auth: Authredaucre,
 
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  


  middleware: (getDefaultMiddleware) => {
    return middleware(getDefaultMiddleware);
  },
});

export default store;
export const persist = persistStore(store)

