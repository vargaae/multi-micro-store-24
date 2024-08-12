import { useState } from "react";

import { strApi, useGetProductsByTypeQuery } from "../../services/strApi";
import { useDispatch } from "react-redux";

import { BestSellerCard } from "../";

import { FadeLoader } from "react-spinners";

import Slider from "react-slick";
import { SliderContainer } from "./BestSeller.styles";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#81afdd",
        borderRadius: 50,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#81afdd",
        borderRadius: 50,
      }}
      onClick={onClick}
    />
  );
}

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const BestSeller = ({ type }) => {
  let [color, setColor] = useState("#54b3d6");
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const {
    data: productsByType,
    isFetching,
    error,
    refetch,
  } = useGetProductsByTypeQuery(type);

  function handleRefetchOne() {
    // force re-fetches the data
    refetch();
  }

  function handleRefetchTwo() {
    // has the same effect as `refetch` for the associated query
    dispatch(
      strApi.endpoints.getProductById.initiate(
        { count: 5 },
        { subscribe: false, forceRefetch: true }
      )
    );
  }

  if (error) {
    const timer = setTimeout(() => {
      setCount("Timeout called!");
      console.log("fetch API Error, Refetch in 15s");
      refetch();
    }, 15000);
    return () => clearTimeout(timer);
  }

  if (error)
    return (
      <div>
        <button onClick={handleRefetchOne}>Force re-fetch 1</button>
        <button onClick={handleRefetchTwo}>Force re-fetch 2</button>
      </div>
    );

  const settings = {
    lazyLoad: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {error ? (
          `Something went wrong! ${error}`
        ) : isFetching ? (
          <FadeLoader
            color={color}
            loading={isFetching}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          productsByType?.data?.map((item) => (
            <BestSellerCard item={item} key={item.id} />
          ))
        )}
      </Slider>
    </SliderContainer>
  );
};

export default BestSeller;
