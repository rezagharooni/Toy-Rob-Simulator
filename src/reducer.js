import {place, rotate, move, report, initial_state} from './coreMovements';

/**
 * Takes the currentState, action and returns new state
 * currentState, action => newState
 *
 * @param  {Immutable.Map} state
 * @param  {Object} action
 * @return {Immutable.Map}
 */

export default function reducer(state = initial_state, action) {
	
	switch (action.type) {
		case 'PLACE':
			return place(state, action.position);
		case 'ROTATE':
			return rotate(state, action.direction);
		case 'MOVE':
			return move(state);
		case 'REPORT':
			return report(state);
	}
	return state;
}

