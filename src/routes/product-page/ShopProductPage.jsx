import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

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

const ShopProductPage = ({}) => {
  const productPage = true;
  const headerTitle = "Design Shop";
  const headerLink = "/shop";

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

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const addProductToCart = () =>
    dispatch(
      addItemToCart({
        id: singleProduct.id,
        name: singleProduct.name,
        price: singleProduct.price,
        imageUrl: singleProduct.img,
        quantity: singleProduct.quantity,
        SKU: singleProduct.SKU,
        productPageUrl: `/shop/product/${singleProduct.SKU}`,
      })
    );

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
