import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { StartCarousel, FeaturedShop, BestSeller } from "../../components";

import {
  BestSellerContainer,
  BestSellerTitle,
  FeaturedContainer,
  FeaturedTitle,
} from "./StartShop.styles";

const StartShop = ({ headerTitle }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      <StartCarousel headerTitle={headerTitle} />
      <FeaturedContainer>
        <FeaturedTitle>Featured PRODUCTS</FeaturedTitle>
        <FeaturedShop type="featured-in-shop" />
      </FeaturedContainer>

      {Object.keys(categoriesMap)
        .slice()
        .reverse()
        .map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}

      <FeaturedContainer>
        <FeaturedTitle>Trending PRODUCTS</FeaturedTitle>
        <FeaturedShop type="trending-in-shop" />
      </FeaturedContainer>

      <BestSellerContainer>
        <BestSellerTitle>You may also like</BestSellerTitle>
        <BestSeller type="featured-in-shop&filters[type][$eq]=trending-in-shop&filters[type][$eq]=start-featured" />
      </BestSellerContainer>
    </>
  );
};

export default StartShop;
