// Write a function called `countOccurrences()` that takes in a string and a character and returns the number
//  of occurrences of that character in the string.

/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
//  Constraints
// - Lowercase and uppercase characters are considered different characters. If you want,
// you can make the function case insensitive

const countOccurrences = (str, char) => {
  let count = 0;
  str.split('').forEach((currentChar) => {
    if (currentChar === char) {
      count++;
    }
  });

  return `The number of occurrences in this string is ${count}`;
};

console.log(countOccurrences('dooooog', 'o'));
// 1 more way
const countOccurrences1 = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return `The number of occurrences in this string is ${count}`;
};

console.log(countOccurrences1('dooooog', 'o'));

// shorter way

const countOccurrences2 = (str, char) => str.split(char).length - 1;
console.log(countOccurrences2('dooooog', 'o'));
