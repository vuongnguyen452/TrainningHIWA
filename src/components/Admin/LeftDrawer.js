/**
 * Created by slinker on 3/18/17.
 */
import React, {Component, PropTypes} from "react";
import {hashHistory, Link} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//
import Drawer from "material-ui/Drawer";
import GridOn from "material-ui/svg-icons/image/grid-on";
import MenuItem from "material-ui/MenuItem";
import Avatar from "material-ui/Avatar";
//
import {AdminActions as actions} from "../../actions";
import {LeftDrawerStyle as styles} from "./Styles";

class LeftDrawer extends Component {

    render() {
        const {
            navDrawerOpen,
            user,
            menus
        } = this.props;

        return (
            <Drawer
                docked={true}
                open={navDrawerOpen}>
                <div style={styles.logo}>
                    Admin Page
                </div>
                <div style={styles.avatar.div}>
                    <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                            size={50}
                            style={styles.avatar.icon}/>
                    <span style={styles.avatar.span}>{user.username}</span>
                </div>
                <div>
                    {menus.map((menu, index) =>
                        <MenuItem
                            key={index}
                            style={styles.menuItem}
                            primaryText={menu.text}
                            leftIcon={menu.icon}
                            containerElement={
                                <Link to={menu.link}/>
                            }
                        />
                    )}
                    <MenuItem
                        style={styles.menuItem}
                        primaryText={'Logout'}
                        leftIcon={<GridOn/>}
                        onClick={this.props.logout}
                    />
                </div>
            </Drawer>
        );
    }

}

LeftDrawer.propTypes = {
    navDrawerOpen: PropTypes.bool,
    menus: PropTypes.array,
    username: PropTypes.string,
    isAuthen: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthen: state.admin.isAuthen,
        user: state.admin.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout: bindActionCreators(actions.logout, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(LeftDrawer);
