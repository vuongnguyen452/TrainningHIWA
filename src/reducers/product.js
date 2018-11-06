/**
 * Created by slinker on 3/18/17.
 */
// Constants defined
import * as actionTypes from "../constants/actionTypes";

const initialState = {
    products: [],
    productSupport: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_LIST_PRODUCT:
            return {
                ...state,
                products: action.payload
            };
        case actionTypes.UPDATE_LIST_PRODUCT_SUPPORT:
            return {
                ...state,
                productSupport: action.payload
            };
    }
    return state;
}

