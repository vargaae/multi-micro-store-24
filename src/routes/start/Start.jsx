import { motion } from "framer-motion";

import "./Start.scss";

import { brands } from "../../constants";
import { BestSeller, Contact, StartHeader } from "../../components";

const Start = () => {
  // const [brands, setBrands] = useState([]);
  return (
    <>
      <div className="breadcrumb animatedtext">
        <div>GET UPTO 65% OFF</div>
        <div>
          <span>FREE SHIPPING ON ORDERS €50+</span>
        </div>
        <div>
          <span>GET YOUR €20 BONUS REWARD</span>
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

      <div className="bestseller__container">
        <h2 className="bestseller">BEST SELLER</h2>
        <BestSeller type={"featured"} />
        {/* <BestSeller type={"bestseller"} /> */}
      </div>
      <Contact />
    </>
  );
};

export default Start;
