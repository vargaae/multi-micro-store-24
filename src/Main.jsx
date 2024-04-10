import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { UserMenuProvider } from "./contexts/user-menu.context";
import { CartProvider } from "./contexts/cart.context";
import { ProductsProvider } from "./contexts/products.context";
import ErrorPage from "./ErrorPage";

import "./Main.scss";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  //   children: [
  //     {
  //       path: "shop",
  //       element: <Shop />,
  //     },
  //   ],
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <UserMenuProvider>
        <ProductsProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </ProductsProvider>
      </UserMenuProvider>
    </UserProvider>
  </React.StrictMode>
);
