/**
 * Created by Lotus on 4/3/17.
 */
import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {BannerSlider} from "./../HomePage";
import {
    Image,
    Grid,
    Row,
    Col,
    Thumbnail,
    Nav,
    Navbar,
    NavbarBrand,
    NavDropdown,
    NavItem,
    MenuItem
} from 'react-bootstrap';

import VrReady from './../../images/HomePage/vr-ready-badge1.png';
// Style
import {DailyDeals as style} from './../HomePage/style';
// CSS
require('./../HomePage/daily-deals.scss');
require('./../flickity.scss');
const Flickity = require('react-flickity-component')(React);

const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left'
};

const Item = [
    {
        img: 'HomePage/400-element-1.png',
        title: 'Intel B250 Blowout Daily Special',
        star: 'HomePage/stars4-5_new.png',
        freeShipping: true,
        vrReady: false,
        info1: 'Windows 10 Home',
        info2: 'Intel® Core™ i7-7700K Processor',
        info3: '8GB DDR4-3000 Memory',
        info4: 'NVIDIA GeForce GTX 1070 8GB',
        info5: 'MSI Z270 PC Mate MB',
        info6: '1TB HD',
        price: '$749',
        price2: '$800'
    },
    {
        img: 'HomePage/400-GL702_05_1.png',
        title: 'ASUS ROG GL553VD-DS71 Laptop',
        star: 'HomePage/stars4-5_new.png',
        freeShipping: true,
        vrReady: false,
        info1: 'Windows 10 Home',
        info2: 'Intel® Core™ i7-7700K Processor',
        info3: '8GB DDR4-3000 Memory',
        info4: 'NVIDIA GeForce GTX 1070 8GB',
        info5: 'MSI Z270 PC Mate MB',
        info6: '1TB HD',
        price: '$749',
        price2: '$800'
    },
    {
        img: 'HomePage/400-phantom240-1-Main_.png',
        title: 'ASUS ROG GL553VD-DS71 Laptop',
        star: 'HomePage/stars5_new.png',
        freeShipping: true,
        vrReady: true,
        info1: 'Windows 10 Home',
        info2: 'Intel® Core™ i7-7700K Processor',
        info3: '8GB DDR4-3000 Memory',
        info4: 'NVIDIA GeForce GTX 1070 8GB',
        info5: 'MSI Z270 PC Mate MB',
        info6: '1TB HD',
        price: '$749',
        price2: '$800'
    },
    {
        img: 'HomePage/400-GL553_(13).png',
        title: 'Intel B250 Blowout Daily Special',
        star: 'HomePage/stars5_new.png',
        freeShipping: false,
        vrReady: false,
        info1: 'Windows 10 Home',
        info2: 'Intel® Core™ i7-7700K Processor',
        info3: '8GB DDR4-3000 Memory',
        info4: 'NVIDIA GeForce GTX 1070 8GB',
        info5: 'MSI Z270 PC Mate MB',
        info6: '1TB HD',
        price: '$749',
        price2: '$800'
    },
    {
        img: 'HomePage/400-VersaH35-1.png',
        title: 'ASUS ROG GL553VD-DS71 Laptop',
        star: 'HomePage/stars5_new.png',
        freeShipping: false,
        vrReady: true,
        info1: 'Windows 10 Home',
        info2: 'Intel® Core™ i7-7700K Processor',
        info3: '8GB DDR4-3000 Memory',
        info4: 'NVIDIA GeForce GTX 1070 8GB',
        info5: 'MSI Z270 PC Mate MB',
        info6: '1TB HD',
        price: '$749',
        price2: '$800'
    }
];

class MyTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgList2: []
        }
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <BannerSlider imgList={this.props.imgList2}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        imgList2: state.store.imageBanner2
    }
}

export default connect (
    mapStateToProps
)(MyTest);