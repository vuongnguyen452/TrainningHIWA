/**
 * Created by slinker on 2/14/17.
 */
import axios from "axios";
import _ from "lodash";
import * as querystring from "querystring";
import * as Const from "../constants/init";
//
import * as actionTypes from '../constants/actionTypes';
//
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = Const.ServerUrl;
// axios.defaults.timeout = 5000;


class SystemAction {
    constructor() {

    }

    getToken() {
        return localStorage.getItem('token') || '{}';
    }

    /**
     * Call API function
     * @param params
     * @param callback
     * @constructor
     */
    CallAPI(params, callback) {
        const url = params.url,
            data = querystring.stringify(params.data),
            method = params.method ? params.method : 'POST';
        const token = this.getToken();

        // Set request headers with access token
        if (!_.isObject(token)) {
            axios.defaults.headers.common['Authorization'] = 'x-access-token ' + JSON.parse(token);
        }

        axios({
            method,
            url,
            data
        }).then((response) => {
            return callback(null, response.data);
        }).catch((error) => {
            return callback(error);
        });
    }

    removeLocalStorage(key) {
        localStorage.removeItem(key);
    }
}

export default SystemAction;