/**
 * Created by slinker on 3/18/17.
 */
import React, {Component} from "react";
import _ from "lodash";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router";
import CurrencyInput from "react-currency-input";
// Library
import RaisedButton from "material-ui/RaisedButton";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
// Import style
import {NewProductStyle as styles} from "./Styles";
// Import actions
import {ProductActions as actions} from "../../actions";
// Import component
import Progress from "../Progress";

class NewProduct extends Component {

    constructor() {
        super();
        this.state = {
            productType: 'Mainboard',
            productName: 'H110M',
            isProgress: false,
            productPrice: '1000000',
            productImg: 'https://www.technic3d.com/article/pics/1834/ASUS_Maximus_VIII_Hero_Z170_Mainboard_3.jpg',
            productDescription: 'Main boar test',
            moreSpec: {}
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.selectOnchange = this.selectOnchange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentWillMount() {
        this.props.getListProductSupport();
    }

    onChangeHandler(name, value) {
        switch (name) {
            case 'productName':
                this.setState({
                    productName: value
                });
                break;
            case 'productPrice':
                this.setState({
                    productPrice: value
                });
                break;
            case 'productImg':
                this.setState({
                    productImg: value
                });
                break;
            case 'productDescription':
                this.setState({
                    productDescription: value
                });
                break;
        }
    }

    selectOnchange = (event, index, value) => {
        const i = _.findIndex(this.props.productSupport, function (product) {
            return product.name === value;
        });

        const moreSpec = this.props.productSupport[i].spec;

        this.setState({
            productType: value,
            moreSpec
        });
    };

    submitHandler() {
        const self = this;
        self.setState({
            isProgress: true
        });

        self.props.createNewProduct(self.state, function () {
            self.setState({
                isProgress: false
            });
        });
    }

    render() {
        const {
            productSupport
        } = this.props;

        const {
            productName,
            productType,
            isProgress,
            productPrice,
            productImg,
            productDescription,
            moreSpec
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
                        productSupport.map((product, index) => (
                            <MenuItem
                                key={index}
                                value={product.name}
                                primaryText={product.name}
                            />
                        ))
                    }
                </SelectField>

                <TextField
                    floatingLabelText="Tên sản phẩm"
                    fullWidth={true}
                    value={productName}
                    onChange={(e) => {
                        this.onChangeHandler('productName', e.target.value);
                    }}
                />

                <TextField
                    floatingLabelText="Giá"
                    fullWidth={true}
                >
                    <CurrencyInput
                        precision={0}
                        thousandSeparator={'.'}
                        value={productPrice}
                        onChange={(value) => {
                            this.onChangeHandler('productPrice', value);
                        }}/>
                </TextField>

                <TextField
                    floatingLabelText="Ảnh hiển thị sản phẩm"
                    fullWidth={true}
                    value={productImg}
                    onChange={(value) => {
                        this.onChangeHandler('productImg', value);
                    }}
                />

                <TextField
                    floatingLabelText="Mô tả sản phẩm"
                    multiLine={true}
                    fullWidth={true}
                    value={this.state.productDescription}
                    onChange={(e) => {
                        this.onChangeHandler('productDescription', e.target.value);
                    }}
                />

                <div>
                    {
                        Object.keys(moreSpec).map((spec, index) => (
                            <TextField
                                key={index}
                                floatingLabelText={spec}
                                fullWidth={true}
                                value={moreSpec[spec]}
                                onChange={(e) => {
                                    {
                                        moreSpec[spec] = e.target.value;
                                        this.setState({
                                            moreSpec
                                        });
                                    }
                                }}
                            />
                        ))
                    }
                </div>

                <div style={styles.buttons}>
                    <Link to="/admin/product/listProduct">
                        <RaisedButton label="Huỷ"/>
                    </Link>
                    <RaisedButton
                        disabled={!productName || !productType || !productPrice || !productDescription}
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
        productSupport: state.product.productSupport
    };
}

NewProduct.propTypes = {};

NewProduct.defaultProps = {
    productTypes: [
        {
            name: 'Mainboard'
        }, {
            name: 'CPU'
        }, {
            name: 'RAM'
        }
    ]
};

function mapDispatchToProps(dispatch) {
    return {
        createNewProduct: bindActionCreators(actions.createNewProduct, dispatch),
        getListProductSupport: bindActionCreators(actions.getListProductSupport, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(NewProduct);