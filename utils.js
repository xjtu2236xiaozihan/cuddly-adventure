// utils.js

/**
 * Parses a query string into an object.
 *
 * @param {string} str The query string to parse.
 * @returns {object} An object containing the key-value pairs from the query string.
 * @throws {TypeError} If the input is not a string.
 */
function parseQueryString(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (str === '') {
    return {};
  }
  return Object.fromEntries(new URLSearchParams(str));
}

module.exports = { parseQueryString };
