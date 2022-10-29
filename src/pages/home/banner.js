import React from 'react'
import Slider from 'react-slick';
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";

function SampleNextArrow({onClick}) {
  return (
      <div className='arrow arrow-right' style={{margin:"0px 30px"}} onClick ={onClick}><BsArrowRight /></div>
      
  );
}

function SamplePrevArrow({onClick}) {
  return (
      <div className='arrow arrow-left'style={{margin:"0px 30px"}} onClick={onClick}><BsArrowLeft /></div>
  );
}


function Banner() {
  let settings = { 
    dots:true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase:'linear',
    fade:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}
  return (
    <div>
      <Slider  {...settings} className="Slider">
        <div className=" home-banner home-banner1"  >
            <div className="container">
            <div className='banner-text'>
              <div className='text'><span>Good hair gives</span> <span>happiness</span><span>Confidence comes from what you wear</span></div>
            </div>
            </div>
        </div>

        <div className=" home-banner home-banner2"  >
            <div className="container">
            <div className='banner-text'>
              <div className='text'><span>Look your best </span> <span>always</span><span>Let your hair speak for itself!!!</span></div>
            </div>
            </div>
        </div>

        <div className=" home-banner home-banner3"  >
            <div className="container">
            <div className='banner-text'>
              <div className='text'><span>Look good, our </span> <span>priority</span><span>Keeping styles on trend</span></div>
            </div>
            </div>
        </div>
      </Slider>
    </div>
  )
}

export default Banner