import React from 'react'
import Slider from 'react-slick'
import sliderStyle from '../styles/Home/ImageSlider.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


type ImageSliderProps = {
    images: {title:string, content:string,author:string, companyRole:string}[];
}
const ImageSlider = ({ images }: ImageSliderProps) => {
    
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 2,
        lazyLoad: true,
        autoplay: true,
        autoPlaySpeed: 2000,
        arrows:false,
    }
  return (
      <div className={sliderStyle.boxContent}>
          <Slider {...settings}>
              {
                  images.map((item, index) => (
                      <div key={index}>
                          <div className={sliderStyle.callout}>
                              <h4>{item.title}</h4>
                              <h5>{item.content}</h5>
                         </div>
                          <p className={sliderStyle.firstP}>{item.author}</p>
                          <p>{item.companyRole}</p>

                      </div>
                  ))
            }
          </Slider>
    </div>
  )
}

export default ImageSlider