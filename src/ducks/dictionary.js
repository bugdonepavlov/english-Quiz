import Dictionary from '../dictionary';

const dictionary = Dictionary;

const
  initialState = {
    data: dictionary,
    filtred: dictionary,
    search: '',
  };

const updatedFiltred = (data, search) => {
  const keys = [...data.map.keys()].filter(el => el.toLowerCase().includes(search));

  return search ? { ...data, map: new Map(keys.map(key => ([key, data.map.get(key)]))) } : data;
};

export const ADD_WORD = 'ADD_WORD';
export const EDIT_WORD = 'EDIT_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const REMOVE_TRANSLATION = 'REMOVE_TRANSLATION';
export const EDIT_TRANSLATION = 'EDIT_TRANSLATION';
export const FILTRED_WORD = 'FILTRED_WORD';

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FILTRED_WORD:
      return {
        ...state,
        search: payload.search,
        filtred: updatedFiltred(state.data, payload.search),
      };

    case ADD_WORD:
      state.data.addingWord(payload.word, payload.translation);

      return {
        ...state,
        data: {
          ...state.data,
          map: state.data.map,
        },
        filtred: updatedFiltred({
          ...state.data,
          map: state.data.map,
        }, state.search),
      };

    case EDIT_WORD:
      state.data.editedWord(payload.word, payload.newWord, payload.newTranslation);

      return {
        ...state,
        data: {
          ...state.data,
          map: state.data.map,
        },
        filtred: updatedFiltred({
          ...state.data,
          map: state.data.map,
        }, state.search),
      };

    case EDIT_TRANSLATION:
      state.data.editTranslation(payload.word, payload.translation, payload.newTranslation);

      return {
        ...state,
        data: {
          ...state.data,
          map: state.data.map,
        },
        filtred: updatedFiltred({
          ...state.data,
          map: state.data.map,
        }, state.search),
      };

    case REMOVE_WORD:
      state.data.deleteWord(payload.word);

      return {
        ...state,
        data: {
          ...state.data,
          map: state.data.map,
        },
        filtred: updatedFiltred({
          ...state.data,
          map: state.data.map,
        }, state.search),
      };

    case REMOVE_TRANSLATION:
      state.data.deleteTranslation(payload.word, payload.translation);

      return {
        ...state,
        data: {
          ...state.data,
          map: state.data.map,
        },
        filtred: updatedFiltred({
          ...state.data,
          map: state.data.map,
        }, state.search),
      };
    default:
      return state;
  }
}

export function addWord(word, translation) {
  return {
    type: ADD_WORD,
    payload: { word, translation },
  };
}

export function editWord(word, newWord, newTranslation) {
  return {
    type: EDIT_WORD,
    payload: { word, newWord, newTranslation },
  };
}

export function editTranslation(word, translation, newTranslation) {
  return {
    type: EDIT_TRANSLATION,
    payload: { word, translation, newTranslation },
  };
}

export function removeWord(word) {
  return {
    type: REMOVE_WORD,
    payload: { word },
  };
}

export function removeTranslation(word, translation) {
  return {
    type: REMOVE_TRANSLATION,
    payload: { word, translation },
  };
}

export function filterWord(search) {
  return {
    type: FILTRED_WORD,
    payload: { search },
  };
}
