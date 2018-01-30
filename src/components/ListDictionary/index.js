import React, { Component } from 'react';
import ListHeader from './ListHeader';
import MainList from './MainList';
import {connect} from 'react-redux';
// import Toggle from './MainList/Toggle';
import { removeWord, removeTranslation } from 'ducks/dictionary';

class ListDictionary extends Component {
	render() {
		return (
			<div className="container">
				<ListHeader size={this.props.data.map.size} />
				<MainList
					data={this.props.data.map}
					removeTranslation={this.props.removeTranslation}
				></MainList>
			</div>
		);
	}
}

export default connect(state => ({
	data: state.dictionary.data,
}), { removeWord, removeTranslation })(ListDictionary);