import { Component } from "react";

// import "./card.styles.css";

class Card extends Component {
  render() {
    const { product } = this.props;
    const { title, ShopNow, id } = product;

    return (
      <div className="category-container">
        <img
          alt={`product ${title}`}
          src={`https://i.ibb.co/cvpntL1/hats.png`}
        />
        <div className="background-image" />
        <div className="category-body-container">
          <h3>{title}</h3>
          <p>{ShopNow}</p>
        </div>
      </div>
    );
  }
}

export default Card;
