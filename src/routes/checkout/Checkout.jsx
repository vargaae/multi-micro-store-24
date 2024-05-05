import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import { ButtonComponent } from "../../components";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  PayContainer,
  EmptyMessage,
} from "./Checkout.styles";
import { Input } from "../../components/input-component/InputComponent.styles";

const Checkout = () => {
  const { cartItems, cartTotalPriceCount } = useContext(CartContext);

  return (
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
      {cartItems != 0 ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} product={cartItem} />
        ))
      ) : (
        <EmptyMessage>
          <h2>There is no products in your cart?!</h2>
          <h3>
            <Link className="shop-link" to="/shop">
              Back to SHOP something nice!
            </Link>
          </h3>
        </EmptyMessage>
      )}
      {cartItems != 0 ? (
        <>
          <Total>Total: €{cartTotalPriceCount}</Total>
          <PayContainer>
            <h2>Payment details</h2>
            <h3>Card Number</h3>
            <Input placeholder="4242 4242 4242 4242" />
            <h3>Expiration date</h3>
            <Input placeholder="04/25" />
            <h3>CV CODE</h3>
            <Input placeholder="123" />
            <ButtonComponent>PAY</ButtonComponent>
          </PayContainer>
        </>
      ) : null}
    </CheckoutContainer>
  );
};

export default Checkout;
