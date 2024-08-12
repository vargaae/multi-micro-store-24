import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

import { ButtonComponent, BUTTON_TYPE_CLASSES } from "../";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
  CardProductPageLink,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, quantity, SKU } = product;

  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCardContainer>
      <CardProductPageLink
        className="productpagelink"
        to={`product/${SKU}`}
      ></CardProductPageLink>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name to={`product/${SKU}`}>{name}</Name>
        <Price>€{price}</Price>
      </Footer>
      <ButtonComponent
        buttonType={BUTTON_TYPE_CLASSES.shop}
        onClick={addProductToCart}
      >
        Buy Now
      </ButtonComponent>
    </ProductCardContainer>
  );
};

export default ProductCard;
