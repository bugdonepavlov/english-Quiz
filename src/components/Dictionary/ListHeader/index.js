import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addWord, filterWord } from 'ducks/dictionary';
import ModalContent from 'components/common/ModalContent';

class ListHeader extends Component {
  state = {
    showModal: false,
    search: '',
  };

  showModal = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  handleSearchChange = (e) => {
    const { target } = e;

    this.props.filterWord(target.value);
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light mb-3">
        <div className="navbar-brand">All Dictionary({this.props.size})</div>

        <ul className="nav nav-pills">
          <li className="nav-item mr-sm-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={this.props.search}
              name="search"
              onChange={this.handleSearchChange}
            />
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary"
              onClick={this.showModal}
            >+ Add Word</button>
          </li>
        </ul>

        {this.state.showModal && (<ModalContent
          show={this.state.showModal}
          hideModal={this.hideModal}
          title="Add"
          addWord={this.props.addWord}
        />)}
      </nav>
    );
  }
}

ListHeader.propTypes = {
  size: PropTypes.string.isRequired,
  addWord: PropTypes.func.isRequired,
};

export default connect(state => ({
  search: state.dictionary.search,
}), { addWord, filterWord })(ListHeader);
