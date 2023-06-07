function findFirstRepeatedCharacter(str) {
    const processedStr = str.toLowerCase().replace('');
    for (let i = 0; i < processedStr.length - 1; i++) {
      if (processedStr[i] === processedStr[i + 1]) {
        return i;
      }
    }
    return -1;
  }

  module.exports = {findFirstRepeatedCharacter};