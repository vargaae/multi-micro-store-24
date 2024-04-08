import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../shop-data.json";
// import {
// onAuthStateChangedListener,
// createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
  // setCurrentProducts: () => null,
  // currentProducts: null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  // const value = { currentProducts, setCurrentProducts };

  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    // if (user) {
    //   createUserDocumentFromAuth(user);
    // }
    // setCurrentUser(user);
    // });
    // return unsubscribe;
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
