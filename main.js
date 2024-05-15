// Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.culator
var num1 = 30;
var num2 = 20;
var operator = "+";
function calculator(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    }
    else if (operator == "-") {
        return num1 - num2;
    }
    else {
        return "invalid operator";
    }
}
console.log("Result", calculator(num1, num2, operator));
//update the operator
operator = "-";
console.log("Result", calculator(num1, num2, operator));
