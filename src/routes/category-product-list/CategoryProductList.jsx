import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";

import { CategoriesContext } from "../../contexts/Categories.context";

import {
  ShopContainer,
  CategoryProductListContainer,
  Title,
  CategoryTitleLink,
} from "./category-product-list.styles";

const CategoryProductList = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <ShopContainer>
      <Title>
        <CategoryTitleLink to={"/shop"}>SHOP{` `}</CategoryTitleLink>
        &#10095;{` `}
        {category.toUpperCase()}
      </Title>
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
