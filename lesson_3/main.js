"use strict";
console.log ("ДЗ3");

//1
var arr = [];
var n = 100;
var i = 0;
var j = 0;
for (i; i < 101; i++) {
	arr.push (i);
}

while (j < 101) {
	if (arr[j] % 2 != 0) {
		console.log (arr[j]);
	}
	j++;
}

//2
var a = 0
do {
	if (a == 0) {
		console.log(a, "- это ноль");
	} else if (a % 2 ==0){
		console.log(a, "- это четное число");
	} else {
		console.log(a, "- это нечетное число");
	}
	a++;
}
while (a < 10);

//3
for (var x = 0; x < 10; console.log (x++));

//4
var arr = [];
var k = 0;
while (k < 20) {
	k++;
	arr.push('x');
	console.log(arr);
}