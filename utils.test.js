// utils.test.js
const { parseQueryString } = require('./utils');

// Test suite for parseQueryString
console.log('Running tests for parseQueryString...');

let testsPassed = 0;
let testsFailed = 0;

function runTest(description, testFn) {
  try {
    testFn();
    console.log(`PASS: ${description}`);
    testsPassed++;
  } catch (error) {
    console.error(`FAIL: ${description}`);
    console.error(error);
    testsFailed++;
  }
}

// 1. TypeError for non-string inputs
runTest('should throw TypeError for number input', () => {
  try {
    parseQueryString(123);
  } catch (e) {
    if (e instanceof TypeError && e.message === 'Input must be a string') {
      return; // Test passed
    }
    throw new Error(`Expected TypeError with message 'Input must be a string', but got ${e}`);
  }
  throw new Error('Expected TypeError to be thrown');
});

runTest('should throw TypeError for object input', () => {
  try {
    parseQueryString({ a: 1 });
  } catch (e) {
    if (e instanceof TypeError && e.message === 'Input must be a string') {
      return; // Test passed
    }
    throw new Error(`Expected TypeError with message 'Input must be a string', but got ${e}`);
  }
  throw new Error('Expected TypeError to be thrown');
});

runTest('should throw TypeError for null input', () => {
  try {
    parseQueryString(null);
  } catch (e) {
    if (e instanceof TypeError && e.message === 'Input must be a string') {
      return; // Test passed
    }
    throw new Error(`Expected TypeError with message 'Input must be a string', but got ${e}`);
  }
  throw new Error('Expected TypeError to be thrown');
});

runTest('should throw TypeError for undefined input', () => {
  try {
    parseQueryString(undefined);
  } catch (e) {
    if (e instanceof TypeError && e.message === 'Input must be a string') {
      return; // Test passed
    }
    throw new Error(`Expected TypeError with message 'Input must be a string', but got ${e}`);
  }
  throw new Error('Expected TypeError to be thrown');
});

// 2. Empty string input
runTest('should return an empty object for an empty string', () => {
  const result = parseQueryString('');
  console.assert(Object.keys(result).length === 0, 'Result should be an empty object');
});

// 3. Valid query string inputs
runTest('should parse a simple query string', () => {
  const result = parseQueryString('name=John&age=30');
  console.assert(result.name === 'John', 'Name should be John');
  console.assert(result.age === '30', 'Age should be 30');
});

runTest('should parse a query string with special characters', () => {
  const result = parseQueryString('email=test%40example.com');
  console.assert(result.email === 'test@example.com', 'Email should be test@example.com');
});

runTest('should parse a query string with no value for a key', () => {
  const result = parseQueryString('key=');
  console.assert(result.key === '', 'Key should be an empty string');
});

runTest('should parse a query string with multiple same keys (URLSearchParams behavior)', () => {
  const result = parseQueryString('key=value1&key=value2');
  console.assert(result.key === 'value2', 'Key should be value2 (last value)');
});

// Summary
console.log('\nTest Summary:');
console.log(`Passed: ${testsPassed}`);
console.log(`Failed: ${testsFailed}`);

if (testsFailed > 0) {
  process.exit(1); // Exit with error code if any test failed
}
