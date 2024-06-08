import { Link } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { shops } from "../../constants";

import "./Carousel.styles.scss";

const Carousel = () => {
  const responsive = {
    0: { items: 2 },
    512: { items: 4 },
  };

  const items = shops.map((shop) => {
    return (
      <Link
        className="carouselItem"
        to={`${shop.shopLink}`}
        key={shop.title}
      >
        <img
          src={shop?.imgUrl}
          alt={shop?.title}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {shop?.title}
          &nbsp;
          <span
            style={{
              color: "rgb(14, 203, 129)",
              fontWeight: 500,
            }}
          >
            {"sale"} {"30%"}
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {shop?.description}
        </span>
      </Link>
    );
  });

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={1500}
        animationType="fadeout"
        infinite
      />
    </div>
  );
};

export default Carousel;
