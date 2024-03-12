/**
 * A function to reverse a string.
 * @param {string} str - The input string to be reversed.
 * @returns {string} - The reversed string.
 */
const reverseString = (str) => {
  return [...str].reverse().join('')
}

// Exporting the function as default so it can be imported in other modules
export default reverseString
