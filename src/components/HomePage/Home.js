/**
 * Created by slinker on 2/14/17.
 */
import React, {Component} from "react";

import {BannerHome, DailyDeals, FeatureGaming, SortByPerformance} from "./../HomePage";
class Home extends Component {

    constructor() {
        super();
        this.state = {
            accessCode: ''
        };
    }

    render() {
        return (
            <div>
                <BannerHome />
                <DailyDeals />
                <SortByPerformance />
                <FeatureGaming />
            </div>
        )
    }
}

export default Home;