import {place, rotate, move, report} from './createActions.js';

/**
 * Handles singlecommand
 * @param  {string} command
 * @return {Array}
 */
function handleSingleCommand(command) {
	if (command === 'LEFT' || command === 'RIGHT') {
		return [rotate(command)];
	}
	if (command === 'REPORT') {
		return [report()];
	}
	if (command === 'MOVE') {
		return [move()];
	}
	console.log('I dont know what that means..');
	return [];
}

/**
 * Returns  action for when user inputs PLACE command.
 * If action isnt PLACE or we have less than three arguments return null.
 * The validation of the arguments is handled by the reducer.
 *
 * @param  {String} command
 * @return {Array}
 */
function handleCommandWithArguments(command) {
	const [actionType, actionArguments] = command.split(' '),
		  [X,Y,F] = actionArguments.split(',');
	if(actionType === 'READ'){
		return handleReadCommand(actionArguments)
		.map(handleCommand)
		.reduce((acc, val)=> {
  			return acc.concat(val);
		}, []);
	}

	if (actionType !== 'PLACE' || actionArguments.split(',').length !== 3) {
		console.log('Are you attempting to PLACE me?');
		return [];
	}
	return [(place)({
		X: parseInt(X, 10),
		Y: parseInt(Y, 10),
		F: F
	})];
}

/**
 * handleCommand
 * @param  {string} input
 * @return {Array}
 */

export function handleCommand(input) {
	const command = input.toUpperCase().trim(),
	    actionWithArguments = command.split(' ').length > 1;
	if (actionWithArguments) {
		return handleCommandWithArguments(command);
	}
	return handleSingleCommand(command);
}