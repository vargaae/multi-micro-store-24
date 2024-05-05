import ProductCard from "../../components/product-card/ProductCard";

import {
  CategoryPreviewContainer,
  Title,
  CategoryTitleLink,
  Preview,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer className="section__padding section__margin section__width">
      <Title>
        <CategoryTitleLink to={title}>{title}</CategoryTitleLink>
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
