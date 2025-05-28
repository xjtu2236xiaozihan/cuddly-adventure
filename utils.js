// utils.js
function parseQueryString(str) {
  return Object.fromEntries(new URLSearchParams(str))
}
