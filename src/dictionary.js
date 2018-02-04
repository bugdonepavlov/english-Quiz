export class Dictionary {
  constructor() {
    this.map = new Map();
  }

  addingWord = (word, translation) => {
    if (typeof word === 'string' && word.length > 0) {
      let values;

      switch (typeof translation) {
        case 'string':
          if (translation.length > 0) {
            values = [translation];
          } else {
            throw new Error('$translation should be a non-empty string');
          }
          break;
        case 'object':
          if (Array.isArray(translation)) {
            values = translation.filter(e => typeof e === 'string');
          } else if (translation instanceof Set) {
            values = [...translation.values()].filter(e => typeof e === 'string');
          } else {
            throw new Error('$translation should be Set or Array');
          }
          break;
        default:
          throw new Error('$translation doesnt contain any string values');
      }

      if (values && Array.isArray(values) && values.length > 0) {
        const set = this.map.get(word);
        set ? values.forEach(value => set.add(value)) : this.map.set(word, new Set(values));
      } else {
        throw new Error('$translation doesnt contain any string values');
      }
    } else {
      throw new Error('$word should be a non-empty string');
    }
  }

  deleteTranslation = (word, translation) => this.map.get(word).delete(translation);

  deleteWord = word => this.map.delete(word);

  editedWord = (word, newWord, newTranslation) => {
    this.map.delete(word);
    this.addingWord(newWord, newTranslation);
  }

  editTranslation = (word, translation, newTranslation) => {
    this.map.get(word).delete(translation);
    this.map.get(word).add(newTranslation);
  }
}

const dictionary = new Dictionary();

// заполняем значениями
dictionary.addingWord('world', new Set(['мир', 'свет', 'вселенная']));
dictionary.addingWord('speak', new Set(['говорить', 'выступать', 'разговаривать']));
dictionary.addingWord('game', new Set(['игра', 'партия']));
dictionary.addingWord('work', 'работать');
dictionary.addingWord('name', ['имя', 'название', 'наименование']);
dictionary.addingWord('set', ['задавать', 'набор', 'комплект']);
dictionary.addingWord('list', ['список', 'перечень']);
dictionary.addingWord('file', ['файл', 'дело']);
dictionary.addingWord('bread', 'хлеб');
dictionary.addingWord('great', ['великий', 'большой', 'отличный']);
dictionary.addingWord('happy', 'счастливый');
dictionary.addingWord('come', ['приходить', 'приехать', 'приезжать']);
dictionary.addingWord('our', 'наш');
dictionary.addingWord('way', ['путь', 'способ', 'путь']);
dictionary.addingWord('very', ['очень', 'самый']);
dictionary.addingWord('a lot of', ['много', 'множество', 'масса']);
dictionary.addingWord('lucky', 'везучий');
dictionary.addingWord('air', 'воздух');
dictionary.addingWord('sir', ['сэр', 'господин']);
dictionary.addingWord('woman', 'женщина');
dictionary.addingWord('under', ['под', 'по', 'при']);
dictionary.addingWord('see', ['видеть', 'увидеть', 'смотреть', 'посмотреть']);
dictionary.addingWord('yes', 'да');
dictionary.addingWord('then', ['тогда', 'затем', 'потом']);
dictionary.addingWord('some', ['некоторые', 'несколько']);
dictionary.addingWord('some', 'тот же самый');
dictionary.addingWord('because', ['потому как', 'потому что', 'при']);
dictionary.addingWord('thank', ['спасибо', 'поблагодарить', 'благодарить']);

export default dictionary;
