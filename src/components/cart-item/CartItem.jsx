// import { useContext } from "react";

// import { CartContext } from "../../contexts/cart.context";

import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";
import { CartItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  // const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));
  const removeProductToCart = () => dispatch(removeItemFromCart(product));

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
