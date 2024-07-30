import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.reducer";
import {
  selectCartItems,
  selectCartTotalPriceCount,
} from "../../store/cart/cart.selector";

import { useNavigate } from "react-router-dom";

import { ButtonComponent, BUTTON_TYPE_CLASSES } from "../";
import CartItem from "../cart-item/CartItem";

import { images } from "../../constants";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  ShopLink,
  ButtonsContainer,
  ImageContainer,
  Total,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const cartTotalPriceCount = useSelector(selectCartTotalPriceCount);

  const closeCartIfClickToLink = () => dispatch(setIsCartOpen(false));

  const navigateTo = useNavigate();

  const handleCheckoutClick = () => {
    navigateTo("/checkout");
    closeCartIfClickToLink();
  };
  const handleBackToStoreClick = () => {
    navigateTo("/store");
    closeCartIfClickToLink();
  };
  const handleBackToShopClick = () => {
    navigateTo("/shop");
    closeCartIfClickToLink();
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems != 0 ? (
          cartItems.map((item) => <CartItem key={item.SKU} product={item} />)
        ) : (
          <EmptyMessage>
            <h2>There is no product in your cart?!</h2>
            <ImageContainer>
              <img
                decoding="async"
                sizes="max(min(max(100vw, 0px), 1600px), 0px)"
                src={images.aboutSmall}
                alt="About us picture"
              />
            </ImageContainer>
            <h3>
              <ShopLink to="/">Back to Buy something nice!</ShopLink>
              <ButtonsContainer>
                <ButtonComponent
                  onClick={handleBackToStoreClick}
                  buttonType={BUTTON_TYPE_CLASSES.start}
                  type="button"
                >
                  VISIT STORE
                </ButtonComponent>
                <ButtonComponent
                  onClick={handleBackToShopClick}
                  buttonType={BUTTON_TYPE_CLASSES.start}
                  type="button"
                >
                  VISIT SHOP
                </ButtonComponent>
              </ButtonsContainer>
            </h3>
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
