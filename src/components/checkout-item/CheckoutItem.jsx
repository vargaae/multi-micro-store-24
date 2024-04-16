import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { productName, imageUrl, price, quantity } = product;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearProductHandler = () => clearItemFromCart(product);
  const addProductHandler = () => addItemToCart(product);
  const removeProductHandler = () => removeItemFromCart(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${productName}`} />
      </div>
      <span className="name">{productName}</span>
      <div className="quantity">
      <div onClick={removeProductHandler}>-</div>
      {quantity} <div onClick={addProductHandler}>
        +
      </div>
      </div>
      <div className="price">
        €{price}
      </div>
      <div className="remove-button" onClick={clearProductHandler}>
        &#10005;
      </div>
      {/*
      <Button onClick={removeProductHandler}>-</Button>
      <div className="item-details">
        <span className="name">{productName}</span>
        <span className="price">
          {quantity} x €{price}
        </span>
      </div>
      <Button buttonType="inverted" onClick={addProductHandler}>
        +
      </Button>
      <div className="remove-button" onClick={clearProductHandler}>
        &#10005;
      </div>
  */}
    </div>
  );
};

export default CheckoutItem;
