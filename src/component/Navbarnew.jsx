import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// IMPORT IMAGE
import Logo from '../images/raflabs-logo.png';
// IMPORT ICONS
import { PiDotsNineBold } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

function Navbarnew() {

    const [active, setActive] = useState('meanu');

    // Function to toggile navBar
    const showNavbar = () => {
        setActive('meanu activeMeanu')
    }

    // Function to remove navBar
    const removeNavbar = () => {
        setActive('meanu')
    }

  return (
    <div className='navbar-second'>
            <Container>
                <div className='navbar-second-content'>
                    <div className='logo-Div'>
                        <img src={Logo} alt="LogoImage" style={{ width:'100%' , height:'36px'}}/>
                        <span style={{ fontSize: '11px', fontWeight: '900', color: '#fff' }}>RafLabs</span>
                    </div>
                    <div className={active}>
                        <ul className='nav-Links'>
                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/' className='nav-link'>Products</Link>
                            <Link to='/addProduct' className='nav-link nav-link-sign'>Add product</Link>
                            <Link to='/login' className='nav-link'>Contact</Link>
                        </ul>
                        {/* icon to close navbar on small devices */}
                        <AiFillCloseCircle className='closeIcon img-nav' onClick={removeNavbar} />
                    </div>
                    {/* <div className='inputDiv-nav'>
                        <input type="text" placeholder='What are you looking for?' />
                    </div> */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to='/shoppingCart'><FaShoppingCart style={{ width: '24px', height: '24px', color: '#fff' }} /></Link>
                    </div>
                    <div className='meanuIcon-Div'>
                        <PiDotsNineBold className='meanuIcon img-nav' onClick={showNavbar} />
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default Navbarnew
