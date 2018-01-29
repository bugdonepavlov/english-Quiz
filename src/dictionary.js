export class Dictionary {
	constructor() {
		this.map = new Map();
	}

	addingWord = (word, translation) => {

		if (typeof word === "string" && word.length > 0) {
			let values;

			switch (typeof translation) {
				case "string":
					if (translation.length > 0) {
						values = [translation];
					} else {
						throw new Error("$translation should be a non-empty string");
					}
					break;
				case "object":
					if (Array.isArray(translation)) {
						values = translation.filter(e => typeof e === "string");
					} else if (translation instanceof Set) {
						values = [...translation.values()].filter(e => typeof e === "string");
					} else {
						throw new Error("$translation should be Set or Array");
					}
					break;
				default:
					throw new Error("$translation doesn't contain any string values");
			}

			if (values && Array.isArray(values) && values.length > 0) {
				const set = this.map.get(word);
				set ? values.forEach(value => set.add(value)) : this.map.set(word, new Set(values));
			} else {
				throw new Error("$translation doesn't contain any string values");
			}
		} else {
			throw new Error("$word should be a non-empty string");
		}
	}

	deleteTranslation = (word, translation) => this.map.get(word).delete(translation);

	deleteWord = word => this.map.delete(word)

	editedWord = (word, newWord, newTranslation) => {
		this.map.delete(word);
		this.addingWord(newWord, newTranslation);
	}
}
