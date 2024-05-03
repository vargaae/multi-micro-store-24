import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import CategoryProductList from "../category-product-list/CategoryProductList";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryProductList />} />
    </Routes>
  );
};

export default Shop;
