/**
 * Created by Vuong on 21/03/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//
import {UserActions as actions} from "../../actions";
//
require('./LoginPopup.scss');
//
class LoginPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'tien.tranhuu94@gmail.com',
            password: '123456',
            disableButton: false,
            isRegister: false
        };
        this.getUserName = this.getUserName.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    };

    getUserName(e) {
        this.setState({
            username: e.target.value
        });
    }

    getPassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    submitHandler() {
        const self = this;

        if (this.state.isRegister) {
            this.props.register({
                username: this.state.username,
                password: this.state.password
            }, function (err) {
                if(err) {

                } else {
                    self.setState({
                        isRegister: false,
                        password: ''
                    })
                }
            });
        } else {
            this.props.login({
                username: this.state.username,
                password: this.state.password
            }, function (err) {
                if (err) {

                } else {
                    self.props.closeModalLogin();
                }
            });
        }
    }

    render() {

        return (
            <div className="container-fluid-loginPopup clearfix">
                <div className="title">
                    Login
                </div>
                <div className="close-popup"
                     onClick={this.props.closeModalLogin}>×
                </div>
                <hr/>
                <div>
                    <div className="col-xs-12">
                            <div className="customer-option">
                                <label className="">
                                    <input onChange={() => {
                                        this.setState({
                                            isRegister: true
                                        })
                                    }} type="radio" id="q156" name="customer" value="1"/> I'm a new customer.
                                </label>
                                <label className="">
                                    <input onChange={() => {
                                        this.setState({
                                            isRegister: false
                                        })
                                    }} type="radio" id="q157" name="customer" value="2" defaultChecked="checked"/> I
                                    already have an account.
                                </label>
                            </div>
                            <p/>
                            <div className="form-group">
                                <label className="ng-binding">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.getUserName}
                                />
                            </div>
                        <div className="form-group">
                                <label className="ng-binding">Password</label>
                            <input
                                value={this.state.password}
                                type="password" id="password"
                                name="password"
                                className="form-control"
                                onChange={this.getPassword}
                                />
                            </div>
                            <div className="form-group">
                                <a href="" className="forgot-link">Forgot Password</a>
                            </div>
                            <div className="form-inline">
                                <button
                                    onClick={this.submitHandler}
                                    className="btn-submit"
                                    disabled={!this.state.username || !this.state.password}
                                >
                                    Submit
                                </button>
                                <div className="check-box">
                                    <label className="label_">
                                        <input type="checkbox"/>
                                        <span className="ng-binding">Remember</span>
                                    </label>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(actions.login, dispatch),
        register: bindActionCreators(actions.register, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(LoginPopup);