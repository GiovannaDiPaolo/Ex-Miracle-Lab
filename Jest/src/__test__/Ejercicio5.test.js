const {findFirstRepeatedCharacter} = require('../Ejercicio5.js');

test('Finds the first repeated character correctly', () => {
  expect(findFirstRepeatedCharacter('abbcde')).toBe(1);
  expect(findFirstRepeatedCharacter('AABcDe')).toBe(0);
  expect(findFirstRepeatedCharacter('xyzXYZ')).toBe(2);
  expect(findFirstRepeatedCharacter('abcd')).toBe(-1);
  expect(findFirstRepeatedCharacter('')).toBe(-1);
});