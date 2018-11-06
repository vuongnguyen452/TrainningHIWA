/**
 * Created by slinker on 3/19/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {bindActionCreators} from "redux";
//
import {ListProductStyle as styles} from "../Styles";
import {grey400, pink500} from "material-ui/styles/colors";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import ContentAdd from "material-ui/svg-icons/content/create";
import {
    Avatar,
    Divider,
    FloatingActionButton,
    IconButton,
    IconMenu,
    List,
    ListItem,
    MenuItem,
    Paper,
    Subheader
} from "material-ui";
import Wallpaper from "material-ui/svg-icons/device/wallpaper";

import {CommodityActions} from "../../actions";

class ListCommodity extends Component {

    componentWillMount() {
        this.props.getListCommodity();
    }

    render() {
        const {
            commodities
        }  = this.props;

        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={grey400}/>
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem>View</MenuItem>
            </IconMenu>
        );

        return (
            <div>
                <div>
                    <Paper>
                        <List>
                            <Subheader style={styles.subheader}>Sản phẩm trong kho</Subheader>
                            {commodities.map(item =>
                                <div key={item.id}>
                                    <ListItem
                                        leftAvatar={<Avatar icon={<Wallpaper />}/>}
                                        primaryText={item.productName}
                                        secondaryText={item.productName}
                                        rightIconButton={rightIconMenu}
                                    />
                                    <Divider inset={true}/>
                                </div>
                            )}
                        </List>
                    </Paper>
                    <Link to="/admin/commodity/newCommodity">
                        <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </Link>
                </div>
            </div>
        )
    }
}

ListCommodity.defaultProps = {
    commodities: []
};

function mapStateToProps(state) {
    return {
        commodities: state.store.commodities
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getListCommodity: bindActionCreators(CommodityActions.getListCommodity, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(ListCommodity);