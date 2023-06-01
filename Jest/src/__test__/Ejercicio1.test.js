const {fizzBuzz} = require('../Ejercicio1.js');

describe('fizzBuzz', () =>{
    test('Debe retornar "Fizz" si son multiplos de 3', ()=>{
        expect(fizzBuzz(3)).toBe("Fizz");
        expect(fizzBuzz(12)).toBe("Fizz");
    });
    test ('Debe retornar "Buzz" si son multiplos de 5', ()=>{
        expect(fizzBuzz(5)).toBe("Buzz");
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    test('Debe retornar "FizzBuzz" si son multipos de 3 y 5', ()=>{
        expect(fizzBuzz(15)).toBe("FizzBuzz");
        expect(fizzBuzz(45)).toBe("FizzBuzz");
    });
});