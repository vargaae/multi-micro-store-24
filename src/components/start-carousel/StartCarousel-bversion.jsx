/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { shops } from "../../constants";
import { shop } from "../../constants";
import { store } from "../../constants";

import { logo } from "../../assets";

import { CarouselContainer, CarouselTitle } from "./StartCarousel.styles";

const demoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt94EjayRbU_oim_ZJzHHODBNDhCDQzaUIw&usqp=CAU";

const StartCarousel = ({ headerTitle }) => {
  const items = shop.map((shopSlide) => {
    return (
      <div className="cItem" key={shopSlide.id}>
        <img
          src={shopSlide?.img || demoImage}
          alt={headerTitle}
          className="imgItem"
          height="400"
          style={{ marginBottom: 10 }}
        />
        <CarouselTitle>
            <img src={logo} className="logo" alt="logo of Andras Varga" />{" "}
            {headerTitle}
        </CarouselTitle>
      </div>
    );
  });

  const storeItems = store.map((storeSlide) => {
    return (
      <div className="cItem" key={storeSlide.id}>
        <img
          src={storeSlide?.img || demoImage}
          alt={headerTitle}
          className="imgItem"
          height="400"
          style={{ marginBottom: 10 }}
        />
        <CarouselTitle>
            <img src={logo} className="logo" alt="logo of Andras Varga" />{" "}
            {headerTitle}
        </CarouselTitle>
      </div>
    );
  });

  return (
    <CarouselContainer>
      <AliceCarousel
        items={headerTitle === "SHOP" ? items : storeItems}
        mouseTracking
        controlsStrategy="alternate"
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={1500}
        animationType="fadeout"
        infinite
        disableButtonsControls
      />
    </CarouselContainer>
  );
};

//TODO: Lazy load?

function LazyLoader(props) {
  let timerId;
  const { src = "", delay = 0, onLoad } = props;
  const [isMounted, setMounted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function loadImage() {
    const image = new Image();

    image.src = src;
    image.onload = () => {
      setLoading(false);
      onLoad();
    };
    image.onerror = () => {
      setLoading(false);
    };
  }

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      delay ? (timerId = setTimeout(loadImage, delay)) : loadImage();
    }
    return () => clearTimeout(timerId);
  }, []);

  return isLoading ? <div>Loading...</div> : <img width="100%" src={src} />;
}

export default StartCarousel;

// return (
//   <CarouselContainer>
//     <AutoplaySlider
//       play={true}
//       fillParent={false}
//       cancelOnInteraction={false} // should stop playing on user interaction
//       organicArrows={false}
//       bullets={false}
//       interval={8000}
//       animation="cubeAnimation"
//     >
//       {headerTitle === "SHOP"
//         ? shop.map((image) => (
//             <div data-src={image.img} key={image.id}>
//               <CarouselTitle>
//                 <img src={logo} className="logo" alt="logo of Andras Varga" />{" "}
//                 {headerTitle}
//               </CarouselTitle>
//             </div>
//           ))
//         : store.map((image) => (
//             <div data-src={image.img} key={image.id}>
//               <CarouselTitle>
//                 <img src={logo} className="logo" alt="logo of Andras Varga" />{" "}
//                 {headerTitle}
//               </CarouselTitle>
//             </div>
//           ))}
//     </AutoplaySlider>
//   </CarouselContainer>
