/*
String Operators: Use what you have learned about strings and string operators
to complete the steps below.

Implement solutions to the following problems so that all test specs pass when
you run the following command in your terminal:
npm test test/03-string-operators-spec.js
*/

// 1. Define a function called shortHandStr that takes in a string parameter.
//    Return the first and last letter of the string as one uppercase string
//    to create a short hand version of the string.
//    Eg: If the input string is 'hello', then the function should return 'HO'


function shortHandStr(string){

  let firstLetter = string[0].toUpperCase();
  let lastLetter = string[string.length - 1].toUpperCase();
  // console.log(firstLetter, lastLetter);

  // return firstLetter + lastLetter;
  return string[0].toUpperCase() + string[string.length - 1].toUpperCase();
}

// console.log(shortHandStr('hello'));// 'HO'

// 2. Define a function called makeFirstLowerCased that takes in two string
//    parameters. The first parameter is a string to modify, the second, a
//    one-character string. The function should return a version of the first
//    parameter where the first instance of the second parameter's character is
//    in lower case.
//    E.g.: If the first parameter is "HELLO" and the second parameter is "L",
//    then the function should return "HElLO".

//    HINT: Research the following String operators on MDN:
//      * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//      * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

function makeFirstLowerCased(string, char) {

  // console.log(string, char);
  const index = string.indexOf(char);
  // console.log(index);// 2
  const firstHalf = string.substring(0, index);
  const secHalf = string.substring(index + 1);
  // console.log(firstHalf + char.toLowerCase() + secHalf);

  return firstHalf + char.toLowerCase() + secHalf;
}
// console.log(makeFirstLowerCased("HELLO", "L"));// HE l LO
//    Write your own tests for makeFirstLowerCased that print the function's
//    return value to the terminal.

//    Run the following command in the terminal to run this file and see the
//    messages printed to the terminal:
//    node problems/03-string-operators.js


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const exportObj = {};
try {
  exportObj.shortHandStr = shortHandStr;
} catch {}
try {
  exportObj.makeFirstLowerCased = makeFirstLowerCased;
} catch {}

module.exports = exportObj;
