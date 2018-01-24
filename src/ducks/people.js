import { appName } from '../config';
import { reset } from 'redux-form';

const
	initialState = {
		entilies: [],
	};

export const moduleName = 'people';
export const ADD_PERSON = `${appName}/${moduleName}/ADD_PERSON`;

export default function reducer(state = initialState, action) {
	const {type, payload} = action;

	switch (type) {
		case ADD_PERSON:
			return {
				...state,
				entilies: [
					...state.entilies,
					payload.person,
				]
			}

		default:
			return state
	}
}

export function addPerson(person) {
	return (dispatch) => {
		dispatch({
			type: ADD_PERSON,
			payload: {
				person: {
					id: Date.now(),
					...person,
				}
			}
		});

		dispatch(reset('person'));
	}
}
