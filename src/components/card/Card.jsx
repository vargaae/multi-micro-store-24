import "./Card.styles.scss";

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const addDefaultImg = (ev) => {
    ev.target.src =
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600";
  };
  return (
    <Link className="link" to={`/product/1/${item.id}`}>
      <div className="card">
        <div className="card-image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={item.attributes?.img?.data?.attributes?.url}
            alt="Furniture image 1"
            className="mainImg"
          />
          <img
            src={item.attributes?.img2?.data?.attributes?.url}
            onError={addDefaultImg}
            alt="Furniture image 2"
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item?.attributes.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
