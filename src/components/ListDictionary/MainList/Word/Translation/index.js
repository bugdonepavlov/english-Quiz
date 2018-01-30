import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTranslation } from 'ducks/dictionary';


class Translation extends Component {
	state = {
		isEditable: false,
		text: '',
	}

	componentDidMount() {
		this.setState({
			text: this.props.translation,
		})
	}

	onChangeEditField(e) {
		this.setState({
			text: e.target.value,
		})
	}

	handleEditField () {
		this.setState({
			isEditable: true,
		})
	}

	handelCloseField () {
		this.setState({
			isEditable: false,
			text: this.props.translation,
		})
	}

	update() {
		this.props.editTranslation(this.props.word, this.props.translation, this.state.text);
		
		this.handelCloseField()
	}

	render() {

		const
			defaultItem = (
				<div>
					<span>{this.props.translation}</span>
					<i className="fa fa-pencil" onClick={() => { this.handleEditField() }}></i>
				</div>
			),
			inlineEditField = (
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						value={this.state.text}
						onChange={(e) => { this.onChangeEditField(e) }}
					/>
					<div className="input-group-append">
						<button
							className="btn btn-primary"
							onClick={() => {this.update()}}
						>Update</button>

						<button onClick={() => this.handelCloseField()} className="btn btn-light">Cancel</button>
					</div>
				</div>);

		return (
			<div
				key={this.props.translation}
			// onClick={() => { this.props.removeTranslation(this.props.word, this.props.translation) }}
			>
				{this.state.isEditable ? inlineEditField : defaultItem}
			</div>
		);
	}
}

export default connect(null, {editTranslation})(Translation);