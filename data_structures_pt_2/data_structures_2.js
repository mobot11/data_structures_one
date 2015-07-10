function unique(array) {
	var obj = {};
	var arr = [];
	var newArray = [];
	for(var i = 0; i<array.length; i++) {
		var item = array[i];
		if (obj[item] !== array[i]) {
			obj[item] += 1;
		};
	};
	for(var key in obj){
		newArray.push(key);
	};
	return newArray;
}
function frequency2(array) {
	var obj = {};
	var arr = [];
	var winArray =[];
	for (var i = 0; i < array.length; i ++) {
		if(typeof array[i] !== 'string') {
			console.log('error, function only works on strings');
			return false;
		}
    var word = array[i];
    for(var j = 0; j < word.length; j ++) {
    	var key = word[j];
    	if(!obj[key]) {
    		obj[key] =0;
    		
    	}
    	obj[key] ++;
    }
	}
	  for (var letter in obj) {
	  	arr.push(obj[letter]);
  }
  var winner = Math.max.apply(Math, arr);
   for (var key in obj) {
   	if(obj[key] === winner) {
   		winArray.push(key);
   	}
  }
  return winArray;
}






exports.unique = unique;
exports.frequency2 = frequency2;


