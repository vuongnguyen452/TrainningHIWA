/**
 * Created by situan on 03/04/2017.
 */
import React, {Component} from 'react';
//
import{
    Grid,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Container,
    Checkbox,
    Glyphicon
} from 'react-bootstrap';
//
import {
    FaComments,
    FaCartPlus,
} from 'react-icons/lib/fa';
import {DeProduct} from './../../components';
//
require('./ConfigStoreProduct.scss');
const List_Item_Details = {
    base: [
        {name: 'Limited Time Offer'},
        {name: 'Case'},
        {name: 'iBUYPOWER Elite Build PackageNone'},
        {name: 'LED Fan LightingNone'},
        {name: 'iBUYPOWER Labs - Noise ReductionNone'},
        {name: 'Processor'},
        {name: 'Processor CoolingAsetek 550LC 120mm Liquid CPU Cooler - Standard 120mm'},
        {name: 'Memory8 GB [4 GB x2] DDR4-2133 Memory Module - Corsair or Major Brand'},
        {name: 'Video CardAMD Radeon RX 460 - 2GB - Single Card'},
        {name: ' Processor CoolingAsetek 550LC 120mm Liquid CPU Cooler - Standard 120mm Fan'},
        {name: 'Memory8 GB [4 GB x2] DDR4-2133 Memory Module - Corsair or Major Brand'},
        {name: 'Video CardAMD Radeon RX 460 - 2GB - Single Card'},
        {name: 'SLI BridgeNone'}
    ],
    software: [
        {name: 'Operating'},
        {name: 'Additional Software'},
        {name: 'Keyboard'},
        {name: 'Mouse'},
        {name: 'Mouse Pad'},
        {name: 'Video Capture Device'},
        {name: 'Gaming Accessories'},
        {name: 'Gaming Chairs'},
        {name: 'Headset'},
        {name: 'Monitor'},
        {name: 'Monitor'},
        {name: 'Speaker System'},
        {name: 'External USB Accessories'}
    ],
    service: [
        {name: 'iBUYPOWER SafeGuard Packaging'},
        {name: 'Advanced Build Options - Thermal Paste'},
        {name: 'Case Engraving Service'},
        {name: 'Warranty'},
        {name: 'Rush Service'}
    ]
};

class TabsDetailProduct extends Component {

    constructor() {
        super();
        this.state = {
            tabActive: {
                1: 'base-active'
            },
            openDropdownTabOpion: {}
        };
        this.closeDropdownTabOption = this.closeDropdownTabOption.bind(this);
    }

    openDropdownTabOption(name) {

        let selected = this.state.openDropdownTabOpion;
        selected = {};
        selected[name] = this.state.openDropdownTabOpion === 'select-area' ? '' : 'select-area';
        this.setState({
            openDropdownTabOpion: selected
        });

        let tabActive = this.state.tabActive;
        tabActive = {};
        tabActive[name] = this.state.tabActive === 'base-active' ? '' : 'base-active';
        this.setState({
            tabActive: tabActive
        });

    }

    closeDropdownTabOption() {
        this.setState({
            tabActive: {
                1: 'base-active'
            },
            openDropdownTabOpion: {}
        });
    }

    render() {
        return(
            <div id="progress-area" className="container affix-top">
                <div id="progress-panel" className="container-fluid"
                     onMouseLeave={this.closeDropdownTabOption}
                >
                    <ul id="progress-tab">
                        <li className={this.state.tabActive["1"]}
                            onMouseEnter={this.openDropdownTabOption.bind(this, "1")}
                        >
                            <a href="" className="group1">Base Components</a>
                        </li>
                        <li className={this.state.tabActive["2"]}
                            onMouseEnter={this.openDropdownTabOption.bind(this, "2")}
                        >
                            <a href="" className="group2">Software / Accessories</a>
                        </li>
                        <li className={this.state.tabActive["3"]}
                            onMouseEnter={this.openDropdownTabOption.bind(this, "3")}
                        >
                            <a href="" className="group3">Services / Support</a>
                        </li>
                    </ul>
                    <div className="progress-content">
                        <div className={`progress-area ${this.state.openDropdownTabOpion["1"]}`}
                        >
                            {
                                List_Item_Details.base.map((o,i) => {
                                    return(
                                        <div key={i}>{o.name}</div>
                                    )
                                })
                            }
                        </div>
                        <div className={`progress-area ${this.state.openDropdownTabOpion["2"]}`}
                        >
                            {
                                List_Item_Details.software.map((o,i) => {
                                    return(
                                        <div key={i}>{o.name}</div>
                                    )
                                })
                            }
                        </div>
                        <div className={`progress-area ${this.state.openDropdownTabOpion["3"]}`}
                        >
                            {
                                List_Item_Details.service.map((o,i) => {
                                    return(
                                        <div key={i}>{o.name}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

class DetailProduct extends Component {
    constructor() {
        super();
        this.state = {
            openBase: {},
            openSoftware: {},
            openService: {},
        };
    }

    openListProductBase(name) {
        let selected = this.state.openBase;
        selected = {};
        selected[name] = !this.state.openBase[name];
        this.setState({
            openBase: selected
        });
    }

    openListProductSoftware(name) {
        let selected = this.state.openSoftware;
        selected = {};
        selected[name] = !this.state.openSoftware[name];
        this.setState({
            openSoftware: selected
        });
    }

    openListProductService(name) {
        let selected = this.state.openService;
        selected = {};
        selected[name] = !this.state.openService[name];
        this.setState({
            openService: selected
        });
    }

    render() {
        return (
            <div className="detail_part2">
                <TabsDetailProduct/>

                <div className="show_list container">
                    <ListGroup>
                        {
                            List_Item_Details.base.map((o, i) => {
                                return (
                                    <ListGroupItem key={i} onClick={this.openListProductBase.bind(this, i)}>
                                        <div className="glyphicon glyphicon-triangle-right">
                                            <label>{o.name}</label>
                                        </div>
                                        {
                                            this.state.openBase[i]?
                                                <DeProduct/>:null
                                        }

                                    </ListGroupItem>
                                )
                            })
                        }
                        {
                            List_Item_Details.software.map((o, i) => {
                                return (
                                    <ListGroupItem key={i} onClick={this.openListProductSoftware.bind(this, i)}>
                                        <div className="glyphicon glyphicon-triangle-right">
                                            <label>{o.name}</label>
                                        </div>
                                        {
                                            this.state.openSoftware[i]?
                                                <DeProduct/>:null
                                        }

                                    </ListGroupItem>
                                )
                            })
                        }
                        {
                            List_Item_Details.service.map((o, i) => {
                                return (
                                    <ListGroupItem key={i} onClick={this.openListProductService.bind(this, i)}>
                                        <div className="glyphicon glyphicon-triangle-right">
                                            <label>{o.name}</label>
                                        </div>
                                        {
                                            this.state.openService[i]?
                                                <DeProduct/>:null
                                        }

                                    </ListGroupItem>
                                )
                            })
                        }
                    </ListGroup>
                    <div className="detail_sum_price">
                        <div className="sum_price_item  ">
                            <div className="icon_glyphicon">
                                <div className="glyphicon glyphicon-print">
                                    <label>PRINT</label>
                                </div>
                                <div className="glyphicon glyphicon-envelope">
                                    <label>EMAIL</label>
                                </div>
                                <div className="glyphicon glyphicon-share">
                                    <label>SHARE</label>
                                </div>
                                <div className="glyphicon glyphicon-floppy-save">
                                    <label>SAVE</label>
                                </div>
                            </div>
                        </div>
                        <div className="sum_price_item">
                            <div className="chat_icon_item">
                                <a className="icon-text"><FaComments size="40px"/> <label>CHAT</label></a>
                            </div>
                        </div>
                        <div className="sum_price_item">
                            <div className="sum_detail_text">
                                <label> Estimated Ship Date:</label>
                                <label>04-20-2017</label>
                            </div>
                        </div>
                        <div className="sum_price_item">
                            <div className="sum_detail_text2">
                                <label> Total Savings :</label>
                                <label>$139</label>
                            </div>
                        </div>
                        <div className="sum_price_item">
                            <div className="sum_detail_text2">
                                <label>Subtotal: </label>
                                <label>$929</label>
                            </div>
                        </div>
                        <div className="sum_price_item">
                            <div className="learnMore">
                                <a className="icon-text"><FaCartPlus size="30px"/> <label>Add to Cart</label></a>
                            </div>
                        </div>
                    </div>
                    {/*Close detail_sum_price*/}
                </div>
                {/*Close show_list*/}

            </div>
            // Close detail_part2
        )
    }
}
export default DetailProduct;