import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPriceCount,
} from "../../store/cart/cart.selector";

import { makeRequest } from "../../services/makeRequest";
import { loadStripe } from "@stripe/stripe-js";

import { Link } from "react-router-dom";

import { BreadcrumbNav, ButtonComponent, Contact } from "../../components";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  PayContainer,
  EmptyMessage,
  ShopLink,
  ButtonContainer,
} from "./Checkout.styles";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

const Checkout = () => {
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
            <h2>There is no products in your cart?!</h2>
            <h3>
              <ShopLink to="/store">Back to STORE something nice!</ShopLink>
              <ShopLink to="/shop">Back to SHOP something nice!</ShopLink>
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
