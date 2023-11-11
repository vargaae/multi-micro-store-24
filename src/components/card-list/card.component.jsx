import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { product } = this.props;
    const { name, ShopNow, id } = product;

    return (
      <div className="category-container">
        <img
          alt={`product ${name}`}
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
        />
        <div className="category-body-container">
          <h3>{name}</h3>
          <p>{ShopNow}</p>
        </div>
      </div>
    );
  }
}

export default Card;
