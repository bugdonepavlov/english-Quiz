import React, { Component } from 'react';
import Translation from './Translation';

class Word extends Component {

	render() {

		return (
			<div className="word-item">
				<strong className="">{this.props.word}</strong>
				<div className="word-item__list lead">
					{[...this.props.data.get(this.props.word)].map(el => (
						<Translation translation={el} data={this.props.data} word={this.props.word}/>
					))}

				</div>

			</div>
		);
	}
}

export default Word;