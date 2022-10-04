import React, { useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './About.css'
import $ from "jquery";

const About = () => {

    useEffect(() => {
        $('.btn-about').click(function() {
            $('html, body').animate({
                scrollTop: $("#brands").offset().top
            },100);
        });
    })

    return (
        <div id="about" className='about'>
            <div className='content'>
                <div className='about-us-container-heading'>
                    <h2>ABOUT</h2>&nbsp;&nbsp;<h2>US</h2>
                </div>
                <p className='par-txt'>Established in 2003, Prime Online Ltd. (also known as Prime Gaming) is a data-driven marketing company, operating leading online casino brands such as Slingo.com, SpinGenie, ICE36, Mega Casino, Genting Casino, Lord Ping and others. All brands are powered by SkillOnNet’s advanced online casino platform offering a wide selection of games from top tier game providers, and operate in key regulated markets including the UK, Spain, Sweden, Denmark, and Canada (Ontario).</p>
                <br></br>
                <p className='par-txt'>Prime’s teamsssssss members are proven experts in player acquisition, data attribution and unique retention while executing a multi-brand strategy. The company is based in Cyprus, and supported by teams in Israel, The Philippines and Malta.</p>

                <div className='about-btn'>
                    <FaChevronDown className='btn-scroll btn-about' size={50} style={{ color: '#858C90' }} />
                </div>
            </div>
            
        </div>
    )
}

export default About