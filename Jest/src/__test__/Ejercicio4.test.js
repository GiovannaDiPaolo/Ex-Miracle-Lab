const {sumPositiveNumbers} = require('../Ejercicio4.js');

describe('sumPositiveNumbers', () => {
  it('retorna la suma de los valores positivos del array', () => {
    expect(sumPositiveNumbers([1, 2, 3])).toBe(6);
    expect(sumPositiveNumbers([-1, -2, -3])).toBe(0);
    expect(sumPositiveNumbers([1, '2', 3])).toBe(6);
    expect(sumPositiveNumbers(['1', '2', '3'])).toBe(6);
  });


  it('ignoralos valores negativos o cadenas del array', () => {
    expect(sumPositiveNumbers([1, -2, 'abc', '5', -6])).toBe(6);
  });
});
