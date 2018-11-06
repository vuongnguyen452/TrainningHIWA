/**
 * Created by Lotus on 3/30/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";

import {
    DropdownButton,
    Grid,
    Thumbnail,
    Image,
    Row,
    MenuItem,
    ButtonToolbar,
    Button,
    ButtonGroup,
    Col,
    Checkbox,
    Pagination
} from "react-bootstrap";
import {BannerSlider} from "./../HomePage";
import {ListItemFilter} from "./../../components";
// Style
require("./FilterProduct.scss");
require("./../master.scss");

class FilterProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
    }

    render() {
        return (
            <div className="container-filter-page">
                <div className="container-banner-filter-page">
                    <BannerSlider imgList={this.props.imgList2}/>
                </div>
                <Grid>
                    <div className="container-condition clearfix">
                        <div className="filter-board clearfix">
                            <h3>Refine your Search</h3>
                            <div className="title-filter-board">You searched for ></div>

                            <div className="menu-filter-board clearfix">
                                <div className="col-xs-6 col-sm-4 col-lg-2 center-width-row">
                                    <DropdownButton
                                        id={0}
                                        className="filter-option" title={"Price"}
                                    >
                                        <div className="custom-checkbox-menu">
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                        </div>
                                    </DropdownButton>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-lg-2 center-width-row">
                                    <DropdownButton
                                        id={1}
                                        className="filter-option" title={"Price"}
                                    >
                                        <div className="custom-checkbox-menu">
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                        </div>
                                    </DropdownButton>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-lg-2 center-width-row">
                                    <DropdownButton
                                        id={2}
                                        className="filter-option" title={"Price"}
                                    >
                                        <div className="custom-checkbox-menu">
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                        </div>
                                    </DropdownButton>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-lg-2 center-width-row">
                                    <DropdownButton
                                        id={3}
                                        className="filter-option" title={"Price"}
                                    >
                                        <div className="custom-checkbox-menu">
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                        </div>
                                    </DropdownButton>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-lg-2 center-width-row">
                                    <DropdownButton
                                        id={4}
                                        className="filter-option" title={"Price"}
                                    >
                                        <div className="custom-checkbox-menu">
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                        </div>
                                    </DropdownButton>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-lg-2 center-width-row">
                                    <DropdownButton
                                        id={5}
                                        className="filter-option" title={"Price"}
                                    >
                                        <div className="custom-checkbox-menu">
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                            <Checkbox>$0-$1000</Checkbox>
                                        </div>
                                    </DropdownButton>
                                </div>
                            </div>

                        </div>
                        <div className="view-plus">
                            <div>Sort by</div>
                            <div className="sort-by center-width-row">
                                <DropdownButton className="filter-option" title={"-- Select --"}>
                                    <MenuItem eventKey="1" active>-- Select --</MenuItem>
                                    <MenuItem eventKey="2">Name A - Z</MenuItem>
                                    <MenuItem eventKey="3">Name Z - A</MenuItem>
                                    <MenuItem eventKey="4">Price: Low to High</MenuItem>
                                    <MenuItem eventKey="5">Price: High to Low</MenuItem>
                                </DropdownButton>
                            </div>
                            <div>Views</div>
                            <div className="view-12 center-width-row">
                                <DropdownButton className="filter-option" title={"12"}>
                                    <MenuItem eventKey="1" active>12</MenuItem>
                                    <MenuItem eventKey="2">24</MenuItem>
                                    <MenuItem eventKey="3">36</MenuItem>
                                    <MenuItem eventKey="4">All</MenuItem>
                                </DropdownButton>
                            </div>
                            <Pagination
                                prev
                                next
                                ellipsis
                                boundaryLinks
                                items={5}
                                maxButtons={4}
                                activePage={this.state.activePage}
                                onSelect={(e) => this.handleSelect(e)}
                            />
                            <div className="hidden-xs hidden-sm change-view">
                                <button className="change-view-list" />
                                <button className="change-view-grid" />
                            </div>
                        </div>
                        <div className="list-item-filter cleafix">
                            <ListItemFilter item={this.props.item}/>
                            <ListItemFilter item={this.props.item}/>
                        </div>
                        <div className="view-plus">
                            <div>Views</div>
                            <div className="view-12 center-width-row">
                                <DropdownButton className="filter-option" title={"12"}>
                                    <MenuItem eventKey="1" active>12</MenuItem>
                                    <MenuItem eventKey="2">24</MenuItem>
                                    <MenuItem eventKey="3">36</MenuItem>
                                    <MenuItem eventKey="4">All</MenuItem>
                                </DropdownButton>
                            </div>
                            <Pagination
                                prev
                                next
                                ellipsis
                                boundaryLinks
                                items={5}
                                maxButtons={4}
                                activePage={this.state.activePage}
                                onSelect={(e) => this.handleSelect(e)}
                            />
                        </div>

                    </div>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imgList2: state.store.imageBanner2,
        item: state.store.Item
    }
}

export default connect (
    mapStateToProps
)(FilterProduct);