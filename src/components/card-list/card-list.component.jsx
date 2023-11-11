import { Component } from "react";

import Card from "./card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="category-list">
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
