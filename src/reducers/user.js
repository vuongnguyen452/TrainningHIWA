/**
 * Created by slinker on 4/9/17.
 */
// Constants defined
import * as actionTypes from "../constants/actionTypes";

const initialState = {
    userIsLogin: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_IS_LOGIN:
            return {
                userIsLogin: true
            };

        case actionTypes.USER_IS_LOGOUT:
            return {
                userIsLogin: false
            }

    }
    return state;
}
