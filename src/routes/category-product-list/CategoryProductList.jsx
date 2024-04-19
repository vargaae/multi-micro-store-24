import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";

import { CategoriesContext } from "../../contexts/Categories.context";

import "./category-product-list.styles.scss";

const CategoryProductList = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="shop-container shop__large-screen-container">
      <h2 className="shop__category-product-list-title">
        <Link className="shop__category-title_link" to={"/shop"}>
          SHOP{` `}
        </Link>
        &#10095;{` `}{category.toUpperCase()}
      </h2>
      <div className="shop__category-product-list-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryProductList;
