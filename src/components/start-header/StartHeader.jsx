import Carousel from "./Carousel";

import { images } from "../../constants";

import {
  BannerContainer,
  BannerContent,
  CarouselContainer,
  CarouselTitle,
} from "./StartHeader.styles";

const StartHeader = () => {
  return (
    <BannerContainer
      style={{
        backgroundImage: `url(${images.banner})`,
      }}
    >
      <BannerContent>
        <CarouselContainer>
          <CarouselTitle>MULTIMICRO-STORE-24</CarouselTitle>
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
      </BannerContent>
    </BannerContainer>
  );
};

export default StartHeader;
