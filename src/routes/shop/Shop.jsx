import "./shop.styles.scss";

import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, productName }) => (
        <div key={id}>
          <h1>{productName}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
