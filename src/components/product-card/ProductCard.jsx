// import { useContext } from "react";

// import { CartContext } from "../../contexts/cart.context";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

import { ButtonComponent, BUTTON_TYPE_CLASSES } from "../";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  // const { addItemToCart } = useContext(CartContext);

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));
  // const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>€{price}</Price>
      </Footer>
      <ButtonComponent
        buttonType={BUTTON_TYPE_CLASSES.shop}
        onClick={addProductToCart}
      >
        Add to cart
      </ButtonComponent>
    </ProductCartContainer>
  );
};

export default ProductCard;
