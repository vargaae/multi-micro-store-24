import { useDispatch } from "react-redux";

import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  BaseSpan,
  Quantity,
  IncreaseDecrease,
  Value,
  RemoveButton,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;

  const dispatch = useDispatch();

  const clearProductHandler = () => dispatch(clearItemFromCart(product));
  const addProductHandler = () => dispatch(addItemToCart(product));
  const removeProductHandler = () => dispatch(removeItemFromCart(product));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <IncreaseDecrease onClick={removeProductHandler}>-</IncreaseDecrease>
        <Value>{quantity}</Value>{" "}
        <IncreaseDecrease onClick={addProductHandler}>+</IncreaseDecrease>
      </Quantity>
      <BaseSpan>x €{price}</BaseSpan>
      <BaseSpan>€{price * quantity}</BaseSpan>
      <RemoveButton onClick={clearProductHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
