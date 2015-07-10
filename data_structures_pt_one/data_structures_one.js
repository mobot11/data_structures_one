function pop(array) {
	var arg = array[array.length-1];
	delete array[array.length-1];
	array.length -= 1;
	return arg;
	}

function pushMultiple(array,arg1, arg2) {
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args);
  for (var i=0; i < args.length; i++) {
  	array[array.length] = args[i];
  }
	return array.length;
}

function push(array,arg) {
	array[array.length] = arg;
	return array.length;
}

function unshift(array, item) {
	var array = array;
	for (var i = array.length - 1; i >= 0; i--) {
		array[i+1] = array[i];
	};
	array[0] = item;
	return array.length;
}

function shift(array) {
	var arg = array[0]
	for(var i = 0; i<array.length; i++) {
		array[i] = array[i+1];
	}
	array.length--;
	return arg;
}
var array6 = ['dog', 'cat', 'rat'];
shift(array6);
console.log(array6);



exports.pushMultiple = pushMultiple;
exports.pop = pop;
exports.push = push;
exports.unshift = unshift;
exports.shift = shift;
