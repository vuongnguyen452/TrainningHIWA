/**
 * Created by Lotus on 4/9/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, hashHistory} from "react-router";
import {bindActionCreators} from "redux";

import {InputGroup} from "react-bootstrap";
// Style
require("./MyAccount.scss");

class MyAccount extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.state = {
            selectedAccountTab: this.props.selectedAccountTab
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedAccountTab: nextProps.selectedAccountTab
        })
    }

    openAccountManager(name) {
        let selected = this.state.selectedAccountTab;
        selected = {};
        selected[name] = this.state.selectedAccountTab[name] === "active" ? "" : "active";
        this.setState({
            selectedAccountTab: selected
        });
    }

    render() {
        return (
            <div className="container-myAccount">
                <div className="container clearfix">
                    <div className="title">Hi {this.props.name}</div>
                    <div className="isolate-scope">
                        <a className={this.state.selectedAccountTab["1"]}
                           onClick={this.openAccountManager.bind(this, "1")}>My Account</a>
                        <a className={this.state.selectedAccountTab["2"]}
                           onClick={this.openAccountManager.bind(this, "2")}>Order History</a>
                    </div>
                    <hr/>
                    {
                        this.state.selectedAccountTab["1"] === "active" ?
                            <AccountInfo /> : <OrderHistory />
                    }
                </div>
            </div>
        )
    }
}

class AccountInfo extends Component {
    constructor() {
        super();
    }

    render() {
        const {
            user
        } = this.props;
        return (
            <div>
                <div className="user-info row">
                    <div className="referral-side col-lg-6 col-lg-push-6">
                        <a href="">
                            <img src={require("./../../images/OtherPage/MyAccount/login-banner.png")} alt=""/>
                        </a>
                    </div>
                    <div className="user-side col-lg-6 col-lg-pull-6">
                        <dl className="dl-horizontal">
                            <dt>Username :</dt>
                            <dd>{user.username}</dd>
                        </dl>
                        <dl className="dl-horizontal">
                            <dt>Email :</dt>
                            <dd>
                                <span>{user.email}</span>
                                <button className="btn btn-link hidden-xs" type="button">Change my e-mail address
                                </button>
                            </dd>
                        </dl>
                        <dl className="dl-horizontal">
                            <dt>Password :</dt>
                            <dd>
                                <span>********</span>
                                <button className="btn btn-link hidden-xs" type="button">Change my password</button>
                            </dd>
                        </dl>
                        <dl className="dl-horizontal">
                            <dt>Birthday(Optional) :</dt>
                            <dd>{user.birthday}</dd>
                        </dl>
                    </div>
                </div>
                <div className="address-info">
                    <div className="shipping-info">
                        <h4>Shipping Address Information</h4>
                        <hr/>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>
                                <span>  (Check here to use billing address)</span>
                            </label>
                        </div>
                        <div className="form-horizontal clearfix">
                            <div className="form-group">
                                <label className="col-xs-12 col-sm-2 control-label required">
                                    First Name
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control invalid-required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-xs-12 col-sm-2 control-label required">
                                    Last Name
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control invalid-required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-xs-12 col-sm-2 control-label required">
                                    Address line 1
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control invalid-required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-xs-12 col-sm-2 control-label">
                                    Address line 2
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control invalid-required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-xs-12 col-sm-2 control-label required">
                                    Contact Number
                                </label>
                                <div className="col-xs-3 col-sm-2">
                                    <input type="text" className="form-control invalid-required"/>
                                </div>
                                <div className="col-xs-3 col-sm-2">
                                    <input type="text" className="form-control invalid-required"/>
                                </div>
                                <div className="col-xs-3 col-sm-2">
                                    <input type="text" className="form-control invalid-required"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: true
        }
    }

    render() {
        const {
            order
        } = this.props;
        return (
            <div>
                <div className="order-container clearfix">
                    {
                        this.state.order ?
                            <div className="order-content">
                                <div className="order-status col-xs-12 text-center">
                                    <label>Order Status</label>
                                    <hr/>
                                    <div className="col-xs-12">
                                        <label htmlFor="">Order Placed :</label>
                                        <span>{order.place}</span>
                                    </div>
                                    <div className="col-xs-12">
                                        <label htmlFor="">Order Number :</label>
                                        <span>{order.number}</span>
                                    </div>
                                    <div className="col-xs-12">
                                        <label htmlFor="">Order Total :</label>
                                        <span>{order.orderTotal}</span>
                                    </div>
                                </div>
                                <div className="address col-lg-6">
                                    <label htmlFor="">BILL TO :</label>
                                    <span>{order.billTo}</span>
                                    <hr/>
                                </div>
                                <div className="address col-lg-6">
                                    <label htmlFor="">SHIP TO :</label>
                                    <span>{order.shipTo}</span>
                                    <hr/>
                                </div>
                                <div className="status col-lg-12">
                                    <div className="row status-header">
                                        <div className="col-xs-5 col-sm-4 col-md-4 col-lg-4">
                                            <label>Status Date :</label>
                                            <span>{order.statusDate}</span>
                                        </div>
                                        <div className="col-xs-3 col-sm-4 col-md-4 col-lg-4">
                                            <label>Status :</label>
                                            <span>{order.status}</span>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <label>Notes/ Tracking # :</label>
                                            <span>{order.noteTracking}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="details-list col-lg-12 text-center">
                                    <label htmlFor="">Order Details</label>
                                    <hr/>
                                    <div className="details-title">
                                        <div className="col-xs-8">
                                            <label htmlFor="">Item :</label>
                                            <span>{order.item}</span>
                                        </div>
                                        <div className="col-xs-1 col-sm-2 hidden-xs">
                                            <label htmlFor="">Quantity :</label>
                                            <span>{order.itemQuantity}</span>
                                        </div>
                                        <div className="col-xs-1 col-sm-2 hidden-xs">
                                            <label htmlFor="">Total :</label>
                                            <span>{order.itemTotal}</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <hr/>
                                    <div className="price-calculate row">
                                        <div className="col-md-offset-7 col-lg-offset-7">
                                            <span className="col-xs-8">Coupon Saving :</span>
                                            <label className="col-xs-4">{order.couponSaving}</label>
                                            <span className="col-xs-8">Tax :</span>
                                            <label className="col-xs-4">{order.tax}</label>
                                            <hr/>
                                            <span className="col-xs-8">Order Total :</span>
                                            <label className="col-xs-4">{order.orderTotal}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            :

                            <div className="empty-order text-center">
                                <p>Your order is empty, you cannot check out now.</p>
                                <a className="btn btn-ibp-red" href="">Go Shopping</a>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

MyAccount.defaultProps = {
    user: {
        name: "MrRight",
        username: "mrright",
        email: "mrright@gmail.com",
        birthday: "03-03-1998",
    }
};

AccountInfo.defaultProps = {
    user: {
        name: "MrRight",
        username: "mrright",
        email: "mrright@gmail.com",
        birthday: "03-03-1998",
    }
};

OrderHistory.defaultProps = {
    order: {
        place: "(xxx)",
        number: "(xxx)",
        orderTotal: "(xxx)",
        billTo: "(xxx)",
        shipTo: "(xxx)",
        statusDate: "(xxx)",
        status: "(xxx)",
        noteTracking: "(xxx)",
        item: "(xxx)",
        itemQuantity: "(xxx)",
        itemTotal: "(xxx)",
        couponSaving: "(xxx)",
        tax: "(xxx)",
    }
};


function mapStateToProps(state) {
    return {
        selectedAccountTab: state.init.selectedAccountTab,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // changeTab: bindActionCreators(MyAccountAction.changeTab, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(MyAccount);
