import { useContext } from "react";
// import { useSelector } from 'react-redux';
// import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from "../../components/category-preview/CategoryPreview";

import { CategoriesContext } from "../../contexts/Categories.context";

const CategoriesPreview = () => {
  // const categoriesMap = useSelector(selectCategoriesMap);
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
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
