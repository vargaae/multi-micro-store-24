// TODO: !!!CleanUP!!!
import { videos } from "../../constants";

import {
  StartVideoContainer,
  VideoTextBox,
  VideoTextBoxParagraph,
  VideoTextBoxTitle,
  VisitStoreLink,
  VisitShopLink,
} from "./StartVideo.styles";

const StartVideo = () => {
  return (
    <StartVideoContainer>
      <video autoPlay loop muted className="bg-vid">
        {" "}
        <source src={videos.startVideoBg} type="video/mp4" />{" "}
      </video>
      <VideoTextBox>
        <VideoTextBoxTitle>MultiStore-24 Exclusive Deal</VideoTextBoxTitle>
        <VideoTextBoxParagraph>
          MultiStore Exclusive Deal Discover the epitome of style with
          MultiStore Exclusives. Elevate your wardrobe with premium brands,
          where luxury meets fashion. Immerse yourself in a world of
          unparalleled elegance. Explore now!
        </VideoTextBoxParagraph>

        <VisitStoreLink className="store" to="/interior">
          Visit Interior Design Store
          <span className="arrow">
          <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
          <path
            fill="currentColor"
            d="M23.068 11.993l-4.25-4.236-1.412 1.417 1.835 1.83L.932 11v2l18.305.002-1.821 1.828 1.416 1.412 4.236-4.25z"
          />
        </svg>
          </span>{" "}
        </VisitStoreLink>
        <VisitShopLink className="store" to="/shop">
          Visit Design Shop
          <span className="arrow">
          <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
          <path
            fill="currentColor"
            d="M23.068 11.993l-4.25-4.236-1.412 1.417 1.835 1.83L.932 11v2l18.305.002-1.821 1.828 1.416 1.412 4.236-4.25z"
          />
        </svg>
          </span>{" "}
        </VisitShopLink>
      </VideoTextBox>
    </StartVideoContainer>
  );
};

export default StartVideo;
