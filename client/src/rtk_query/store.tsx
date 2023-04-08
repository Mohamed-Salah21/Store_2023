import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsApi from "./productsApi";
const RootReducer: any = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
});
const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware: any) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(productsApi.middleware);
  },
});
export default store;
