import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { StartCarousel } from "../../components";

const CategoriesPreview = ({ headerTitle }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      <StartCarousel headerTitle={headerTitle} />
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
