import useFetch from "../../hooks/useFetch";

import { Card } from "../";

import "./FeaturedProducts.styles.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error, errorMessage } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
    // `/products?populate=*`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
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