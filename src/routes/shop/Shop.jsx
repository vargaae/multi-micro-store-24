import "./shop.styles.scss";

import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products.map(({ id, productName, imageUrl }) => (
        <div key={id}>
          <img src={imageUrl} alt={productName} />
          <h1>{productName}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
