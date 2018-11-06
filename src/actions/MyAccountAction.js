/**
 * Created by Lotus on 4/11/17.
 */

import SystemAction from './SystemAction';

import * as actionTypes from "../constants/actionTypes";


class MyAccountAction extends SystemAction {

    changeTab = (objIndex) => (dispatch) => {
        dispatch({
            type: actionTypes.CHANGE_TAB_MYACCOUNT,
            payload: objIndex
        })
    }
}

export default new MyAccountAction();