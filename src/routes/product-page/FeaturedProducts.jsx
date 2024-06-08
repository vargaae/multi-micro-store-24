import useFetch from "../../hooks/useFetch";

import { Card } from "../";

import "./FeaturedProducts.styles.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error, errorMessage } = useFetch(
    `/products?populate=*`
    // `/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <div className="bottom">
        {error
          ? `Something went wrong! ${errorMessage}`
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
