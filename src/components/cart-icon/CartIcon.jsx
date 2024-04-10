import "./cart-icon.styles.scss";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import ShoppingIcon from "../../assets/shopping-bag.svg?react";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { cartOpen, setCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => setCartOpen(!cartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
