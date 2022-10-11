import React, { useState, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import {BiMenuAltRight} from 'react-icons/bi'
import './Navbar.css'
import './Overlay.css'
import $ from "jquery";

import logo from '../img/logo.png'
import fb from '../img/socials/facebook-b.png'
import ig from '../img/socials/instagram-b.png'
import twitter from '../img/socials/twitter-b.png'
import linkedin from '../img/socials/linkedin-b.png'

const fb_link ='https://www.facebook.com/PrimeOnlineLtd';
const ig_link ='https://www.instagram.com/primeonlineofficial/';
const linkedin_link ='https://www.linkedin.com/company/prime-gaming/';


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click) 

    const closeMenu = () => setClick(false)

    useEffect(() => {
        $('.logo').click(function() {
            window.scrollTo(0, 0)
        });

        $('.btn-menu').click(function() {
            $(".overlay-bg").css('display', 'block');
            $(".overlay").css('display','block');
            // $(".hamburger").css({"position": "absolute","width":"100%","left":"0","top":"0","height":"100vh","background-color":"rgba(0,0,0,0.7)"});
        });

        $('.btn-fatimes').click(function() {
            $(".overlay-bg").css('display', 'none');
            $(".overlay").css('display','none');
            // $(".hamburger").css({"position": "unset","width":"unset","left":"unset","top":"unset","height":"unset","background-color":"unset"});
        });

        $('.nav-menu.active .nav-item  > a').click(function() {
            $(".overlay-bg").css('display', 'none');
            $(".overlay").css('display','none');
            // $(".hamburger").css({"position": "unset","width":"unset","left":"unset","top":"unset","height":"unset","background-color":"unset"});
        });
    })

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<IoMdClose className="btn-fatimes" size={40} style={{ color: '#FFF' }} />)
                    : (<BiMenuAltRight className="btn-menu" size={60} style={{ color: '#60A7DB' }} />)}
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
                        <a href="tel:+357-25-279200"><p>+357-25-279200</p></a>
                        <a href="mailto: contact@primeonline.ltd"><p>contact@primeonline.ltd</p></a>
                        <ul>
                            <li><a href={fb_link} target="_blank" rel="noreferrer"><img src={fb} alt='Facebook' /></a></li>
                            <li><a href={ig_link} target="_blank" rel="noreferrer"><img src={ig} alt='Instagram' /></a></li>
                            {/* <li><img src={twitter} alt='logo' /></li> */}
                            <li><a href={linkedin_link} target="_blank" rel="noreferrer"><img src={linkedin} alt='LinkedIn' /></a></li>
                        </ul>
                    </div>
                </ul>
            </nav>
            <div className='overlay'></div>
        </div>
    )
}

export default Navbar