/**
 * Created by slinker on 3/19/17.
 */
// Constants defined
import * as actionTypes from "../constants/actionTypes";


const initialState = {
    selectedAccountTab: {
        "1": "active",
        "2": ""
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case (actionTypes.CHANGE_TAB_MYACCOUNT) :
            return {
                ...state,
                selectedAccountTab: action.payload
            }
    }
    return state;
}