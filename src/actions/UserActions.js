/**
 * Created by slinker on 4/9/17.
 */
//
import _ from "lodash";
import jwt from "jwt-decode";
//
import SystemActions from "./SystemAction";
import * as actionTypes from "../constants/actionTypes";

class UserActions extends SystemActions {

    userCheckAuthen = () => (dispatch) => {

        const token = JSON.parse(localStorage.getItem('token') || '{}');
        // Decode token
        if (_.isObject(token)) {
            dispatch({
                type: actionTypes.USER_IS_LOGOUT
            });
        } else {
            const user = jwt(token);
            dispatch({
                type: actionTypes.USER_IS_LOGIN,
                payload: user
            });
        }
    };

    login = (params, callback) => (dispatch) => {
        const data = {
            username: params.username,
            password: params.password,
            isAdmin: false
        };

        this.CallAPI({
            url: '/user/login',
            method: 'POST',
            data
        }, function (err, response) {
            if (err) {
                return callback('Can not connect to server');
            }
            if (!response.success) {
                return callback(response.result.message);
            } else {
                // Save token to local storage
                localStorage.setItem('token', JSON.stringify(response.result.token));
                // Send action user login success
                dispatch({
                    type: actionTypes.USER_IS_LOGIN,
                    payload: response.result
                });
                callback(null);
            }
        })
    };

    register = (params, callback) => (dispatch) => {
        const data = {
            username: params.username,
            password: params.password
        };

        this.CallAPI({
            url: '/user/register',
            method: 'POST',
            data
        }, function (err, response) {
            if (err) {
                return callback('Can not connect to server');
            }
            if (!response.success) {
                return callback(response.result.message);
            } else {
                callback(null);
            }
        })
    };

    userLogout = () => (dispatch) => {
        this.removeLocalStorage('token');
        dispatch({
            type: actionTypes.USER_IS_LOGOUT
        });
    };
}

export default new UserActions();