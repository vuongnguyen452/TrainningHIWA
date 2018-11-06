/**
 * Created by Lotus on 3/28/17.
 */
// Core
import React, {Component} from "react";
// Components
import {Col, Image, Thumbnail} from "react-bootstrap";
// import {} from 'slick-carousel'
// import {Slider} from 'react-slick';
// Images
import VrReady from "./../../images/HomePage/vr-ready-badge1.png";
// Style
import {DailyDeals as style} from "./style";
// CSS
require('./daily-deals.scss');
require('./../flickity.scss');
require('./SortByPerformance.scss');

const Flickity = require('react-flickity-component')(React);

let flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left',
    pageDots: false,
    resize: true
};

const Item = [
    {
        img: 'HomePage/400-element-1.png',
        title: 'Intel B250 Blowout Daily Special',
        star: 'HomePage/stars4-5_new.png',
        freeShipping: true,
        vrReady: false,
        new: false,
        customer: 2331,
        info1: 'Windows 10 Home',
        info2: 'Intel® Core™ i7-7700K Processor',
        info3: '8GB DDR4-3000 Memory',
        info4: 'NVIDIA GeForce GTX 1070 8GB',
        info5: 'MSI Z270 PC Mate MB',
        info6: '1TB HD',
        price: '$749',
        price2: '$800',
        option: 'Desktop',
        actionGame: false

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

class SliderPerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    render() {
        return(
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
            >
                {
                    Item.map((o,i) => {
                        return (
                            <Col className="listItem" sm={4} xs={12} key={i} style={style.listItem}>
                                <a href="">
                                    <Thumbnail
                                        key={i}
                                        className="thumbnail-black"
                                        src={require(`../../images/${o.img}`)}
                                        alt=""
                                    >
                                        <div
                                            className="freeShipping"
                                            style={o.freeShipping === true ? {}:{display: 'none'}}
                                        >
                                            FREE SHIPPING!
                                        </div>
                                        <div className="height-info-box">
                                            <h5 style={style.itemTitle2}>{o.title}</h5>
                                            <div style={style.bgStar}>
                                                <div style={o.vrReady === true ? {}:{}}>
                                                    <Image src={require(`../../images/${o.star}`)} alt=""/>
                                                    <div>
                                                        <span className="review-2">125</span>
                                                        <span className="review-2"> Customer reviews </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Image
                                                        src={VrReady}
                                                        style={o.vrReady === true ? {}:{display: 'none'}}
                                                    />
                                                </div>
                                            </div>
                                            <ul style={style.listInfo}>
                                                <li>{o.info1}</li>
                                                <li>{o.info2}</li>
                                                <li>{o.info3}</li>
                                                <li>{o.info4}</li>
                                                <li>{o.info5}</li>
                                                <li>{o.info6}</li>
                                            </ul>
                                        </div>
                                        <div className="bgPrice">
                                            <div className="bgPriceTop">
                                                <div className="price">{o.price}</div>
                                                <div className="price2">{o.price2}</div>
                                                <a href="" className="customize">Customize</a>
                                                <div className="dividerPrice"/>
                                            </div>
                                            <div className="divider"/>
                                            <div className="bgPriceBot">
                                                <div className="asLow">as low as $66 / mo</div>
                                                <div className="learnMore">Learn more</div>
                                            </div>
                                        </div>
                                    </Thumbnail>
                                </a>
                            </Col>
                        )
                    })
                }
            </Flickity>
        )
    }
}

class PerformanceTab extends Component {
    constructor() {
        super();
        this.state = {
            selectedPerfTab: {All: "bgRed"}
        };
    }

    perfActive(name) {
        let selected = this.state.selectedPerfTab;
        selected = {};
        selected[name] = this.state.selectedPerfTab[name] === "bgRed" ? "" : "bgRed";
        this.setState({selectedPerfTab: selected});
    }

    render() {
        return(
            <ul>
                <li onClick={this.perfActive.bind(this, "All")} className={this.state.selectedPerfTab["All"]}>All</li>
                <li onClick={this.perfActive.bind(this, "Intel")} className={this.state.selectedPerfTab["Intel"]}>Intel</li>
                <li onClick={this.perfActive.bind(this, "ADM")} className={this.state.selectedPerfTab["ADM"]}>ADM</li>
                <li onClick={this.perfActive.bind(this, "Lap")} className={this.state.selectedPerfTab["Lap"]}>Lap</li>
            </ul>
        )
    }

}

class SortByLevel extends Component {
    constructor() {
        super();
        this.state = {
            selectedPerfCPU: {cpuMedium: "bgRed2"}
        };
    }

    perfCPUActive(name) {
        let selected = this.state.selectedPerfCPU;
        selected = {};
        selected[name] = this.state.selectedPerfCPU[name] === "bgRed2" ? "" : "bgRed2";
        this.setState({selectedPerfCPU: selected});
    }

    render() {
        return (
            <ul className="perf-option flex-display">
                <li className="currentcat">
                    <a>
                        <div className={this.props.icon} />
                        <div className="cpu">{this.props.type}</div>
                    </a>
                </li>
                <li onClick={this.perfCPUActive.bind(this, "cpuMedium")} className={`current flex-display ${this.state.selectedPerfCPU["cpuMedium"]}`}>
                    <a>
                        <div className="cpu">Medium</div>
                    </a>
                </li>
                <li onClick={this.perfCPUActive.bind(this, "cpuHigh")} className={`current flex-display ${this.state.selectedPerfCPU["cpuHigh"]}`}>
                    <a>
                        <div className="cpu">High</div>
                    </a>
                </li>
                <li onClick={this.perfCPUActive.bind(this, "cpuExtreme")} className={`current flex-display ${this.state.selectedPerfCPU["cpuExtreme"]}`}>
                    <a>
                        <div className="cpu">Extreme</div>
                    </a>
                </li>
            </ul>
        )
    }
}

class SortByPerformance extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
            selectedPerfTab: {All: "bgRed"},
            selectedPerfCPU: {cpuMedium: "bgRed2"}
        };
    }

    render() {
        return (
            <div className="container-sort-perf">
                <div className="perf-title">
                    <div className="perf-icon"/>
                    <h1>Sort By Performance</h1>
                </div>
                <p></p>
                <div className="perf-nav flex-display">
                    <div className="performance-tab">
                        <PerformanceTab />
                    </div>
                    <div className="bg-perf-option flex-display">
                        <div className="perf-option">
                            <SortByLevel type="CPU" icon="cpu-icon"/>
                        </div>
                        <div className="perf-option">
                            <SortByLevel type="GPU" icon="gpu-icon"/>
                        </div>
                    </div>
                </div>
                <div>
                    <SliderPerformance />
                </div>
            </div>
        )
    }
}

export {SortByPerformance, SliderPerformance};

