import React, { useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './Timeline.css'
import $ from "jquery";

import timeline from '../img/timeline-desktop.png'
import timeline_mobile from '../img/mobile/timeline-m.png'

const Timeline = () => {

    useEffect(() => {
        $('.btn-timeline').click(function() {
            $('html, body').animate({
                scrollTop: $("#expertise").offset().top
            },100);
        });
    })

    return (
        <div id="timeline" className='timeline'>
            <div className='content'>
                <div className='timeline-container-heading'>
                    <h2>TIME</h2><h2>LINE</h2>
                </div>
                <img className="time-desk hide-mobile" src={timeline} alt='Prime Online Timeline' />
                <img className="time-mob hide-desktop" src={timeline_mobile} alt='Prime Online Timeline' />

                <div className='timeline-btn'>
                    <FaChevronDown className='btn-scroll btn-timeline' size={50} style={{ color: '#858C90' }} />
                </div>
            </div>
            
        </div>
    )
}

export default Timeline