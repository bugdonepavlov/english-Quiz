import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeWord, editWord } from 'ducks/dictionary';
import Modal from 'components/common/Modal';
import ModalContent from 'components/common/ModalContent';

class Buttons extends Component {

	state = {
		showModal: false,
	}

	handleShow = () => {
		this.setState({ showModal: true });
	}

	handleHide = () => {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<div>
				<button
					className="btn btn-danger mr-2"
					onClick={() => { this.props.removeWord(this.props.word) }}
				>Delete</button>

				<button className="btn btn-success" onClick={this.handleShow}>Edit</button>

				{this.state.showModal && (<Modal>
					<ModalContent
						show={this.state.showModal}
						handleHide={this.handleHide}
						title='Edit'
						editWord={this.props.editWord}
						word={this.props.word}
						translation={this.props.translation}
					/>
				</Modal>)}
			</div>
		);
	}
}

export default connect(null, {removeWord, editWord})(Buttons);