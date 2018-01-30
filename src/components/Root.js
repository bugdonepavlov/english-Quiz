import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ListDictionary  from './ListDictionary';
import Header from './Header';

class Root extends Component {
	render() {
		return (
			<div className="wrapper">
				<Header/>
				<Route path="/" component={ListDictionary}/>
			</div>
		)
	}
}

export default Root;