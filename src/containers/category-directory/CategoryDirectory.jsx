/* eslint-disable react/prop-types */
import {
  DirectoryContainer,
  BackgroundImage,
  DirectoryItemContainer,
  Body,
  DirectoryLastItemContainer,
  DirectoryColContainer,
} from "./CategoryDirectory.styles";
import { Link } from "react-router-dom";
// {products.map((product) => {
//   return <DirectoryItem product={product} key={product.id} />;
// })}

const CategoryDirectory = () => (
  <DirectoryContainer>
    <DirectoryColContainer>
      <DirectoryItemContainer to={`products/1`}>
        <BackgroundImage
          $imgurl={
            "https://images.pexels.com/photos/6580222/pexels-photo-6580222.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        />
        <Body>
          <h2>Living Room</h2>
          <p className={"ShopNow"}>{"ShopNow"}</p>
        </Body>
      </DirectoryItemContainer>
      <DirectoryItemContainer to={`products/2`}>
        <BackgroundImage
          $imgurl={
            "https://images.pexels.com/photos/6903251/pexels-photo-6903251.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        />
        <Body>
          <h2>Kitchen</h2>
          <p className={"ShopNow"}>{"ShopNow"}</p>
        </Body>
      </DirectoryItemContainer>
    </DirectoryColContainer>
    <DirectoryColContainer>
      <DirectoryItemContainer to={`products/3`}>
        <BackgroundImage
          $imgurl={
            "https://images.pexels.com/photos/4409672/pexels-photo-4409672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        />
        <Body>
          <h2>BedRoom</h2>
          <p className={"sale"}>{"SALE"}</p>
        </Body>
      </DirectoryItemContainer>
    </DirectoryColContainer>
    <DirectoryColContainer>
      <DirectoryLastItemContainer>
        <DirectoryColContainer>
          <DirectoryItemContainer to={`products/4`}>
            <BackgroundImage
              $imgurl={
                "https://images.pexels.com/photos/272056/pexels-photo-272056.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Body>
              <h2>Kids</h2>
              <p className={"sale"}>{"30% Discount!"}</p>
            </Body>
          </DirectoryItemContainer>
        </DirectoryColContainer>
        <DirectoryColContainer>
          <DirectoryItemContainer to={`products/5`}>
            <BackgroundImage
              $imgurl={
                "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            />
            <Body>
              <h2>Office</h2>
              <p className={"ShopNow"}>{"ShopNow"}</p>
            </Body>
          </DirectoryItemContainer>
        </DirectoryColContainer>
      </DirectoryLastItemContainer>
      <DirectoryItemContainer to={`products/6`}>
        <BackgroundImage
          $imgurl={
            "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        />
        <Body>
          <h2>Dining Room</h2>
          <p className={"ShopNow"}>{"ShopNow"}</p>
        </Body>
      </DirectoryItemContainer>
    </DirectoryColContainer>
  </DirectoryContainer>
);

export default CategoryDirectory;
