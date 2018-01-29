import React from 'react';

const WordField = (props) => {
	const
		{input, meta: {error, touched}} = props,
		errorText = touched && error && <div className="invalid-feedback"> { error }</div>;
	let valid;

	if (touched && error) valid = false
	if (touched && !error) valid = true

	return (
		<div className="form-group">
			<label>{props.label}</label>
			<input
				{...input}
				type="text"
				name={input.name}
				className="form-control"
				placeholder={props.label}
				valid={valid}
			/>
			{errorText}
		</div>
	);
};

export default WordField;