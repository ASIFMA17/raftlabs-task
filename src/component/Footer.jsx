import React from 'react';
import './footer.css';
// IMPORT ICONS
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
//IMPORT IMAGE
import Logo from '../images/raflabs-logo.png';

function Footer() {
    return (
        <div className='Footer'>
            <div className="secContainer container grid">

                <div className="logoDiv">
                    <div className="footerLogo">
                        <img src={Logo} alt="LogoImage" style={{width:'40px' , height:'40px'}} />
                        <span className='logo-text'>RafLabs</span>
                    </div>
                    <p>
                        Empowering businesses with technology.Building tomorrow's technology today.
                    </p>
                    <div className="socials flex">
                        <ImFacebook className='icon' />
                        <BsTwitterX className='icon' />
                        <AiFillInstagram className='icon' />
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">information</span>
                    <li className='move-footer move-flex' >
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/' className='footer-link' >Home</Link>
                    </li>
                    <li className='move-footer move-flex'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/' className='footer-link' >Product</Link>
                    </li>
                    <li className='move-footer move-flex' >
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/addProduct' className='footer-link' >Add Product</Link>
                    </li>
                    <li className='move-footer move-flex'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to='/' className='footer-link' >Contact Page</Link>
                    </li>

                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Our Products</span>
                    <li className='move-footer move-flex'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to={`/products/${'Car'}`} className='footer-link' >Car</Link>
                    </li>
                    <li className='move-footer move-flex'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to={`/products/${'Bike'}`} className='footer-link' >Bike</Link>
                    </li>
                    <li className='move-footer move-flex'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to={`/products/${'Technical Items'}`} className='footer-link' >Technical Items</Link>
                    </li>
                    <li className='move-footer move-flex'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to={ `/products/${'Shoes'}` } className='footer-link' >Shoes</Link>
                    </li>
                    <li className='move-footer move-flex'>
                        <FiChevronRight className='rightArrow-footer' />
                        <Link to={ `/products/${'Jeep'}` } className='footer-link' >Jeep</Link>
                    </li>

                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Contact Details</span>
                    <span className="phone">+0000000000</span>
                    <span className="email">raftlabs@gmail.com</span>
                    <span className="site">www.raftlabs.com</span>

                </div>

            </div>

        </div>
    )
}

export default Footer
