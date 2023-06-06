const {removeNonCanonicalDNA} = require ( '../Ejercicio3.js');

describe('removeNonCanonicalDNA', () => {
  it('Saca las no canonicas', () => {
    expect(removeNonCanonicalDNA('CTAGGGTA')).toBe('CTAGGGTA');
    expect(removeNonCanonicalDNA('ACGTacgt')).toBe('ACGT');
    expect(removeNonCanonicalDNA('CTAGGGTAXY')).toBe('CTAGGGTA');
    expect(removeNonCanonicalDNA('')).toBe('');
  });
});
