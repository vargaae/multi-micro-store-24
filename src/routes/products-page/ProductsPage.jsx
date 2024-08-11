import { useState } from "react";

import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import {
  useGetSubCategoriesByCategoryIdQuery,
  useGetCategoryByIdQuery,
  strApi,
} from "../../services/strApi";

import { FadeLoader } from "react-spinners";

import {
  BUTTON_TYPE_CLASSES,
  BreadcrumbNav,
  ButtonComponent,
  Contact,
  List,
} from "../../components";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  LeftFilterBar,
  ProductsContainer,
  ProductsPageContainer,
  RightMainPage,
} from "./ProductsPage.styles";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Products = () => {
  const dispatch = useDispatch();
  const catId = parseInt(useParams().id);

  const [count, setCount] = useState(0);
  let [color, setColor] = useState("#54b3d6");
  const rangeMinimum = 0;
  const rangeMaximum = 1600;

  const [maxPrice, setMaxPrice] = useState(rangeMaximum);
  const [sort, setSort] = useState(`asc`);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const productsPage = true;
  const headerTitle = catId < 8 ? "Design Store" : "Design Shop";
  const headerLink = catId < 8 ? "/store" : "/shop";
  const productsPageLink = catId < 8 ? "/products/7" : "/products/10";

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
    <ProductsPageContainer>
      <BreadcrumbNav
        productsPage={productsPage}
        productsPageLink={productsPageLink}
        headerTitle={headerTitle}
        headerLink={headerLink}
        productTitle={categoryByCategoryId?.data?.attributes?.title}
      />
      <ProductsContainer className="products">
        <LeftFilterBar>
          <div className="filterItem">
            <h2>Product Categories</h2>
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
                <div className="checkboxes" key={item.id}>
                  <div className="inputItem">
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={item.id}>{item.attributes.title}</label>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>{rangeMinimum} </span>
              <input
                type="range"
                min={rangeMinimum}
                max={rangeMaximum}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span> €{maxPrice}</span>
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
          <div className="buttonContainer">
            <ButtonComponent
              onClick={handleChange}
              buttonType={BUTTON_TYPE_CLASSES.inverted}
              type="button"
            >
              FILTER
            </ButtonComponent>
          </div>
        </LeftFilterBar>
        <RightMainPage>
          <LazyLoadImage
            src={
              categoryByCategoryId?.data?.attributes?.img?.data?.attributes?.url
            }
            onError={addDefaultImg}
            alt="Category Image"
            /* effect="blur" */
            className="catImg"
          />
          {
            <List
              subCats={selectedSubCats}
              maxPrice={maxPrice}
              sort={sort}
              catId={catId}
              cat={categoryByCategoryId?.data?.attributes?.title}
            />
          }
        </RightMainPage>
      </ProductsContainer>
      <Contact />
    </ProductsPageContainer>
  );
};

export default Products;
