import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import history from '../../history';

const enhancer = applyMiddleware( routerMiddleware(history), thunk, logger);
const store = createStore(reducers, enhancer);

// dev store
window.store = store;

export default store;
