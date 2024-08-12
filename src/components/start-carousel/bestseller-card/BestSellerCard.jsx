import {
  BestsellerCardContainer,
  CardImageContainer,
  CardLink,
  CardTitle,
  PricesContainer,
} from "./BestSellerCard.styles";

const BestSellerCard = ({ item }) => {
  const addDefaultImg = (ev) => {
    ev.target.src =
      "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=800";
  };
  return (
    <CardLink className="link" to={`/product/1/${item.id}`}>
      <BestsellerCardContainer>
        <CardImageContainer>
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
        </CardImageContainer>
        <CardTitle>{item?.attributes.title}</CardTitle>
        <PricesContainer>
          <h3>€{item?.attributes.oldPrice || item?.attributes.price + 20}</h3>
          <h3>€{item?.attributes.price}</h3>
        </PricesContainer>
      </BestsellerCardContainer>
    </CardLink>
  );
};

export default BestSellerCard;
