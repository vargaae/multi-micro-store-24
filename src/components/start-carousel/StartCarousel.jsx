import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
// Cube animation recipe :
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import { logo } from "../../assets";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StartCarousel = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "STORE",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "STORE",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "STORE",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/8580720/pexels-photo-8580720.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "STORE",
    },
  ];

  return (
    <div className="carousel-container">
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
              <h1 className="carousel-title">
                <img src={logo} className="logo" alt="logo of Andras Varga" />{" "}
                {image.title}
              </h1>
            </div>
          ))}
      </AutoplaySlider>
    </div>
  );
};

export default StartCarousel;
