import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

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
} from "./ShopProductPage.styles";
import { db, getSingleDocument } from "../../utils/firebase/firebase.utils";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { FadeLoader } from "react-spinners";

// const override = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const ShopProductPage = ({}) => {
  const productPage = true;
  const headerTitle = "Design Shop";
  const headerLink = "/shop";

  // let [color, setColor] = useState("#54b3d6");

  const [selectedImg, setSelectedImg] = useState("img");

  const [singleProduct, setSingleProduct] = useState({});
  let { id } = useParams();
  // console.log(singleProduct);

  useEffect(() => {
    const docRef = doc(db, "products", id.toLowerCase());

    onSnapshot(docRef, (doc) => {
      setSingleProduct(doc.data(), doc.id);
    });
  }, []);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     // it's now categoriesArray!!!, not categoriesMap with OBJECT anymore:
  //     const singleProduct = await getSingleDocument(1);
  //     // dispatch(setCategories(categoriesArray));

  //     // setSingleProduct(singleProduct)
  //   };

  //   getProduct();
  // }, []);

  //TODO:Clean->
  // const { name, price, imageUrl } = product;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  //TODO:Clean->
  // const addProductToCart = () => dispatch(addItemToCart(product));
  const addProductToCart = () =>
    dispatch(
      addItemToCart({
        name: singleProduct.name,
        price: singleProduct.price,
        imageUrl: singleProduct.img,
        quantity: singleProduct.quantity,
      })
    );

  // TODO: SET IMG:
  // <img
  //   decoding="async"
  //   sizes="calc((min(max(100vw, 0px), 1440px) - 60px) / 2.3)"
  //   src="https://framerusercontent.com/images/6cKC0PWCp1QT4U3h4ddQ1bSE.jpg"
  //   alt=""
  //   style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center top; object-fit: cover; image-rendering: auto;"
  // ></img>;

  return (
    <>
      <ProductContainer className="product-container">
        {singleProduct?.name === undefined ? (
          <Loader></Loader>
        ) : (
          <>
            <BreadcrumbNav
              productPage={productPage}
              headerTitle={headerTitle}
              headerLink={headerLink}
              productTitle={singleProduct?.name}
            />

            <div className="product">
              <ProductPageTitle className="mobileview">
                {singleProduct?.name}
              </ProductPageTitle>
              <div className="left">
                <div className="mainImg">
                  <img
                    src={singleProduct?.[selectedImg]}
                    alt="Selected Show image"
                  />
                </div>
                <div className="images">
                  <img
                    className="selectImg"
                    src={singleProduct?.img}
                    alt="Show image 1"
                    onClick={(e) => setSelectedImg("img")}
                  />
                  <img
                    className="selectImg"
                    src={singleProduct?.img2}
                    alt="Show image 2"
                    onClick={(e) => setSelectedImg("img2")}
                  />
                </div>
              </div>
              <div className="right">
                <ProductPageTitle className="screenview">
                  {singleProduct?.name}
                </ProductPageTitle>
                <span className="price">€{singleProduct?.price}</span>
                <p>{singleProduct?.desc}</p>
                {/*
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>
            +
          </button>
        </div>
          */}
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
                <p>{singleProduct?.isAvailable}</p>
                <p>
                  <strong>Available Colors</strong>
                </p>
                <p>{singleProduct?.colors}</p>
                <p>
                  <strong>SKU</strong>
                </p>
                <p>{singleProduct?.SKU}</p>
                <p>
                  <strong>Brand</strong>
                </p>
                <p>{singleProduct?.brand}</p>
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
                    {singleProduct?.type}, {singleProduct?.categories[0]}
                  </span>
                  <span>Tag</span>
                  <span>
                    {singleProduct?.categories[0]},{" "}
                    {singleProduct?.sub_category[0]}
                  </span>
                </div>
                <hr />
                {/*
     <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
          </div> */}
              </div>
            </div>
          </>
        )}
      </ProductContainer>
      <FeaturedContainer>
        <FeaturedTitle>You may also like</FeaturedTitle>
        <BestSeller type="featured-in-shop" />
      </FeaturedContainer>
      <Contact />
    </>
  );
};

export default ShopProductPage;
