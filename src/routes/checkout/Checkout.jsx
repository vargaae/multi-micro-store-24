import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import { Button } from "../../components/button/Button";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalCount } = useContext(CartContext);

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
          <span className="total">Total: €{totalCount}</span>
          <Button>GO TO PAY</Button>
        </>
      ) : null}
    </div>
  );
};

export default Checkout;
