/**
 * Created by Administrator on 14/03/2017.
 */
// Core
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, hashHistory} from "react-router";
import {bindActionCreators} from "redux";
// Component
import {
    FaAdjust,
    FaBars,
    FaCaretDown,
    FaCaretRight,
    FaFacebook,
    FaInstagram,
    FaPhone,
    FaShoppingCart,
    FaUser,
    FaYoutubeSquare
} from "react-icons/lib/fa";
import {Modal} from "react-bootstrap";
import {LoginPopup, SliderPerformance, MyAccount} from "./../../components";
// Action import
import {UserActions as actions} from "../../actions";
import MyAccountAction from "../../actions/MyAccountAction";

// Style
require('./Header.scss');
require('./daily-deals.scss');
require('./../flickity.scss');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideExpand: true,
            hideSearch: true,
            displayExpand: 'none',
            displaySearch: 'none',
            subMenu: {},
            openTopicDisplay: 'none',
            modalLogin: {
                isOpen: false
            },
            openSlider: false
        };
        this.openMenu = this.openMenu.bind(this);
        this.openSearch = this.openSearch.bind(this);
        this.modalLoginHandler = this.modalLoginHandler.bind(this);
    }

    componentWillMount() {
        this.props.userCheckAuthen();
    }

    openMenu() {
        this.setState({
            displayExpand: this.state.hideExpand === true ? 'block' : 'none',
            hideExpand: !this.state.hideExpand
        });
    }

    openSearch() {
        this.setState({
            displaySearch: this.state.hideSearch === true ? 'block' : 'none',
            hideSearch: !this.state.hideSearch
        });
    }

    expandSubMenu(name) {
        let selected = {};
        selected[name] = this.state.subMenu[name] === "active" ? "" : "active";
        this.setState({
            subMenu: selected,
            openTopicDisplay: this.state.subMenu[name] === "active" ? "none" : "block",
            openSlider: this.state.subMenu[name] !== "active"
        });
    }

    modalLoginHandler(status) {

        let modalLogin = this.state.modalLogin;

        modalLogin.isOpen = status;
        this.setState({
            modalLogin
        })
    }

    render() {
        // Navigate to another page
        const navigates = {
            "IBP Gear": '/gearstore',
            "Finance": '',
            "Blog": '',
            "Reviews": '',
            "Support": '/support',
            "Rebate": ''
        };
        const navFeatures = {
            "Next Day System": '/NextDaySystem',
            "Refurbished": '/Refurbish',
            "Easy Builder": '/EasyBuilder'
        };
        const navAccount = {
            "MyAccount": '/MyAccount',
            "OrderHistory": '/MyAccount',
        };
        const navFilterProduct = '/FilterProduct';
        const {
            userIsLogin,
            supportPhone,
            socials
        } = this.props;
        const {
            modalLogin
        } = this.state;

        return (
            <div>
                <div className="container-header flex-display">
                    <div className="navbar-header_">
                        <div className="bg-contact">
                            <div className="bg-phone"><FaPhone size="18px"/>Talk to a Specialist {supportPhone} </div>
                            {/*TODO: hidden for release*/}
                            {/*<div className="chat-now"><FaEnvelopeO className="icon-letter" size="20px"/>  Chat Now</div>*/}
                        </div>
                        <div className="navbar-header-right flex-display">
                            <div className="mechanism flex-display">
                                {
                                    Object.keys(navigates).map((navigate, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                to={navigates[navigate]}
                                                className="icon-text"
                                            >
                                                <FaAdjust size="15px"/>
                                                {navigate}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            <div className="account">
                                <a className="menu-dropdown-self flex-display">
                                    <div>
                                        <FaUser/> My Account <FaCaretDown/>
                                    </div>
                                    <div className="bg-dropdown-self">
                                        <button className="dropdown-self"><FaCaretRight/> Order Status</button>

                                        {
                                            userIsLogin ?
                                                <div>
                                                    <button
                                                        className="dropdown-self"
                                                        onClick={() => {
                                                            this.props.changeTab({
                                                                "1": "",
                                                                "2": "active"
                                                            });
                                                            hashHistory.replace(navAccount["OrderHistory"])
                                                        }}
                                                    >
                                                        <FaCaretRight/>
                                                        OrderHistory
                                                    </button>
                                                    <button
                                                        className="dropdown-self"
                                                        onClick={() => {
                                                            this.props.changeTab({
                                                                "1": "active",
                                                                "2": ""
                                                            });
                                                            hashHistory.replace(navAccount["MyAccount"])
                                                        }}
                                                    >
                                                        <FaCaretRight/>
                                                        MyAccount
                                                    </button>
                                                    <button
                                                        className="dropdown-self"
                                                        onClick={() => {
                                                            this.props.userLogout()
                                                        }}
                                                    >
                                                        <FaCaretRight/>
                                                        Logout
                                                    </button>
                                                </div>
                                                :
                                                <button
                                                className="dropdown-self"
                                                onClick={() => {
                                                    this.modalLoginHandler(true)
                                                }}
                                            >
                                                <FaCaretRight/>
                                                Login
                                            </button>
                                        }
                                    </div>
                                </a>
                            </div>
                            {/* Social connect*/}
                            <div className="bg-social flex-display">
                                <a className="icon-text" href={socials.facebook} target="_blank">
                                    <FaFacebook size="20px"/>
                                </a>
                                {/*<a className="icon-text"><FaTwitter size="20px"/></a>*/}
                                {/*<a className="icon-text"><FaGooglePlus size="20px"/></a>*/}
                                <a className="icon-text" href={socials.youtube} target="_blank">
                                    <FaYoutubeSquare size="20px"/>
                                </a>
                                <a className="icon-text"><FaInstagram size="20px"/></a>
                            </div>
                            <div className="lang">
                                <a className="menu-dropdown-self flex-display">
                                    <div>
                                        <FaUser/> My Account <FaCaretDown/>
                                    </div>
                                    <div className="bg-dropdown-self">
                                        <div className="dropdown-self"><FaCaretRight/> Order Status</div>
                                        <div className="dropdown-self"><FaCaretRight/> Login</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-middle_">
                        <div className="middle-row flex-display">
                            <div className="flex-display bg-middle-left">
                                <div id="expand-menu" onClick={this.openMenu}><FaBars size="20px"/></div>
                                <a href="/#" id="logo">
                                    <img src={require('./../../images/Header/logo.PNG')} alt=""/>
                                </a>
                                <div className="menu">
                                    <div href="" className={`sub-menu ${this.state.subMenu["signature"]}`}
                                         onClick={this.expandSubMenu.bind(this, "signature")}>
                                        <p>signature</p>
                                        <div className="caret_"/>
                                    </div>
                                    <div href="" className={`sub-menu ${this.state.subMenu["desktops"]}`}
                                         onClick={this.expandSubMenu.bind(this, "desktops")}>
                                        <p>desktops</p>
                                        <div className="caret_"/>
                                    </div>
                                    <div href="" className={`sub-menu ${this.state.subMenu["laptops"]}`}
                                         onClick={this.expandSubMenu.bind(this, "laptops")}>
                                        <p>laptops</p>
                                        <div className="caret_"/>
                                    </div>
                                    <div href="" className={`sub-menu ${this.state.subMenu["sale"]}`}
                                         onClick={this.expandSubMenu.bind(this, "sale")}>
                                        <p>sale</p>
                                        <div className="caret_"/>
                                    </div>
                                    {
                                        Object.keys(navFeatures).map((navFeature, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    to={navFeatures[navFeature]}
                                                >
                                                    {
                                                        navFeatures[navFeature] === '/EasyBuilder' ?
                                                            <div
                                                                className={`sub-menu easy-builder ${this.state.subMenu["system"]}`}>
                                                                <p>{navFeature}</p>
                                                            </div>
                                                            :
                                                            <div className={`sub-menu ${this.state.subMenu["system"]}`}>
                                                                <p>{navFeature}</p>
                                                            </div>
                                                    }

                                                </Link>
                                            )
                                        })
                                    }
                                    <div href="" className={`sub-menu ${this.state.subMenu["esports"]}`}
                                         onClick={this.expandSubMenu.bind(this, "esports")}>
                                        <p>esports</p>
                                        <div className="caret_"/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-icon-s flex-display">
                                <Link to={navFilterProduct} className="icon-shop"/>
                                <button className="icon-search flex-display" onClick={this.openSearch}/>
                            </div>
                        </div>

                        <div className="search-box" style={{display: this.state.displaySearch}}>
                            <input className="search-input" type="search" placeholder="Search..."/>
                            <Link to={navFilterProduct}>
                                <button className="search-button" type="button">Go</button>
                            </Link>
                        </div>
                    </div>

                    {/*--topics-menu display when user click on sub-menu--*/}
                    <div className="topics-menu" style={{display: this.state.openTopicDisplay}}>
                        <div className="clearfix">
                            <div className="col-lg-2 topics-sub">
                                <ul>
                                    <li>REVOLT 2</li>
                                    <li>CHIMERA 5</li>
                                    <li>ELEMENT</li>
                                    <li>NOCTIS</li>
                                    <li>CUSTOM LIQUID COOLING</li>
                                    <li>PRO SERIES</li>
                                    <li>SNOWBLIND</li>
                                    <li>VR READY SYSTEMS</li>
                                </ul>
                            </div>
                            <div className="col-lg-10 topics-content">
                                <div className="slider-topics">
                                    {
                                        this.state.openSlider ? <SliderPerformance /> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <a className="col-lg-12 all-products">See All Signatures PCs</a>

                    </div>

                    {/*--responsive column menu*/}
                    <div className="middle-column" style={{display: this.state.displayExpand}}>
                        <div className="slider-menu flex-display">
                            <div className="menu-header flex-display">
                                <a href="" className="shopping-cart"><FaShoppingCart size="20px"/> shopping carts</a>
                            </div>
                            <div className="bg-sub-menu-column flex-display">
                                <div className="sub-menu-column" tabIndex={1}>
                                    <div className="menu-section-header flex-display">
                                        <FaCaretRight className="fa-caret-right" size="20px"/>
                                        <FaCaretDown className="fa-caret-down" size="20px"/>
                                        SIGNATURE
                                    </div>
                                    <div className="menu-topic">
                                        <ul>
                                            <li><a href="">REVOLT2</a></li>
                                            <li><a href="">CHIMERA 5</a></li>
                                            <li><a href="">ELEMENT</a></li>
                                            <li><a href="">NOCTIS</a></li>
                                            <li><a href="">CUSTOM LIQUID COOLING</a></li>
                                            <li><a href="">PRO SERIES</a></li>
                                            <li><a href="">SNOWBLIND</a></li>
                                            <li><a href="">VR READY SYSTEMS</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-menu-column" tabIndex={2}>
                                    <div className="menu-section-header flex-display">
                                        <FaCaretRight className="fa-caret-right" size="20px"/>
                                        <FaCaretDown className="fa-caret-down" size="20px"/>
                                        DESKTOPS
                                    </div>
                                    <div className="menu-topic">
                                        <ul>
                                            <li><a href="">All Desktop</a></li>
                                            <li><a href="">AMD Ryzen</a></li>
                                            <li><a href="">AMD FX</a></li>
                                            <li><a href="">INTEL B250</a></li>
                                            <li><a href="">INTEL X99 i7</a></li>
                                            <li><a href="">NTEL Z270</a>I</li>
                                            <li><a href="">MICRO ATX</a></li>
                                            <li><a href="">MSI AEGIS</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-menu-column" tabIndex={3}>
                                    <div className="menu-section-header flex-display">
                                        <FaCaretRight className="fa-caret-right" size="20px"/>
                                        <FaCaretDown className="fa-caret-down" size="20px"/>
                                        LAPTOPS
                                    </div>
                                    <div className="menu-topic">
                                        <ul>
                                            <li><a href="">REVOLT2</a></li>
                                            <li><a href="">CHIMERA 5</a></li>
                                            <li><a href="">ELEMENT</a></li>
                                            <li><a href="">NOCTIS</a></li>
                                            <li><a href="">CUSTOM LIQUID COOLING</a></li>
                                            <li><a href="">PRO SERIES</a></li>
                                            <li><a href="">SNOWBLIND</a></li>
                                            <li><a href="">VR READY SYSTEMS</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-menu-column" tabIndex={4}>
                                    <div className="menu-section-header flex-display">
                                        <FaCaretRight className="fa-caret-right" size="20px"/>
                                        <FaCaretDown className="fa-caret-down" size="20px"/>
                                        SALE
                                    </div>
                                    <div className="menu-topic">
                                        <ul>
                                            <li><a href="">REVOLT2</a></li>
                                            <li><a href="">CHIMERA 5</a></li>
                                            <li><a href="">ELEMENT</a></li>
                                            <li><a href="">NOCTIS</a></li>
                                            <li><a href="">CUSTOM LIQUID COOLING</a></li>
                                            <li><a href="">PRO SERIES</a></li>
                                            <li><a href="">SNOWBLIND</a></li>
                                            <li><a href="">VR READY SYSTEMS</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-menu-column">
                                    <div className="menu-section-header flex-display">
                                        NEXT DAY SYSTEMS
                                    </div>
                                </div>
                                <div className="sub-menu-column">
                                    <div className="menu-section-header flex-display">
                                        REFURBISHED
                                    </div>
                                </div>
                                <div className="sub-menu-column">
                                    <div className="menu-section-header easy-builder flex-display"
                                         style={{color: '#EAB107', backgroundPositionX: '58%'}}>
                                        EASY BUIDER
                                    </div>
                                </div>
                                <div className="sub-menu-column" tabIndex={5}>
                                    <div className="menu-section-header flex-display">
                                        <FaCaretRight className="fa-caret-right" size="20px"/>
                                        <FaCaretDown className="fa-caret-down" size="20px"/>
                                        ESPORTS
                                    </div>
                                    <div className="menu-topic">
                                        <ul>
                                            <li><a href="">REVOLT2</a></li>
                                            <li><a href="">CHIMERA 5</a></li>
                                            <li><a href="">ELEMENT</a></li>
                                            <li><a href="">NOCTIS</a></li>
                                            <li><a href="">CUSTOM LIQUID COOLING</a></li>
                                            <li><a href="">PRO SERIES</a></li>
                                            <li><a href="">SNOWBLIND</a></li>
                                            <li><a href="">VR READY SYSTEMS</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Sub menu when mobile responsive */}
                                {
                                    Object.keys(navigates).map((navigate, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                to={navigates[navigate]}
                                                className="icon-text"
                                            >
                                                <div className="sub-menu-column">
                                                    <div className="menu-section-header flex-display">
                                                        {navigate}
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })

                                }
                                <div className="sub-menu-column" tabIndex={7}>
                                    <div className="menu-section-header flex-display">
                                        <FaCaretRight className="fa-caret-right" size="20px"/>
                                        <FaCaretDown className="fa-caret-down" size="20px"/>
                                        My Account
                                    </div>
                                    <div className="menu-topic">
                                        <ul>
                                            <li>
                                                <a href="">Order Status</a>
                                            </li>

                                            {
                                                userIsLogin ?
                                                    <div>
                                                        <li
                                                            onClick={() => {
                                                                this.props.changeTab({
                                                                    "1": "",
                                                                    "2": "active"
                                                                });
                                                                hashHistory.replace("/MyAccount");
                                                            }}
                                                        >
                                                            <a>Order History</a>
                                                        </li>
                                                        <li
                                                            onClick={() => {
                                                                this.props.changeTab({
                                                                    "1": "active",
                                                                    "2": ""
                                                                });
                                                                hashHistory.replace("/MyAccount");
                                                            }}
                                                        >
                                                            <a>My Account</a>
                                                        </li>
                                                        <li
                                                            onClick={() => {
                                                                this.props.userLogout()
                                                            }}
                                                        >
                                                            <a>Logout</a>
                                                        </li>
                                                    </div> :
                                                    <li
                                                        onClick={() => {
                                                            this.modalLoginHandler(true)
                                                        }}
                                                    >
                                                        <a href="/#">Login</a>
                                                    </li>
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-menu-column" tabIndex={8}>
                                    <div className="menu-section-header flex-display">
                                        Chat Now
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* Modal login */}
                <ModalLogin isOpen={modalLogin.isOpen} modalLoginHandler={this.modalLoginHandler}/>
            </div>
        )
    }
}

const ModalLogin = (props) => (
    <div className="static-modal">
        <Modal
            show={props.isOpen}
            backdrop={true}
        >
            <LoginPopup closeModalLogin={() => {
                props.modalLoginHandler(false);
            }}/>
        </Modal>
    </div>
);

function mapStateToProps(state) {
    return {
        userIsLogin: state.user.userIsLogin,
        supportPhone: state.info.supportPhone,
        socials: state.info.socials
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userCheckAuthen: bindActionCreators(actions.userCheckAuthen, dispatch),
        userLogout: bindActionCreators(actions.userLogout, dispatch),
        changeTab: bindActionCreators(MyAccountAction.changeTab, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Header);

