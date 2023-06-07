const {findMaxConsecutiveOnes} = require('../Ejercicio6.js');

test('Finds the maximum number of consecutive 1s correctly', () => {
  expect(findMaxConsecutiveOnes([[1, 1, 0, 1, 1, 1], [1, 1, 1, 0, 1, 1], [1, 0, 0, 1, 1, 1]])).toBe(3);
  expect(findMaxConsecutiveOnes([[1, 1, 0, 1, 1, 1], [1, 1, "1", 0, 1, 1], [1, 0, 0, 1, 1, 1]])).toBe(-1);
  expect(findMaxConsecutiveOnes([[0, 0, 0, 0], [1, 1, 1, 1], [1, 1, 0, 0], [0, 1, 1, 1]])).toBe(4);
});