import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeWord, editWord } from 'ducks/dictionary';
import ModalContent from 'components/common/ModalContent';
import PropTypes from 'prop-types';

class Buttons extends Component {
  state = {
    showModal: false,
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-danger mr-2"
          onClick={() => { this.props.removeWord(this.props.word); }}
        >Delete</button>

        <button className="btn btn-success" onClick={this.showModal}>Edit</button>

        {this.state.showModal && (<ModalContent
          show={this.state.showModal}
          hideModal={this.hideModal}
          title="Edit"
          editWord={this.props.editWord}
          word={this.props.word}
          translations={this.props.translations}
        />)}
      </div>
    );
  }
}

Buttons.propTypes = {
  removeWord: PropTypes.func.isRequired,
  editWord: PropTypes.func.isRequired,
  translations: PropTypes.instanceOf(Set).isRequired,
  word: PropTypes.string.isRequired,
};

export default connect(null, { removeWord, editWord })(Buttons);
