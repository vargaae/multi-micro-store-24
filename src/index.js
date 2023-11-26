import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./error-page";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>SHOP component</h1>;
};

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
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
