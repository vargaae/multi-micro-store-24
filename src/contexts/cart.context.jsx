import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

/*
product shape
{
  id,
  productName,
  price,
  imageUrl
}

Cart Item shape
{
  id,
  productName,
  price,
  imageUrl,
  +quantity
}

*/

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [cartCount, setCartCount] = useState(0);

  // Lets count the products in the Cart:

  //   const quantitiesArray = [1, 2, 3, 4];

  // Make quantitiesArray from the cartItems object/shop-data.json:

  //   const initialValue = 0;
  //   const sumWithInitial = productsInCartObject.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue.quantity,
  //     initialValue
  //   );

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { cartOpen, setCartOpen, addItemToCart, cartItems, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
