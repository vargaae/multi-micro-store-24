import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";

import { CategoriesContext } from "../../contexts/Categories.context";

import "./category.styles.scss";

const CategoryList = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="shop-container shop__large-screen-container">
      <h2 className="shop__category-title">
        <Link className="shop__category-title" to={"/shop"}>
          {category.toUpperCase()}
        </Link>
      </h2>
      <div className="shop__category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
