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
    expect(instance.find('MainList').find('li').length,).toBe(27);
  });
});