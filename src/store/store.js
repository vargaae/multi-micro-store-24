import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import { setupListeners } from "@reduxjs/toolkit/query";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { strApi } from "../services/strApi";

const middleWares = [
  import.meta.env.NODE_ENV === "development" && logger,
].filter(Boolean);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  [strApi.reducerPath]: strApi.reducer,
  reducer: persistedReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(middleWares),
  // });
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(strApi.middleware, middleWares),
});

export let persistor = persistStore(store);
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
