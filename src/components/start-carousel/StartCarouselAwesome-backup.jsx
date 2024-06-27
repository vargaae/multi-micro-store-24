/* eslint-disable react/prop-types */
import AwesomeSlider from "react-awesome-slider";
// import withAutoplay from "react-awesome-slider/src/hoc/autoplay";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/src/core/styles.scss";
// Cube animation recipe :
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/src/styled/cube-animation/cube-animation.scss";

import { shop } from "../../constants";
import { store } from "../../constants";

import { logo } from "../../assets";

import { CarouselContainer, CarouselTitle } from "./StartCarousel.styles";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StartCarousel = ({ headerTitle }) => {
  return (
    <CarouselContainer>
      <AutoplaySlider
        play={true}
        fillParent={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        organicArrows={false}
        bullets={false}
        interval={8000}
        animation="cubeAnimation"
      >
        {headerTitle === "SHOP"
          ? shop.map((image) => (
              <div data-src={image.img} key={image.id}>
                <CarouselTitle>
                  <img src={logo} className="logo" alt="logo of Andras Varga" />{" "}
                  {headerTitle}
                </CarouselTitle>
              </div>
            ))
          : store.map((image) => (
              <div data-src={image.img} key={image.id}>
                <CarouselTitle>
                  <img src={logo} className="logo" alt="logo of Andras Varga" />{" "}
                  {headerTitle}
                </CarouselTitle>
              </div>
            ))}
      </AutoplaySlider>
    </CarouselContainer>
  );
};

export default StartCarousel;
