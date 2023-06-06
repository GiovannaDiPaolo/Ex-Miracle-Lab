function sumPositiveNumbers(arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  return arr.reduce((sum, num) => {
    const parsedNum = parseFloat(num);
    if (!isNaN(parsedNum) && parsedNum > 0) {
      return sum + parsedNum;
    } else {
      return sum;
    }
  }, 0);
}

module.exports = {sumPositiveNumbers};