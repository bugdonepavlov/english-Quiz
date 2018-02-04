import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  state = {
    id: '',
  };

  handleInput(event) {
    const { target } = event;

    setTimeout(() => { this.props.nextQuestion(target); }, 400);
    this.setState({ id: target.id });
  }

  render() {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <div className="header-quiz">
            <div className="header-quiz__word">Переведите - <strong>[{this.props.question.word}]</strong></div>
            <div className="header-quiz__question">
              Вопрос {this.props.current + 1} из {this.props.maxQuestions}
            </div>
          </div>
          <ul className="list-quiz list-group mb-2">
            {this.props.question.candidates && this.props.question.candidates.map(e =>
              (<li
                className={`list-group-item list-group-item-action ${this.state.id === e.id ? 'active' : ''}`}
                key={e.word}
              >
                <input
                  type="radio"
                  name="quiz"
                  id={e.id}
                  value={e.word}
                  checked={this.state.id === e.id}
                  onChange={(event) => { this.handleInput(event); }}
                />
                <label className="form-check-label" htmlFor={e.id}>{e.word}</label>
              </li>))}
          </ul>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
  question: PropTypes.shape({
    candidates: PropTypes.array.isRequired,
    word: PropTypes.string.isRequired,
  }).isRequired,
  current: PropTypes.number.isRequired,
  maxQuestions: PropTypes.number.isRequired,
};

export default List;
