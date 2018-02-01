import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';
import history from '../../history';

const enhancer = applyMiddleware(routerMiddleware(history), thunk, logger);
const store = createStore(reducers, enhancer);

/* eslint-disable */
window.store = store;
/* eslint-enable */

export default store;
