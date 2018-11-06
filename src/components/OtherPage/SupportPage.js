/**
 * Created by situan on 09/04/2017.
 */
import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
}from 'react-bootstrap';
require('./SupportPage.scss')

class SupportPage extends Component {
    render() {
        return (
            <div className="support_page">
                <div className="img_support_banner"
                     style={{backgroundImage: `url(${require(`./../../images/OtherPage/Support/new-support-banner.jpg`)})`}}
                >
                </div>
                <div className="support_content">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} md={8}>
                                <div className="top_pic container-fluid">
                                    <Col md={4}>
                                        <div className="round img-circle">
                                            <a href="#" className="order-status"></a>
                                        </div>
                                        <a className="btn btn-red" href="#">ORDER STATUS</a>
                                    </Col>
                                    <Col md={4}>
                                        <div className="round img-circle">
                                            <a href="#" className="driver-download"></a>
                                        </div>
                                        <a className="btn btn-red" href="#">DRIVER DOWNLOAD</a>
                                    </Col>
                                    <Col md={4}>
                                        <div className="round img-circle">
                                            <a href="#" className="warranty"></a>
                                        </div>
                                        <a className="btn btn-red" href="#">WARRANTY</a>
                                    </Col>
                                    <Col md={4}>
                                        <div className="round img-circle">
                                            <a href="#" className="faq"></a>
                                        </div>
                                        <a className="btn btn-red" href="#">FAQ</a>
                                    </Col>
                                    <Col md={4}>
                                        <div className="round img-circle">
                                            <a href="#" className="shipping-details"></a>
                                        </div>
                                        <a className="btn btn-red" href="#">SHIPPING DETAILS</a>
                                    </Col>
                                    <Col md={4}>
                                        <div className="round img-circle">
                                            <a href="#" className="rebate-center"></a>
                                        </div>
                                        <a className="btn btn-red" href="#">REBATE CENTER</a>
                                    </Col>
                                    <Col xs={12} lg={12} md={12}>
                                        <div className="info_area">
                                            <p className="title">RMA Number</p>
                                            <span className="content_of_title">If you have been provided a Preapproval Code to receive a RMA
                                                    number, please visit our "E-Tailers Sign In" page at
                                                <strong> https://www.ibuypower.com/Etailers </strong>
                                                 to enter your information. Please note that the Preapproval Code is case-sensitive.
                                                </span>
                                            <br/><br/>
                                            <div >
                                                <a href="#">
                                                    <img src="//content.ibuypower.com/Images/en-US/Site/Intel_RXT_banner.png" className="intel-banner"/>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="support_info">
                                    <Col xs={12} md={6} lg={12} className="contact-block">
                                        <br/>
                                        <p className="title ng-scope">Upgrading to Windows 10?</p>
                                        <span>
                                            All iBUYPOWER Windows 10 systems have been tested for the Windows 10 Anniversary Update and can accept the update.
                                        </span>
                                        <br/><br/>
                                        <span>
                                            Learn more about the Windows 10 Anniversary Update
                                        <a href="https://support.microsoft.com/en-us/products/windows?os=windows-10"> here</a>
                                        .</span>
                                        <br/><br/>
                                    </Col>
                                    <Col xs={12} md={6} lg={12} className="contact-block">
                                        <p className="title">Customer Service</p>
                                        <span>If you have any<strong> issues with your computer order</strong>
                                            , please contact one of our customer service specialists.</span>
                                        <br/><br/>
                                        <strong> Customer Service Hours: </strong>
                                        <br/>
                                        <span>Mon - Fri: 8:30 am - 5:30 pm PST</span>
                                        <br/><br/>
                                        <span><strong>Toll Free</strong>: (888) 462-3899</span>
                                        <br/>
                                        <span><strong>Phone:</strong> (626) 269-5200</span>
                                        <br/>
                                        <strong >Email:</strong> <a href="#">support@ibuypower.com</a>
                                        <br/><br/>
                                    </Col>
                                    <Col xs={12} md={6} lg={12} className="contact-block">
                                        <p className="title">Technical Support</p>
                                        <span>If you have any <strong>technical issues</strong>
                                         with your computer, please contact one of our technicians.</span>
                                        <br/><br/>
                                        <strong>Technical Support Hours:</strong>
                                        <br/>
                                        <span>Mon - Fri: 8:30 am - 5:00 pm PST</span>
                                        <br/><br/>
                                        <span><strong>Toll Free</strong>: (888) 618-6040</span>
                                        <br/>
                                        <span><strong>Phone:</strong> (626) 269-5170</span>
                                        <br/>
                                        <strong>Email:</strong><a href="#">techsupport@ibuypower.com</a>
                                        <br/><br/>
                                        <strong>More support options:</strong>
                                        <br/>
                                        <a href="#">Driver Downloads </a>
                                        <br/><br/>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                {/*Close support_content*/}
            </div>
            // Close support_page
        )
    }
}
export default SupportPage;