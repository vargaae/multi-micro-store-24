import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.reducer";
import {
  selectCartItems,
  selectCartTotalPriceCount,
} from "../../store/cart/cart.selector";

import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../";
import CartItem from "../cart-item/CartItem";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  Total,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  //TODO:Clean->
  // const products = useSelector(state=>state.strapicart.products);

  const cartTotalPriceCount = useSelector(selectCartTotalPriceCount);

  const closeCartIfClickToLink = () => dispatch(setIsCartOpen(false));

  const navigateTo = useNavigate();

  const handleCheckoutClick = () => {
    navigateTo("/checkout");
    closeCartIfClickToLink();
  };
  //TODO:Clean->
  const handleBackToStoreClick = () => {
    navigateTo("/interior");
    closeCartIfClickToLink();
  };
  const handleBackToShopClick = () => {
    navigateTo("/");
    closeCartIfClickToLink();
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems != 0 ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <EmptyMessage>
            <h2>There is no products in your cart:</h2>
          {/*  <ButtonComponent onClick={handleBackToStoreClick}>
              Back to STORE something nice!
        </ButtonComponent> */}
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
