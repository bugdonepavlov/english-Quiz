import React from 'react';
import {Provider} from 'react-redux';
import Root from './components/Root';
import store from './redux/store';
import {ConnectedRouter} from 'react-router-redux';
import history from './history';
import './config';

const App = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Root />
			</ConnectedRouter>
		</Provider>
	)
}

export default App;
