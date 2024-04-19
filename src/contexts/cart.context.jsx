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

  // return new array with modified cartItems/ new cart item -> this part won't be true, because now we add the product to the Cart at the Shop page, so we increase the amount if it's existing in the Cart
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find if cartItems contains productToRemove (to remove it)
  // Avoid mutating: create a new variable that is not the same as the one I used for adding and filtering a product
  const existingCartItemToRemove = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItemToRemove.quantity === 1) {
    return cartItems
      .slice()
      .filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  // return new array with modified cartItems/ new cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.slice().filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotalPriceCount: 0,
});

/*
product shape
{
  id,
  name,
  price,
  imageUrl
}

Cart Item shape
{
  id,
  name,
  price,
  imageUrl,
  +quantity
}

*/

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [cartCount, setCartCount] = useState(0);

  const [cartTotalPriceCount, setCartTotalPriceCount] = useState(0);

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

  useEffect(() => {
    const newcartTotalPriceCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotalPriceCount(newcartTotalPriceCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    cartOpen,
    setCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotalPriceCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
