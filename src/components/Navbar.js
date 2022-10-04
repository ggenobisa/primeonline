import React, { useState, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import {BiMenuAltRight} from 'react-icons/bi'
import './Navbar.css'
import $ from "jquery";

import logo from '../img/logo.png'
import fb from '../img/socials/facebook-b.png'
import ig from '../img/socials/instagram-b.png'
import twitter from '../img/socials/twitter-b.png'
import linkedin from '../img/socials/linkedin-b.png'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    useEffect(() => {
        $('.logo').click(function() {
            window.scrollTo(0, 0)
        });
    })

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<IoMdClose className="btn-fatimes" size={35} style={{ color: '#000000' }} />)
                        : (<BiMenuAltRight size={60} style={{ color: '#60A7DB' }} />)}
                </div>

                
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <a href='#about' onClick={closeMenu}>ABOUT US</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#brands' onClick={closeMenu}>OUR BRANDS</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#timeline' onClick={closeMenu}>TIMELINE</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#expertise' onClick={closeMenu}>IN HOUSE EXPERTISE</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#contact' onClick={closeMenu}>CONTACT US</a>
                        </li>


                        <div className='prime-details hide-desktop'>
                            <p>Prime Online Ltd.<br></br>Anapafseos 1,Limassol,<br></br>3096, Cyprus.</p>
                            <p>+357-25-279200</p>
                            <p>contact@primeonline.ltd</p>
                            <ul>
                                <li><img src={fb} alt='logo' /></li>
                                <li><img src={ig} alt='logo' /></li>
                                <li><img src={twitter} alt='logo' /></li>
                                <li><img src={linkedin} alt='logo' /></li>
                            </ul>
                        </div>
                    </ul>
            </nav>
        </div>
    )
}

export default Navbar