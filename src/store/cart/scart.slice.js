import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  products: [],
};

export const scartSlice = createSlice({
  name: "strapicart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   const item = state.products.find((item) => item.id === action.payload.id);
    //   if (item) {
    //     item.quantity += action.payload.quantity;
    //   } else {
    //     state.products.push(action.payload);
    //   }
    // },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// const CART_INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: CART_INITIAL_STATE,
//   reducers: {
//     setIsCartOpen(state, action) {
//       state.isCartOpen = action.payload;
//     },
//     addItemToCart(state, action) {
//       state.cartItems = addCartItem(state.cartItems, action.payload);
//     },
//     removeItemFromCart(state, action) {
//       state.cartItems = removeCartItem(state.cartItems, action.payload);
//     },
//     clearItemFromCart(state, action) {
//       state.cartItems = clearCartItem(state.cartItems, action.payload);
//     },
//   },
// });

// export const {
//   setIsCartOpen,
//   addItemToCart,
//   removeItemFromCart,
//   clearItemFromCart,
// } = cartSlice.actions;

// Action creators are generated for each case reducer function
export const { addToCart, addItemToCart, removeItem, resetCart } = scartSlice.actions;

export const scartReducer = scartSlice.reducer;
