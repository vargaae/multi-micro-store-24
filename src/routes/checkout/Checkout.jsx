import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import { ButtonComponent } from "../../components";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import "./checkout.styles.scss";
import { Input } from "../../components/input-component/input-component.styles";

const Checkout = () => {
  const { cartItems, cartTotalPriceCount } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Piece-Price</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems != 0 ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} product={cartItem} />
        ))
      ) : (
        <div className="empty-message">
          <h2>There is no products in your cart?!</h2>
          <h3>
            <Link className="shop-link" to="/shop">
              Back to SHOP something nice!
            </Link>
          </h3>
        </div>
      )}
      {cartItems != 0 ? (
        <>
          <span className="total">Total: €{cartTotalPriceCount}</span>
          <div className="pay-container">
            <h2>Payment details</h2>
            <h3>Card Number</h3>
            <Input placeholder="4242 4242 4242 4242" />
            <h3>Expiration date</h3>
            <Input placeholder="04/25" />
            <h3>CV CODE</h3>
            <Input placeholder="123" />
            <ButtonComponent>PAY</ButtonComponent>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Checkout;
