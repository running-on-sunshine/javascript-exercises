// ======================================================================= //
//                        JavaScript 102 Exercises                         //
// ======================================================================= //

// Start below:

// ======================================================================= //
//                              Print Numbers                              //
// ======================================================================= //

// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line:

//====================================================//
//              Print Numbers : For Loop              //
//====================================================//

var printNumbers = function (num1, num2) {
    var count; 
    for (count = num1; count <= num2; count++) {
        console.log(count); 
    }
};

var num1 = 1;
var num2 = 10;

printNumbers(num1, num2);

//====================================================//
//             Print Numbers : While Loop             //
//====================================================//

var printNumbers = function (num1, num2) {
    while (num1 <= num2) {
        console.log(num1);
        num1++;
    }
};

var num1 = 1;
var num2 = 10;

printNumbers(num1, num2);


// ======================================================================= //
//                              Print a Square                             //
// ======================================================================= //

// Write a function printSquare which is given a size and
// prints a square of that size using asterisks.

var printSquare = function (size) {
    for (var i = 0; i < size; i++) {
        var str = '';

        for (var j = 0; j < size; j++) {
            str += '*';
        }
        console.log(str);
    }
};

var size = 5;

printSquare(size);

// ======================================================================= //
//                              Print a box                                //
// ======================================================================= //

var printBox = function (width, height) {
    for (var i = 0; i < height; i++) {
        var str = '';

        for (var j = 0; j < width; j++) {
            if (i === 0 || j === 0 || i === (height-1) || j === (width-1)) {
                str += '*';
            }
            else {
                str += ' ';
            }
        }
        console.log(str);
    }
};

var width = 6;
var height = 4;

printBox(width, height);

// ======================================================================= //
//                             Factor a Number                             //
// ======================================================================= //

// Write a function factors which is given a number and returns an array 
// containing all its factors.

var factors = function (num) {
    var factorsList = [];
    var count = 1;
    
	while (count <= num) {
		if (num % count == 0) {
			factorsList.push(count);
		}
		count++;
    }
	return factorsList;	
};

var num = 10;

var printFactors = factors(num);

console.log(printFactors);

// ======================================================================= //
//                                Leetspeak                                //
// ======================================================================= //

// Write a function leetspeak which is given a string, and returns the 
// leetspeak equivalent of the string. 

// To convert text to its leetspeak version, make the following substitutions:

// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7

var leetSpeak = function (str) {

    var str = str.toLowerCase();

    str = str.replace(/a/, 4);
    str = str.replace(/e/, 3);
    str = str.replace(/g/, 6);
    str = str.replace(/i/, 1);
    str = str.replace(/o/, 0);
    str = str.replace(/s/, 5);
    str = str.replace(/t/, 7);

    return str;
};

// ------------- Test cases:---------------

var str = 'Leet';
var str = 'Hello, friend!';

var convertToLeet = leetSpeek(str);

console.log(convertToLeet);

// ======================================================================= //
//                            Long-long Vowels                             //
// ======================================================================= //

// Write a function, which is given a string, return the result of extending
// any long vowels to the length of 5.

var longLongVowels = function (str, number) {
    var str;

    str = str.replace(/aa/, 'a'.repeat(number));
    str = str.replace(/ee/, 'e'.repeat(number));
    str = str.replace(/ii/, 'i'.repeat(number));
    str = str.replace(/oo/, 'o'.repeat(number));
    str = str.replace(/uu/, 'u'.repeat(number));

    return str;
  };

// ------------- Test cases:---------------

// var str = 'Good';
var str = 'Cheese';
// var str = 'Man';

var number = 5;
var extendedVowels = longLongVowels(str, number);

console.log(extendedVowels);

// ======================================================================= //
//                             Sum the numbers                             //
// ======================================================================= //

// Write a function sumNumbers which is given an array of numbers 
// and returns the sum of the numbers.

var sumNumbers = function (numList) {
    var sum = 0;
    for (var i = 0; i < numList.length; i++) {
        sum += numList[i];
    }
    return sum;
};

var numList = [1, 4, 8];

var printSum = sumNumbers(numList);

console.log(printSum);

// ======================================================================= //
//                           Just the positives                            //
// ======================================================================= //

// Write a function positiveNumbers which is given an array of numbers 
// and returns a new array containing only the positive numbers within 
// the given array.

var positiveNumbers = function (numList) {
    var newNumList = [];

    for (i = 0; i < numList.length; i++) {
        if (numList[i] >= 0) {
            newNumList.push(numList[i]);
        }
    }
    return newNumList;
  };

  // ---------------- Test cases: -----------------

  var numList = [1, -3, 5, -3, 0];
  var numList = [1, 2, 3];
  var numList = [-1, -2, -3];

  var printPositives = positiveNumbers(numList);

  console.log(printPositives);