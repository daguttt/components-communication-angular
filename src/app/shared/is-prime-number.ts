export const isPrimeNumber = (num: number): boolean => {
  // Basic cases
  if (num === 0 || num === 1 || num === 4) return false;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};
