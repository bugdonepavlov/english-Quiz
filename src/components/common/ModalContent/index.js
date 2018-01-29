import React, { Component } from 'react';
// import Field from 'common/Field';

class ModalContent extends Component {
	state = {
		word: '',
		translation: '',
		translations: [],
	}

	componentDidMount() {
		if (!!this.props.editWord) {
			this.setState({
				word: this.props.word,
				translations: [...this.props.translation],
			});
		}
	}

	handleInputChange = (e) => {
		const target = e.target;
		
		this.setState({
			[target.name]: target.value,
		});
	}

	handlePushTranslations = () => {
		const arr = this.state.translations;

		arr.push(this.state.translation);
		this.setState({
			translations: arr,
			translation: '',
		});
	}

	getTranslation = (translation) => {
		const el = this.state.translations.find(e => e === translation);

		this.setState({
			translation: el,
			translations: this.state.translations.filter(e => e !== translation),
		})
	}

	render() {
		return (
			<div
				className={`modal fade show`}
				style={this.props.show ? { display: 'block' } : { display: 'none' }}
			>
				<div className="modal-dialog" >
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{this.props.title} Word</h5>
							<button className="close" onClick={this.props.handleHide}>
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
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-secondary"
											onClick={this.handlePushTranslations}
										>Add Translation</button>
									</div>
								</div>
							</div>

							{this.state.word && (<div className="lead">
								<strong> {this.state.word} {' - '}</strong>
								{this.state.translations.map((e,i) => (
									<span key={i} onClick={()=> {this.getTranslation(e)}}>{e}{' '}</span>
								))}
							</div>)}
						</div>
						<div className="modal-footer">
							<button className="btn btn-secondary" onClick={this.props.handleHide}>Close</button>

							{this.props.addWord && (<button
								className="btn btn-primary"
								onClick={() => { this.props.addWord(this.state.word, this.state.translations) }}
							>Add</button>)}

							{this.props.editWord && (<button
								className="btn btn-primary"
								onClick={() => { this.props.editWord(this.props.word, this.state.word, this.state.translations) }}
							>{this.props.title}</button>)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalContent;