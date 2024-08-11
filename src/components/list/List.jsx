/* eslint-disable react/prop-types */
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FadeLoader } from "react-spinners";

import { useDispatch } from "react-redux";

import { strApi, useGetCategoryProductListQuery } from "../../services/strApi";

import { Card } from "../";

import {
  ListContainer,
  ShopBreadcrumbNavContainer,
  ShopBreadcrumbLink,
} from "./List.styles";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const List = ({ subCats, maxPrice, sort, catId, cat }) => {
  const [count, setCount] = useState(0);
  let [color, setColor] = useState("#54b3d6");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    data: categoryProductList,
    isFetching,
    error,
    refetch,
  } = useGetCategoryProductListQuery({ subCats, maxPrice, sort, catId });

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
    <ListContainer>
      {error ? (
        `Something went wrong! Errormessage: "${error}"`
      ) : isFetching ? (
        <FadeLoader
          color={color}
          loading={isFetching}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : categoryProductList?.data.length == 0 ? (
        <ShopBreadcrumbNavContainer>
          <ShopBreadcrumbLink onClick={() => navigate(-1)}>
            go back
          </ShopBreadcrumbLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            color="rgb(0, 0, 0)"
          >
            <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"></path>
          </svg>
          Sorry, no products matched your search / in <strong>'{cat}'</strong>{" "}
        </ShopBreadcrumbNavContainer>
      ) : (
        categoryProductList?.data?.map((item) => (
          <Card item={item} key={item.id} />
        ))
      )}
    </ListContainer>
  );
};

export default List;
