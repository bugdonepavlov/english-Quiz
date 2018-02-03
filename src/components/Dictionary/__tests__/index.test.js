import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import history from 'history';
import thunk from 'redux-thunk';
import ListHeader from '../ListHeader';

// const wrapper = shallow(<ListHeader />);

let
	instance,
	store;

describe('Main menu header', () => {
	beforeEach(() => {
		store = createStore(combineReducers({
			dictionary,
		}), applyMiddleware(thunk));
		/* eslint-disable sort-vars */
		instance = () => shallow(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Root />
				</ConnectedRouter>
			</Provider>);
		it('header', () => {
			console.log('11', instance.debug());
		});
	});
});