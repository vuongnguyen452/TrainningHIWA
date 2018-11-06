/**
 * Created by Lotus on 3/22/17.
 */
// Core
import React, {Component} from 'react';
import {connect} from "react-redux";
// Components
import {
    Image,
    Grid,
    Row,
    Col,
    Thumbnail
} from 'react-bootstrap';
import {ListItem} from "./../HomePage";
// Images
import {FaDesktop, FaLaptop} from 'react-icons/lib/fa';
// Style
import {DailyDeals as style} from './style';
require('./FeatureGaming.scss');

class FeatureGaming extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
            Item: []
        };
    }

    render() {
        return (
            <div>
                <div className="container-feature-gaming">
                    <div style={style.dailyDeals}>
                        <div className="caption-gaming flex-display">
                            <a href="">
                                <h1><FaLaptop className="icon-gaming" size="32px"/>  Feature Gaming Laptop</h1>
                            </a>
                            <a className="btn-view-gaming-laptop">View All Laptops</a>
                        </div>
                        <Grid fluid={true} style={style.bgListItem}>
                            <ListItem item={this.props.Item}/>
                        </Grid>
                    </div>

                    {/*--Feature gaming desktop--*/}
                    <div style={style.dailyDeals}>
                        <div className="caption-gaming flex-display">
                            <a href="">
                                <h1><FaDesktop className="icon-gaming" size="25px"/>  Feature Gaming Desktop</h1>
                            </a>
                            <a className="btn-view-gaming-laptop">View All Desktops</a>
                        </div>
                        <Grid fluid={true} style={style.bgListItem}>
                            <ListItem item={this.props.Item}/>
                        </Grid>
                    </div>

                    {/*--Background image--*/}
                    <div className="img-banner">
                        <a className="banner-Intel" href="">
                        <img className="img-banner-Intel" src={require("./../../images/HomePage/Intel_Inside.png")} />
                        </a>
                        <a href="" className="banner-AMD">
                        <img className="img-banner-AMD" src={require("./../../images/HomePage/AMD_Ryzen_LobbyBanner.png")} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        Item: state.store.Item
    }
}

export default connect (
    mapStateToProps
)(FeatureGaming);

