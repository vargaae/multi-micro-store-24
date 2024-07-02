import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

import { useState } from "react";

import { Link } from "react-router-dom";

import { ButtonComponent, BUTTON_TYPE_CLASSES } from "../";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  //TODO:Clean->
  const { name, price, imageUrl, SKU } = product;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  //TODO:Clean->
  const addProductToCart = () => dispatch(addItemToCart(product));
  // const addProductToCart = () =>
  //   dispatch(
  //     addItemToCart({
  //       name: name,
  //       price: price,
  //       imageUrl: imageUrl,
  //       quantity: quantity,
  //     })
  //   );

  // TODO: link to={`/product/zyw3vtp`}
  // TODO: link to={`/product/${SKU}`}

  return (
    <ProductCardContainer>  
      <Link className="productpagelink" to={`product/${SKU}`}></Link>
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
