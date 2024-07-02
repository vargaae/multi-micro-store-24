import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";
import {
  CartItemContainer,
  DotDotDot,
  ItemDetails,
  ProductNameContainer,
} from "./CartItem.styles";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));
  const removeProductToCart = () => dispatch(removeItemFromCart(product));

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ProductNameContainer>
          {name} <DotDotDot></DotDotDot>{" "}
        </ProductNameContainer>
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
