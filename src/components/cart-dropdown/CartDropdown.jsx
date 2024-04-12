import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import { Button } from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setCartOpen } = useContext(CartContext);

  const navigateTo = useNavigate();

  const handleCheckoutClick = () => {
    navigateTo("/checkout");
    setCartOpen(false);
  };

  const handleBackToShopClick = () => {
    navigateTo("/shop");
    setCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems != 0 ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <div className="empty-message">
            <h2>There is no products in your cart:</h2>
            <Button onClick={handleBackToShopClick}>
              Back to SHOP something nice!
            </Button>
          </div>
        )}
      </div>
      {cartItems != 0 ? (
        <Button onClick={handleCheckoutClick}>GO TO CHECKOUT</Button>
      ) : null}
    </div>
  );
};

export default CartDropdown;
