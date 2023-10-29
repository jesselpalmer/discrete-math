// Assuming getPrimeNumbers is in your_module.js

import getPrimeNumbers from './get-prime-numbers.js';

describe('getPrimeNumbers', () => {
  it('should return an empty array for 0', () => {
    expect(getPrimeNumbers(0)).toEqual([]);
  });

  it('should return all prime numbers up to 7', () => {
    expect(getPrimeNumbers(7)).toEqual([2, 3, 5, 7]);
  });

  it('should return all prime numbers up to 10', () => {
    expect(getPrimeNumbers(10)).toEqual([2, 3, 5, 7]);
  });

  it('should return an empty array for negative numbers', () => {
    expect(getPrimeNumbers(-5)).toEqual([]);
  });
});
