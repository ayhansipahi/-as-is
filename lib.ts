export function isZero(n: number): boolean {
  return n === 0;
}

export function isNonZero(n: number): boolean {
    return n !== 0;
}

export function isPositive(n: number): boolean {
  return n > 0;
}

export function isNegative(n: number): boolean {
  return n < 0;
}
export function isEven(n: number): boolean {
  return n % 2 === 0;
}

export function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function isComposite(n: number): boolean {
  return !isPrime(n);
}

export function isPerfect(n: number): boolean {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}

export function isAbundant(n: number): boolean {
  return sumOfDivisors(n) > n;
}

export function isDeficient(n: number): boolean {
  return sumOfDivisors(n) < n;
}

export function sumOfDivisors(n: number): number {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}

export function isPerfectSquare(n: number): boolean {
  return Math.sqrt(n) % 1 === 0;
}

export function isPerfectCube(n: number): boolean {
  return Math.cbrt(n) % 1 === 0;
}

export function isFibonacci(n: number): boolean {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

export function isAutomorphic(n: number): boolean {
  return n.toString().endsWith((n * n).toString());
}
