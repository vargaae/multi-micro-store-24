import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPriceCount,
} from "../../store/cart/cart.selector";

import { makeRequest } from "../../services/makeRequest";
import { loadStripe } from "@stripe/stripe-js";

import { BreadcrumbNav, CheckoutItem, ButtonComponent, BUTTON_TYPE_CLASSES, Contact } from "../../components";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  PayContainer,
  EmptyMessage,
  ShopLink,
  ButtonContainer,
  ButtonsContainer,
  ImageContainer,
} from "./Checkout.styles";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

const Checkout = () => {
  const navigateTo = useNavigate();

  const goToStore = () => {
    navigateTo("/store");
  };

  const goToShop = () => {
    navigateTo("/shop");
  };

  const headerTitle = "Checkout";

  const products = useSelector(selectCartItems);
  const cartTotalPriceCount = useSelector(selectCartTotalPriceCount);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <BreadcrumbNav headerTitle={headerTitle} />

      <CheckoutContainer className="section__padding">
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Piece-Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {products != 0 ? (
          products.map((cartItem) => (
            <CheckoutItem key={cartItem.id} product={cartItem} />
          ))
        ) : (
          <EmptyMessage>
            <h2>There is no product in your cart?!</h2>
            <ImageContainer>
                <img
                  decoding="async"
                  sizes="max(min(max(100vw, 0px), 1600px), 0px)"
                  srcset="https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg?scale-down-to=2048 2048w, https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg?scale-down-to=4096 4096w, https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg 6000w"
                  src="https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg"
                  alt="About us picture"
                />
              </ImageContainer>
            <h3>
              <ShopLink to="/">Back to Buy something nice!</ShopLink>
              <ButtonsContainer>
            <ButtonComponent
              onClick={goToStore}
              buttonType={BUTTON_TYPE_CLASSES.start}
              type="button"
            >
              VISIT STORE
            </ButtonComponent>
            <ButtonComponent
              onClick={goToShop}
              buttonType={BUTTON_TYPE_CLASSES.start}
              type="button"
            >
              VISIT SHOP
            </ButtonComponent>
            </ButtonsContainer>
            </h3>
          </EmptyMessage>
        )}
        {products != 0 ? (
          <>
            <Total>Total: €{cartTotalPriceCount}</Total>
            <PayContainer>
              <h2 className="breadcrumb-nav">
                Proceed to Checkout
                <ButtonContainer>
                  <ButtonComponent onClick={handlePayment}>
                    PAY WITH STRIPE
                  </ButtonComponent>
                </ButtonContainer>
              </h2>
            </PayContainer>
          </>
        ) : null}
      </CheckoutContainer>
      <Contact />
    </>
  );
};

export default Checkout;
