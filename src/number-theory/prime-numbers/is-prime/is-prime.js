/**
 * Determines if a given number is prime.
 *
 * @param {number} n - The number to check.
 * @return {boolean} - Returns true if the number is prime, otherwise false.
 */
const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;

  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;

    i += 6;
  }

  return true;
};

export default isPrime;
