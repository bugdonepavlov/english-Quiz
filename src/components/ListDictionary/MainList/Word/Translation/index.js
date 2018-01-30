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

	activateEditMode () {
		this.setState({
			isEditable: true,
		})
	}

	disabledEditMode () {
		this.setState({
			isEditable: false,
			text: this.props.translation,
		})
	}

	update() {
		this.props.editTranslation(this.props.word, this.props.translation, this.state.text);
		this.disabledEditMode();
	}

	render() {

		return (
			<div
				key={this.props.key}
			// onClick={() => { this.props.removeTranslation(this.props.word, this.props.translation) }}
			>
				{this.state.isEditable ? 
					(
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
									onClick={() => { this.update() }}
								>Update</button>

								<button onClick={() => this.disabledEditMode()} className="btn btn-light">Cancel</button>
							</div>
						</div>
					) :
					(
						<div>
							<span>{this.props.translation}</span>
							<i className="fa fa-pencil" onClick={() => { this.activateEditMode() }}></i>
						</div>
					)}
			</div>
		);
	}
}

export default connect(null, {editTranslation})(Translation);