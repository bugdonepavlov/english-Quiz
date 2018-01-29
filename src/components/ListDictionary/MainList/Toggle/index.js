import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeWord, editWord } from 'ducks/dictionary';
import Modal from 'components/common/Modal';
import ModalContent from 'components/common/ModalContent';

class Toggle extends Component {

	state = {
		isOpened: false,
		showModal: false,
	}

	closeDropdown = () => {
		this.setState({ isOpened: false });
	}

	toggleDropDown = () => {
		this.setState({ isOpened: !this.state.isOpened })
	}

	handleShow = () => {
		this.setState({ showModal: true });
	}

	handleHide = () => {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<div
				className={`dropdown ${this.state.isOpened ? 'show' : ''}`}
				// onBlur={this.closeDropdown}
			>
				<button
					className="btn btn-secondary dropdown-toggle"
					onClick={this.toggleDropDown}
				>Actions button</button>

				<div
					className={`dropdown-menu ${this.state.isOpened ? 'show' : ''}`}
				>
					<div
						className="dropdown-item"
						onClick={() => { this.props.removeWord(this.props.word) }}
					>Delete Word</div>
					<div
						className="dropdown-item"
						// onClick={() => { this.props.editWord(this.props.dict, this.props.translation) }}
						onClick={this.handleShow}
					>Edit</div>
				</div>

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

export default connect(null, {removeWord, editWord})(Toggle);