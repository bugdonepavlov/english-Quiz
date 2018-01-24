import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { removeWord } from 'ducks/dictionary';
// import AuthPage from './routes/AuthPage';
// import AdminPage from './routes/AdminPage';
// import ProtectedRoute from './common/ProtectedRoute';
// import Header from './Header';

class Root extends Component {

	render() {
		return (
			<div className="wrapper">
				<h1>App</h1>
				{console.log('bla bla', this.props)}
				<button onClick={() => { this.props.removeWord('world')}}>remove user</button>
			</div>
		)
	}
}

export default connect(state => ({
	dictionary: state.dictionary.data,
}), { removeWord })(Root);