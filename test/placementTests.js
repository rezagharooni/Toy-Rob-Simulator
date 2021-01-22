import {List, Map} from 'immutable';
import {expect} from 'chai';

import {place} from '../src/coreMovements';



describe('Core Placement functions:', () => {

	it('Place to robot on correct cordinates and direction', () => {
		const state = Map();
		const placeValues = Map({
			X: 1,
			Y:1,
			F: 'WEST'
		});
		const nextState = place(state, placeValues);
		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 1, Y: 1}),
			Facing: 'WEST'
		}));
	});

	it('Converts to immutable', () => {
		const state = Map();
		const placeValues = {
			X: 1,
			Y:1,
			F: 'WEST'
		};
		const nextState = place(state, placeValues);
			expect(nextState).to.equal(Map({
				currentPlace: true,
				tableSize: Map({
					X: 5,
					Y:5
				}),
				position: Map({X: 1, Y: 1}),
				Facing: 'WEST'
			}));
	});

	it('Ignores place action if X or Y greater than table size', () => {
		const state = Map();
		const placeValuesInvalidX = {
			X: 6,
			Y:1,
			F: 'WEST'
		};
		const placeValuesInvalidY = {
			X: 1,
			Y:9,
			F: 'WEST'
		};
		const nextStateInvalidX = place(state, placeValuesInvalidX);
		const nextStateInvalidY = place(state, placeValuesInvalidY);
		console.log('nextStateInvalidX',nextStateInvalidX);
		expect(nextStateInvalidX).to.equal(state);
		expect(nextStateInvalidY).to.equal(state);

	});

	it('Can be placed when it already have been placed', () => {
		const state = Map({
				currentPlace: true,
				tableSize: Map({
					X: 5,
					Y:5
				}),
				position: Map({X: 1, Y: 1}),
				Facing: 'EAST'
		});
		const placeValues = {
			X: 1,
			Y:3,
			F: 'NORTH'
		};
		const nextState = place(state, placeValues);
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
	it('Should ignore place action when position X or Y is not an integer', () => {
		const state = Map();
		const placeValuesInvalidX = {
			X: 1.3,
			Y:3,
			F: 'EAST'
		};
		const placeValuesInvalidY = {
			X: 1,
			Y:3.1,
			F: 'EAST'
		};
		const nextStateInvalidY = place(state, placeValuesInvalidX);
		const nextStateInvalidX = place(state, placeValuesInvalidY);
		expect(nextStateInvalidY).to.equal(state);
		expect(nextStateInvalidX).to.equal(state);
	});
	it('Should ignore place action when position X or Y is negative', () => {
		const state = Map();
		const placeValuesInvalidX = {
			X: -1,
			Y:3,
			F: 'EAST'
		};
		const placeValuesInvalidY = {
			X: 1,
			Y: -4,
			F: 'EAST'
		};
		const nextStateInvalidY = place(state, placeValuesInvalidX);
		const nextStateInvalidX = place(state, placeValuesInvalidY);
		expect(nextStateInvalidY).to.equal(state);
		expect(nextStateInvalidX).to.equal(state);
	});

	it('Should ignore place action when Facing is not WEST, EAST, SOUTH or NORTH ', () => {
		const state = Map();
		const placeValues = {
			X: 1,
			Y:3,
			F: 'MIDDLE'
		};
		const nextState = place(state, placeValues);
		expect(nextState).to.equal(Map());
	});
});