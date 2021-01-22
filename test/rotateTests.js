import {List, Map} from 'immutable';
import {expect} from 'chai';
import {rotate} from '../src/coreMovements';

describe('Core Rotate functions:', () => {
	it('Should rotate to WEST if State is NORTH and action LEFT.', () => {
		const state = Map({
			currentPlace: true,
			Facing: 'NORTH'
		});
		const nextState = rotate(state, 'LEFT')
		expect(nextState).to.equal(Map({
			currentPlace: true,
			Facing: 'WEST'
		}));
	});
	it('Should rotate to EAST if State is NORTH and action RIGHT.', () => {
		const state = Map({
			currentPlace: true,
			Facing: 'NORTH'
		});
		const nextState = rotate(state, 'RIGHT')
		expect(nextState).to.equal(Map({
			currentPlace: true,
			Facing: 'EAST'
		}));
	});
	it('Should rotate to EAST if state is SOUTH and action LEFT.', () => {
		const state = Map({
			currentPlace: true,
			Facing: 'SOUTH'
		});
		const nextState = rotate(state, 'LEFT')
		expect(nextState).to.equal(Map({
			currentPlace: true,
			Facing: 'EAST'
		}));
	});
	it('Should rotate to WEST if state is SOUTH and action RIGHT.', () => {
		const state = Map({
			currentPlace: true,
			Facing: 'SOUTH'
		});
		const nextState = rotate(state, 'RIGHT')
		expect(nextState).to.equal(Map({
			currentPlace: true,
			Facing: 'WEST'
		}));
	});
	it('Should rotate to NORTH if state is WEST and action RIGHT.', () => {
		const state = Map({
			currentPlace: true,
			Facing: 'WEST'
		});
		const nextState = rotate(state, 'RIGHT')
		expect(nextState).to.equal(Map({
			currentPlace: true,
			Facing: 'NORTH'
		}));
	});
	it('Should rotate to SOUTH if state is WEST and action LEFT.', () => {
		const state = Map({
			currentPlace: true,
			Facing: 'WEST'
		});
		const nextState = rotate(state, 'LEFT')
		expect(nextState).to.equal(Map({
			currentPlace: true,
			Facing: 'SOUTH'
		}));
	});
	it('Should rotate to SOUTH if state is EAST and action RIGHT..', () => {
		const state = Map({
			currentPlace: true,
			Facing: 'EAST'
		});
		const nextState = rotate(state, 'RIGHT')
		expect(nextState).to.equal(Map({
			currentPlace: true,
			Facing: 'SOUTH'
		}));
	});
	it('Should rotate to NORTH if state is EAST and action LEFT.', () => {
		const state = Map({
			currentPlace: true,
			Facing: 'EAST'
		});
		const nextState = rotate(state, 'LEFT')
		expect(nextState).to.equal(Map({
			currentPlace: true,
			Facing: 'NORTH'
		}));
	});
	it('Should not rotate if it hasn\'t been placed.', () => {
		const state = Map({
			Facing: 'EAST'
		});
		const nextState = rotate(state, 'LEFT')
		expect(nextState).to.equal(state);
	});
	it('Should not rotate if the direction not is LEFT or RIGHT.', () => {
		const state = Map({
			currentPlace: true,
			Facing: 'EAST'
		});
		const nextState = rotate(state, 'HELLO')
		expect(nextState).to.equal(state);
	});
});
