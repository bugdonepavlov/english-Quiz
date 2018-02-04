import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

/* eslint-disable */
class ModalContent extends Component {
  state = {
    word: '',
    translation: '',
    translations: [],
  }

  componentWillMount() {
    if (this.props.editWord) {
      this.setState({
        word: this.props.word,
        translations: [...this.props.translations],
      });
    }
  }

  getTranslation = (translation) => {
    const el = this.state.translations.find(e => e === translation);

    this.setState({
      translation: el,
      translations: this.state.translations.filter(e => e !== translation),
    });
  }

  pushTranslations = () => {
    const { translations, translation } = this.state;

    this.setState({
      translations: [...translations, translation],
      translation: '',
    });
  }

  addWord = () => {
    this.props.addWord(this.state.word, this.state.translations);
    this.props.hideModal();
  }

  handleInputChange = (e) => {
    const { target } = e;

    this.setState({
      [target.name]: target.value,
    });
  }

  editWord = () => {
    this.props.editWord(this.props.word, this.state.word, this.state.translations);
    this.props.hideModal();
  }

  render() {
    return (
      <Modal close={this.props.hideModal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title} Word</h5>
              <button className="close" onClick={this.props.hideModal}>
                <span>&times;</span>
              </button>
            </div>

            <div className="modal-body">

              <div className="form-group">
                <label>Word</label>
                <input
                  type="text"
                  value={this.state.word}
                  onChange={this.handleInputChange}
                  className="form-control"
                  name="word"
                  placeholder="Enter word"
                />
              </div>

              <div className="form-group">
                <label>Translation</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter translation"
                    value={this.state.translation}
                    onChange={this.handleInputChange}
                    name="translation"
                    disabled={this.state.word.trim().length ? '' : 'disabled'}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={this.pushTranslations}
                      disabled={this.state.word.trim().length ? '' : 'disabled'}
                    >Add Translation</button>
                  </div>
                </div>
              </div>

              {this.state.word && (<div className="lead">
                <strong> {this.state.word} {' - '}</strong>
                {this.state.translations.map(e => (
                  <span key={e}>{e}{' '}</span>
                ))}
              </div>)}
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={this.props.hideModal}>Close</button>

              {this.props.addWord && (<button
                className="btn btn-primary"
                onClick={() => { this.addWord(this.state.word, this.state.translations); }}
                disabled={
                  !!this.state.translations.length ? '' : 'disabled'
                }
              >{this.props.title}</button>)}

              {this.props.editWord && (<button
                className="btn btn-primary"
                onClick={() => {
                  this.editWord(this.props.word, this.state.word, this.state.translations);
                }}
                disabled={
                  !!this.state.translations.length ? '' : 'disabled'
                }
              >{this.props.title}</button>)}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalContent.propTypes = {
  word: PropTypes.string,
  editWord: PropTypes.func,
  translations: PropTypes.instanceOf(Set),
  addWord: PropTypes.func,
  hideModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalContent;
