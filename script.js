// -------1---------

function greeting() {
  console.log("Hello World");
}
greeting();

// -------2---------

function getSum(a, b) {
  return a + b;
}
console.log(getSum(5, 8));

// -------3---------

let str = "Lesson";
function getStrLength(arg) {
  return arg.length;
}
console.log(getStrLength(str));

// -------4---------

let c = "hello";
let d = "how are you?";

function getStrLength2(a, b) {
  return a + ", " + b;
}

console.log(getStrLength2(c, d));

// -------5---------

let num = 3257;

function getNum(arg) {
  return arg;
}
let result = getNum(num);
console.log(result);

// -------6---------

function capLetters(arg) {
  return arg.toUpperCase();
}
console.log(capLetters("bitcamp"));

// -------7---------

function capLetters2(arg) {
  return arg.toLowerCase();
}
console.log(capLetters2("GREETING"));

// -------8---------
let num1 = 342;
let num2 = 20;

function sumNumbers(a, b) {
  return a % b;
}

console.log(sumNumbers(num1, num2));

// -------9---------

let yourName = "Sandro";

function getYourName(arg) {
  return "Hello " + arg;
}

console.log(getYourName(yourName));

// -------10---------

let num3 = 190;
let num4 = 90;

function getNum2(a, b) {
  return a - b;
}

console.log(getNum2(num3, num4));

// -------11---------

let num5 = 33;

function evenOrOdd(arg) {
  if (arg % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrOdd(num5);

// -------12---------

function getTypeOf(arg) {
  if (arg < 0) return "a negative number";
  if (arg > 0) return "a positive number";
  else return "zero";
}
console.log(getTypeOf(-5));

// -------13---------

function checkNumber(a, b) {
  if (a % b === 0) {
    return true;
  } else return false;
}

console.log(checkNumber(7, 3));

// -------14---------

function emptyOrNot(arg) {
  if (arg.length == 0) return "no string length";
  else return arg.length;
}
console.log(emptyOrNot(""));

// -------15---------

let str5 = "I’ll think about it tomorrow.";

function checkWord(arg) {
  if (arg.includes("about")) {
    return true;
  } else return false;
}
console.log(checkWord(str5));


// -------16---------

function minOrMax(a, b) {
  return Math.min(a, b);
}
console.log(minOrMax(9, 3));



