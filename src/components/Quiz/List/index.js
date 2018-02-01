import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class List extends Component {
	state = {
		answer: '',
	};

	handleInput(e) {
		this.props.nextQuestion(e);

		this.setState({
			answer: e.target.value,
		});
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
						{/* <ReactCSSTransitionGroup
							className="fade"
							component="div"
							transitionName="fade"
							transitionEnterTimeout={800}
							transitionLeaveTimeout={500}
							transitionAppear
							transitionAppearTimeout={500}
						> */}
						{this.props.question.candidates && this.props.question.candidates.map((e, i) =>
							(<li
								className="list-group-item list-group-item-action"
								key={e.word}
							>
								<input
									type="radio"
									name="quiz"
									id={i}
									value={e.word}
									checked={this.state.answer === e.word}
									onChange={(e) => { this.handleInput(e); }}
								/>
								<label className="form-check-label" htmlFor={i}>{e.word}</label>
							</li>))}
						{/* </ReactCSSTransitionGroup> */}
					</ul>
				</div>
			</div>
		);
	}
}

export default List;