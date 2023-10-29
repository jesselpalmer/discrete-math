import isPrime from '../is-prime/is-prime';

/**
 * Returns an array of prime numbers up to a given number.
 *
 * @param {number} n - The number to which prime numbers should be determined.
 * @return {number[]} - An array of prime numbers up to the specified number.
 */
const getPrimeNumbers = (n) => {
  const primeNumbers = [];

  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) primeNumbers.push(i);
  }

  return primeNumbers;
};

export default getPrimeNumbers;
