import { useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.reducer";

import StartShop from "../start-shop/StartShop";
import CategoryProductList from "../category-product-list/CategoryProductList";
import { Contact } from "../../components";

const Shop = () => {
  const dispatch = useDispatch();
  const headerTitle = "SHOP";

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
      <h2 className="breadcrumb-nav">
        <Link className="link" to="/">
          Home
        </Link>{" "}
        / Design {headerTitle}
      </h2>
      <Routes>
        <Route index element={<StartShop headerTitle={headerTitle} />} />
        <Route path=":category" element={<CategoryProductList />} />
      </Routes>
      <Contact />
    </>
  );
};

export default Shop;
