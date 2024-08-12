import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { brands } from "../../constants";
import {
  ButtonComponent,
  BUTTON_TYPE_CLASSES,
  BestSeller,
  Contact,
  FeaturedProducts,
  StartHeader,
  StartVideo,
} from "../../components";

import {
  AnimatedContainer,
  BrandsContainer,
  BestSellerContainer,
  BestSellerTitle,
  StartStoreShopContainer,
  StartNavigationContainer,
  StartShopImages,
  StartStoreImages,
  StartShopImage,
  ButtonContainer,
} from "./Start.styles";

const Start = () => {
  const navigateTo = useNavigate();

  const goToStore = () => {
    navigateTo("/store");
  };

  const goToShop = () => {
    navigateTo("/shop");
  };

  return (
    <>
      <AnimatedContainer>
        <div className="adtext">GET UPTO 65% OFF</div>
        <div className="adtext">
          <span className="adtextspan">FREE SHIPPING ON ORDERS €50+</span>
        </div>
        <div className="adtext">
          <span className="adtextspan">GET YOUR €20 BONUS REWARD</span>
        </div>
      </AnimatedContainer>
      <StartHeader />
      <BrandsContainer>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.title} />
          </motion.div>
        ))}
      </BrandsContainer>
      <BestSellerContainer>
        <BestSellerTitle>DESIGN STORE / SHOP FEATURED PRODUCTS</BestSellerTitle>
        <FeaturedProducts type="start-featured" />
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
          <StartStoreImages>
            <StartShopImage to="/store">
              <img
                className="selectStore"
                src="https://images.pexels.com/photos/6580222/pexels-photo-6580222.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Show image 1"
              />
            </StartShopImage>
            <StartShopImage to="/store">
              <img
                className="selectStore"
                src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Show image 2"
              />
            </StartShopImage>
          </StartStoreImages>
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
          <StartShopImages>
            <StartShopImage to="/shop">
              <img
                className="selectShop"
                src="https://framerusercontent.com/images/5uW8h1Y8Jk6czLgq84bc2MyPs.jpg"
                alt="Men Shop image 1"
              />
            </StartShopImage>
            <StartShopImage to="/shop">
              <img
                className="selectShop"
                src="https://framerusercontent.com/images/cv9pTkCGUsKJxFT7RCuwQTwcs8.jpg"
                alt="Women Shop image 2"
              />
            </StartShopImage>
          </StartShopImages>
        </StartStoreShopContainer>
      </StartNavigationContainer>
      <BestSellerContainer>
        <BestSellerTitle>BEST SELLER</BestSellerTitle>
        <BestSeller type="trending" />
      </BestSellerContainer>

      <Contact />
    </>
  );
};

export default Start;
