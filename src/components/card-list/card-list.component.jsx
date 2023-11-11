import { Component } from "react";

import Card from "./card.component";
import "./categories.styles.scss";

class CardList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="categories-container">
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
