/**
 * Created by slinker on 3/18/17.
 */
import _ from 'lodash';
//
import SystemAction from "./SystemAction.js";
import * as apiUrl from "../constants/WebAPIUrl";
import {hashHistory} from "react-router";
//
import * as actionTypes from "../constants/actionTypes";


class ProductActions extends SystemAction {
    constructor() {
        super();
    }

    /*
     * Create new product
     * */

    createNewProduct = (params, callback) => (dispatch) => {
        const self = this;

        const data = {
            productType: params.productType,
            productName: params.productName,
            productPrice: params.productPrice,
            productImg: params.productImg,
            productDescription: params.productDescription,
            moreSpec : params.moreSpec
        };

        self.CallAPI({
            url: apiUrl.ADD_NEW_PRODUCT,
            method: 'POST',
            data
        }, function (err, response) {
            if (err) {
                return callback('Can not connect to server');
            }
            if (!response.success) {
                return callback(response.result.message);
            } else {
                // redirect to list product page
                hashHistory.replace('/admin/product/listProduct');
            }
        });
    };

    getAllProduct = () => (dispatch) => {

        const self = this;
        const data = {};

        self.CallAPI({
            url: apiUrl.GET_ALL_PRODUCT,
            method: 'GET',
            data
        }, function (err, response) {
            if (!err && response.success) {
                dispatch({
                    type: actionTypes.UPDATE_LIST_PRODUCT,
                    payload: response.result

                })
            }
        });
    };

    getProductByType = (params, callback) => (dispatch) => {

        const self = this;
        const data = {};
        const url = apiUrl.GET_PRODUCT_BY_TYPE + '?productType=' + params.productType;

        self.CallAPI({
            url: url,
            method: 'GET',
            data
        }, function (err, response) {
            if (!err && response.success) {
                dispatch({
                    type: actionTypes.UPDATE_LIST_PRODUCT_BY_TYPE,
                    payload: response.result

                })
            }
        });
    };

    deleteProduct = (params, callback) => (dispatch) => {
        const self = this;

        const data = _.pick(params, ['productName', 'productType']);

        self.CallAPI({
            url: apiUrl.DELETE_PRODUCT,
            method: 'POST',
            data
        }, function (err, response) {
            callback();
        });
    };

    /**
     * Get list product support
     */

    getListProductSupport = () => (dispatch) => {

        const self = this;
        const data = {};

        self.CallAPI({
            url: apiUrl.GET_LIST_PRODUCT_SUPPORT,
            method: 'GET',
            data
        }, function (err, response) {
            if (!err && response.success) {
                dispatch({
                    type: actionTypes.UPDATE_LIST_PRODUCT_SUPPORT,
                    payload: response.result

                })
            }
        });

    }
}


export default new ProductActions();