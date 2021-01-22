import {Map} from 'immutable';
import {expect} from 'chai';

import makeStore from '../src/store';

describe('Store tests:', () => {

	it('Is a Redux store configured with the correct reducer?', () => {
		const store = makeStore();
		expect(store.getState()).to.equal(Map());
		store.dispatch({
			type: 'PLACE',
			position: {
				X: 1,
				Y: 3,
				F: 'NORTH'
			}
		});
		expect(store.getState()).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 1, Y: 3}),
			Facing: 'NORTH'
		}));
	});

});