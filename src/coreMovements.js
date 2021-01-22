import {Map} from 'immutable';
import {validatePlaceValues} from './validation.js';

export const table_size = Map({
	X:5,
	Y:5
});
export const initial_state = Map();

/**
 * Takes previous state and the new placeValues, returns new State.
 * @param  {Immutable.Map} state
 * @param  {Object || Immutable.Map} placeValues
 * @return {Immutable.Map}
 */

export function place(state, placeValues) {
	const immutable_place_values = Map(placeValues);
	const tableSize = state.get('tableSize', table_size);
	if (!validatePlaceValues(immutable_place_values, tableSize)) {
		return state;
	}
	return state.set('currentPlace', true).set('tableSize', tableSize).set('position', Map({
		X: immutable_place_values.get('X'),
		Y: immutable_place_values.get('Y')
	})).set('Facing', immutable_place_values.get('F'));
}

/**
 * Increases or Decreases depending on the change of parameters.
 * Uses a currying pattern to store how position should change.
 * Reminds user to not push robot off the table.
 *
 * @param  {String} change
 * @return {Int}
 */
function correctMove(change, maxValue) {
	return position => {
		if (change === 'Increase' && position + 1 !== maxValue) {
			return position + 1;
		}
		if (change === 'Decrease' && position !== 0) {
			return position - 1;
		}
		console.log('Don\'t push me off the table.');
		return position;
	};
};

/**
 * Moves the robot one position in the direction its facing.
 * Old state returned if user doesn't place robot.
 *
 * @param  {Immutable.Map} state
 * @return {Immutable.Map}
 */

export function move(state) {
	if (!state.get('currentPlace')) {
		console.log('I\'m not even on the table');
		return state;
	}
	switch (state.get('Facing')) {
		case 'NORTH':
			return state.updateIn(['position', 'Y'], correctMove('Increase', state.getIn(['tableSize', 'Y'])));
		case 'SOUTH':
			return state.updateIn(['position', 'Y'], correctMove('Decrease'));
		case 'EAST':
			return state.updateIn(['position', 'X'], correctMove('Increase', state.getIn(['tableSize', 'X'])));
		case 'WEST':
			return state.updateIn(['position', 'X'], correctMove('Decrease'));
	}
	return state;
}

/**
 * Left rotation.
 * @param  {String} Facing
 * @return {String}
 */
function leftRotation(Facing) {
	switch (Facing) {
		case 'NORTH':
			return 'WEST';
		case 'SOUTH':
			return 'EAST';
		case 'EAST':
			return 'NORTH';
		case 'WEST':
			return 'SOUTH';
	}
}

/**
 * Right rotation.
 * @param  {String} Facing
 * @return {String}
 */
function rightRotation(Facing) {
	switch (Facing) {
		case 'NORTH':
			return 'EAST';
		case 'SOUTH':
			return 'WEST';
		case 'EAST':
			return 'SOUTH';
		case 'WEST':
			return 'NORTH';
	}
}

/**
 * A function for the robot to call and rotate in the correct direction.
 *
 * @param  {String} direction
 * @return {String}
 */
function correctRotation(direction) {
	return Facing =>{
		if (direction === 'LEFT') {
			return leftRotation(Facing);
		}
		if (direction === 'RIGHT') {
			return rightRotation(Facing);
		}
	};
}

/**
 * Rotates robot using correctRotation.
 * Returns old state of robot if it hasn't been placed.
 *
 * @param  {Immutable.Map} state
 * @param  {String} rotationDirection
 * @return {Immutable.Map}
 */

export function rotate(state, rotationDirection) {
	if (!state.get('currentPlace')) {
		console.log('Robot not placed on table.');
		return state;
	}
	if (rotationDirection !== 'LEFT' && rotationDirection !== 'RIGHT') {
		return state;
	}
	return state.update('Facing', correctRotation(rotationDirection));
}

/**
 * Reports the current postions of robot if it has been placed on table.
 * Updates the state to record the amount of times we have reported robots position.
 * @param  {Immutable.Map} state
 * @return {Immutable.Map}
 */

export function report(state) {
	if (!state.get('currentPlace')) {
		return state;
	}
	console.log(state.getIn(['position', 'X'])+', '+ state.getIn(['position', 'Y'])+', ' + state.get('Facing'));	
}