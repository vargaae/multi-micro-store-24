import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;

  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  const removeProductToCart = () => removeItemFromCart(product);

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <button onClick={removeProductToCart}>-</button>
        <span className="price">
          {quantity} x €{price}
        </span>
        <button onClick={addProductToCart}>+</button>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
