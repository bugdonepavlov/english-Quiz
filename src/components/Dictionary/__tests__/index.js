/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { addWord, filterWord } from 'ducks/dictionary';
import Dictionary from 'components/Dictionary';
import ListHeader from 'components/Dictionary/ListHeader';
import { connect } from 'react-redux';

const instance = mount(
  <Provider store={store}>
    <Dictionary>
      <ListHeader />
    </Dictionary>
  </Provider>
);

describe('Dictionary test suite', () => {

  it('Add Word for Dictionary', () => {
    const
      errorWord = '$word should be a non-empty string',
      translationAny = '$translation doesnt contain any string values';

    expect(() => {
      store.dispatch(addWord());
    }).toThrowError(errorWord);

    expect(() => {
      store.dispatch(addWord(1));
    }).toThrowError(errorWord);

    expect(() => {
      store.dispatch(addWord(NaN));
    }).toThrowError(errorWord);

    expect(() => {
      store.dispatch(addWord(""));
    }).toThrowError(errorWord);

    expect(() => {
      store.dispatch(addWord("Striiiiing"));
    }).toThrowError(translationAny);

    expect(() => {
      store.dispatch(addWord("Striiiiing", 1));
    }).toThrowError(translationAny);

    expect(() => {
      store.dispatch(addWord("Striiiiing", ""));
    }).toThrowError('$translation should be a non-empty string');
    
    store.dispatch(addWord("a", "string"));
    expect(
      store.getState().dictionary.data.map.get('a').has('string'),
    ).toBe(true);

    store.dispatch(addWord("b", ["string"]));
    expect(
      store.getState().dictionary.data.map.get('b').has('string'),
    ).toBe(true);

    expect(() => {
      store.dispatch(addWord("b", {}));
    }).toThrowError('$translation should be Set or Array');

    expect(() => {
      store.dispatch(addWord("Striiiiing", []));
    }).toThrowError('$translation doesnt contain any string values');

    expect(() => {
      store.dispatch(addWord("Striiiiing", {}));
    }).toThrowError('$translation should be Set or Array');

    expect(() => {
      store.dispatch(addWord("Striiiiing", [1,2]));
    }).toThrowError('$translation doesnt contain any string values');

    store.dispatch(addWord("b", ["string"]));
    expect(
      store.getState().dictionary.data.map.get('b').has('string'),
    ).toBe(true);

    store.dispatch(addWord("c", [1, 2, "string"]));
    expect(
      store.getState().dictionary.data.map.get('c').has('string'),
    ).toBe(true);

    expect(() => {
      store.dispatch(addWord("Striiiiing", new Set([1, 2])));
    }).toThrowError('$translation doesnt contain any string values');

    store.dispatch(addWord("d", new Set([1, 2, "string"]))); // => dictionary.get("d") = {"string"}
    expect(
      store.getState().dictionary.data.map.get('d').has('string'),
    ).toBe(true);

    store.dispatch(addWord("d", "new value"));
    expect(
      [...store.getState().dictionary.data.map.get('d').values()][1] // => {"string", "new value"}
    ).toBe('new value');
  });

  it('Search Field', () => {
    instance.find('ListHeader')
      .find('input[name="search"]').simulate('change', { target: { value: 'speak' } });

    expect(
      instance.update().find('ListHeader').find('input[name="search"]').props().value,
    ).toBe('speak');
    expect(instance.find('ListHeader').props().search).toBe('speak');
    expect(instance.find('ListHeader').props().size).toBe(1);
    expect(instance.find('MainList').find('li').length).toBe(1);

    instance.find('ListHeader').find('input[name="search"]').simulate('change', { target: { value: 't' } });

    expect(
      instance.update().find('ListHeader').find('input[name="search"]').props().value,
    ).toBe('t');

    expect(instance.find('ListHeader').props().search).toBe('t');
    expect(instance.find('ListHeader').props().size).toBe(6);
    expect(instance.find('MainList').find('li').length).toBe(6);
    instance.find('ListHeader').find('input[name="search"]').simulate('change', { target: { value: '' } });

    expect(
      instance.update().find('ListHeader').find('input[name="search"]').props().value,
    ).toBe('');

    expect(instance.find('ListHeader').props().search).toBe('');
    // expect(instance.find('MainList').find('li').length,).toBe(27);
  });
});