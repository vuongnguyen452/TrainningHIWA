/**
 * Created by Vuong on 09/04/2017.
 */
import React ,{Component} from "react";

import {
    Image
} from "react-bootstrap";

require('./Carts.scss');
class Carts extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-carts">
                <div className="container">
                    <div className="cart-panel">
                        <Step/>
                    </div>
                    <div className="cart-empty text-center">
                        <p>Your shopping cart is empty, you cannot check out now.</p>
                        <a href="" className="btn btn-ibp-red">Go Shopping</a>
                    </div>
                    <div className="cart-main row">
                        <div className="cart-content col-sm-9">
                            <div className="row">
                                <div className="cart-items col-sm-12">
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <OrderSummary/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Step extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className="steps">
                <section className="row">
                    <div className="col-xs-4 col-xs-push-4 col-sm-4 col-sm-push-0 view-cart">
                        <div className="shopping"/>
                        <span className="visible-xs-inline-block active">View Cart</span>
                    </div>
                    <div className="col-sm-4 hidden-xs">
                        <div className="payment"/>
                    </div>
                    <div className="col-sm-4 hidden-xs">
                        <div className="checkout"/>
                    </div>
                </section>
                <section className="row hidden-xs">
                    <div className="col-sm-4">
                        <div className="circle-active"/>
                    </div>
                    <div className="col-sm-4">
                        <div className="circle"/>
                    </div>
                    <div className="col-sm-4">
                        <div className="circle"/>
                    </div>
                </section>
                <hr/>
                <section className="row hidden-xs">
                    <div className="col-sm-4">
                        <span className="active">View Cart</span>
                    </div>
                    <div className="col-sm-4">
                        <span className="">Shipping & Payment Info</span>
                    </div>
                    <div className="col-sm-4">
                        <span className="">Confirm & Submit Order</span>
                    </div>
                </section>
                <div className="description">
                    <img src={require("./../../images/Product/edit-warning-sm.png")} alt=""/>
                    &nbsp;
                    <b>DO NOT</b>
                    <span> use your browser's "Back" button to edit your configuration. Please use the "Edit" button next to your system to reconfigure.</span>
                </div>
            </div>
        )
    }
}

class CartItem extends Component {

    constructor() {
        super();
        this.state = {
            qty: 1
        };
        this.addQty = this.addQty.bind(this);
        this.subQty = this.subQty.bind(this);
    }

    addQty() {
        this.setState({
            qty: this.state.qty+1
        })
    }

    subQty() {
        this.setState({
            qty: this.state.qty ? this.state.qty-1 : 0
        })
    }

    render() {
        return(
            <div className="item row">
                <div className="title col-xs-12 visible-xs-block">
                    <h5>Intel Z270 i7 Zion Daily Special</h5>
                </div>
                <div className="photo col-xs-6 col-sm-2 text-center">
                    <p className="label label-warning ng-hide">IBP GEAR</p>
                    <Image responsive src={require("./../../images/Product/CorsairSpecAlphaBlkRed_Main_400_.png")}/>
                </div>
                <div className="detail col-xs-6 col-xs-push-0 col-sm-3 col-sm-push-7">
                    <div className="price clearfix">
                        <label htmlFor="">$789</label>
                    </div>
                    <div className="quantity clearfix">
                        <label htmlFor="">QTY</label>
                        <span className="input-group spinner ui-spinner ui-widget ui-widget-content ui-corner-all">
                                                    <input type="text" className="form-control"
                                                           value={this.state.qty}/>
                                                    <div className="input-group-btn-vertical">
                                                        <button className="btn btn-default" type="button"
                                                                onClick={this.addQty}>
                                                            <i className="fa fa-caret-up"/>
                                                        </button>
                                                        <button className="btn btn-default" type="button"
                                                                onClick={this.subQty}>
                                                            <i className="fa fa-caret-down"/>
                                                        </button>
                                                    </div>
                                                </span>
                    </div>
                    <div className="save clearfix">
                        <label htmlFor="">Discount</label>
                        <span>$-40</span>
                    </div>
                    <div className="total-price clearfix">
                        <label htmlFor="">Price</label>
                        <span>$749</span>
                    </div>
                    <div className="affirm-price clearfix">
                        <label>or as low as</label>
                        <label>
                            <span className="affirm-subtotal">$66</span>
                            <span className="affirm-image"/>
                        </label>
                    </div>
                    <div className="warring">
                        <div/>
                    </div>

                </div>
                <div className="extend col-xs-12 col-xs-pull-0 col-sm-7 col-sm-pull-3">
                    <div className="command clearfix">
                        <div className="pc-name hidden-xs">AMD Ryzen 5 Daily Special</div>
                        <div className="pc-modify">
                            <button type="button" className="btn btn-ibp-gray">Details</button>
                            <button type="button" className="btn btn-ibp-gray">Edit</button>
                            <button type="button" className="btn btn-ibp-red">Remove</button>
                        </div>
                    </div>
                    <div className="warranty row">
                        <div className="warranty-header clearfix">
                            <div>
                                <Image src={require("./../../images/Product/shield.png")}/>
                                <span>Protect Your Investment</span>
                            </div>
                            <Image className="warranty-box" src={require("./../../images/Product/question-mark.png")}/>
                        </div>
                        <div className="warranty-body">
                            <div className="upgrade-text">
                                Upgrade your system warranty for extended protection. Select one of our warranty options below :
                            </div>
                            <div className="ng-pristine ng-untouched ng-isolate-scope ng-not-empty">
                                <div className="btn-group bootstrap-select" style={{width: '100%'}}>
                                    <button type="button" className="btn dropdown-toggle btn-default" title="Three Year (3 Years Labor, 1 Year Parts) Standard Warranty [+ $0 ]">
                                                                <span className="filter-option pull-left">
                                                                    <p className="text-muted">Three Year (3 Years Labor, 1 Year Parts) Standard Warranty [+ $0 ]</p>
                                                                </span>
                                        &nbsp;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class OrderSummary extends Component {

    render() {
        return(
            <div className="cart-sidebar">
                <div className="point hide_">
                    <div className="header text-center">
                        <label htmlFor="" className="label label-warning">IBP GEAR</label>
                        <span>You Have </span>
                        <span className="word">0</span>
                        <span> Points </span>
                    </div>
                </div>
                <div className="coupon">
                    <div className="title">ORDER SUMMARY</div>
                    <form name="coupon" className="row ng-pristine ng-invalid ng-invalid-required">
                        <h5>Coupon Code (Optional)</h5>
                        <input className="col-xs-8"></input>
                        <button className="btn btn-submit btn-ibp-red col-xs-4">Apply </button>
                    </form>
                    <div className="info">
                        <div className="footer clearfix">
                            <p className="freeshipping-caption">Free Shipping Discount:</p>
                        </div>
                    </div>
                </div>
                <form className="shipping">
                    <div className="title">Shipping</div>
                    <h5 className="desc">Select your country</h5>
                    <div className="ship-to">
                        <h5>Ship to</h5>
                        <select className="form-control" name="shipto">
                            <option selected={true}>-</option>
                            <option label="APO AP" value="string:APO AP">APO AP</option>
                            <option label="APO AE" value="string:APO AE">APO AE</option>
                            <option label="FPO AP" value="string:FPO AP">FPO AP</option>
                        </select>
                    </div>
                    <div className="ship-to">
                        <h5>Shipping method</h5>
                        <select className="form-control" name="shipto">
                            <option selected={true}>-</option>
                            <option label="APO AP" value="string:APO AP">APO AP</option>
                            <option label="APO AE" value="string:APO AE">APO AE</option>
                            <option label="FPO AP" value="string:FPO AP">FPO AP</option>
                        </select>
                    </div>
                    <div className="shipping-fee clearfix">
                        <span>Shipping</span>
                    </div>
                </form>
                <div className="subtotal clearfix">
                    <label>Subtotal</label>
                    <span>$1,748.00</span>
                </div>
                <div className="you-saved clearfix">
                    <label htmlFor="">Coupon Discount</label>
                    <span>$0.00</span>
                </div>
                <div className="next">
                    <div className="estimated-total clearfix">
                        <label htmlFor="">Estimated Total</label>
                        <span>$1,748.00</span>
                    </div>
                    <div className="affirm-estimated-total clearfix">
                        <label>or as low as</label>
                        <label>
                            <span className="affirm-subtotal">$154.00</span>
                            <span className="affirm-image"/>
                        </label>
                    </div>
                    <button className="btn btn-next btn-ibp-blue">CHECK OUT</button>
                    <a href="" className="btn btn-cancel btn-ibp-gray">CONTINUE SHOPPING</a>

                </div>
            </div>
        )
    }
}

export default Carts;