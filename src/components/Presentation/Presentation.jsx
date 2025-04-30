import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from './Presentation.module.css'

export default function Presentation ()  {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
    return (
      <div className={css.sliderinner}>
      <Slider {...settings}>
        <div className={css.slider_item}><img src="/img/slider1.jpg" alt="" /></div>
        <div className={css.slider_item}><img src="/img/slider2.jpg" alt="" /></div>
        <div className={css.slider_item}><img src="/img/slider3.jpg" alt="" /></div>
      </Slider>
        </div>
    )
}
