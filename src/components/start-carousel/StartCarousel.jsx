import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
// Cube animation recipe :
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import { logo } from "../../assets";
import { CarouselContainer, CarouselTitle } from "./StartCarousel.styles";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StartCarousel = () => {
  const data = [
    {
      id: 1,
      img: "/src/assets/start-carousel/pexels-photo-667838.webp",
      title: "STORE",
    },
    {
      id: 2,
      img: "/src/assets/start-carousel/pexels-photo-1571457.webp",
      title: "STORE",
    },
    {
      id: 3,
      img: "/src/assets/start-carousel/pexels-photo-1648776.jpeg",
      title: "STORE",
    },
    {
      id: 4,
      img: "/src/assets/start-carousel/pexels-photo-8580720.webp",
      title: "STORE",
    },
  ];

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
        {data &&
          data.map((image) => (
            <div data-src={image.img} key={image.id}>
              <CarouselTitle>
                <img src={logo} className="logo" alt="logo of Andras Varga" />{" "}
                {image.title}
              </CarouselTitle>
            </div>
          ))}
      </AutoplaySlider>
    </CarouselContainer>
  );
};

export default StartCarousel;
