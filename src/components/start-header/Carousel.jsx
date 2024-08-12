import { shops } from "../../constants";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { CarouselContainer, CarouselItem } from "./Carousel.styles";

const demoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt94EjayRbU_oim_ZJzHHODBNDhCDQzaUIw&usqp=CAU";

const Carousel = () => {
  const responsive = {
    0: { items: 3 },
    512: { items: 4 },
    1024: { items: 6 },
    1200: { items: 8 },
  };

  const items = shops.map((shop) => {
    return (
      <CarouselItem to={`${shop.shopLink}`} key={shop.title}>
        <img
          src={shop?.imgUrl || demoImage}
          alt={shop?.title}
          height="80"
          style={{ marginBottom: 10 }}
        />

        <span style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
          {shop?.title}
        </span>
        <span style={{ marginBottom: 5 }}>
          {shop?.description}
          &nbsp;
        </span>
        <span style={{ fontSize: 16, fontWeight: 800 }}>
          {shop?.company}
          <span
            style={{
              color: "rgb(14, 203, 129)",
              fontWeight: 500,
            }}
          >
            {" sale"} {"30% "}
          </span>
        </span>
      </CarouselItem>
    );
  });

  return (
    <CarouselContainer>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
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

export default Carousel;
