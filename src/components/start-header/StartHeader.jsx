import Carousel from "./Carousel";

import { images } from "../../constants";

import "./StartHeader.styles.scss";
import { BannerContainer, CarouselContainer, CarouselTitle } from "./Carousel.styles";

const StartHeader = () => {
  return (
    <BannerContainer
      style={{
        backgroundImage: `url(${images.banner})`,
      }}
    >
      <div className="bannerContent">
        <CarouselContainer className="tagline">
          <CarouselTitle>MICRO-STORE-24</CarouselTitle>
          <p
            style={{
              fontWeight: "bold",
              color: "white",
              marginBottom: 10,
            }}
          >
            Keep track of information about shops and sales
          </p>
          <Carousel />
        </CarouselContainer>
      </div>
    </BannerContainer>
  );
};

export default StartHeader;
