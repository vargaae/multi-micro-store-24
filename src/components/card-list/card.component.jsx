import { Component } from "react";

import './card.styles.css'

class Card extends Component {
  render() {
    const { product } = this.props;
    const { name, email, website, id } = product

 
          return (
            <div className="card-container">
            <img alt={`product ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />  
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{website}</p>
            </div>
        )}}

export default Card;
