import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import { Button } from "../button/Button";
import CartItem from "../cart-item/CartItem";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  Total,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, setCartOpen, cartTotalPriceCount } =
    useContext(CartContext);

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
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems != 0 ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <EmptyMessage>
            <h2>There is no products in your cart:</h2>
            <Button onClick={handleBackToShopClick}>
              Back to SHOP something nice!
            </Button>
          </EmptyMessage>
        )}
      </CartItemsContainer>
      {cartItems != 0 ? (
        <>
          <Total>Total: €{cartTotalPriceCount}</Total>
          <Button onClick={handleCheckoutClick}>CHECKOUT</Button>
        </>
      ) : null}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
