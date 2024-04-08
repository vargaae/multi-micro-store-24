import "./product-card.styles.scss";

import { Button } from "../button/Button";

const ProductCard = ({ product }) => {
  const { productName, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${productName}`} />
      <div className="product-card-container-footer">
        <span className="name">{productName}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;
