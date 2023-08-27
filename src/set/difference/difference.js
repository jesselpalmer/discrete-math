/**
 * Validates if the provided input is of type Set or Array.
 * Throws a TypeError if validation fails.
 *
 * @param {Set|Array} input - The data to be validated.
 * @param {string} paramName - The name of the parameter (for error messaging).
 * @throws {TypeError} - If the input is neither a Set nor an Array.
 */
const validateInputType = (input, paramName) => {
  if (!(input instanceof Set || Array.isArray(input))) {
    throw new TypeError(
      `Input ${paramName} should be either a Set or an Array`,
    );
  }
};

/**
 * Converts the given input to a Set. If it's already a Set, it returns the
 * input as is.
 *
 * @param {Set|Array} input - The data to be converted.
 * @return {Set} - The converted Set.
 */
const toSet = (input) => (input instanceof Set ? input : new Set(input));

/**
 * Returns the difference between two sets or arrays.
 * The result contains all elements that are in 'a' but not in 'b'.
 *
 * @param {(Set|Array)} a - The first set or array.
 * @param {(Set|Array)} b - The second set or array, from which elements will be
 *  subtracted.
 * @return {Set} - A new set containing elements that are in 'a' but not in
 *  'b'.
 * @throws {TypeError} - If the inputs are neither a Set nor an Array.
 */
export const difference = (a, b) => {
  validateInputType(a, 'a');
  validateInputType(b, 'b');

  const setA = toSet(a);
  const setB = toSet(b);

  const setAList = [...setA];
  const filteredList = setAList.filter((element) => !setB.has(element));

  return new Set(filteredList);
};
