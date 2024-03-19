// # Challenge: Calculator

// ## Instructions

// Write a function called `calculator` that takes in 2 numbers and an operator and returns the result of the calculation.

// ### Function Signature

/**
 * Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.
 */
// ### Constraints

// - The function must return a number
// - The function must throw or log an error if an invalid operator is given

// ### Hints

// - You can use `if` statements or `switch` statements to determine which operator was given.

const Calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('Invalid Operator');
  }
  return result;
};

console.log(Calculator(80, 20, '+'));
console.log(Calculator(80, 20, '-'));
console.log(Calculator(80, 20, '*'));
console.log(Calculator(80, 20, '/'));
