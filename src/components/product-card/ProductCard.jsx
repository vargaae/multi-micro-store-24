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

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

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
