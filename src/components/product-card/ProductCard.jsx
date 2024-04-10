import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { Button } from "../button/Button";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { productName, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${productName}`} />
      <div className="product-card-container-footer">
        <span className="name">{productName}</span>
        <span className="price">€{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
