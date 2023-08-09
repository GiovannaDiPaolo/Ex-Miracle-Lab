function hasDuplicates(array: number[]): boolean {
    const set = new Set(array);
    return set.size !== array.length;
  }
 
  const numbers: number[] = [1, 2, 3, 4, 5, 1];
  console.log(hasDuplicates(numbers)); 
  