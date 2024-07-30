import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPriceCount,
} from "../../store/cart/cart.selector";

import { makeRequest } from "../../services/makeRequest";
import { loadStripe } from "@stripe/stripe-js";

import {
  BreadcrumbNav,
  CheckoutItem,
  ButtonComponent,
  BUTTON_TYPE_CLASSES,
  Contact,
} from "../../components";

import { images } from "../../constants";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  PaymentFormContainer,
  FormContainer,
  EmptyMessage,
  ShopLink,
  ButtonContainer,
  ButtonsContainer,
  PaymentButton,
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

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setIsProcessingPayment(true);
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
      setIsProcessingPayment(false);
    } catch (err) {
      alert(err);
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
            <CheckoutItem key={cartItem.SKU} product={cartItem} />
          ))
        ) : (
          <EmptyMessage>
            <h2>There is no product in your cart?!</h2>
            <ImageContainer>
              <img
                decoding="async"
                sizes="max(min(max(100vw, 0px), 1600px), 0px)"
                srcSet={`${images.aboutSmall} 512w, ${images.aboutMedium} 1024w, ${images.aboutLarge} 2048w, ${images.aboutXLarge} 4096w, ${images.aboutFull} 6000w`}
                src={images.aboutFull}
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
            <PaymentFormContainer>
              <FormContainer onSubmit={handlePayment}>
                <h2 className="breadcrumb-nav">
                  Proceed to Checkout
                  <ButtonContainer>
                    <PaymentButton
                      buttonType={BUTTON_TYPE_CLASSES.inverted}
                      isLoading={isProcessingPayment}
                    >
                      PAY WITH STRIPE
                    </PaymentButton>
                  </ButtonContainer>
                </h2>
              </FormContainer>
            </PaymentFormContainer>
          </>
        ) : null}
      </CheckoutContainer>
      <Contact />
    </>
  );
};

export default Checkout;
