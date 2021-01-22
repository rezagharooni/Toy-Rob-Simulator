export function place(position){
    return{
        type: 'PLACE',
        position: position
    };
}

export function move() {
	return {
		type: 'MOVE'
	};
}

export function rotate(direction) {
	return {
		type: 'ROTATE',
		direction: direction
	};
}

export function report() {
	return {
		type: 'REPORT'
	};
}