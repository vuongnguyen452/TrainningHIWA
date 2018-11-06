/**
 * Created by Vuong on 18/03/2017.
 */
import React, {Component} from 'react';

import {
    Image
} from 'react-bootstrap';

require('./stylefooter.scss');

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div id="footer" className="ng-footer flex-display">
                    <div className="footer-container flex-display">
                            <div className="col_">
                                <a>SIGNATURE</a>
                                    <ul>
                                        <li>Revolt 2</li>
                                        <li>Chimera 5</li>
                                        <li>Element</li>
                                        <li>Noctis</li>
                                        <li>Custom Liquid Cooling</li>
                                        <li>Professional Series</li>
                                        <li>Snowblind</li>
                                        <li>VR-Ready</li>
                                    </ul>
                            </div>
                            <div className="col_">
                                <a>DESKTOPS</a>
                                <ul>
                                    <li>Custom Configurator</li>
                                    <li>AMD Ryzen</li>
                                    <li>AMD FX</li>
                                    <li>Intel B250</li>
                                    <li>Intel X99</li>
                                    <li>Intel Z270</li>
                                    <li>Micro Aegis</li>
                                    <li>MSI ATX</li>
                                    <li>Aces Predator</li>
                                </ul>
                            </div>
                            <div className="col_">
                                <a>LAPTOPS</a>
                                <ul>
                                    <li>14~15 Inch</li>
                                    <li>17~18.4 Inch</li>
                                    <li>ASUS</li>
                                    <li>MSI</li>
                                    <li>Battalion</li>
                                    <li>EVGA SC 17</li>
                                </ul>
                            </div>
                            <div className="col_">
                                <a>SALE</a>
                                <ul>
                                    <li>Special Sale</li>
                                    <li>Next Day Systems</li>
                                    <li>Laptop Deals</li>
                                    <li>Refurbished</li>
                                </ul>
                            </div>
                            <div className="col_">
                                <a>REVIEWS</a>
                                <ul>
                                    <li>Awards & Reviews</li>
                                    <li>Customer Reviews</li>
                                </ul>
                            </div>
                            <div className="col_">
                                <a>SUPPORT</a>
                                <ul>
                                    <li>Order Status</li>
                                    <li>Technical Support</li>
                                    <li>Drivers & Downloads</li>
                                    <li>Warranty</li>
                                    <li>FAQ/Knowledge Base</li>
                                    <li>Shipping Infornation</li>
                                    <li>Rebate Center</li>
                                    <li>Recycling</li>
                                </ul>
                            </div>
                            <div className="col_">
                                <a>COMPANY</a>
                                <ul>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Careers</li>
                                    <li>Press Releases</li>
                                    <li>Subscribe to Newsletter</li>
                                </ul>
                            </div>
                            <div className="col_">
                                <a>NEXT&EXTRAS</a>
                                <ul>
                                    <li>Blog</li>
                                    <li>Wallpapers</li>
                                </ul>
                            </div>

                    </div>
                </div>
                <div className="cooperation flex-display">
                    <div className="cooperation-container flex-display">
                        <div className="col4 flex-display">
                            <h5 className="col4-buy">iBUYPOWER IS POWERED BY</h5>
                            <div className="col4-image flex-display">
                                <Image responsive src={require('./../../images/HomePage/logo-1-0913.jpg')}/>
                                <a href="">View All</a>
                            </div>
                        </div>
                        <div className="col4 flex-display">
                            <h5 className="col4-buy">iBUYPOWER PRODUCTS CAN BE PURCHASED FROM:</h5>
                            <div className="col4-image flex-display">
                                <Image responsive src={require('./../../images/HomePage/logo-2.jpg')}/>
                                <a href="">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="bottom-content flex-display">
                        <div className="col5">Buy online or call toll free : 888-462-3899</div>
                        <div className="copyright">
                            <a href="" className="col7">Site Map |</a>
                            <a href=""> Terms |</a>
                            <a href=""> Privacy |</a>
                            <a href=""> Disclaimer |</a>
                            <span className="col6">© 1998-2017 iBUYPOWER All rights reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;