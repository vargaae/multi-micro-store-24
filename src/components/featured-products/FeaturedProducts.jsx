// TODO: !!!CleanUP!!!
// import useFetch from "../../hooks/useFetch";
import { strApi, useGetProductsByTypeQuery } from "../../services/strApi";
import { useDispatch } from "react-redux";

import { useState } from "react";

import { Card } from "../";

import { FadeLoader } from "react-spinners";

import "./FeaturedProducts.styles.scss";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const FeaturedProducts = ({ type }) => {
  const [count, setCount] = useState(0);
  let [color, setColor] = useState("#54b3d6");

  const dispatch = useDispatch();

  // const { data, loading, error, errorMessage } = useFetch(
  //   `/products?populate=*&filters[type][$eq]=${type}`
  // );

  const {
    data: productsByType,
    isFetching,
    error,
    refetch,
  } = useGetProductsByTypeQuery(type);

  function handleRefetchOne() {
    // force re-fetches the data
    refetch();
  }

  function handleRefetchTwo() {
    // has the same effect as `refetch` for the associated query
    dispatch(
      strApi.endpoints.getProductById.initiate(
        { count: 5 },
        { subscribe: false, forceRefetch: true }
      )
    );
  }

  if (error) {
    const timer = setTimeout(() => {
      setCount("Timeout called!");
      console.log("fetch API Error, Refetch in 15s");
      refetch();
    }, 15000);
    return () => clearTimeout(timer);
  }

  if (error)
    return (
      <div>
        <button onClick={handleRefetchOne}>Force re-fetch 1</button>
        <button onClick={handleRefetchTwo}>Force re-fetch 2</button>
      </div>
    );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur...
        </p>
      </div>
      <div className="bottom">
        {error ? (
          `Something went wrong! ${error}`
        ) : isFetching ? (
          <FadeLoader
            color={color}
            loading={isFetching}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          productsByType?.data?.map((item) => (
            <Card item={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
