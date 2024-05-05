import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";

const CartIcon = () => {
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => {
    if (cartCount !== 0) setCartOpen(!cartOpen);
  };

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
