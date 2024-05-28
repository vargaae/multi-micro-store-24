import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { strApi } from "../services/strApi";

const middleWares = [
  import.meta.env.NODE_ENV === "development" && logger,
].filter(Boolean);

export const store = configureStore({
  [strApi.reducerPath]: strApi.reducer,
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(middleWares),
  // });
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(strApi.middleware, middleWares),
});
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
