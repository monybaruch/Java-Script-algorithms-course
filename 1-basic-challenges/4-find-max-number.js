// # Challenge: Find Max Number

// ## Instructions

// Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.

// ### Function Signature

/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
//long way

arr = [1, 2, 3, 4, 5, 6, 7];
const findMaxNumber = (arr) => {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
};

console.log(findMaxNumber(arr));

//short way

const findMaxNumber1 = (arr) => Math.max(...arr);

console.log(findMaxNumber1(arr));
