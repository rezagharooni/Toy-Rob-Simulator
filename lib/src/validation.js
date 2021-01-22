'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.validatePlaceValues = validatePlaceValues;

var _immutable = require('immutable');

/**
 * Check to see if number is an integer
 * @param  {int}  number
 * @return {Boolean}
 */
function notAnInteger(number) {
	if (typeof number === 'number' && number % 1 === 0) {
		return false;
	}
	console.log('Please enter valid numbers for coordinates.');
	return true;
}

function coordinateLargerThanTable(placeValues, tableSize) {
	if (placeValues.get('X') > tableSize.get('X') || placeValues.get('Y') > tableSize.get('Y')) {
		console.log('Coordinate is not on table.');
		return true;
	}
	return false;
}

function negativeNumber(placeValues) {
	if (placeValues.get('Y') < 0 || placeValues.get('X') < 0) {
		console.log('Coordinate is not on table.');
		return true;
	}
	return false;
}

/**
 * Boolean to correct position, make sure X and Y are integers
 * And are inside the table.
 * @private
 * @param  {Immutable.Map} placeValues
 * @return {Boolean}
 */
function correctPosition(placeValues, tableSize) {
	if (notAnInteger(placeValues.get('Y')) || notAnInteger(placeValues.get('X')) || negativeNumber(placeValues) || coordinateLargerThanTable(placeValues, tableSize)) {
		return false;
	}
	return true;
}

/**
 * Check that facing is a correct string.
 * @param  {Immutable.Map} placeValues
 * @return {Boolean}
 */
function correctFacing(placeValues) {
	var correctFacingValue = (0, _immutable.Map)({
		NORTH: true,
		SOUTH: true,
		EAST: true,
		WEST: true
	});
	if (correctFacingValue.has(placeValues.get('F'))) {
		return true;
	} else {
		console.log('NORTH, EAST, SOUTH or WEST please.');
	}
}

/**
 * Check to see if placeValues with the help of private validation functions.
 * @param  {Immutable.Map} placeValues
 * @return {Boolean}
 */

function validatePlaceValues(placeValues, tableSize) {
	if (!correctFacing(placeValues)) {
		return false;
	}
	if (!correctPosition(placeValues, tableSize)) {
		return false;
	}
	return true;
}