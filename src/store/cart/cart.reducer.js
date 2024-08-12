import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.SKU === productToAdd.SKU
  );

  // If found increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.SKU === productToAdd.SKU
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const addMoreCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.SKU === productToAdd.SKU
  );

  // If found increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.SKU === productToAdd.SKU ? { ...cartItem } : cartItem
    );
  }

  // return new array with modified cartItems/ new cart item -> this part won't be true, because now we add the product to the Cart at the Shop page, so we increase the amount if it's existing in the Cart
  return [...cartItems, { ...productToAdd }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find if cartItems contains productToRemove (to remove it)
  // Avoid mutating: create a new variable that is not the same as the one I used for adding and filtering a product
  const existingCartItemToRemove = cartItems.find(
    (cartItem) => cartItem.SKU === productToRemove.SKU
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItemToRemove.quantity === 1) {
    return cartItems
      .slice()
      .filter((cartItem) => cartItem.SKU !== productToRemove.SKU);
  }

  // return new array with modified cartItems/ new cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.SKU === productToRemove.SKU
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.slice().filter((cartItem) => cartItem.SKU !== cartItemToClear.SKU);

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    // For more items at one time
    addMoreItemToCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartItems = addMoreCartItem(state.cartItems, action.payload);
      }
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  addMoreItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  resetCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
