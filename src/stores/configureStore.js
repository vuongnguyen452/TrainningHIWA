/**
 * Created by slinker on 12/28/16.
 */
// Core
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
// Reducer
import rootReducer from '../reducers/index';

const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(thunk, router)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
