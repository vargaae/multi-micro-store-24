import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import { ButtonComponent } from "../";
import CartItem from "../cart-item/CartItem";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  Total,
} from "./CartDropdown.styles";

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
            <ButtonComponent onClick={handleBackToShopClick}>
              Back to SHOP something nice!
            </ButtonComponent>
          </EmptyMessage>
        )}
      </CartItemsContainer>
      {cartItems != 0 ? (
        <>
          <Total>Total: €{cartTotalPriceCount}</Total>
          <ButtonComponent onClick={handleCheckoutClick}>
            CHECKOUT
          </ButtonComponent>
        </>
      ) : null}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
