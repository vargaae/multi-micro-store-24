// TODO: !!!CleanUP!!!
import BgVideo from "../../assets/video/vid-bg.mp4";
import Arrow from "../../assets/svg/arrow.svg";

import {
  StartVideoContainer,
  VideoTextBox,
  VideoTextBoxParagraph,
  VideoTextBoxTitle,
  VisitShopLink,
} from "./StartVideo.styles";

const StartVideo = () => {
  return (
    <StartVideoContainer>
      <video autoPlay loop muted className="bg-vid">
        {" "}
        <source src={BgVideo} type="video/mp4" />{" "}
      </video>
      <VideoTextBox>
        <VideoTextBoxTitle>MultiStore-24 Exclusive Deal</VideoTextBoxTitle>
        <VideoTextBoxParagraph>
          MultiStore Exclusive Deal Discover the epitome of style with
          MultiStore Exclusives. Elevate your wardrobe with premium brands,
          where luxury meets fashion. Immerse yourself in a world of
          unparalleled elegance. Explore now!
        </VideoTextBoxParagraph>

        <VisitShopLink>
          Visit Store{" "}
          <span className="arrow">
            <img src={Arrow} height={40} width={40} />
          </span>{" "}
        </VisitShopLink>
      </VideoTextBox>
    </StartVideoContainer>
  );
};

export default StartVideo;
