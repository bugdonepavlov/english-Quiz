import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store from 'redux/store';
import ListHeader from 'components/Dictionary/ListHeader';
import ModalContent from 'components/common/ModalContent';
import Modal from 'components/common/Modal';
import { connect } from 'react-redux';
import { addWord, filterWord, ADD_WORD, FILTRED_WORD } from 'ducks/dictionary';

let instance;

describe('ListHeader', () => {
	beforeEach(() => {
		
		// store = getStore(campaign);

		instance = mount(<Provider store={store}>
			<ListHeader size={store.getState().dictionary.filtred.map.size}>
				{/* <Modal close={false}>
				<ModalContent
					show={true}
					hideModal={() => {}}
					title="Add"
					addWord={() => { undefined}}
					word={undefined}
					editWord={() => { undefined }}
				/>
			</Modal> */}
			</ListHeader>
		</Provider>);

		// form = () => instance.update().find('Form');
	});

	it('Search Field', () => {
		instance = mount(<Provider store={store}>
			<ListHeader size={store.getState().dictionary.filtred.map.size}>
				{/* <Modal close={false}>
				<ModalContent
					show={true}
					hideModal={() => {}}
					title="Add"
					addWord={() => { undefined}}
					word={undefined}
					editWord={() => { undefined }}
				/>
			</Modal> */}
			</ListHeader>
		</Provider>);
		// store.dispatch(filterWord('s'));
		instance.find('input').simulate('change', { target: { value: 'speak' } })
		console.log('instance', instance.update().debug());
		console.log('sasd', store.getState().dictionary.filtred.map)
		console.log('store', store.getState().dictionary.filtred.map.size)
		// {
		// 	this.state.showModal && (<ModalContent
		// 		show={this.state.showModal}
		// 		hideModal={this.hideModal}
		// 		title="Add"
		// 		addWord={this.props.addWord}
		// 	/>)
		// }
	})
});