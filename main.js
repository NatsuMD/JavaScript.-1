"use strict";
console.log("ДЗ2");

var a = -3;
var b = -6;

alert("a = " + a + ", b = " + b);

if ((a >=0)&&(b>=0)) {
	console.log(a-b);
} else if ((a<0)&&(b<0)) {
	console.log(a*b);
} else {
	console.log(a+b);
}

console.log("\n");

a = randomInteger (0, 15);
alert("Теперь a = " + a);

//Вывод от a до 15 РАВНОВЕРОЯТНЫЙ (всм, в рандоме может выпасть что 0, что 15, задание включает квадратные скобки, значит включительно)
switch(a) {
case 0: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 1: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 2: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 3: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 4: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 5: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 6: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 7: 
	for (a; a<=15; a++) {
		console.log(a);
	}	
	break;
case 8: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 9: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 10: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 11: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 12: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
case 13: 
	for (a; a<=15; a++) {
		console.log(a);
	}	
	break;
case 14: 
	for (a; a<=15; a++) {
		console.log(a);
	}	
	break;							
case 15: 
	for (a; a<=15; a++) {
		console.log(a);
	}
	break;
}

console.log("\n");

var c = plus (5,6);
console.log(c);
c = minus (5,6);
console.log(c);
c = del (5,6);
console.log(c);
c = ymnoz (5,6);
console.log(c);

console.log("\n");

var d = mathOperation (3,6,'сложение');
console.log(d);
d = mathOperation (3,6,'вычитание');
console.log(d);
d = mathOperation (3,6,'умножение');
console.log(d);
d = mathOperation (3,6,'деление');
console.log(d);

console.log("\n");

var e = power (5,5);
console.log(e);


function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function plus(x, y) {
    return x + y;
}

	function minus(x, y) {
    return x - y;
}

	function del (x, y) {
    return x / y;
}

	function ymnoz (x, y) {
    return x * y;
}

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 'сложение':
		return arg1 + arg2;
		break;
		case 'вычитание':
		return arg1 - arg2;
		break;
		case 'умножение':
		return arg1 * arg2;
		break;
		case 'деление':
		return arg1 / arg2;
		break;
	}
}

function power(val, pow) {
	if (pow != 1) { 
    return val * power(val, pow - 1);
  } else {
    return val;
  }
}