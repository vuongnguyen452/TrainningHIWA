/**
 * Created by slinker on 3/20/17.
 */
import SystemAction from "./SystemAction";
import * as apiUrl from "../constants/WebAPIUrl";
import {hashHistory} from "react-router";
//
import * as actionTypes from "../constants/actionTypes";


class CommodityActions extends SystemAction {
    constructor() {
        super();
    }

    // TODO: coding
    addProductToStore = (params, callback) => (dispatch) => {

        const self = this;
        const data = {
            productName: params.productName,
            productCount: params.productCount
        };

        self.CallAPI({
            url: apiUrl.ADD_RPODUCT_TO_STORE,
            method: 'POST',
            data
        }, function (err, response) {
            if (err) {
                return callback('Can not connect to server');
            }
            if (!response.success) {
                return callback(response.result.message);
            } else {
                callback();
                // redirect to list  page
                hashHistory.replace('/admin/commodity/listCommodity');
            }
        });
    };

    // TODO: coding
    getListCommodity = () => (dispatch) => {
        const self = this;
        const data = {};

        self.CallAPI({
            url: apiUrl.GET_LIST_PRODUCT_IN_STORE,
            method: 'GET',
            data
        }, function (err, response) {
            if (!err && response.success) {
                dispatch({
                    type: actionTypes.UPDATE_LIST_PRODUCT_IN_STORE,
                    payload: response.result

                })
            }
        });
    }


}

export default new CommodityActions();