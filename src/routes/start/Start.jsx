import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { ButtonComponent, BUTTON_TYPE_CLASSES } from "../../components";

import { brands } from "../../constants";
import {
  BestSeller,
  Contact,
  FeaturedProducts,
  StartHeader,
  StartVideo,
} from "../../components";
import {
  BestSellerContainer,
  BestSellerTitle,
  StartStoreShopContainer,
  StartNavigationContainer,
  ButtonContainer
} from "./Start.styles";
// TODO: turn SCSS -> styled
import "./Start.scss";
// TODO: Add data to Firestore and then clean up
// import { useEffect } from "react";
// import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
// 1.Categories
// import SHOP_DATA from "../../constants/shop-data";
// 2.Products
// import SHOP_PRODUCTS from "../../shop-data.js";

const Start = () => {
  // 1.Categories
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  // 2.Products
  // useEffect(() => {
  //   addCollectionAndDocuments("products", SHOP_PRODUCTS);
  // }, []);
  const navigateTo = useNavigate();

  const goToStore = () => {
    navigateTo("/store");
  };

  const goToShop = () => {
    navigateTo("/shop");
  };

  // 3.Brands
  // const [brands, setBrands] = useState([]);
  return (
    <>
      <div className="breadcrumb animatedtext">
        <div className="adtext">GET UPTO 65% OFF</div>
        <div className="adtext">
          <span className="adtextspan">FREE SHIPPING ON ORDERS €50+</span>
        </div>
        <div className="adtext">
          <span className="adtextspan">GET YOUR €20 BONUS REWARD</span>
        </div>
      </div>
      <StartHeader />
      <div className="app__brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.title} />
          </motion.div>
        ))}
      </div>
      <BestSellerContainer>
        <BestSellerTitle>DESIGN STORE / SHOP FEATURED PRODUCTS</BestSellerTitle>
        <FeaturedProducts type="start-featured" />
        {/* <BestSeller type={"bestseller"} /> */}
      </BestSellerContainer>
      <StartVideo />
      <StartNavigationContainer>
        <StartStoreShopContainer>
          <BestSellerTitle>
            DESIGN STORE
            <ButtonContainer>
              <ButtonComponent
                onClick={goToStore}
                buttonType={BUTTON_TYPE_CLASSES.start}
                type="button"
              >
                VISIT STORE
              </ButtonComponent>
            </ButtonContainer>
          </BestSellerTitle>
          <div className="startStoreImages">
            <div className="startStoreImage">
              <img
                className="selectStore"
                src="https://images.pexels.com/photos/6580222/pexels-photo-6580222.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Show image 1"
              />
            </div>
            <div className="startStoreImage">
              <img
                className="selectStore"
                src="https://images.pexels.com/photos/4409672/pexels-photo-4409672.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Show image 2"
              />
            </div>
          </div>
        </StartStoreShopContainer>
        <StartStoreShopContainer>
          <BestSellerTitle>
            DESIGN SHOP
            <ButtonComponent
              onClick={goToShop}
              buttonType={BUTTON_TYPE_CLASSES.start}
              type="button"
            >
              VISIT SHOP
            </ButtonComponent>
          </BestSellerTitle>
          <div className="startShopImages">
            <div className="startShopImage">
              <img
                className="selectShop"
                src="https://framerusercontent.com/images/5uW8h1Y8Jk6czLgq84bc2MyPs.jpg"
                alt="Men Shop image 1"
              />
            </div>
            <div className="startShopImage">
              <img
                className="selectShop"
                src="https://framerusercontent.com/images/cv9pTkCGUsKJxFT7RCuwQTwcs8.jpg"
                alt="Women Shop image 2"
              />
            </div>
          </div>
        </StartStoreShopContainer>
      </StartNavigationContainer>
      <BestSellerContainer>
        <BestSellerTitle>BEST SELLER</BestSellerTitle>
        <BestSeller type="trending" />
        {/* <BestSeller type={"bestseller"} /> */}
      </BestSellerContainer>

      <Contact />
    </>
  );
};

export default Start;
