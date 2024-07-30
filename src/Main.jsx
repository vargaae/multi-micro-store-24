import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
// import { Elements } from "@stripe/react-stripe-js";
// import { stripePromise } from "./utils/stripe/stripe.utils"

import App from "./App";

import "./Main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Elements stripe={stripePromise}>
//           <App />
//         </Elements>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
