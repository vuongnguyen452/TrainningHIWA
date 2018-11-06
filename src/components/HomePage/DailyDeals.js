/**
 * Created by Lotus on 3/14/17.
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
import CustomConfigurator from './CustomConfigurator';
import {ListItem} from './../HomePage';
// Images
import imgBanner from './../../images/HomePage/daily-deals-banner-wide.png';
import VrReady from './../../images/HomePage/vr-ready-badge1.png';
// Style
import {DailyDeals as style} from './style';
// CSS
require('./daily-deals.scss');

class DailyDeals extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        };
    }

    render() {
        return (
            <div>
                <div className="container-daily-deals">
                    <div style={style.dailyDeals}>
                        <Image responsive src={imgBanner} style={style.dailyDealsBanner}/>
                        <Grid fluid={true} style={style.bgListItem}>
                            <ListItem item={this.props.Item}/>
                        </Grid>
                    </div>

                    {/*--Custom Configuration--*/}
                    <CustomConfigurator />
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
)(DailyDeals);

