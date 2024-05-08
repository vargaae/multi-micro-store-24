import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState", store.getState());

  next(action);

  console.log('next state: ', store.getState())
};

// const middleWares = [loggerMiddleware];
// eslint-disable-next-line no-undef
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composeEnhancer =
  // eslint-disable-next-line no-undef
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = compose(applyMiddleware(...middleWares));
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  // middleware: middleWares,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  //   persistedReducer,
  //   undefined,
    composedEnhancers
});

// export const persistor = persistStore(store);
