import React from "react";
import Slider from "react-slick";
import sliderStyle from "../styles/Home/ImageSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "../hooks/useMediaQuery";

type ImageSliderProps = {
  images: {
    title: string;
    content: string;
    author: string;
    companyRole: string;
  }[];
};
const ImageSlider = ({ images }: ImageSliderProps) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const val = isMobile ? 1 : 2;

  //   const settings = {
  //     infinite: !isMobile,
  //     dots: !isMobile,
  //     slidesToShow: 2,
  //     lazyLoad: true,
  //     autoplay: !isMobile,
  //     autoPlaySpeed: 2000,
  //     arrows: false,
  //     vertical: isMobile,
  //   };

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 2,
    lazyLoad: true,
    autoplay: true,
    autoPlaySpeed: 2000,
    arrows: false,
    // vertical: isMobile,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={sliderStyle.container}>
      <div className={sliderStyle.boxContent}>
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index}>
              <div className={sliderStyle.callout}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
              <p className={sliderStyle.firstP}>{item.author}</p>
              <p className={sliderStyle.role}>{item.companyRole}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
