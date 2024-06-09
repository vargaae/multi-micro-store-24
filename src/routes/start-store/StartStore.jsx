import { Link } from "react-router-dom";
import {
  StartCarousel,
  FeaturedProducts,
  Contact,
  BestSeller,
} from "../../components";
import { CategoryDirectory } from "../../containers";

const StartStore = () => {
  const headerTitle = "STORE";
  return (
    <>
      <h2 className="breadcrumb-nav">
        <Link className="link" to="/">
          Home
        </Link>{" "}
        / Interior Design {headerTitle}
      </h2>
      <StartCarousel headerTitle={headerTitle} />
      <div className="section__padding section__margin">
        <div className="featured__container">
          <h2 className="bestseller">Featured Products</h2>
          <BestSeller type="featured" />
        </div>
        {/* <FeaturedProducts type="featured" /> */}
        <CategoryDirectory />
        <FeaturedProducts type="trending" />
      </div>
      <Contact />
    </>
  );
};

export default StartStore;
