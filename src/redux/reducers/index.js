import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import dictionary from 'ducks/dictionary';
import quiz from 'ducks/quiz'

export default combineReducers({
	router,
	form,
	dictionary,
	quiz,
});