/**
 * Created by slinker on 3/19/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import _ from "lodash";
import {bindActionCreators} from "redux";
import {Link} from "react-router";
//
import RaisedButton from "material-ui/RaisedButton";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
//
import {NewCommodityStyle as styles} from "./Styles";
//
import {CommodityActions, ProductActions as actions} from "../../actions";
//
import Progress from "../Progress";

class NewCommodity extends Component {
    constructor() {
        super();
        this.state = {
            isProgress: false,
            product: {},
            productCount: '',
            productByType: []
        };
        this.selectOnchange = this.selectOnchange.bind(this);
        this.selectNameProductOnChange = this.selectNameProductOnChange.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentWillMount() {
        if (this.props.products) {
            this.props.getAllProduct();
        }
    }

    selectOnchange = (event, index, value) => {
        const productByType = _.filter(this.props.products, function (product) {
            return product.productType === value;
        });
        this.setState({
            productType: value,
            productByType
        });
    };

    onChangeHandler(type, value) {
        switch (type) {
            case 'productCount':
                this.setState({
                    productCount: value
                });
                break;
        }
    }


    selectNameProductOnChange = (event, index, value) => {

        const self = this;
        const i = _.findIndex(self.state.productByType, function (product) {
            return product.productName === value;
        });

        this.setState({
            product: self.state.productByType[i]
        })
    };

    submitHandler() {
        const self = this;
        const time = new Date().getTime();
        const product = self.state.product;
        self.props.addProductToStore({
            productName: product.productName,
            productCount: self.state.productCount
        }, function (err, callback) {
        });
    }

    render() {
        const {
            productTypes
        } = this.props;

        const {
            productType,
            isProgress,
            product,
            productByType,
            productCount
        } = this.state;
        return (
            <form>
                <Progress isShow={isProgress}/>

                <SelectField
                    floatingLabelText="Loại sản phẩm"
                    fullWidth={true}
                    value={productType}
                    onChange={this.selectOnchange}
                >
                    {
                        productTypes.map((product, index) => (
                            <MenuItem
                                key={index}
                                value={product.name}
                                primaryText={product.name}
                            />
                        ))
                    }
                </SelectField>

                <SelectField
                    disabled={!productType}
                    floatingLabelText="Tên sản phẩm"
                    fullWidth={true}
                    value={product.productName}
                    onChange={this.selectNameProductOnChange}
                >
                    {
                        productByType.map((obj, index) => (
                            <MenuItem
                                key={index}
                                value={obj.productName}
                                primaryText={obj.productName}
                            />
                        ))
                    }
                </SelectField>

                <TextField
                    disabled={true}
                    floatingLabelText="Giá"
                    fullWidth={true}
                    value={product.productPrice}
                />

                <TextField
                    floatingLabelText="Mô tả sản phẩm"
                    fullWidth={true}
                    value={product.productDescription}
                />


                <TextField
                    disabled={!productType || !product.productName}
                    type='number'
                    floatingLabelText="Số lượng nhập"
                    fullWidth={true}
                    value={productCount}
                    onChange={(e) => {
                        this.onChangeHandler('productCount', e.target.value);
                    }}
                />

                <div style={styles.buttons}>
                    <Link to="/admin/product/listProduct">
                        <RaisedButton label="Huỷ"/>
                    </Link>
                    <RaisedButton
                        disabled={!productType || !product.productName || !productCount}
                        label="Tạo"
                        style={styles.saveButton}
                        onClick={this.submitHandler}
                        primary={true}/>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthen: state.admin.isAuthen,
        productTypes: state.product.productTypes,
        products: state.product.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProduct: bindActionCreators(actions.getAllProduct, dispatch),
        addProductToStore: bindActionCreators(CommodityActions.addProductToStore, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(NewCommodity);