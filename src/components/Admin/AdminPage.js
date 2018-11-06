/**
 * Created by slinker on 3/18/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";
import LeftDrawer from "./LeftDrawer";
import withWidth, {LARGE, SMALL} from "material-ui/utils/withWidth";
import ThemeDefault from "../../theme-default";
import Data from "./data";
//
import {AdminActions as actions} from "../../actions";

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navDrawerOpen: false
        };
    }

    componentWillMount() {
        this.props.checkAuthen();
        this.props.getTotalUser();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.width !== nextProps.width) {
            this.setState({navDrawerOpen: nextProps.width === LARGE});
        }
    }

    handleChangeRequestNavDrawer() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        });
    }

    render() {
        let {navDrawerOpen} = this.state;
        const paddingLeftDrawerOpen = 236;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
            }
        };

        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                {
                    this.props.isAuthen ?
                        <div>
                            <Header styles={styles.header}
                                    handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

                            <LeftDrawer navDrawerOpen={navDrawerOpen}
                                        menus={Data.menus}
                                        username="User Admin"/>

                            <div style={styles.container}>
                                {this.props.children}
                            </div>
                        </div> : null
                }
            </MuiThemeProvider>
        );
    }
}

AdminPage.propTypes = {
    children: React.PropTypes.element,
    width: React.PropTypes.number
};

function mapStateToProps(state) {
    return {
        isAuthen: state.admin.isAuthen
    };
}

AdminPage.propTypes = {
    isAuthen: React.PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        checkAuthen: bindActionCreators(actions.checkAuthen, dispatch),
        getTotalUser: bindActionCreators(actions.getTotalUser, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(withWidth()(AdminPage));