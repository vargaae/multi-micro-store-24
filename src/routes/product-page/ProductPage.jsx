import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

import { useGetProductByIdQuery, strApi } from "../../services/strApi";

import { useState } from "react";

import { useNavigate, Link, useParams } from "react-router-dom";

import {
  ButtonComponent,
  BUTTON_TYPE_CLASSES,
  Contact,
  BestSeller,
  BreadcrumbNav,
} from "../../components";

import {
  ProductContainer,
  ProductPageTitle,
  FeaturedContainer,
  FeaturedTitle,
  Loader,
} from "./ProductPage.styles";

const ProductPage = ({}) => {
  const navigateTo = useNavigate();

  let { id } = useParams();

  const [count, setCount] = useState(0);

  const [selectedImg, setSelectedImg] = useState("img");
  // const [quantity, setQuantity] = useState(1);
  const productPage = true;
  const headerTitle = "Design Store";
  const headerLink = "/store";

  const dispatch = useDispatch();
  //TODO:Clean->
  // const addProductToCart = () => dispatch(addItemToCart(product));
  const addProductToCart = () =>
    dispatch(
      addItemToCart({
        name: productDataById.data.attributes.title,
        price: productDataById.data.attributes.price,
        imageUrl: productDataById.data.attributes.img.data.attributes.url,
        SKU: productDataById.data.attributes.SKU,
        productPageUrl: `/product/1/${productDataById.data.id}`,
        id: productDataById.data.id,
      })
    );

  const {
    data: productDataById,
    isFetching,
    error,
    refetch,
  } = useGetProductByIdQuery(id);

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
    <>
      <ProductContainer className="product-container">
        {error ? (
          `Something went wrong! Errormessage: "${error}"`
        ) : isFetching ? (
          <Loader></Loader>
        ) : (
          <>
            <BreadcrumbNav
              productPage={productPage}
              headerTitle={headerTitle}
              headerLink={headerLink}
              productTitle={productDataById?.data?.attributes?.title}
            />

            <div className="product">
              <ProductPageTitle className="mobileview">
                {productDataById?.data?.attributes?.title}
              </ProductPageTitle>
              <div className="left">
                <div className="mainImg">
                  <img
                    src={
                      productDataById?.data?.attributes?.[selectedImg]?.data
                        ?.attributes?.url
                    }
                    alt="Selected Show image"
                  />
                </div>
                <div className="images">
                  <img
                    className="selectImg"
                    src={
                      productDataById?.data?.attributes?.img?.data?.attributes
                        ?.url
                    }
                    alt="Show image 1"
                    onClick={(e) => setSelectedImg("img")}
                  />
                  <img
                    className="selectImg"
                    src={
                      productDataById?.data?.attributes?.img2?.data?.attributes
                        ?.url
                    }
                    alt="Show image 2"
                    onClick={(e) => setSelectedImg("img2")}
                  />
                </div>
              </div>
              <div className="right">
                <ProductPageTitle className="screenview">
                  {productDataById?.data?.attributes?.title}
                </ProductPageTitle>
                <span className="price">
                  €{productDataById?.data?.attributes?.price}
                </span>
                <p>{productDataById?.data?.attributes?.desc}</p>
                <ButtonComponent
                  onClick={addProductToCart}
                  buttonType={BUTTON_TYPE_CLASSES.productpage}
                  type="button"
                >
                  Buy now
                </ButtonComponent>
                <hr />
                <p>
                  <strong>Available</strong>
                </p>
                <p>{productDataById?.data?.attributes?.isAvailable}</p>
                <p>
                  <strong>Available Colors</strong>
                </p>
                <p>{productDataById?.data?.attributes?.colors}</p>
                <p>
                  <strong>SKU</strong>
                </p>
                <p>{productDataById?.data?.attributes?.SKU}</p>
                <p>
                  <strong>Brand</strong>
                </p>
                <p>{productDataById?.data?.attributes?.brand}</p>
                <hr />
                <div className="info">
                  <span>
                    <strong>SPECIFICATIONS</strong>
                  </span>
                  <span>
                    PatternSolidFitSlim FitCollarNotched LapelBottom
                    ClosureSlip-OnTypeBlazer and TrousersFabricCotton
                    BlendOccasionFormalSleeve LengthLong SleevesFront
                    StylingSingle-Breasted
                  </span>

                  <span>Product Type</span>
                  <span>
                    {productDataById?.data?.attributes?.type},{" "}
                    {
                      productDataById?.data?.attributes?.categories.data[0]
                        .attributes.title
                    }
                  </span>
                  <span>Tag</span>
                  <span>
                    {
                      productDataById?.data?.attributes?.categories.data[0]
                        .attributes.title
                    }
                    ,{" "}
                    {
                      productDataById?.data?.attributes?.sub_category.data
                        .attributes.title
                    }
                  </span>
                </div>
                <hr />
              </div>
            </div>
          </>
        )}
      </ProductContainer>
      <FeaturedContainer>
        <FeaturedTitle>You may also like</FeaturedTitle>
        <BestSeller type="featured" />
      </FeaturedContainer>
      <Contact />
    </>
  );
};

export default ProductPage;
