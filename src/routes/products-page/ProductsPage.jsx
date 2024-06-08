import { useState } from "react";

import { Link, useParams } from "react-router-dom";

import {
  useGetSubCategoriesByCategoryIdQuery,
  useGetCategoryByIdQuery,
  strApi,
} from "../../services/strApi";
// import useFetch from "../../hooks/useFetch";

import { List } from "../../components";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./ProductsPage.styles.scss";
import { useDispatch } from "react-redux";

import { FadeLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Products = () => {
  const dispatch = useDispatch();
  // We can get the id in string:
  // const param = useParams()
  const catId = parseInt(useParams().id);

  const [count, setCount] = useState(0);
  let [color, setColor] = useState("#54b3d6");
  // <img src={imgSrc} onError = {() => setImgSrc("https://picsum.photos/1600")} />
  const rangeMinimum = 0;
  const rangeMaximum = 1600;

  const [maxPrice, setMaxPrice] = useState(rangeMaximum);
  const [sort, setSort] = useState(`asc`);
  // const [sort, setSort] = useState("asc")
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {
    data: subCategoriesByCategoryId,
    isFetching,
    error,
    refetch,
  } = useGetSubCategoriesByCategoryIdQuery(catId);
  const { data: categoryByCategoryId } = useGetCategoryByIdQuery(catId);

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

  // TODO: Title: {data?.attributes?.categories.data[0].attributes.title}
  // let { id } = 1;
  // const { dataCategory, loadingC, errorC, errorMessageC } = useFetch(
  //   `/products/${id}`
  // );
  // console.log(dataCategory);

  // !!!TODO: subcategories-t így remekül behozza:
  // const { data, loading, error, errorMessage } = useFetch(
  //   `/sub-categories?[filters][categories][id][$eq]=${catId}`
  // );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const onOptionChange = (e) => {
    setSort(e.target.value);
  };

  const addDefaultImg = (ev) => {
    ev.target.src =
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600";
  };

  return (
    <>
      <div className="product-container">
        <h2 className="breadcrumb-nav">
          <Link className="link" to="/">
            Home
          </Link>{" "}
          /{" "}
          <Link className="link" to="/products/7">
            Products
          </Link>{" "}
          /{" "}
          <Link className="link" to="/shop">
            Categories Preview
          </Link>{" "}
          / <strong>{categoryByCategoryId?.data?.attributes?.title}</strong>
        </h2>
      </div>
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>
              <strong>{categoryByCategoryId?.data?.attributes?.title}</strong> /
              Product Categories
            </h2>
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
              subCategoriesByCategoryId?.data?.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))
            )}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>{rangeMinimum}</span>
              <input
                type="range"
                min={rangeMinimum}
                max={rangeMaximum}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>€{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                checked={sort === "asc"}
                onChange={onOptionChange}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                checked={sort === "desc"}
                onChange={onOptionChange}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
          <button onClick={handleChange}>Filter</button>
        </div>
        <div className="right">
          <LazyLoadImage
            src={
              categoryByCategoryId?.data?.attributes?.img?.data?.attributes?.url
            }
            onError={addDefaultImg}
            alt="Category Image"
            /* effect="blur" */
            className="catImg"
          />
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
