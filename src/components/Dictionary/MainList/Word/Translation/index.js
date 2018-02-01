import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeTranslation, editTranslation } from 'ducks/dictionary';

class Translation extends Component {
  state = {
    isEditable: false,
    text: '',
  }

  componentWillMount() {
    this.setState({
      text: this.props.translation,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.translation !== this.state.translation) {
      this.setState({
        text: nextProps.translation,
      });
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
      <div>
        {this.state.isEditable ?
          (
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={this.state.text}
                onChange={(e) => { this.onChangeEditField(e); }}
              />

              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  onClick={() => { this.update(); }}
                >Update</button>

                <button
                  onClick={() => { this.deactivateEditMode(); }}
                  className="btn btn-light"
                >Cancel</button>
              </div>
            </div>
          ) :
          (
            <div className="translation">
              <span className="mr-2">{this.props.translation}</span>
              <button
                className="button button_edit mr-1"
                onClick={() => { this.activateEditMode(); }}
              ><i className="fas fa-edit" /></button>

              <button
                className="button button_remove"
                onClick={() => {
                  this.props.removeTranslation(this.props.word, this.props.translation);
                }}
              ><i className="fas fa-times" /></button>
            </div>
          )}
      </div>
    );
  }
}

Translation.propTypes = {
  translation: PropTypes.string.isRequired,
  removeTranslation: PropTypes.func.isRequired,
  editTranslation: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
};

export default connect(null, { removeTranslation, editTranslation })(Translation);
