import CategoryItem from "../category-item/category-item.component";
import "./category-dir.styles.scss";

const CategoryDirectory = ({ products }) => (
      <div className="directory-container">
        {products.map((product) => {
          return <CategoryItem product={product} key={product.id} />;
        })}
      </div>
    );

export default CategoryDirectory;
