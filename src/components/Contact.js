import React from 'react'
import './Contact.css'
// import { UseForm } from 'react-hook-form'

import map from '../img/map.jpg'
// import map_mobile from '../img/mobile/map-m.jpg'
import fb from '../img/socials/facebook.png'
import ig from '../img/socials/instagram.png'
import link from '../img/socials/linkedin.png'
import twitter from '../img/socials/twitter.png'

const Contact = () => {
    return (
        
        <div id="contact" className='contact'>
            <div className='container'>
                <div className='col-1'>
                    {/* <img className='hide-mobile' src={map} alt='Prime Online LTD' />
                    <img className='hide-desktop' src={map_mobile} alt='Prime Online LTD test101' /> */}

                {/* <a href="https://goo.gl/maps/UWuNWxD82stCt2ZP8" target="_blank" rel="noreferrer"><img src={map} alt='Prime Online LTD' /></a> */}

                <img src={map} usemap="#image-map"></img>
                    
                <map name="image-map">
                    <area target="_blank" alt="Prime Online LTD" title="Prime Online LTD" href="https://www.google.com/maps/place/Anapafseos,+Limassol,+Cyprus/@34.6894445,33.0562204,20.25z/data=!4m5!3m4!1s0x14e7336a80f4c7b5:0xce3af6fbd2cbfd46!8m2!3d34.6894901!4d33.0563325?shorturl=1" coords="255,637,519,688" shape="rect"></area>
                    <area target="_blank" alt="Prime Online LTD" title="Prime Online LTD" href="https://www.google.com/maps/place/Anapafseos,+Limassol,+Cyprus/@34.6894445,33.0562204,20.25z/data=!4m5!3m4!1s0x14e7336a80f4c7b5:0xce3af6fbd2cbfd46!8m2!3d34.6894901!4d33.0563325?shorturl=1" coords="388,733,49" shape="circle"></area>
                </map>
                

                
                </div>
                <div className='col-2'>
                    <h3>CONTACT US</h3>
                    <div className='Form'>
                        <div className='inputs'>
                            <form>
                                <input type="text" name="FullName" placeholder="Your Name"/>
                                <div className='column-2'>
                                    <input type="tel" name="Phone" placeholder="Phone"/>
                                    <input type="email" name="Email" placeholder="Email Address"/>
                                </div>
                                <label for="Message">Message</label>
                                <input id="msg" type="text" name="Message"/>
                                {/* <textarea id="msg" name="message" placeholder="Message"></textarea> */}
                                <div className="sendmsg-container">
                                    <input type="submit" value="SEND MESSAGE"></input>
                                </div>
                            </form>
                        </div>
                    </div> {/*class: Form */}

                    <div className='prime-details'>
                        <h3>HOW TO FIND US</h3>
                        {/* ADDRESS */}
                        <div className='container'>
                            <div className='col-1'>
                                <h4>Address</h4>
                            </div>
                            <div className='col-2'>
                                <p>Prime Online Ltd.<br></br>Anapafseos 1, Limassol, 3096<br></br>Cyprus.</p>
                            </div>
                        </div>
                        {/* PHONE */}
                        <div className='container'>
                            <div className='col-1'>
                                <h4>Phone</h4>
                            </div>
                            <div className='col-2'>
                                <a href="tel:+357-25-279200"><p>+357-25-279200</p></a>
                            </div>
                        </div>
                        {/* EMAIL */}
                        <div className='container'>
                            <div className='col-1'>
                                <h4>Email</h4>
                            </div>
                            <div className='col-2'>
                                <a href="mailto: contact@primeonline.ltd"><p>contact@primeonline.ltd</p></a>
                            </div>
                        </div>
                        
                        <div className='soc-icons'>
                            <img src={fb} alt='Facebook' />
                            <img src={ig} alt='Instagram' />
                            <img src={twitter} alt='Twitter' />
                            <img src={link} alt='LinkedIn' />
                        </div>
                    </div>
                </div>


                <div className='col-3 hide-desktop'>
                    <div className='prime-details'>
                        <h3>HOW TO FIND US</h3>
                        {/* ADDRESS */}
                        <div className='container'>
                            <div className='col-1'>
                                <h4>Address</h4>
                            </div>
                            <div className='col-2'>
                                <p>Prime Online Ltd.<br></br>Anapafseos 1, Limassol, 3096<br></br>Cyprus.</p>
                            </div>
                        </div>
                        {/* PHONE */}
                        <div className='container'>
                            <div className='col-1'>
                                <h4>Phone</h4>
                            </div>
                            <div className='col-2'>
                                <a href="tel:+357-25-279200"><p>+357-25-279200</p></a>
                            </div>
                        </div>
                        {/* EMAIL */}
                        <div className='container'>
                            <div className='col-1'>
                                <h4>Email</h4>
                            </div>
                            <div className='col-2'>
                                <a href="mailto: contact@primeonline.ltd"><p>contact@primeonline.ltd</p></a>
                            </div>
                        </div>
                        
                        <div className='soc-icons'>
                            <img src={fb} alt='Facebook' />
                            <img src={ig} alt='Instagram' />
                            <img src={twitter} alt='Twitter' />
                            <img src={link} alt='LinkedIn' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact