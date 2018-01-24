import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import dictionary from 'ducks/dictionary';

export default combineReducers({
	router,
	form,
	dictionary,
});