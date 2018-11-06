/**
 * Created by Lotus on 3/30/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";

import {ListItemFilter} from "./../../components";
// Style
require("./NextDaySystem.scss");

class NextDaySystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container-nextDaySystem">
                <div className="bg-nds">
                    <div className="container bg-content">
                        <div className="hidden-xs hidden-sm change-view">
                            <button className="change-view-list" />
                            <button className="change-view-grid" />
                        </div>
                        <div className="list-item-filter">
                            <ListItemFilter item={this.props.item}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.store.Item
    }
}

export default connect (
    mapStateToProps
)(NextDaySystem);