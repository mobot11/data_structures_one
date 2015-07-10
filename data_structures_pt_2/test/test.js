var expect = require('chai').expect;
var unique = require('../data_structures_2').unique;
var frequency2 = require('../data_structures_2').frequency2;

var myArray = ['a', 'a', 'b', 'c', 'c', 'd'];

var myArray2 = ['fish', 'antonio', 'cat', 'jabroni', 'fabio'];

describe('unique', function() {
	it('should take array and return it without duplicates', function (){
		expect(unique(myArray)).to.eql(['a', 'b', 'c', 'd']);
	});
});

describe('frequency2', function() {
	it('should take array of strings and give most popular letters', function() {
		expect(frequency2(myArray2)).to.eql(['i', 'a', 'o']);
	});
});