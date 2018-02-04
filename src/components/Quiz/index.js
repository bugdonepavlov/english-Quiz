import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { startQuiz } from 'ducks/quiz';
import List from './List';

class Quiz extends Component {
  state = {
    question: [],
    current: 0,
    maxQuestions: null,
    result: 0,
  };

  componentWillMount() {
    this.setState({
      question: this.props.cards[this.state.current],
      maxQuestions: this.props.cards.length, // eslint-disable-line react/forbid-prop-types
    });
  }

  nextQuestion = (e) => {
    const
      {
        current, question, result,
      } = this.state;
    const answer = e.value;
    const isTranslation =
      question.candidates.find(el => el.word === answer).isTranslation ? result + 1 : result;

    this.setState({
      current: current + 1,
      question: this.props.cards[this.state.current + 1],
      result: isTranslation,
    });
  }

  start = () => {
    this.props.startQuiz();

    this.setState({
      current: 0,
      question: this.props.cards[0],
      result: 0,
    });
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          {this.state.current !== this.state.maxQuestions ?
            (<ReactCSSTransitionGroup
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
            >
              <List
                question={this.state.question}
                nextQuestion={this.nextQuestion}
                current={this.state.current}
                maxQuestions={this.state.maxQuestions}
              />
            </ReactCSSTransitionGroup>)

            : (
              <div className="col-6 offset-3">
                <h1 className="display-4">Поздравляю!</h1>
                <p className="lead">Вы ответили на все вопросы, ваш результат - <strong>{this.state.result}</strong></p>
                <hr className="my-4" />
                <p className="lead">
                  <button className="btn btn-primary btn-lg" onClick={() => { this.start(); }}>Начать заново?</button>
                </p>
              </div>
            )

        }
        </div>
      </div>
    );
  }
}

Quiz.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    candidates: PropTypes.array.isRequired,
  })).isRequired,
  startQuiz: PropTypes.func.isRequired,
};

export default connect(state => ({
  cards: state.quiz.cards,
}), { startQuiz })(Quiz);
