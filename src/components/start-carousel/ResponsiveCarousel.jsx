import { Carousel } from "react-responsive-carousel";

const StartCarousel = () => {
  // const getConfigurableProps = () => ({
  //     showArrows: boolean('showArrows', true, tooglesGroupId),
  //     showStatus: boolean('showStatus', true, tooglesGroupId),
  //     showIndicators: boolean('showIndicators', true, tooglesGroupId),
  //     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
  //     showThumbs: boolean('showThumbs', true, tooglesGroupId),
  //     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
  //     autoPlay: boolean('autoPlay', true, tooglesGroupId),
  //     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
  //     swipeable: boolean('swipeable', true, tooglesGroupId),
  //     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
  //     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
  //     autoFocus: boolean('autoFocus', false, tooglesGroupId),
  //     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
  //     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
  //     interval: number('interval', 2000, {}, valuesGroupId),
  //     transitionTime: number('transitionTime', 500, {}, valuesGroupId),
  //     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
  //     ariaLabel: text('ariaLabel', undefined),
  // });

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
  // {data &&
  //   data.map((image) => (
  //     <div key={image.id}>
  //       <img src={image.img} />
  //       <p className="legend">{image.title}</p>
  //     </div>
  //   ))}
  {
    /* selectedItem={0}
      autoplay={true}
      interval={2000}
      transitionTime={500}
      autoFocus={true}
      dynamicHeight={true}
      swipeable={true}
      infiniteLoop={true}
      stopOnHover={true}
      onClickItem */
  }

  return (
    <Carousel>
      <div>
        <img src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default StartCarousel;
