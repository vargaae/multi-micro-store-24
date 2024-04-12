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
      <div className="checkout-items">
        {cartItems != 0 ? (
          cartItems.map((item) => <CheckoutItem key={item.id} product={item} />)
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
      </div>
      {cartItems != 0 ? (
        <>
          <div className="total">TOTAL: €{totalCount}</div>
          <Button>GO TO PAY</Button>
        </>
      ) : null}
    </div>
  );
};

export default Checkout;
