/**
 * Created by situan on 25/03/2017.
 */
import React, {Component} from 'react';
import {
    Nav,
    NavItem,
    Grid,
    Row,
    Col,
    Thumbnail,
    Button,
    Pagination,
} from 'react-bootstrap';

require('./GearStore.scss');

const Item = [
    {
        img: 'OtherPage/GearStore/1_400.png',
        title: 'Intel B250 Blowout Daily Special',
        price: '$749',
        price2: '$800'
    },
    {
        img: 'OtherPage/GearStore/1_400.png',
        title: 'ASUS ROG GL553VD-DS71 Laptop',
        price: '$749',
        price2: '$800'
    },
    {
        img: 'OtherPage/GearStore/1_400.png',
        title: 'ASUS ROG GL553VD-DS71 Laptop',
        price: '$749',
        price2: '$800'
    },
    {
        img: 'OtherPage/GearStore/1_400.png',
        title: 'Intel B250 Blowout Daily Special',
        price: '$749',
        price2: '$800'
    },
    {
        img: 'OtherPage/GearStore/1_400.png',
        title: 'ASUS ROG GL553VD-DS71 Laptop',
        price: '$749',
        price2: '$800'
    }
];

class PerformanceTab extends Component {
    constructor() {
        super();
        this.state = {
            selectedPerfTab: {All: "bgActive"}
        };
    }

    perfActive(name) {
        let selected = this.state.selectedPerfTab;
        selected = {};
        selected[name] = this.state.selectedPerfTab[name] == "bgActive" ? "" : "bgActive";
        this.setState({selectedPerfTab: selected});
    }

    render() {
        return(
            <ul>
                <li>Categories:</li>
                <li onClick={this.perfActive.bind(this, "All")} className={this.state.selectedPerfTab["All"]}>ALL</li>
                <li onClick={this.perfActive.bind(this, "Apparel")} className={this.state.selectedPerfTab["Apparel"]}>Apparel</li>
                <li onClick={this.perfActive.bind(this, "Accessories")} className={this.state.selectedPerfTab["Accessories"]}>Accessories</li>
            </ul>
        )

    }

}

class GearStore extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
            selectedPerfTab: {All: "bgRed"},
            activePage: 1
        };
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
    }

    render() {
        return (
            <div className="container-gear-store">
                <div className="container-fluid">
                    <div
                        className="img_logo"
                        style={{backgroundImage: `url(${require(`./../../images/OtherPage/GearStore/logo.jpg`)})`}}
                    >
                    </div>
                    <div className="content">
                        <div className="content_title">
                            <div className="content_title_text">
                                iBP GEAR STORE
                            </div>
                            <div className="content_title_category">
                                <PerformanceTab />
                            </div>
                        </div>
                        <div className="content_product">
                            <Grid>
                                <Row>
                                    {
                                        Item.map((o, i) => {
                                            return (
                                                <Col sm={4} xs={12} md={4} key={i}>
                                                    <a href="">
                                                        <Thumbnail
                                                            className="thumnail"
                                                            src={require(`../../images/${o.img}`)}
                                                            alt=""
                                                        >
                                                            <h4 className="content_product_name">{o.title}</h4>
                                                            <div className="bgPriceTop">
                                                                <div className="btn customize">SEE PRODUCT</div>
                                                                <div className="price">{o.price}</div>
                                                                <div className="price2">{o.price2}</div>
                                                            </div>
                                                        </Thumbnail>
                                                    </a>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Grid>
                        </div>
                    </div>
                    <div className="Pagination">
                        <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            items={1}
                            maxButtons={5}
                            activePage={this.state.activePage}
                            onSelect={this.handleSelect} />
                    </div>
                </div>
            </div>
        )
    }
}
export default GearStore;