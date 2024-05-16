import Slider from "react-slick";

const StartCarousel = () => {
  var settings = {
    lazyLoad: true,
    fade: true,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "myStore",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "myStore",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "myStore",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/8580720/pexels-photo-8580720.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "myStore",
    },
  ];

  return (
    <Slider {...settings}>
      {data &&
        data.map((image) => (
          <div key={image.id}>
          <img src={image.img} />
            <h3>{image.title}</h3>
          </div>
        ))}
    </Slider>
  );
};

export default StartCarousel;
