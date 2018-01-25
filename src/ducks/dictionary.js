// import { dictionary } from  'config';
import {Dictionary} from 'dictionary';

const dict = new Dictionary();

// заполняем значениями
dict.addingWord('world', new Set(["мир", "свет", "вселенная"]));
dict.addingWord('speak', new Set(["говорить", "выступать", "разговаривать"]));
dict.addingWord('game', new Set(["игра", "партия"]));
dict.addingWord('work', 'работать');

const
	initialState = {
		dict: dict,
	};

export const ADD_WORD = 'ADD_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const REMOVE_TRANSLATION = 'REMOVE_TRANSLATION';

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch(type) {
		case ADD_WORD:
			return {
				dict: state.dict.addingWord(payload.word, payload.translation),
			}
		case REMOVE_WORD:
			return {
				dict: state.dict.deleteWord(payload.word),
			}

		case REMOVE_TRANSLATION:
			return {
				dict: state.dict.deleteTranslation(payload.word, payload.translation),
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
