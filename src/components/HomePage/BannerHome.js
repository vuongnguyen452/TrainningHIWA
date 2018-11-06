/**
 * Created by situan on 14/03/2017.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {BannerSlider} from "./../HomePage";

require('./styles.scss');

class BannerHome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-slider clearfix">
                <BannerSlider imgList={this.props.imgList}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imgList: state.store.imageBanner
    }
}

BannerHome.defaultProps = {
};

export default connect (
    mapStateToProps
)(BannerHome)