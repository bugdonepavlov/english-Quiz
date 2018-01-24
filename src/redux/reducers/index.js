import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import dictionaryReducer from 'ducks/dictionary';

export default combineReducers({
	router,
	form,
	dictionaryReducer,
});