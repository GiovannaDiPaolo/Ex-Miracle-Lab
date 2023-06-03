  const {leap} = require ( '../Ejercicio2.js');

test('Comprobar si el año es bisiesto', () => {
    expect(leap (2020)).toBe(true); 
    expect(leap (1900)).toBe(false);
    expect(leap (2000)).toBe(true); 
    expect(leap (2023)).toBe(false);
  });