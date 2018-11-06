/**
 * Created by Lotus on 4/4/17.
 */
import React, {Component} from 'react';
// Components
import {
    Image,
    Grid,
    Row,
    Col,
    Thumbnail
} from 'react-bootstrap';

import VrReady from './../../images/HomePage/vr-ready-badge1.png';
// Style
import {DailyDeals as style} from './style';
// CSS
require('./daily-deals.scss');

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            Item: props.item
        };
    }

    render() {
        const {
            Item
        } = this.state;
        return (
            <Row style={style.bgRowItem}>
                {
                    Item.map((o,i) => {
                        return (
                            <Col className="listItem" sm={4} xs={12} key={i} style={style.listItem}>
                                <a href="">
                                    <Thumbnail
                                        className="thumbnail thumbnail-white"
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
                                                <div className="dividerPrice"></div>
                                            </div>
                                            <div className="divider"></div>
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
            </Row>
        )
    }
}

export default ListItem;