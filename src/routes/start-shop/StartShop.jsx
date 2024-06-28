import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import {
  StartCarousel,
  FeaturedShop,
  Contact,
  BestSeller,
} from "../../components";

import { FeaturedContainer, FeaturedTitle } from "./StartShop.styles";

const StartShop = ({ headerTitle }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      <StartCarousel headerTitle={headerTitle} />
          <FeaturedContainer>
        <FeaturedTitle>Featured PRODUCTS</FeaturedTitle>
        <FeaturedShop type="featured-in-shop" />
      </FeaturedContainer>
                
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
                <CategoryPreview key={title} title={title} products={products} />

        );
      })}
      <FeaturedContainer>
        <FeaturedTitle>Trending PRODUCTS</FeaturedTitle>
        <FeaturedShop type="featured-in-shop" />
      </FeaturedContainer>
      <FeaturedContainer>
        <FeaturedTitle>You may also like</FeaturedTitle>
        <BestSeller type="featured-in-shop" />
      </FeaturedContainer>
    </>
  );
};

export default StartShop;
