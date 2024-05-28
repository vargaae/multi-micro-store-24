/* eslint-disable react/prop-types */
// TODO: !!!CleanUP!!!
// import useFetch from "../../hooks/useFetch";
import { useState } from "react";

import { useDispatch } from "react-redux";

import { strApi, useGetCategoryProductListQuery } from "../../services/strApi";

import { Card } from "../";

import "./List.styles.scss";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const {
    data: categoryProductList,
    isFetching,
    error,
    refetch,
  } = useGetCategoryProductListQuery({ subCats, maxPrice, sort, catId });

  // const { data, loading, error, errorMessage } = useFetch(
  //   `/products/${id}?populate=*`
  // );

  // TODO: Use Refetch + Loader
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

  // if (isFetching) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  // TODO: CleanUp:
  // const { data, loading, error, errorMessage } = useFetch(
  // `/products?populate=*&filters[categories][id]=${catId}${subCats.map(
  //   (item) => `&filters[sub_category][id][$eq]=${item}&`
  // )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );

  // TODO: no product notice: - >Check in ConfySloth
  // {data.length !== 0 ? data?.map((item) => <Card item={item} key={item.id} />) : <div>no product in this sub_category</div>}

  return (
    <div className="list">
      {error
        ? `Something went wrong! Errormessage: "${errorMessage}"`
        : isFetching
        ? "loading"
        : categoryProductList?.data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
    </div>
  );
};

export default List;
