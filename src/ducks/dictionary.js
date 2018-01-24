// import { dictionary } from  'config';

const dictionary = new Map();

// заполняем значениями
dictionary.set('world', new Set(["мир", "свет", "вселенная"]));
dictionary.set('speak', new Set(["говорить", "выступать", "разговаривать"]));
dictionary.set('game', new Set(["игра", "партия"]));


const
	initialState = {
		data: new Map(dictionary),
	};

export const ADD_WORD = 'ADD_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const REMOVE_TRANSLATION = 'REMOVE_TRANSLATION';

// добавление слова в dictionary
const addingWord = (word, translation) => {

	if (typeof word === 'string' && word.trim().length > 0) {
		let values;

		switch (typeof translation) {
			case "string":
				if (translation.trim().length > 0) {
					values = [translation];
				} else {
					throw new Error("$data should be a non-empty string");
				}
 
			case "object":
				if (Array.isArray(translation)) {
					values = translation.filter(e => typeof e === "string" && e.trim().length > 0);
				} else if (translation instanceof Set) {
					values = [...translation.values()].filter(e => typeof e === "string" && e.trim().length > 0);
				} else {
					throw new Error("$data should be Set or Array");
				}

				break;

			default:
				throw new Error("$data doesn't contain any string values");
		}

		// array detection
		if (values && Array.isArray(values) && !!values.length) {
			const set = dictionary.get(word);

			return set ? values.forEach(value => set.add(value)) : dictionary.set(word, new Set(values));
		} else {
			throw new Error("$data doesn't contain any string values");
		}

	} else {
		throw new Error("$word should be a non-empty string");
	}
}

// удаление перевода из dictionary
const deleteTranslation = (word, translation) => {
	return dictionary.get(word).delete(translation);
}

// удаление слова из dictionary
const deleteWord = (word) => {
	return dictionary.delete(word)
}

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch(type) {
		case ADD_WORD:
			return {
				data: addingWord(payload.word, payload.translation),
			}
		case REMOVE_WORD:
			return {
				data: state.data.delete(payload.word),
			}

		case REMOVE_TRANSLATION:
			return {
				data: deleteTranslation(payload.word, payload.translation),
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
