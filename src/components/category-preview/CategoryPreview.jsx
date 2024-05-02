import { Link } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={title}>{title}</Link>
      </Title>
      <Preview>
        {products
          // eslint-disable-next-line react/prop-types
          .slice()
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
