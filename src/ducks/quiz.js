import { dictionary } from 'dictionary';

const dict = dictionary;

const RandomBoolean = () => Math.random() >= 0.5;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomTranslation = value => Array.isArray(value) ? value[getRandomInt(0, value.length - 1)] : value;
const words = [...dict.map.keys()].sort(e => RandomBoolean()).slice(0, 20);

const cards = words.map(word => ({
	word: word,
	candidates: [
		{
			word: getRandomTranslation([...dict.map.get(word).values()]),
			isTranslation: true,
		},
		
		...[...words].filter(e => e !== word).sort().slice(0, 5).map(candidate => {
			return {
				word: getRandomTranslation([...dict.map.get(candidate).values()]),
				isTranslation: false,
			}
		})
	].sort(() => 0.5 - Math.random())
}));



const initialState = { cards };

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch(type) {
		default:
			return state
	}
}
