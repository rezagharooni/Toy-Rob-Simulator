import {List, Map} from 'immutable';
import {expect} from 'chai';

import {move} from '../src/coreMovements';



describe('Core Movement functions:', () => {
	it('Should move one place NORTH when facing NORTH.', () => {
		const state = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y: 5
			}),
			position: Map({X: 1, Y: 3}),
			Facing: 'NORTH'
		})
		const nextState = move(state);
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
	it('Should move one place SOUTH when facing SOUTH.', () => {
		const state = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 2, Y: 3}),
			Facing: 'SOUTH'
		})
		const nextState = move(state);
		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 2, Y: 2}),
			Facing: 'SOUTH'
		}));
	});
	it('Should move one place EAST when facing EAST.', () => {
		const state = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 2, Y: 3}),
			Facing: 'EAST'
		})
		const nextState = move(state);
		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 3, Y: 3}),
			Facing: 'EAST'
		}));
	});
	it('Should move one place WEST when facing WEST.', () => {
		const state = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 2, Y: 3}),
			Facing: 'WEST'
		})
		const nextState = move(state);
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
	it('Should not move when facing WEST and X is 0 (pushed off table).', () => {
		const state = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 0, Y: 3}),
			Facing: 'WEST'
		})
		const nextState = move(state);
		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 0, Y: 3}),
			Facing: 'WEST'
		}));
	});
	it('Should not move when facing EAST and X is 4 (pushed off table).', () => {
		const state = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 4, Y: 3}),
			Facing: 'EAST'
		})
		const nextState = move(state);
		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 4, Y: 3}),
			Facing: 'EAST'
		}));
	});
	it('Should not move when facing NORTH and Y is 4 (pushed off table).', () => {
		const state = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 4, Y: 4}),
			Facing: 'NORTH'
		})
		const nextState = move(state);
		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 4, Y: 4}),
			Facing: 'NORTH'
		}));
	});
	it('Should not move when facing SOUTH and Y is 0 (pushed off table).', () => {
		const state = Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 4, Y: 0}),
			Facing: 'SOUTH'
		})
		const nextState = move(state);
		expect(nextState).to.equal(Map({
			currentPlace: true,
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 4, Y: 0}),
			Facing: 'SOUTH'
		}));
	});
	it('Should not move if robot hasnt been placed on the board.', () => {
		const state = Map({
			tableSize: Map({
				X: 5,
				Y:5
			}),
			position: Map({X: 3, Y: 3}),
			Facing: 'SOUTH'
		});
		const nextState = move(state);
		expect(nextState).to.equal(state);
	});
});
