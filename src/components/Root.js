import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ListDictionary  from './ListDictionary';
import Quiz from './Quiz';
import Header from './Header';

class Root extends Component {
	render() {
		return (
			<div className="wrapper">
				<Header/>
				<Route exact path="/" component={ListDictionary}/>
				<Route path="/quiz" component={Quiz} />
			</div>
		)
	}
}

export default Root;