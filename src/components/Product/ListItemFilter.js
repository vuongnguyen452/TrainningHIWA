/**
 * Created by Lotus on 4/9/17.
 */
import React, {Component} from "react";

import {
    Thumbnail,
    Image,
    Col
} from "react-bootstrap";
// Style
import VrReady from './../../images/HomePage/vr-ready-badge1.png';
import {DailyDeals as style} from './../HomePage/style';
require("./FilterProduct.scss");
require("./../master.scss");

class ListItemFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            item: props.item
        };
    }

    render() {
        const {
            item
        } = this.state;
        return(
            <div className="">
                {
                    item.map((o,i) => {
                        return (
                            <Col lg={2} md={3} sm={4} xs={12} key={i} style={style.listItem}>
                                <a href="">
                                    <Thumbnail
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
                                            <h5 style={style.itemTitle}>{o.title}</h5>
                                            <div style={style.bgStar}>
                                                <div className="vr-and-star" style={o.vrReady === true ? {}:{}}>
                                                    <Image src={require(`../../images/${o.star}`)} alt=""/>
                                                    <Image
                                                        className="vrReady"
                                                        src={VrReady}
                                                        style={o.vrReady === true ? {}:{display: 'none'}}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="review">125</span>
                                                    <span className="review"> Customer reviews </span>
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
            </div>
        )
    }
}

export default ListItemFilter;