function removeNonCanonicalDNA(dnaString) {
  if (dnaString === '') {
    return '';
  }
  
  const canonicalBases = ['C', 'T', 'A', 'G'];
  
  return dnaString.split('').filter(base => canonicalBases.includes(base)).join('');
}

module.exports = {removeNonCanonicalDNA};
