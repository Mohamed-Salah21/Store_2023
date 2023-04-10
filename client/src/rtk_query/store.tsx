import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsApi from "./productsApi";
import cartApi from "./cartApi";
import favouritesApi from "./favourites";
const RootReducer: any = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [favouritesApi.reducerPath]: favouritesApi.reducer,
});
const store = configureStore({
  reducer: RootReducer,

  middleware: (getDefaultMiddleware: any) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(
      productsApi.middleware,
      cartApi.middleware,
      favouritesApi.middleware
    );
  },
});
export default store;
