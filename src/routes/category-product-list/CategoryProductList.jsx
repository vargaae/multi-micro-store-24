import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/ProductCard";

import {
  ShopContainer,
  CategoryProductListContainer,
  Title,
  ShopBreadcrumbNavContainer,
  ShopBreadcrumbLink,
} from "./CategoryProductList.styles";

const CategoryProductList = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <ShopContainer>
      <Title>SHOP</Title>
      <ShopBreadcrumbNavContainer>
        <ShopBreadcrumbLink to={"/shop"}>Shop</ShopBreadcrumbLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          color="rgb(0, 0, 0)"
        >
          <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"></path>
        </svg>
        {category}
      </ShopBreadcrumbNavContainer>

      <CategoryProductListContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryProductListContainer>
    </ShopContainer>
  );
};

export default CategoryProductList;
