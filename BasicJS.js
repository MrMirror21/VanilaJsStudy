// Quoting Strings with Single Quotes
/*
String values in JS may be written with single or double quotes,
as long as you start and end with the same type of quote.
Unlike some other programming languages, single and double quotes work the same in JS.
*/
var doubleQuoteStr = "This is the string";
var singleQuoteStr = 'This is also a string';
/*
The reason why we might want to use one type of quote over the other is if you want to use both in a string.
This might happen if you want to save a conversation in a string and have the conversation in quotes.
Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.
*/
var conversation = 'Finn exclaims to Jake, "Algebraic!"';
/*
This becomes a problem if you need to use the outermost quotes within it.
so we use backslash as an escape character.
in <a>tag, changing outer quotes to single quotes is good for remove the escape characters. 
*/

// Find the Length of a string
var lastName = "Lovelace";
var lastNameLength = lastName.length(); // 8

// Use Bracket Notation to Find the First Character in a string
var firstName = "charles";
var firstLetter = firstname[0]; // "c"

// Understand String Immutability
var myStr = "Bob";
myStr[0] = "J"; // This can't change myStr to "Job"
// In JS, String values are immutable, which means that they cannot be altered once created.

// Array
var myAry = [];
myAry.push(1); // push the element to the last.
myAry.pop(); // removes the last element of the array and return it.
myAry.shift(); // removes the first element of the array and return it.
myAry.unshift(); // insert the element tothe first of the array.

// Global vs Local Scope in functions
var someVar = "Hat";
function myFun() {
    var someVar = "Head";
    return someVar; // returns "Head";
}
// It is possible to have both local and global variables with the same name.
// WHen you do this, the local variable takes precedence over the global variable.

// Understanding Undefined Value returned from a function
/*
A function can include return statement but it does not have to.
In the case that the function doesn't have a return statement, when you call it,
the function processes the inner code but the returned value is undefined.
*/
var sum = 0;
function addSum(num) {
    sum = sum + num;
}
addSum(3); // sum will be modified but value is undefined.

// equal/inequal operator
2 == 2 // true
2 == '2' // true
2 === 2 // true
2 === '2' // false
2 != 3 // true
2 !== 2 // false
2 !== '2' // true

// Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
    // It parses a string and returns an integer.
    // parseInt("007") => 7;
    // If the first character in the string can't be converted into a anumber, then it returns NaN.
}

// Build JS Objects
var cat = {
    "name" : "Whiskers",
    "legs" : 4,
    "tails" : 1,
    "enemies" : ["water", "dogs"]
};
/*
Objects are similar to arrays, except that instead of using indexes to access and modify their data,
you access the data in objects through what are called properties.
*/

// Accessing Object Properties with Dot Notation
/*
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
*/
var catName = cat.name; // "Whiskers"

// Accessing Object Properties with Bracket Notation
/*
If the property of the object you are trying to access has a space in its name,
you will need to use bracket notation.
ex) myObj.Space name; => X
    myObj["Space Name"]; => O
*/
var catLegs = cat["legs"];
// note that property names with spaces in them must be in quotes (single or double)

// Accessing Object Properties with Variables
/*
This can be very useful for iterating through an object's properties or when accessing a lookup table.
*/
var myCat = "name";
var myBreed = cat[myCat];
console.log(myBreed); // "Whiskers"

// Updating Object Properties
cat.name = "Happy Whiskers"; // change to "Happy Whiskers"

// Add New Properties to a JS Object
cat.paw = "Soft"; // Add new property "paw" : "Soft";

// Delete Properties from a JS Object
delete cat.paw; // delete it

// Testing Objects for Properties
cat.hasOwnProperty("name"); // True
cat.hasOwnProperty("color"); // False

// Generate Random Fractions with JS
randomNum = Math.random(); // return a random decimal number between 0(inclusive) and not quite up to 1(exclusive)
randomRoundNum = Math.floor(randomNum); // round the value down to the nearest whole number.

// Use the parseInt Function with a Radix
function convertToIntergerRadix(str) {
    return parseInt(str, 2);
    // The radix variable in parseInt specifies the base of the number in the string.
    // The radix can be an integer between 2 and 36.
    // parseInt("11", 2) => 3
}

// Use the conditinal (Ternary) Operator
function findGreaterIfElse(a, b) {
    if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}

function findGreaterOperator(a, b) {
    return a > b ? "a is greater" : "b is greater";
    // Exactly same consequences.
    // Form:
    // (condition) ? (consequence A(True)) : (consequence B(False));
}

// Use Multiple Conditional (Ternary) Operators
function findGreaterOrEqualIfElse(a, b) {
    if (a === b) {
        return "a and b are equal";
    }
    else if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}

function findGreaterOrEqualOperator(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
    // We can use condition 1 ? consequence 1 : else, condition 2 ? consequence 2 : consequence 3;
}

// Use Recursion to Create a Countdown
function countdown(n) {
    if (n < 1) {
        return [];
    }
    else {
        const countArray = countdown(n -1)
        countArray.unshift(n);
        return countArray;
    }
}

// Use Recursion to create a range of numbers
function rangeOfNumbers(startNum, endNum) {
    var i = startNum;
    if (i > endNum) {
        return [];
    }
    else {
        const rangeArray = rangeOfNumbers(i + 1, endNum)
        rangeArray.unshift(i);
        return rangeArray;
    }
}