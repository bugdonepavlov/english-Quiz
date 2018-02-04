import Dictionary from '../dictionary';

const dictionary = Dictionary;
const RandomShifty = () => 0.5 - Math.random();
const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const getRandomTranslation =
  value => (Array.isArray(value) ? value[getRandomInt(0, value.length - 1)] : value);


const getCards = () => {
  const words = [...dictionary.map.keys()].sort(() => RandomShifty()).slice(0, 20);

  return words.map(word => ({
    word,
    candidates: [
      {
        word: getRandomTranslation([...dictionary.map.get(word).values()]),
        isTranslation: true,
        id: (Math.random() + Date.now()).toString(),
      },

      ...[...words].filter(e => e !== word).sort().slice(0, 5).map(candidate => ({
        word: getRandomTranslation([...dictionary.map.get(candidate).values()]),
        isTranslation: false,
        id: (Math.random() + Date.now()).toString(),
      })),
    ].sort(() => RandomShifty()),
  }));
};

export const START_QUIZ = 'START_QUIZ';

const initialState = { cards: getCards() };

export default function reducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case START_QUIZ:
      return {
        ...state,
        cards: getCards(),
      };
    default:
      return state;
  }
}

export function startQuiz() {
  return {
    type: START_QUIZ,
    payload: {},
  };
}
