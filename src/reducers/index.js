/**
 * Created by slinker on 12/13/16.
 */
// Core
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
// Import reducer
import init from "./init.js";
import admin from "./admin";
import product from "./product";
import store from "./store";
import info from "./info";
// USER
import user from "./user";
export default combineReducers({
    init,
    admin,
    product,
    store,
    info,
    user,
    routing: routerReducer
});
