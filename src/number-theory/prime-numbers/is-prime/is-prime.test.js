import isPrime from './is-prime.js';

describe('isPrime', () => {
  it('should return false for numbers less than 2', () => {
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(-5)).toBeFalsy();
  });

  it('should return true for prime numbers', () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(11)).toBeTruthy();
    expect(isPrime(13)).toBeTruthy();
  });

  it('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(6)).toBeFalsy();
    expect(isPrime(9)).toBeFalsy();
    expect(isPrime(15)).toBeFalsy();
  });
});
