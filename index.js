// VARIABLES

let numbers = 7; //number
let name = "Lummy"; //string
let isOkay = true; //boolean
let isEmpty = undefined; //undefined
let isNull = null; //null

numbers = "Lee";
numbers = 10;

// console.log("Value: " + numbers);
// console.log("Type: " + typeof numbers);

// -------------------------------
let results;

function squareNumbers(num1) {
  results = num1 * num1;
  console.log(results);
}

// squareNumbers(10);
// squareNumbers(5);
// squareNumbers(17);
// squareNumbers(100);

let anotherName = "Coder";
anotherName = "computer";

function greetings(time) {
  let anotherNumber = 20;
  anotherNumber = 28;
  console.log(anotherNumber);

  console.log("Hello, " + time);
}
// greetings("Morning");
// greetings("afternoon");
// greetings("Evening");

// IF EVEN OR ODD

// CALCULATOR

function calculator(num1, operator, num2) {
  let result;
  if ((operator = "+")) {
    result = num1 + num2;
  } else if ((operator = "-")) {
    result = num1 - num2;
  } else if ((operator = "*")) {
    result = num1 * num2;
  } else if ((operator = "/")) {
    result = num1 / num2;
  } else {
    console.log("Invalid Operator");
  }
}

calculator(1, "+", 10);
