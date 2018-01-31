import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTranslation, editTranslation } from 'ducks/dictionary';


class Translation extends Component {
	state = {
		isEditable: false,
		text: '',
	}

	componentDidMount() {
		this.setState({
			text: this.props.translation,
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.translation !== this.state.translation) {
			this.setState({
				text: nextProps.translation,
			})
		}
	}

	onChangeEditField(e) {
		this.setState({
			text: e.target.value,
		});
	}

	activateEditMode() {
		this.setState({
			isEditable: true,
		});
	}

	deactivateEditMode() {
		this.setState({
			isEditable: false,
			text: this.props.translation,
		});
	}

	update() {
		this.props.editTranslation(this.props.word, this.props.translation, this.state.text);
		this.deactivateEditMode();
	}

	render() {

		return (
			<div
				key={this.props.key}
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

								<button
									onClick={() => { this.deactivateEditMode() }}
									className="btn btn-light">Cancel</button>
							</div>
						</div>
					) :
					(
						<div>
							<span>{this.props.translation}</span>
							<i
								className="fa fa-pencil"
								onClick={() => { this.activateEditMode() }}
							></i>

							<button onClick={() => { this.props.removeTranslation(this.props.word, this.props.translation) }}>x</button>
						</div>
					)}
			</div>
		);
	}
}

export default connect(null, {removeTranslation, editTranslation})(Translation);