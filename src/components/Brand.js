import React, {useEffect} from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import './Brand.css'

import gc from '../img/brands/gc.jpg'
import gclogo from '../img/logos/genting-casino.png'
import sc from '../img/brands/sc.jpg'
import sclogo from '../img/logos/slingo.png'
import mc from '../img/brands/mc.jpg'
import mclogo from '../img/logos/mega-casino.png'
import lp from '../img/brands/lp.jpg'
import lplogo from '../img/logos/lord-ping.png'
import i36 from '../img/brands/i36.jpg'
import i36logo from '../img/logos/ice36.png'
import sng from '../img/brands/sng.jpg'
import snglogo from '../img/logos/spingenie.png'
import psl from '../img/brands/psl.jpg'
import psllogo from '../img/logos/primeslots.png'
import psc from '../img/brands/psc.jpg'
import psclogo from '../img/logos/primescratchcards.png'
import sg from '../img/brands/sg.jpg'
import sglogo from '../img/logos/simbagames.png'
import pc from '../img/brands/pc.jpg'
import pclogo from '../img/logos/prime-casino.png'
import lms from '../img/brands/lms.jpg'
import lmslogo from '../img/logos/luckyme-slots.png'
import $ from "jquery";

const Brand = () => {

    useEffect(() => {
        $('.hide-our-brands-content').hide();
        $('.btn-show').click(function() {
            $('.showmore-container').css("display", "none");
            $('.hide-our-brands-content').show();
        });
    })

    return (
        <div id="brands" className='brand'>
            <div className='content'>
                <div className='our-brand-container-heading'>
                    <h2>OUR</h2>&nbsp;&nbsp;<h2>BRANDS</h2>
                </div>
                <p className='par-txt'>Prime Online delivers quality marketing services to top online casino brands that bring players a premium gaming experience like no other.</p>
            
                <div className='product'>
                    {/*---------GENTING CASINO-------*/}
                    <div className='container'>
                        <div className='col-1'>
                            <img src={gc} alt='Genting Casino' />
                        </div>
                        <div className='col-2'>
                            <img src={gclogo} alt='Genting Casino' />
                            <p className='par-txt'>Genting Casino is a premium online casino launched in 2021, and part of the Genting global leisure and hospitality group, with 32 land-based casino venues in the UK.</p>
                            <div className='our-brands-license'>
                                <p className='license-txt'>Licensed In:</p>
                                <ul>
                                    <li>UK</li>
                                    <li>MGA</li>
                                    <li>DK</li>
                                    <li>SE</li>
                                    <li>ES</li>
                                </ul>
                                <button className='button'>visit site</button>
                            </div>
                        </div>
                    </div> {/*class: container*/}

                    {/*---------SLINGO-------*/}
                    <div className='container'>
                        <div className='col-2'>
                            <img src={sclogo} alt='Slingo' />
                            <p className='par-txt'>Slingo is a vibrant online casino and the official site for slingo games, the hugely popular blend of slots and bingo played by over 55 million people worldwide on casino and social platforms.</p>
                            <div className='our-brands-license'>
                                <p>Licensed In:</p>
                                <ul>
                                    <li>UK</li>
                                    <li>MGA</li>
                                    <li>SE</li>
                                </ul>
                                <button className='button'>visit site</button>
                            </div>
                        </div>
                        <div className='col-1'>
                            <img src={sc} alt='Slingo' />
                        </div>
                    </div> {/*class: container*/}

                    {/*---------MEGA CASINO-------*/}
                    <div className='container'>
                        <div className='col-1'>
                            <img src={mc} alt='Mega Casino' />
                        </div>
                        <div className='col-2'>
                            <img src={mclogo} alt='Mega Casino' />
                            <p className='par-txt'>Mega Casino is a high-end online casino that delivers an authentic live casino experience on any device, as well as a selection of thousands of the very best slot games.</p>
                            <div className='our-brands-license'>
                                <p className='license-txt'>Licensed In:</p>
                                <ul>
                                    <li>UK</li>
                                    <li>MGA</li>
                                    <li>DK</li>
                                    <li>SE</li>
                                    <li>ES</li>
                                </ul>
                                <button className='button'>visit site</button>
                            </div>
                        </div>
                    </div> {/*class: container*/}

                    {/*---------LORDPING-------*/}
                    <div className='container'>
                        <div className='col-2'>
                            <img src={lplogo} alt='LordPing' />
                            <p className='par-txt'>Known for being the online casino for opinionated players, LordPing offers an experience that is a cut above the rest with its unique take on online gaming.</p>
                            <div className='our-brands-license'>
                                <p>Licensed In:</p>
                                <ul>
                                    <li>UK</li>
                                    <li>MGA</li>
                                    <li>SE</li>
                                </ul>
                                <button className='button'>visit site</button>
                            </div>
                        </div>
                        <div className='col-1'>
                            <img src={lp} alt='LordPing' />
                        </div>
                    </div> {/*class: container*/}

                    <div className='showmore-container'>
                        <p className='showmore-txt'>show more</p>
                        <FaAngleDoubleDown className='btn-show' size={30} style={{ color: '#0180DD' }} />
                    </div>

                    {/*---------ICE36-------*/}
                    <div className='hide-our-brands-content'>
                        <div className='container'>
                            <div className='col-1'>
                                <img src={i36} alt='ICE36' />
                            </div>
                            <div className='col-2'>
                                <img src={i36logo} alt='ICE36' />
                                <p className='par-txt'>ICE36 takes online casino gaming to the next level through its cool and stylish way of offering premium service to new and seasoned online casino players.</p>
                                <div className='our-brands-license'>
                                    <p className='license-txt'>Licensed In:</p>
                                    <ul>
                                        <li>UK</li>
                                        <li>MGA</li>
                                        <li>DK</li>
                                    </ul>
                                    <button className='button'>visit site</button>
                                </div>
                            </div>
                        </div> {/*class: container*/}

                        {/*---------SPIN GENIE-------*/}
                        <div className='container'>
                            <div className='col-2'>
                                <img src={snglogo} alt='Spin Genie' />
                                <p className='par-txt'>Spin Genie promotes fair, fun, and friendly online casino gaming. In 2022 we launched its Ontario site (SpinGenie.ca) which makes SpinGenie our first brand under Ontario regulation.</p>
                                <div className='our-brands-license'>
                                    <p>Licensed In:</p>
                                    <ul>
                                        <li>UK</li>
                                        <li>MGA</li>
                                        <li>DK</li>
                                        <li>SE</li>
                                        <li>ON</li>
                                    </ul>
                                    <button className='button'>visit site</button>
                                </div>
                            </div>
                            <div className='col-1'>
                                <img src={sng} alt='Spin Genie' />
                            </div>
                        </div> {/*class: container*/}

                        {/*---------PRIME SLOTS-------*/}
                        <div className='container'>
                            <div className='col-1'>
                                <img src={psl} alt='Prime Slots' />
                            </div>
                            <div className='col-2'>
                                <img src={psllogo} alt='Prime Slots' />
                                <p className='par-txt'>Prime Slots is one of our brands which focuses on online slots, offering players a simplistic and well-rounded online gaming experience.</p>
                                <div className='our-brands-license'>
                                    <p className='license-txt'>Licensed In:</p>
                                    <ul>
                                        <li>UK</li>
                                        <li>MGA</li>
                                    </ul>
                                    <button className='button'>visit site</button>
                                </div>
                            </div>
                        </div> {/*class: container*/}

                        {/*---------PRIME SCRATCH CARDS-------*/}
                        <div className='container'>
                            <div className='col-2'>
                                <img src={psclogo} alt='Prime ScratchCards' />
                                <p className='par-txt'>Prime ScratchCards was established in 2007 and has since then provided a premium selection of instant win games as well as thousands of slot games from leading providers.</p>
                                <div className='our-brands-license'>
                                    <p>Licensed In:</p>
                                    <ul>
                                        <li>UK</li>
                                        <li>MGA</li>
                                    </ul>
                                    <button className='button'>visit site</button>
                                </div>
                            </div>
                            <div className='col-1'>
                                <img src={psc} alt='Prime ScratchCards' />
                            </div>
                        </div> {/*class: container*/}

                        {/*---------SIMBA GAMES-------*/}
                        <div className='container'>
                            <div className='col-1'>
                                <img src={sg} alt='Simba Games' />
                            </div>
                            <div className='col-2'>
                                <img src={sglogo} alt='Simba Games' />
                                <p className='par-txt'>Known for its lion mascot, Simba Games has gained high popularity in the online casino scene over a short time after its extensive TV campaign was launched in Denmark in 2015.</p>
                                <div className='our-brands-license'>
                                    <p className='license-txt'>Licensed In:</p>
                                    <ul>
                                        <li>UK</li>
                                        <li>MGA</li>
                                        <li>DK</li>
                                        <li>SE</li>
                                    </ul>
                                    <button className='button'>visit site</button>
                                </div>
                            </div>
                        </div> {/*class: container*/}

                        {/*---------PRIME CASINO-------*/}
                        <div className='container'>
                            <div className='col-2'>
                                <img src={pclogo} alt='Prime Casino' />
                                <p className='par-txt'>Prime Casino is the first brand launched by Prime Online. Since 2015, it has found its place in the online casino market with its steady and continuous improvement into providing one of the best gaming experiences.</p>
                                <div className='our-brands-license'>
                                    <p>Licensed In:</p>
                                    <ul>
                                        <li>UK</li>
                                        <li>MGA</li>
                                    </ul>
                                    <button className='button'>visit site</button>
                                </div>
                            </div>
                            <div className='col-1'>
                                <img src={pc} alt='Prime Casino' />
                            </div>
                        </div> {/*class: container*/}

                        {/*---------LUCKYME SLOTS-------*/}
                        <div className='container'>
                            <div className='col-1'>
                                <img src={lms} alt='LuckyMe Slots' />
                            </div>
                            <div className='col-2'>
                                <img src={lmslogo} alt='LuckyMe Slots' />
                                <p className='par-txt'>LuckyMe Slots is a brand designed for players with a carefree approach into online casino gaming. With its thousands of online casino games offered, there sure is something for everyone at LuckyMe Slots.</p>
                                <div className='our-brands-license'>
                                    <p className='license-txt'>Licensed In:</p>
                                    <ul>
                                        <li>UK</li>
                                        <li>MGA</li>
                                        <li>DK</li>
                                    </ul>
                                    <button className='button'>visit site</button>
                                </div>
                            </div>
                        </div> {/*class: container*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand