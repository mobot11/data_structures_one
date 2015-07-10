var expect = require("chai").expect;
var pop = require('../data_structures_one.js').pop;
var pushMultiple = require('../data_structures_one.js').pushMultiple;
var push = require('../data_structures_one.js').push;
var unshift = require('../data_structures_one.js').unshift;
var shift = require('../data_structures_one.js').shift;


var myArray = ['dog', 'cat', 'rat'];
var array2 = ['dan', 'stan', 'ran'];
var array3 = ['dog', 'cat', 'rat'];
var array4 = ['dog', 'cat', 'rat'];
var array5 = ['dog', 'cat', 'rat'];
var array6 = ['dog', 'cat', 'rat'];

var poppedArray = pop(array2);




describe('pop', function() {
	it('should remove & return last element from array', function() {
		expect(pop(myArray)).to.eql('rat');
	});
});

describe('poppedArray', function() {
	it('should equal dan, stan',function () {
		expect(array2).to.eql([ 'dan', 'stan' ]);
	});
});

describe('pushMultiple', function() {
	it('should append n number of elements onto array and return 5', function() {
		expect(pushMultiple(array3,'charlie', 'barley')).to.eql(5);
	});
});

describe('array3', function() {
	it('should equal dog, cat, rat ,charlie, barley', function() {
		expect(array3).to.eql([ 'dog', 'cat', 'rat', 'charlie', 'barley']);

	});
});

describe('push', function() {
	it('should add value onto array & return length', function() {
		expect(push(array4, 'dan')).to.eql(4) && expect(array4).to.eql(['dog', 'cat', 'rat', 'dan']);
	});
});

describe('unshift', function() {
	it('should add value onto beggining of array & return length', function() {
		expect(unshift(array5, 'dan')).to.eql(4) && expect(array5).to.eql(['dan', 'dog', 'cat', 'rat']);
	});
});

describe('shift', function() {
	it('should remove & return first element from array', function() {
		expect(shift(array6)).to.eql('dog') && expect(array6).to.eql(['cat', 'rat']);
	});
});






