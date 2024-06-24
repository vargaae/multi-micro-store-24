import { combineReducers } from "@reduxjs/toolkit";

import { strApi } from "../services/strApi";
// import { pokemonApi } from "../services/pokemon";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

// import { scartReducer } from "./cart/scart.slice";

// export const rootReducer = combineSlices(strApi, {
//   user: userReducer,
//   categories: categoriesReducer,
//   cart: cartReducer,
//   strapicart: scartReducer,
// })

export const rootReducer = combineReducers({
  // [pokemonApi.reducerPath]: pokemonApi.reducer,
  [strApi.reducerPath]: strApi.reducer,
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  // strapicart: scartReducer,
});
