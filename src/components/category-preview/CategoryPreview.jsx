import { Link } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container shop__large-screen-container">
      <h2 className="shop__category-preview-title">
        <Link className="shop__category-title_link" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          // eslint-disable-next-line react/prop-types
          .slice()
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
