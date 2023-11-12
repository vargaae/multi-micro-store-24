import { Component } from "react";

class Card extends Component {
  render() {
    const { product } = this.props;
    const { title, imgURL, id } = product;

    return (
      <div className="category-container">
        <div className="background-image" style={{backgroundImage: `url(${imgURL})`}} />
        <div className="category-body-container">
          <h3>{title}</h3>
          <p>ShopNow</p>
        </div>
      </div>
    );
  }
}

export default Card;
