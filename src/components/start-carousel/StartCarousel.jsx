/* eslint-disable react/prop-types */
import AwesomeSlider from "react-awesome-slider";
// import withAutoplay from "react-awesome-slider/src/hoc/autoplay";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/src/core/styles.scss";
// Cube animation recipe :
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/src/styled/cube-animation/cube-animation.scss";

import { logo } from "../../assets";
import { CarouselContainer, CarouselTitle } from "./StartCarousel.styles";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StartCarousel = ({ headerTitle }) => {
  const store = [
    {
      id: 1,
      img: "/src/assets/start-carousel/pexels-photo-667838.webp",
      title: "STORE",
      link: "/interior/products/1",
    },
    {
      id: 2,
      img: "/src/assets/start-carousel/pexels-photo-1571457.webp",
      title: "STORE",
      link: "/interior/products/1",
    },
    {
      id: 3,
      img: "/src/assets/start-carousel/pexels-photo-1648776.jpeg",
      title: "STORE",
      link: "/interior/products/1",
    },
    {
      id: 4,
      img: "/src/assets/start-carousel/pexels-photo-8580720.webp",
      title: "STORE",
      link: "/interior/products/1",
    },
  ];
  const shop = [
    {
      id: 1,
      img: "/src/assets/start-carousel/pexels-photo-1884579.webp",
      title: "shop",
      link: "/shop/products/1",
    },
    {
      id: 2,
      img: "/src/assets/start-carousel/pexels-photo-5709661.jpeg",
      title: "shop",
      link: "/shop/products/1",
    },
    {
      id: 3,
      img: "/src/assets/start-carousel/pexels-photo-5264901.jpeg",
      title: "shop",
      link: "/shop/products/1",
    },
    {
      id: 4,
      img: "/src/assets/start-carousel/pexels-photo-720606.webp",
      title: "shop",
      link: "/shop/products/1",
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
