import {
  StartCarousel,
  FeaturedProducts,
  Contact,
  BestSeller,
  BreadcrumbNav,
} from "../../components";
import { CategoryDirectory } from "../../containers";

import {
  BestSellerContainer,
  BestSellerTitle,
  FeaturedContainer,
  FeaturedTitle,
} from "./StartStore.styles";

const StartStore = () => {
  const headerTitle = "Design Store";
  const headerCarouselTitle = "Store";
  return (
    <>
      <BreadcrumbNav headerTitle={headerTitle} />

      <StartCarousel headerTitle={headerCarouselTitle} />

      <BestSellerContainer>
        <BestSellerTitle>Featured Products</BestSellerTitle>
        <FeaturedProducts type="featured" />
      </BestSellerContainer>

      <div className="section__padding section__margin">
        <CategoryDirectory />
      </div>

      <BestSellerContainer>
        <FeaturedTitle>Trending Products</FeaturedTitle>
        <FeaturedProducts type="trending" />
      </BestSellerContainer>

      <BestSellerContainer>
        <BestSellerTitle>You may also like</BestSellerTitle>
        <BestSeller type="featured&filters[type][$eq]=trending&filters[type][$eq]=start-featured&filters[type][$eq]=trending-in-store" />
      </BestSellerContainer>

      <Contact />
    </>
  );
};

export default StartStore;
