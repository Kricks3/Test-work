var arrFirst = [-90, 3, 19, -15, 0, 22, 66, -33, 4, -1];

var a = -100;
var key = 0;
arrFirst.forEach(function(item, i, arrFirst) {
	if (a < arrFirst[i]) { 
		a = arrFirst[i];
	}

});
console.log('maxElement ' + a + ' index ' + arrFirst.indexOf(a));

arrFirst.forEach(function (item,i,arrFirst) {
	if (a>arrFirst[i])
		a = arrFirst[i];
}); 

console.log('minElement ' + a + ' index ' + arrFirst.indexOf(a));

arrFirst.sort(function(a,b) {
	if (a > b) return 1;
  	if (a < b) return -1;
});
console.log(arrFirst);
arrFirst.reverse();
console.log(arrFirst);

var result = arrFirst.reduce(function(sum, current) {
	return sum + current;
}, 0);
console.log(result);



var n = 10,
	arr = [],
	a = -100;
	b = 100;
for (var i = 0; i < n; i++) {
	arr[i] = Math.floor((b - a) * Math.random() - a);
}