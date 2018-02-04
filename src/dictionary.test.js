import { Dictionary } from 'dictionary';
/* eslint-disable */

const dict = new Dictionary();

describe('Dictionary test suite', () => {

  it('Add Word in Dictionary', () => {
    expect(() => { dict.addingWord(); }).toThrowError('$word should be a non-empty string');
    expect(() => { dict.addingWord(1); }).toThrowError('$word should be a non-empty string');
    expect(() => { dict.addingWord(NaN); }).toThrowError('$word should be a non-empty string');
    expect(() => { dict.addingWord(""); }).toThrowError('$word should be a non-empty string');
    expect(() => { dict.addingWord("Striiiiing"); }).toThrowError('$translation doesnt contain any string values');
    expect(() => { dict.addingWord("Striiiiing", 1); }).toThrowError('$translation doesnt contain any string values');
    expect(() => { dict.addingWord("Striiiiing", ""); }).toThrowError('$translation should be a non-empty string');

    dict.addingWord("a", "string");
    expect(dict.map.get('a').has('string')).toBe(true);

    dict.addingWord("b", ["string"]);
    expect(dict.map.get('b').has('string')).toBe(true);

    expect(() => { dict.addingWord("b", {}); }).toThrowError('$translation should be Set or Array');

    expect(() => {
      dict.addingWord("Striiiiing", []);
    }).toThrowError('$translation doesnt contain any string values');

    expect(() => {
      dict.addingWord("Striiiiing", {});
    }).toThrowError('$translation should be Set or Array');

    expect(() => {
      dict.addingWord("Striiiiing", [1, 2]);
    }).toThrowError('$translation doesnt contain any string values');

    dict.addingWord("b", ["string"]);
    expect(dict.map.get('b').has('string')).toBe(true);

    dict.addingWord("c", [1, 2, "string"]);
    expect(dict.map.get('c').has('string')).toBe(true);

    expect(() => {
      dict.addingWord("Striiiiing", new Set([1, 2]));
    }).toThrowError('$translation doesnt contain any string values');

    dict.addingWord("d", new Set([1, 2, "string"])); // => dictionary.get("d") = {"string"}
    expect(dict.map.get('d').has('string')).toBe(true);
    dict.addingWord("d", "new value");
    expect(
      [...dict.map.get('d').values()][1], // => {"string", "new value"}
    ).toBe('new value');
  });

  it('Remove Word in Dictionary', ()=> {
    expect(dict.map.has('a')).toBe(true);
    dict.deleteWord('a');
    expect(dict.map.has('a')).toBe(false);
  });

  it('Remove Translation in Dictionary', () => {
    dict.addingWord('test', 'тест');
    expect(dict.map.has('test')).toBe(true);
    expect(dict.map.get('test').has('тест')).toBe(true);
    dict.deleteTranslation('test', 'тест');
    expect(dict.map.has('test')).toBe(true);
    expect(dict.map.get('test').has('тест')).toBe(false);
  });

  it('Edit Word in Dictionary', () => {
    dict.addingWord('test', 'тест');
    expect(dict.map.has('test')).toBe(true);
    expect(dict.map.get('test').has('тест')).toBe(true);
    dict.editedWord('test', 'new test', 'new value');
    expect(dict.map.has('test')).toBe(false);
    expect(dict.map.has('new test')).toBe(true);
    expect(dict.map.get('new test').has('new value')).toBe(true);
  });

  it('Edit Translation in Dictionary', () => {
    dict.addingWord('test', 'тест');
    expect(dict.map.has('test')).toBe(true);
    expect(dict.map.get('test').has('тест')).toBe(true);
    dict.editTranslation('test', 'тест', 'new value');
    expect(dict.map.get('new test').has('new value')).toBe(true);
  });
});
