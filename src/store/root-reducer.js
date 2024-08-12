import { combineReducers } from "@reduxjs/toolkit";

import { strApi } from "../services/strApi";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  [strApi.reducerPath]: strApi.reducer,
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
