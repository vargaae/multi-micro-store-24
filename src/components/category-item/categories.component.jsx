import Card from "./card.component";
import "./categories.styles.scss";

const Categories = ({ products }) => (
      <div className="categories-container">
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    );

export default Categories;
