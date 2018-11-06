/**
 * Created by slinker on 3/21/17.
 */
import React, {Component} from "react";
import _ from "lodash";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router";
import CurrencyInput from "react-currency-input";
// Library
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
// Import style
import {NewProductStyle as styles} from "./Styles";
// Import actions
import {ProductActions as actions} from "../../actions";
// Import component
import Progress from "../Progress";

class UpdateProduct extends Component {

    constructor() {
        super();

        this.state = {
            isProgress: false,
            product: {},
            oldProduct: {},
            isChange: false,
            productPrice: '',
            description: ''
        }
    }

    componentWillMount() {
        const products = this.props.products;
        const productName = this.props.location.state.productName;

        const product = _.filter(products, function (obj) {
            return obj.productName === productName;
        });

        this.setState({
            product: product[0],
            oldProduct: product[0]
        })
    }

    onChangeHandler(name, value) {
        let product = this.state.product;
        switch (name) {
            case 'productPrice':
                product.productPrice = value;
                this.setState({
                    product: product
                });
                break;
            case 'description':
                product.productDescription = value;
                this.setState({
                    product: product
                });
                break;
        }
    }


    render() {
        const {
            isProgress,
            product,
            oldProduct
        } = this.state;
        return (
            <form>
                <Progress isShow={isProgress}/>

                <TextField
                    disabled={true}
                    floatingLabelText="Loại sản phẩm"
                    fullWidth={true}
                    value={product.productType}
                />

                <TextField
                    disabled={true}
                    floatingLabelText="Tên sản phẩm"
                    fullWidth={true}
                    value={product.productName}
                />

                <TextField
                    floatingLabelText="Giá"
                    fullWidth={true}
                >
                    <CurrencyInput
                        precision={0}
                        thousandSeparator={'.'}
                        value={product.productPrice}
                        onChange={(value) => {
                            this.onChangeHandler('productPrice', value);
                        }}/>
                </TextField>

                <TextField
                    floatingLabelText="Mô tả sản phẩm"
                    fullWidth={true}
                    value={product.productDescription}
                    onChange={(e) => {
                        this.onChangeHandler('description', e.target.value);
                    }}
                />

                <div style={styles.buttons}>
                    <Link to="/admin/product/listProduct">
                        <RaisedButton label="Huỷ"/>
                    </Link>
                    <RaisedButton
                        label="Update"
                        style={styles.saveButton}
                        onClick={this.submitHandler}
                        primary={true}/>
                </div>
            </form>
        )
    }
}

UpdateProduct.defaultProps = {
    product: [],
    productName: ''
};


function mapStateToProps(state) {
    return {
        products: state.product.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ProductActions: bindActionCreators(actions.createNewProduct, dispatch)
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(UpdateProduct);
