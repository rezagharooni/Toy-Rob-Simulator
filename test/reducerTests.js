import {Map} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('Reducer Tests:', () => {

	it('Has an initial state', () => {
	  const action = {type: 'PLACE', position: {
	  	X: 1,
	  	Y: 3,
	  	F: 'NORTH'
	  }};
	  const nextState = reducer(undefined, action);
	  expect(nextState).to.equal(Map({
        currentPlace: true,
	  	tableSize: Map({
	  		X: 5,
	  		Y:5
	  	}),
	  	position: Map({X: 1, Y: 3}),
	  	Facing: 'NORTH'
	  }));
	});

	it('Handles PLACE', () => {
		const initialState = Map();
		const action = {type: 'PLACE', position: {
			X: 1,
			Y: 3,
			F: 'NORTH'
		}};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 1, Y: 3}),
			Facing: 'NORTH'
		}));
	});

	it('handles MOVE', () => {
		const initialState = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 1, Y: 3}),
			Facing: 'NORTH'
		});
		const action = {type: 'MOVE'};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 1, Y: 4}),
			Facing: 'NORTH'
		}));
	});

	it('handles ROTATE', () => {
		const initialState = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 1, Y: 3}),
			Facing: 'NORTH'
		});
		const action = {type: 'ROTATE', direction: 'LEFT'};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 1, Y: 3}),
			Facing: 'WEST'
		}));
	});
	
});