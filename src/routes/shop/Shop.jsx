import { useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.reducer";

import StartShop from "../start-shop/StartShop";
import CategoryProductList from "../category-product-list/CategoryProductList";
import { BreadcrumbNav, Contact } from "../../components";

const Shop = () => {
  const dispatch = useDispatch();
  const headerTitle = "Design Shop";
  const headerCarouselTitle = "Shop";

  useEffect(() => {
    const getCategoriesMap = async () => {
      // it's now categoriesArray!!!, not categoriesMap with OBJECT anymore:
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <>
      <BreadcrumbNav headerTitle={headerTitle} />

      <Routes>
        <Route
          index
          element={<StartShop headerTitle={headerCarouselTitle} />}
        />
        <Route path=":category" element={<CategoryProductList />} />
      </Routes>
      <Contact />
    </>
  );
};

export default Shop;
