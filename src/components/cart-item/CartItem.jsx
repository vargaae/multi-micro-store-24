import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-item.styles.scss";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;

  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  const removeProductToCart = () => removeItemFromCart(product);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <button onClick={removeProductToCart}>-</button>
        <span className="price">
          {quantity} x €{price}
        </span>
        <button onClick={addProductToCart}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
