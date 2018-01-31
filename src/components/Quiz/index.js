import React, { Component } from 'react';
import {connect} from 'react-redux';

class Quiz extends Component {
	state = {
		question: [],
		current: 0,
		maxQuestions: null,
		answer: '',
		result: 0,
	}

	componentDidMount() {
		this.setState({
			question: this.props.cards[this.state.current],
			maxQuestions: this.props.cards.length,
		})
	}

	nextQuestion(e) {
		const
			{current, question, result, answer} = this.state,
			isTranslation = question.candidates.find(e => e.word === answer).isTranslation ? result + 1 : result;

		if (current < this.state.maxQuestions - 1) {
			this.setState({
				current: current + 1,
				question: this.props.cards[this.state.current + 1],
				result: isTranslation,
				answer: '',
			});
		} else {
			e.target.textContent = 'Готово'
		}
	}

	handleRadioChange = (e) => {
		this.setState({
			answer: e.target.value,
		})
	}

	clickQuestion() {

	}
	
	render() {
		// console.log(this.state.answer)
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h2 className="display-4 mb-4">Вопрос {this.state.current + 1} из {this.state.maxQuestions}</h2>
					<div className="row">
						<div className="col-8 col-offset-2">
							<h1>Result: {this.state.result}</h1>
							<h1 className="display-4 mb-4">Перевод слова - <strong>[{this.state.question.word}]</strong></h1>
							<ul className="list-group">
								{this.state.question.candidates && this.state.question.candidates.map((e,i) => 
									(<li
										className="list-group-item list-group-item-action"
										key={i}
										// onClick={this.clickQuestion()}
									>
										<input
											type="radio"
											name="quiz"
											id={e.word}
											value={e.word}
											checked={this.state.answer === e.word}
											onChange={this.handleRadioChange}
										/>
										<label className="form-check-label" htmlFor={e.word}>{e.word}</label>
									</li>)
								)}
							</ul>
							<button
								className="btn btn-primary"
								onClick={(e) => { this.nextQuestion(e)}}
								disabled={this.state.answer.length ? '' : 'disabled'}
							>Next</button>
						
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({
	cards: state.quiz.cards,
}), null)(Quiz);
