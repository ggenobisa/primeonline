import React, { useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './Hero.css'
import $ from "jquery";

const Hero = () => {

    useEffect(() => {
        $('.btn-hero').click(function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            },100);
        });
    })

    return (
        <div className='hero'>
            <div className='content'>
                <h1>BUILDING BRAND SUCCESS</h1>
                <h2>WITH DATA AND PASSION</h2>

                <div className='hero-btn'>
                    <h3>SCROLL FOR MORE</h3>
                    <FaChevronDown  className='btn-scroll btn-hero' size={50} style={{ color: '#ffffff' }} />
                </div>
            </div>
            
        </div>
    )
}

export default Hero