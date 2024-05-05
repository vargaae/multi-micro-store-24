import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./DirectoryItem.styles";

const DirectoryItem = ({ product: { title, imageUrl, ShopNow } }) => {
  return (
    <DirectoryItemContainer to={`shop/${title}`}>
      <BackgroundImage $imgurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p className={ShopNow}>{ShopNow}</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
