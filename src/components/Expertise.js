import React, { useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './Expertise.css'
import $ from "jquery";

import acquisition from '../img/icons/user-acquisition.png'
import affiliate from '../img/icons/affiliate-marketing.png'
import seo from '../img/icons/seo.png'
import media from '../img/icons/media-buying.png'
import developing from '../img/icons/web-developing.png'
import marketing from '../img/icons/brand-marketing.png'
import bi from '../img/icons/bi-and-reporting.png'
import design from '../img/icons/web-design.png'
import email from '../img/icons/email-marketing.png'

const Expertise = () => {

    useEffect(() => {
        $('.btn-expertise').click(function() {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            },100);
        });
    })

    return (
        <div id="expertise" className='expertise'>
            <div className='content'>
                <div className='expertise-container-heading'>
                    <h2>IN-HOUSE</h2><h2>EXPERTISE</h2>
                </div>

                <div className='expertise-content'>
                    <div className='container'>
                        <div className='col-1'>
                            <ul>
                                <li><img src={acquisition} alt='User Acquisition' />User Acquisition</li>
                                <li><img src={affiliate} alt='Affiliate Marketing' />Affiliate Marketing</li>
                                <li><img src={seo} alt='SEO' />SEO</li>
                            </ul>
                        </div>
                        <div className='col-2'>
                            <ul>
                                <li><img src={media} alt='Media Buying' />Media Buying</li>
                                <li><img src={developing} alt='Web Development' />Web Development</li>
                                <li><img src={marketing} alt='Brand Marketing' />Brand Marketing</li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <ul>
                                <li><img src={bi} alt='BI and Reporting' />BI and Reporting</li>
                                <li><img src={design} alt='Web Design' />Web Design</li>
                                <li><img src={email} alt='Email Marketing' />Email Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='expertise-btn'>
                    <FaChevronDown className='btn-scroll btn-expertise' size={50} style={{ color: '#808080' }} />
                </div>
            </div>
            
        </div>
    )
}

export default Expertise