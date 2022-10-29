import React from 'react';
import "./footer.css";
import logo from "../../assets/logo.jpg";
import { NavLink } from 'react-router-dom';
import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa"

function Footer() {
  return (
    <div className='footerpage'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2 col-md-1 col-sm-12'></div>
                <div className='col-lg-8 col-md-10 col-sm-12'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12 footer-content'>
                            <div className='img-div'><img src={logo} alt="" /></div>
                            <p>We make your beauty shines</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='title'>Quick Links</div>
                            <ul>
                                <li><NavLink to ="/" className="footer-nav">Home</NavLink> </li>
                                <li><NavLink to ="/" className="footer-nav">About</NavLink> </li>
                                <li><NavLink to ="/" className="footer-nav">Contact</NavLink> </li>
                            </ul>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className='title'>Our Social media</div>
                            <ul>
                                <li><NavLink to ="/" className="footer-nav"><FaFacebook className="icon" /> <span>Facebook  </span></NavLink> </li>
                                <li><NavLink to ="/" className="footer-nav"><FaInstagram className="icon" /> <span>Instagram  </span></NavLink> </li>
                                <li><NavLink to ="/" className="footer-nav"><FaWhatsapp className="icon" /> <span>Whatsapp  </span></NavLink> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-1 col-sm-12'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer