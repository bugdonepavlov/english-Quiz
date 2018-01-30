import {Dictionary} from 'dictionary';

const dict = new Dictionary();

// заполняем значениями
dict.addingWord('world', new Set(["мир", "свет", "вселенная"]));
dict.addingWord('speak', new Set(["говорить", "выступать", "разговаривать"]));
dict.addingWord('game', new Set(["игра", "партия"]));
dict.addingWord('work', 'работать');

const
	initialState = {
		data: dict,
	};

export const ADD_WORD = 'ADD_WORD';
export const EDIT_WORD = 'EDIT_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const REMOVE_TRANSLATION = 'REMOVE_TRANSLATION';
export const EDIT_TRANSLATION = 'EDIT_TRANSLATION';

export default function reducer(state = initialState, action) {
	const { type, payload } = action;
	let dict;

	switch(type) {
		case ADD_WORD:
			state.data.addingWord(payload.word, payload.translation);
			dict = state.data;

			return {
				...state,
				data: {
					...dict,
					map: dict.map,
				}
			}

		case EDIT_WORD:
			state.data.editedWord(payload.word, payload.newWord, payload.newTranslation);
			dict = state.data;

			return {
				...state,
				data: {
					...dict,
					map: dict.map,
				}
			}

		case EDIT_TRANSLATION:
			console.log(1111);
			state.data.editTranslation(payload.word, payload.translation, payload.newTranslation);
			dict = state.data;

			return {
				...state,
				data: {
					...dict,
					map: dict.map,
				}
			}

		case REMOVE_WORD:
			state.data.deleteWord(payload.word);
			dict = state.data;

			return {
				...state,
				data: {
					...dict,
					map: dict.map,
				}
			}

		case REMOVE_TRANSLATION:
			state.data.deleteTranslation(payload.word, payload.translation);
			dict = state.data;

			return {
				...state,
				data: {
					...dict,
					map: dict.map,
				}
			}
		default:
			return state
	}
}

export function addWord(word, translation) {
	return {
		type: ADD_WORD,
		payload: { word, translation },
	}
};

export function editWord(word, newWord, newTranslation) {
	return {
		type: EDIT_WORD,
		payload: { word, newWord, newTranslation },
	}
};

export function editTranslation(word, translation, newTranslation) {
	return {
		type: EDIT_TRANSLATION,
		payload: { word, translation, newTranslation },
	}
};

export function removeWord(word) {
	return {
		type: REMOVE_WORD,
		payload: { word },
	}
};

export function removeTranslation(word, translation) {
	return {
		type: REMOVE_TRANSLATION,
		payload: { word, translation },
	}
};
