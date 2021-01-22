import makeStore from './src/store';
import {handleCommand} from './src/parser';
import 'colors';
const readline = require('readline')
.createInterface({
	input: process.stdin,
	output: process.stdout
});
const store = makeStore();

//Seriess of console logs to give the user information on the robot simulator.//
console.log('Toy Robot Simulator.'.red.bold);
console.log('');
console.log('Valid commands are:'.bold);
console.log('PLACE X,Y,F'.bold.underline);
console.log('Example = "PLACE 1,2,EAST"'.blue.bold);
console.log('Where X = x coordinate, Y = y coordinate and F = facing... either NORTH, SOUTH, WEST or EAST');
console.log('MOVE'.bold.underline);
console.log('Moves robot one unit in its facing direction');
console.log('LEFT'.bold.underline);
console.log('Rotates robot 90 degrees to the left');
console.log('RIGHT'.bold.underline);
console.log('Rotates the robot 90 degrees to the right');
console.log('REPORT'.bold.underline);
console.log('The robot will give the current position and facing of robot');

console.log();
console.log('-------------------------------------------------------------------------------------------------');
console.log();
console.log('You need to place the robot on a 5x5 square tabletop.');
console.log('Remember the robot intelligence is high and will not respond to moves causing him to fall off the tabletop.');
console.log('The robot also won\'t listen to any commands if you haven\'t placed him on the table.');
console.log('The robot will tell you if you haven\'t placed him or try and make him walk off the edge.');
console.log();

function handleLineInput(input) {       //funtion to handle user's input into console
	var action = handleCommand(input);  //parses users comment to create an action
	action.forEach(store.dispatch);
	readline.prompt();     
}

readline.on('line', handleLineInput).on('close', function () {
	console.log('Thanks for playing');  // exits simulator
	process.exit(0);
}).setPrompt('Robot> ');
readline.prompt();
