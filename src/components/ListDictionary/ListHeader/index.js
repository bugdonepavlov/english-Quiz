import React, { Component } from 'react';
import Modal from 'components/common/Modal';
import ModalContent from 'components/common/ModalContent';
import { connect } from 'react-redux';
import { addWord, } from 'ducks/dictionary';

class ListHeader extends Component {
	state = {
		showModal: false,
	}

	handleShow = () => {
		this.setState({showModal: true});
	}

	handleHide = () => {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="navbar-brand">All Dictionary({this.props.size})</div>

				<ul className="nav nav-pills">
					<li className="nav-item mr-sm-2">
						<input type="text" className="form-control" placeholder="Search"/>
					</li>
					<li className="nav-item">
						<button type="button" className="btn btn-primary"
							onClick={ this.handleShow }
						>+ Add Word</button>
					</li>
				</ul>

				{this.state.showModal && (<Modal>
					<ModalContent
						show={this.state.showModal}
						handleHide={this.handleHide}
						title='Add'
						addWord={this.props.addWord}
					/>
				</Modal>)}
			</nav>
		);
	}
}

export default connect(null, { addWord })(ListHeader);