// TODO: !!!CleanUP!!!
import { strApi, useGetProductsByTypeQuery } from "../../services/strApi";
import { useDispatch } from "react-redux";

import { useState } from "react";

import { BestSellerCard } from "../";

import { FadeLoader } from "react-spinners";
import Slider from "react-slick";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "lightblue",
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
        background: "lightblue",
        borderRadius: 50,
      }}
      onClick={onClick}
    />
  );
}

const BestSeller = ({ type }) => {
  const [count, setCount] = useState(0);
  let [color, setColor] = useState("#54b3d6");

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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="slider-container">
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
    </div>
  );
};

export default BestSeller;
