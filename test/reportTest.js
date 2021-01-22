import {List, Map} from 'immutable';
import {expect} from 'chai';

import {report} from '../src/coreMovements';


describe('Core Report functions:', () => {
	it('Should report robot\'s current postion and which way its facing.', () => {
			const state = Map({
				currentPosition: true,
				position: Map({X: 4, Y: 3}),
				Facing: 'NORTH'
			})
			const nextState = report(state);
			expect(nextState).to.equal(Map({
				currentPosition: true,
				position: Map({X: 4, Y: 3}),
				Facing: 'NORTH'
			}));
	});
    
    
	it('Should not report robot\'s current postion if it hasn\'t been placed.', () => {
			const state = Map({
				position: Map({X: 1, Y: 3}),
				Facing: 'NORTH'
			})
			const nextState = report(state);
			expect(nextState).to.equal(state);


	});
});