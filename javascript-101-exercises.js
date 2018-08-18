// ======================================================================= //
//                        JavaScript 101 Exercises                         //
// ======================================================================= //

// Start below:

// ======================================================================= //
//                              Hello, you!                                //
// ======================================================================= //

// Write a function hello which given a name, says hello to the name.

var hello = function(name) {
    console.log(`Hello ${name}!`);
};

var name = 'Mustache';

hello(name);

// ======================================================================= //
//                          Hello, you! Part 2                             //
// ======================================================================= //

// Modify your hello program such that if no name is given: 

// hello(), it will print "Hello, world!", otherwise it behaves the 
// same as previously.

var hello = function(name) {
    if (name === "") {
        console.log('Hello, world!');
    }
    else {
        console.log(`Hello ${name}!`);
    };
};

var name;

hello(name);

// ======================================================================= //
//                               Madlib                                    //
// ======================================================================= //

// Write a madlib function, which is given a name and a subject.

// It will return(not print) a new string: 
// (name)'s favorite subject in school is (subject).

var madlib = function(name, subject) {
    var sentence = '\'s favorite subject in school is ';
    var period = '.';
    return (name + sentence + subject + period);
};

madlib('Anushka', 'art');

// ======================================================================= //
//                    Madlib w/ String Interpolation                       //
// ======================================================================= //

var madlib = function(name, subject) {
    return (`${name}'s favorite subject in school is ${subject}.`);
};

madlib('Anushka', 'art');

// ===================================================================== //
//                           Tip Calculator                              //
// ===================================================================== //

// Calculates the 'Tip Amount' based on the 'Level of Service'

// Level of service based on below:

// good -> 20%
// fair -> 15%
// bad -> 10%

var tipAmount = function(bill, service) {
    var tip;

    if (service === 'good') {
        tip = bill * 0.20;
    } 
    else if (service === 'fair') {
        tip = bill * 0.15;
    } 
    else if (service === 'bad') {
        tip = bill * 0.10;
    };

    return tip;
};

tipAmount(100, 'good');

tipAmount(40, 'fair');

// ===================================================================== //
//                           Tip Calculator 2                            //
// ===================================================================== //

// Calculates the 'Total Amount' after adding the 'Tip Amount'           

var totalAmount = function(bill, service) {
    return bill + tipAmount(bill, service);
};

totalAmount(100, 'good');

totalAmount(40, 'fair');

// ===================================================================== //
//                           Tip Calculator 3                            //
// ===================================================================== //

// Calculates the 'Split Amount' when dining with 'x' Amount of People

var splitAmount = function(bill, service, people) {
    return totalAmount(bill, service) / people;
};

splitAmount(100, 'good', 5);

splitAmount(40, 'fair', 2);