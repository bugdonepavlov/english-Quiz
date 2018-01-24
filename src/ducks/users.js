import usersList from 'initialUserList';
import { appName } from '../config';

export const moduleName = 'users';
export const REMOVE_USER = `${appName}/${moduleName}/REMOVE_USER`;
export const FILTRED_USER = `${appName}/${moduleName}/FILTRED_USER`;

const
	initialState = {
		data: usersList,
		filtred: [...usersList],
		search: '',
	};

const updatedFiltred = (data, search) => {
	return (
		!!search
			? data.filter(el => el.name.toLowerCase().includes(search))
			: data
	)
};

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case REMOVE_USER:
			return {
				...state,
				filtred: state.data.filter(el => !payload.usersID.has(el._id)),
			}
		case FILTRED_USER:
			return {
				...state,
				search: payload.search,
				filtred: updatedFiltred(state.data, payload.search),
			}
		default:
			return state
	}
};

export function removeUser(usersID) {
	return {
		type: REMOVE_USER,
		payload: { usersID },
	}
};

export function filteredUser(search) {
	return {
		type: FILTRED_USER,
		payload: {
			search,
		}
	}
};