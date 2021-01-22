'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports.handleCommand = handleCommand;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _action_creatorsJs = require('./createActions.js');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

/**
 * Handles singlecommand
 * @param  {string} command
 * @return {Array}
 */
function handleSingleCommand(command) {
	if (command === 'LEFT' || command === 'RIGHT') {
		return [(0, _action_creatorsJs.rotate)(command)];
	}
	if (command === 'REPORT') {
		return [(0, _action_creatorsJs.report)()];
	}
	if (command === 'MOVE') {
		return [(0, _action_creatorsJs.move)()];
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
	var _command$split = command.split(' ');

	var _command$split2 = _slicedToArray(_command$split, 2);

	var actionType = _command$split2[0];
	var actionArguments = _command$split2[1];

	var _actionArguments$split = actionArguments.split(',');

	var _actionArguments$split2 = _slicedToArray(_actionArguments$split, 3);

	var X = _actionArguments$split2[0];
	var Y = _actionArguments$split2[1];
	var F = _actionArguments$split2[2];

	
	if (actionType !== 'PLACE' || actionArguments.split(',').length !== 3) {
		console.log('Are you trying to PLACE me?');
		return [];
	}
	return [(0, _action_creatorsJs.place)({
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

function handleCommand(input) {
	var command = input.toUpperCase().trim(),
	    actionWithArguments = command.split(' ').length > 1;
	if (actionWithArguments) {
		return handleCommandWithArguments(command);
	}
	return handleSingleCommand(command);
}