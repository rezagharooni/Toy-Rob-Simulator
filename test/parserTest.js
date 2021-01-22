import {expect} from 'chai';
import {handleCommand} from '../src/parser';

describe('Parser:', () => {

	it('It can handle LEFT COMMAND', () => {
		 expect(handleCommand('LEFT')).to.deep.equal([{type: 'ROTATE', direction: 'LEFT'}]);
	});
	it('It can handle RIGHT COMMAND', () => {
		expect(handleCommand('RIGHT')).to.deep.equal([{type: 'ROTATE', direction: 'RIGHT'}]);
	});
	it('It can handle REPORT COMMAND', () => {
		expect(handleCommand('REPORT')).to.deep.equal([{type: 'REPORT'}]);
	});
	it('It can handle MOVE COMMAND', () => {
		 expect(handleCommand('MOVE')).to.deep.equal([{type:'MOVE'}]);
	});

	it('It can handle PLACE COMMAND', () => {
		expect(handleCommand('PLACE 1,3,NORTH')).to.deep.equal([{
			type:'PLACE',
			position:{
				X:1, Y:3, F:'NORTH'
			}
		}]);
	});

	it('It doesnt read empty string', () => {
		expect(handleCommand('READ ').length).to.not.be.ok

	it('Handles lower case commands', () => {
		expect(handleCommand('move')).to.deep.equal([{type:'MOVE'}]);
	});
	it('Trims trailing spaces', () => {
		expect(handleCommand(' right ')).to.deep.equal([{type: 'ROTATE', direction: 'RIGHT'}]);
	});
	it('Ignores other words', () => {
		expect(handleCommand('hello').length).to.not.be.ok;
	});
	it('Ignores PLACE command with only two arguments', () => {
		expect(handleCommand('PLACE 1,3').length).to.not.be.ok;
	});

    
});
});
