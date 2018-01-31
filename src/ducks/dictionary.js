import {dictionary} from 'dictionary';

const dict = dictionary;
console.log(dict)

// заполняем значениями
dict.addingWord('world', new Set(["мир", "свет", "вселенная"]));
dict.addingWord('speak', new Set(["говорить", "выступать", "разговаривать"]));
dict.addingWord('game', new Set(["игра", "партия"]));
dict.addingWord('work', 'работать');
dict.addingWord('name', ['имя', 'название', 'наименование']);
dict.addingWord('set', ['задавать', 'набор', 'комплект']);
dict.addingWord('list', ['список', 'перечень']);
dict.addingWord('file', ['файл', 'дело']);
dict.addingWord('bread', 'хлеб');
dict.addingWord('great', ['великий', 'большой', 'отличный']);
dict.addingWord('happy', 'счастливый');
dict.addingWord('come', ['приходить', 'приехать', 'приезжать']);
dict.addingWord('our', 'наш');
dict.addingWord('way', ['путь', 'способ', 'путь']);
dict.addingWord('very', ['очень', 'самый']);
dict.addingWord('a lot of', ['много', 'множество', 'масса']);
dict.addingWord('lucky', 'везучий');
dict.addingWord('air', 'воздух');
dict.addingWord('sir', ['сэр', 'господин']);
dict.addingWord('woman', 'женщина');
dict.addingWord('under', ['под', 'по', 'при']);
dict.addingWord('see', ['видеть', 'увидеть', 'смотреть', 'посмотреть']);
dict.addingWord('yes', 'да');
dict.addingWord('then', ['тогда', 'затем', 'потом']);
dict.addingWord('some', ['некоторые', 'несколько']);
dict.addingWord('some', 'тот же самый');
dict.addingWord('because', ['потому как', 'потому что', 'при']);
dict.addingWord('thank', ['спасибо', 'поблагодарить', 'благодарить']);



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


