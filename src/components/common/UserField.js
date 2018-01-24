import React from 'react';
import { FormGroup, Label, Input, FormFeedback} from 'reactstrap';

const UserField = (props) => {
	const
		{input, type, meta: {error, touched}, id} = props,
		errorText = touched && error && <FormFeedback> { error }</FormFeedback>;
	let valid;

	if (touched && error) valid = false
	if (touched && !error) valid = true

	return (
		<FormGroup>
			<Label htmlFor={id} >{props.label}</Label>

			<Input
				type={type}
				{...input}
				id={id}
				name={input.name}
				placeholder={props.label}
				valid={valid}
			/>
			

			{errorText}
		</FormGroup>
	);
};

export default UserField;