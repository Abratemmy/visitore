import React, {useState} from 'react';
import Slider from 'react-slick';
import hair1 from "../../assets/hair1.jpg";
import hair2 from "../../assets/hair2.jpg";
import hair3 from "../../assets/hair3.jpg";
import hair4 from "../../assets/hair4.jpg";
import hair5 from "../../assets/hair5.jpg";
import hair6 from "../../assets/hair6.jpg";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";


function SampleNextArrow({onClick}) {
    return (
        <div className='arrow arrow-right' onClick ={onClick}><BsArrowRight /></div>
        
    );
  }
  
  function SamplePrevArrow({onClick}) {
    return (
        <div className='arrow arrow-left' onClick={onClick}><BsArrowLeft /></div>
    );
  }

function Homeproduct() {
    const [slideIndex, setSlideIndex] = useState(0)
    let settings = {
        // dots: true,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
        ]
    }
  return (
    <Slider {...settings} >
        <div className='card-wrapper'>
            <div className='card'>
                <div className='card-image'>
                    <img src={hair1} alt=""/>
                </div>
                <div className='home-addtocart'><button>Add to cart</button></div>

                <div className='content'>
                    <div className='name'>Black braided hair</div>
                    <div className='amount'>N100</div>
                    <div className='btn'>Buy Now</div>
                </div>
            </div>
        </div>

        <div className='card-wrapper'>
            <div className='card car'>
                <div className='card-image'>
                    <img src={hair3} alt=""/>
                </div>
                <div className='home-addtocart'><button>Add to cart</button></div>

                <div className='content'>
                    <div className='name'>Black braided hair</div>
                    <div className='amount'>N200</div>
                    <div className='btn'>Buy Now</div>
                </div>
            </div>
        </div>

        <div className='card-wrapper'>
            <div className='card'>
                <div className='card-image'>
                    <img src={hair2} alt=""/>
                </div>
                <div className='home-addtocart'><button>Add to cart</button></div>

                <div className='content'>
                    <div className='name'>Black braided hair</div>
                    <div className='amount'>N500</div>
                    <div className='btn'>Buy Now</div>
                </div>
            </div>
        </div>

        <div className='card-wrapper'>
            <div className='card'>
                <div className='card-image'>
                    <img src={hair6} alt=""/>
                </div>
                <div className='home-addtocart'><button>Add to cart</button></div>

                <div className='content'>
                    <div className='name'>Black braided hair</div>
                    <div className='amount'>N400</div>
                    <div className='btn'>Buy Now</div>
                </div>
            </div>
        </div>

        <div className='card-wrapper'>
            <div className='card'>
                <div className='card-image'>
                    <img src={hair5} alt=""/>
                </div>
                <div className='home-addtocart'><button>Add to cart</button></div>

                <div className='content'>
                    <div className='name'>Black braided hair</div>
                    <div className='amount'>N200</div>
                    <div className='btn'>Buy Now</div>
                </div>
            </div>
        </div>

        <div className='card-wrapper'>
            <div className='card'>
                <div className='card-image'>
                    <img src={hair6} alt=""/>
                </div>
                <div className='home-addtocart'><button>Add to cart</button></div>

                <div className='content'>
                    <div className='name'>Black braided hair</div>
                    <div className='amount'>N200</div>
                    <div className='btn'>Buy Now</div>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Homeproduct