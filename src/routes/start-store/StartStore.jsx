import { Link } from "react-router-dom";
import {
  StartCarousel,
  FeaturedProducts,
  Contact,
  BestSeller,
} from "../../components";
import { CategoryDirectory } from "../../containers";

import { FeaturedContainer, FeaturedTitle } from "./StartStore.styles";

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
      <FeaturedContainer>
        <FeaturedTitle>Featured Products</FeaturedTitle>
        <BestSeller type="featured" />
      </FeaturedContainer>
      <div className="section__padding section__margin">
        {/* <FeaturedProducts type="featured" /> */}
        <CategoryDirectory />
        <FeaturedProducts type="trending" />
      </div>
      <Contact />
    </>
  );
};

export default StartStore;
