import {difference} from './difference';

describe('difference function', () => {
  test('should return the correct difference for arrays', () => {
    const arrA = [1, 2, 3, 4];
    const arrB = [3, 4, 5, 6];
    const result = difference(arrA, arrB);

    expect(result).toEqual(new Set([1, 2]));
  });

  test('should return the correct difference for sets', () => {
    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([3, 4, 5, 6]);
    const result = difference(setA, setB);

    expect(result).toEqual(new Set([1, 2]));
  });

  test('should return an empty set when both inputs are empty arrays', () => {
    const result = difference([], []);

    expect(result).toEqual(new Set());
  });

  test('should return the first set when the second set is empty', () => {
    const arrA = [1, 2, 3];
    const result = difference(arrA, []);

    expect(result).toEqual(new Set(arrA));
  });

  test('should throw TypeError when inputs are neither set nor array', () => {
    expect(() => {
      difference({}, {});
    }).toThrow(TypeError);

    expect(() => {
      difference(123, 456);
    }).toThrow(TypeError);
  });
});
