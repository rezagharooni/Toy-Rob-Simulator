'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports.place = place;
exports.move = move;
exports.rotate = rotate;
exports.report = report;


function place(position){
    return{
        type: 'PLACE',
        position: position
    };
}

function move() {
	return {
		type: 'MOVE'
	};
}

function rotate(direction) {
	return {
		type: 'ROTATE',
		direction: direction
	};
}

function report() {
	return {
		type: 'REPORT'
	};
}