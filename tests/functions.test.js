const { sumArray, countWords, findMax, isDivisible } = require("../functions");

describe('sumArray', () => {
  it('sums an array of positive numbers', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
    expect(sumArray([5, 10, 15])).toBe(30);
  });

  it('sums an array of negative numbers', () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
    expect(sumArray([-10, 5, -5])).toBe(-10);
  });

  it('returns 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  it('handles array with zeros', () => {
    expect(sumArray([0, 0, 0])).toBe(0);
    expect(sumArray([1, 0, -1])).toBe(0);
  });
});

describe('countWords', () => {
  it('counts words in a string', () => {
    expect(countWords('Hello world this is a test')).toBe(6);
    expect(countWords('One two three')).toBe(3);
  });

    it('trims spaces', () => {
    expect(countWords('   hello   world   ')).toBe(2);
    expect(countWords('   ')).toBe(0);
  });

  it('returns 0 if empty string', () => {
    expect(countWords('')).toBe(0);
    expect(countWords('   ')).toBe(0);
  });

  it('handles consecutive spaces between words', () => {
    expect(countWords('hello   world    test')).toBe(3);
    expect(countWords('one  two   three    ')).toBe(3);
  });
});

describe('findMax', () => {
  it('finds max num in array of positive numbers', () => {
    expect(findMax([1, 5, 3, 9, 2])).toEqual(9);
    expect(findMax([10, 20, 15])).toEqual(20);
  });

  it('finds max num in array of negative numbers', () => {
    expect(findMax([-1, -5, -3])).toEqual(-1);
    expect(findMax([-10, -20, -5])).toEqual(-5);
  });

  it('returns null for empty array', () => {
    expect(findMax([])).toEqual(null);
  });

  it('handles array where all numbers are equal', () => {
    expect(findMax([7, 7, 7, 7])).toEqual(7);
    expect(findMax([0, 0, 0])).toEqual(0);
  });
});

describe('isDivisible', () => {
  it('returns true when divisible', () => {
    expect(isDivisible(10, 2)).toBe(true);
    expect(isDivisible(15, 5)).toBe(true);
    expect(isDivisible(0, 5)).toBe(true);
  });

  it('returns false when not divisible', () => {
    expect(isDivisible(10, 3)).toBe(false);
    expect(isDivisible(7, 2)).toBe(false);
  });

  it('returns error message when divisor is 0', () => {
    expect(isDivisible(10, 0)).toBe('No se puede dividir entre cero');
    expect(isDivisible(0, 0)).toBe('No se puede dividir entre cero');
  });

  it('handles negative numbers correctly', () => {
    expect(isDivisible(-10, 2)).toBe(true);
    expect(isDivisible(-15, 5)).toBe(true);
    expect(isDivisible(-10, 3)).toBe(false);
  });
});