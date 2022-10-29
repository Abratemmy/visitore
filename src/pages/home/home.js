import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import categories from '../../categories';
import {LinkContainer} from "react-router-bootstrap"
import { Col, Row } from 'react-bootstrap';
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/hair.jpg";
import hair1 from "../../assets/hair1.jpg";
import hair2 from "../../assets/hair2.jpg";
import hair3 from "../../assets/hair3.jpg";
import hair4 from "../../assets/hair4.jpg";
import hair5 from "../../assets/hair5.jpg";
import hair6 from "../../assets/hair6.jpg";
import Banner from './banner';
import Homeproduct from './homeproduct';

function Home() {
  return (
    <div>
      <div className="shopbanner">
        <Banner />
          {/* <div className='row g-0' >
            <div className='col-6 banner1'>
                <img src={banner1} alt=" " />
            </div>
            <div className='col-6 banner2'>
                <img src={banner2} alt="" />
            </div>
          </div>
          <div className='banner-text'>
            <div className='text'><span>Look your best </span> <span>always</span><span>Let your hair speak for itself!!!</span></div>

            <p></p>
          </div> */}
      </div>
      {/* <img src={cartimg} alt="home-banner" /> */}
      <div className="featured-products-container container mt-4">
        <h2>Lastest <span>products</span></h2>
        {/* last products here */}
        <div>
          <Link to="/category/all" style={{textAlign: "right",display:"block", textDecoration:"none" }}>
            See more {">>"}
          </Link>
        </div>
        <div className='homeproduct-con'> <Homeproduct /></div>
        {/* <div className='products-content'>
          <div className='row'>
            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div className='card'>
                  <div className="img-div"><img src={hair1} alt="" /></div>
                  <div className='content'>
                    <div className='name'>Black braided hair</div>
                    <div className='amount'>N200</div>
                    <div className='btn'>Buy Now</div>
                  </div>
              </div>
            </div>

            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div className='card'>
                  <div className="img-div"><img src={hair4} alt="" /></div>
                  <div className='content'>
                    <div className='name'>Long wig hair</div>
                    <div className='amount'>N200</div>
                    <div className='btn'>Buy Now</div>
                  </div>
              </div>
            </div>

            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div className='card'>
                  <div className="img-div"><img src={hair3} alt="" /></div>
                  <div className='content'>
                    <div className='name'>Black braided hair</div>
                    <div className='amount'>N200</div>
                    <div className='btn'>Buy Now</div>
                  </div>
              </div>
            </div>

            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div className='card'>
                  <div className="img-div"><img src={hair5} alt="" /></div>
                  <div className='content'>
                    <div className='name'>Bonstraight hair</div>
                    <div className='amount'>N200</div>
                    <div className='btn'>Buy Now</div>
                  </div>
              </div>
            </div>

            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div className='card'>
                  <div className="img-div"><img src={hair2} alt="" /></div>
                  <div className='content'>
                    <div className='name'>exceptional hair</div>
                    <div className='amount'>N50</div>
                    <div className='btn'>Buy Now</div>
                  </div>
              </div>
            </div>

            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div className='card'>
                  <div className="img-div"><img src={hair6} alt="" /></div>
                  <div className='content'>
                    <div className='name'>Long hair wig</div>
                    <div className='amount'>N100</div>
                    <div className='btn'>Buy Now</div>
                  </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* sale banner */}
      {/* <div className='sale-banner-container mt-4'>
        <img src={download}  alt="" />
      </div> */}

      <div className='recent-products-container container mt-4'>
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
              <Col md={4}>
                <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap:"10px"}} className="category-tile">{category.name}</div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Home