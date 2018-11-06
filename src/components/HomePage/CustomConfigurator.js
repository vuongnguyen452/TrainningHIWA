/**
 * Created by situan on 18/03/2017.
 */
// Core
import React, {Component} from 'react';
// Components
import {
    Image,
    Grid,
    Row,
    Col,
    Thumbnail,
    Tabs,
    Tab,
    Button,
    Carousel,
    CarouselItem
} from 'react-bootstrap';
// Images
import imgBanner from './../../images/HomePage/daily-deals-banner-wide.png';
import VrReady from './../../images/HomePage/vr-ready-badge1.png';
// Style
import {DailyDeals as style} from './style';
// CSS
require('./customconfi.scss');

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
        price2: '$800',
        deskIntelConfig: 'Intel Z270 Core i7 Configurator',
        deskIntelPriceConfig: '$1,219',
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
        price2: '$800',
        deskIntelConfig: 'Intel Z270 Core i5 Configurator',
        deskIntelPriceConfig: '$969',
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
        price2: '$800',
        deskIntelConfig: 'Intel Z270 Core i3 Configurator',
        deskIntelPriceConfig: '$1,219',
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
        price2: '$800',
        deskIntelConfig: 'Intel X99 Core i7 Configurator',
        deskIntelPriceConfig: '$969',
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
        price2: '$800',
        deskIntelConfig: 'Intel B250 Configurator',
        deskIntelPriceConfig: '$1,219',
    }
];

class CustomConfigurator extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
            indexOfProduct: 0
        };
        this.showDeskTopIntelProduct = this.showDeskTopIntelProduct.bind(this);
    }

    showDeskTopIntelProduct(index) {

        this.setState({
            indexOfProduct: index
        });
    }

    render() {
        const o = Item[this.state.indexOfProduct];
        return (
            <div>
                <div>
                    <div className="configurator">
                        <Grid fluid={true} style={style.gridConfig}>
                            <Row className="show-grid">
                                <Col xs={12} md={5} className="borderConfigurator">
                                    <h2>Custom Configurator</h2>
                                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                        <Tab eventKey={1} title="DESKTOP" className="tabPaneConfig">
                                            <Row className="show-grid1">
                                                <Col xs={12} md={4} className="deskImg1"/>
                                                <Col lg={8} className="nameconfigurator">
                                                    {
                                                        Item.map((o, i) => {
                                                            return (
                                                                <div
                                                                    key={i}
                                                                    style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between'
                                                                    }}
                                                                    className="configHover1"
                                                                    onMouseOver={() => {
                                                                        this.showDeskTopIntelProduct(i)
                                                                    }}
                                                                >
                                                                    <div>{o.deskIntelConfig}</div>
                                                                    <div
                                                                        className="priceConfig1">{o.deskIntelPriceConfig}</div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </Col>
                                            </Row>
                                            <div className="divider"></div>
                                            <Row className="show-grid1">
                                                <Col xs={12} md={4} className="deskImg1"/>
                                                <Col lg={8} className="nameconfigurator">
                                                    {
                                                        Item.map((o, i) => {
                                                            return (
                                                                <div
                                                                    key={i}
                                                                    style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between'
                                                                    }} className="configHover2"
                                                                    onMouseOver={() => {
                                                                        this.showDeskTopIntelProduct(i)
                                                                    }}
                                                                >
                                                                    <div>{o.deskIntelConfig}</div>
                                                                    <div
                                                                        className="priceConfig2">{o.deskIntelPriceConfig}</div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey={2} title="LAPTOP" />
                                    </Tabs>
                                </Col>
                                <Col xs={12} md={7} className="showDetailConfigurator">
                                    <Row className="showGridDetailConfig flex-display">
                                        <Col xs={12} md={6} className="thumnailConfig">
                                            <Thumbnail
                                                className="thumnail1"
                                                src={require(`../../images/${o.img}`)}
                                                alt=""
                                            >
                                            </Thumbnail>
                                        </Col>
                                        <Col xs={12} md={6} class="detailProduct">
                                            <h2 className="titleConfig">{o.title}</h2>
                                            <div className="bgStar">
                                                <div style={o.vrReady === true ? {} : {}}>
                                                    <Image src={require(`../../images/${o.star}`)} alt=""/>
                                                    <span> | 125 Customer reviews</span>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="detailNameConfig">{o.deskIntelConfig}</div>
                                            <ul style={style.listInfoDetailConfig}>
                                                <li>{o.info1}</li>
                                                <li>{o.info2}</li>
                                                <li>{o.info3}</li>
                                                <li>{o.info4}</li>
                                                <li>{o.info5}</li>
                                                <li>{o.info6}</li>
                                            </ul>
                                            <div className="bgDetailConfigPrice">
                                                <div className="bgDetailConfigPriceTop flex-display">
                                                    <div className="priceDetail">{o.price}</div>
                                                    <div className="asLowDetail">as low as $66 / mo</div>
                                                    <div className="learnMoreDetail">Learn more</div>
                                                    <div className="dividerPrice"></div>
                                                </div>
                                                <button className="btnDetailConfigPrice"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}
export default CustomConfigurator;