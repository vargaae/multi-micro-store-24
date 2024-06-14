import { motion } from "framer-motion";

import "./Start.scss";

import { brands } from "../../constants";
import { BestSeller, Contact, FeaturedProducts, StartHeader, StartVideo } from "../../components";
import { BestSellerContainer, BestSellerTitle } from "./Start.styles";

const Start = () => {
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
        <BestSellerTitle>DESIGN STORE / SHOP FEATURED</BestSellerTitle>
        <FeaturedProducts type="featured" />
        {/* <BestSeller type={"bestseller"} /> */}
      </BestSellerContainer>
      <StartVideo />
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
