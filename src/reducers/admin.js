/**
 * Created by slinker on 3/18/17.
 */
// Constants defined
import * as actionTypes from "../constants/actionTypes";

const initialState = {
    isAuthen: true,
    user: {},
    totalProduct: 0,
    totalProductInStore: 0,
    totalSold: 0,
    totalUser: 0
};

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.IS_AUTHEN:
            return {
                ...state,
                isAuthen: true,
                user: action.payload
            };

        case actionTypes.IS_NOT_AUTHEN:
            return {
                ...state,
                isAuthen: false,
                user: {}
            };

        case actionTypes.UPDATE_TOTAL_USER:
            return {
                ...state,
                totalUser: action.payload
            };
    }
    return state;
}

