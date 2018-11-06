/**
 * Created by situan on 12/04/2017.
 */
import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Thumbnail,
    FormGroup,
    FormLabel,
    FormControl
} from 'react-bootstrap';
require('./DeProduct.scss');

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
class DeProduct extends Component {
    render() {
        return (
            <div className="container-list-228">
                <div className="container-fluid white-background">
                    <div className="content-list">
                        <div className="content_product">
                            <div className="container-fluid">
                                <Row>
                                    {
                                        Item.map((o, i) => {
                                            return (
                                                <Col sm={4} xs={12} md={3} key={i}>
                                                    <a href="">
                                                        <Thumbnail
                                                            className="thumnail"
                                                            src={require(`../../images/${o.img}`)}
                                                            alt=""
                                                        >
                                                            <h4 className="content_product_name">{o.title}</h4>
                                                            <div className="bgPriceTop">
                                                                <FormGroup controlId="formControlsSelect">
                                                                    <FormControl componentClass="select" placeholder="select">
                                                                        <option value="select">iBUYPOWER Logo</option>
                                                                        <option value="other">Engraving (Plain Text) - Enter your Message in the Comment Box at Check Out $+25</option>
                                                                        <option value="other">Engraving (Color Text) - Enter your Message/Color in the Comment Box at Check Out $+35</option>
                                                                    </FormControl>
                                                                </FormGroup>
                                                            </div>
                                                        </Thumbnail>
                                                    </a>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DeProduct;
