// Challenge: Title Case
// Write a function called `titleCase` that takes in a string and returns the string with the first
//letter of each word capitalized.

/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */

let str = 'hello i love cooding';

// for loop solution

const titleCase = (str) => {
  const words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
};

console.log(titleCase(str));

// for each solution

const titleCase1 = (str) => {
  let result = [];
  str
    .toLowerCase()
    .split(' ')
    .forEach((word) => {
      result.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
  return result.join(' ');
};

console.log(titleCase1(str));

//very short way that brad gave
function titleCase2(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
console.log(titleCase2(str));

// In this example, we are using the replace method to find the first letter of each word and replace it with the uppercase version of itself.

// The regex `/\b\w/g` matches the first letter of each word.

// - `\b` matches the word boundary
// - `\w` matches the first letter of each word
// - The `g` flag is used to replace all occurrences of the regex in the string

// The second argument is a callback function that returns the uppercase version of the matched letter.

// </details>
