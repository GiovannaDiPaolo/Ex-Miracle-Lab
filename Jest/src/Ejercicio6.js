function findMaxConsecutiveOnes(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== 0 && matrix[i][j] !== 1) {
          return -1;
        }
      }
    }
  
    let maxConsecutive = 0;
    let currentConsecutive = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      currentConsecutive = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        const value = Number(matrix[i][j]);
        if (value === 1) {
          currentConsecutive++;
          maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
        } else {
          currentConsecutive = 0;
        }
      }
    }
  
    return maxConsecutive;
  }

  module.exports = {findMaxConsecutiveOnes };