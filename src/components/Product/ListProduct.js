/**
 * Created by slinker on 3/19/17.
 */
import React, {Component} from "react";
import {hashHistory, Link} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//
import {grey400, pink500} from "material-ui/styles/colors";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import ContentAdd from "material-ui/svg-icons/content/create";
import {
    Avatar,
    Dialog,
    Divider,
    FlatButton,
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
// Import style
import {ListProductStyle as styles} from "./Styles";
// Import actions
import {ProductActions as actions} from "../../actions";


class ListProduct extends Component {

    constructor() {
        super();
        this.state = {
            isShow: false,
            currentProduct: {}
        };
        this.redirectHandler = this.redirectHandler.bind(this);
        this.handlerDialogClose = this.handlerDialogClose.bind(this);
        this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentWillMount() {
        this.props.getAllProduct();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.products !== nextProps.products || this.state !== nextState;
    }

    redirectHandler(productName) {
        hashHistory.push({
            pathname: '/admin/product/updateProduct',
            state: {
                productName
            }
        })
    }

    handlerOpenDialog(item) {
        this.setState({
            isShow: true,
            currentProduct: item
        })
    }

    handlerDialogClose() {
        this.setState({
            isShow: false
        })
    }

    deleteProduct() {
        const self = this;
        self.props.deleteProduct(this.state.currentProduct, function (err, result) {

        });
    }

    render() {

        const {
            products
        } = this.props;
        return(
            <div>
                <Paper>
                    <List>
                        <Subheader style={styles.subheader}>Danh sách sản phẩm</Subheader>
                        {products.map((item, index) =>
                            <div key={index}>
                                <ListItem
                                    leftAvatar={<Avatar icon={<Wallpaper />} />}
                                    primaryText={item.productName}
                                    secondaryText={item.productDescription}
                                    rightIconButton={
                                        <IconMenu iconButtonElement={iconButtonElement}>
                                            <MenuItem
                                                primaryText="Cập nhật"
                                                onClick={() => {
                                                    this.redirectHandler(item.productName)
                                                }}
                                            />
                                            <MenuItem
                                                primaryText="Xoá sản phẩm"
                                                onClick={() => {
                                                    this.handlerOpenDialog(item);
                                                }}
                                            />
                                        </IconMenu>
                                    }
                                />
                                <Divider inset={true} />
                            </div>
                        )}
                    </List>
                </Paper>
                <Link to="/admin/product/newProduct">
                    <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Link>

                <Dialog
                    actions={[
                        <FlatButton
                            label="Huỷ"
                            primary={true}
                            onTouchTap={this.handlerDialogClose}
                        />,
                        <FlatButton
                            label="Thực thi"
                            primary={true}
                            onTouchTap={this.deleteProduct}
                        />,
                    ]}
                    modal={false}
                    open={this.state.isShow}
                    onRequestClose={this.handlerDialogClose}
                >
                    Bạn chắc chắn muốn xoá sản phẩm?
                </Dialog>
            </div>
        )
    }
}


ListProduct.defaultProps = {
    products: []
};

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

ListProduct.propTypes = {
    products: React.PropTypes.array
};

function mapStateToProps(state) {
    return {
        products: state.product.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProduct: bindActionCreators(actions.getAllProduct, dispatch),
        deleteProduct: bindActionCreators(actions.deleteProduct, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(ListProduct);