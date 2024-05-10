import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Provider } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store/store';
import { store } from "./store/store";

import App from "./App";

import { CartProvider } from "./contexts/cart.context";

import ErrorPage from "./ErrorPage";

import "./Main.scss";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
