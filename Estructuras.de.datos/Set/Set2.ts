function getUniqueElements(array1: number[], array2: number[]): number[] {
    const set = new Set([...array1, ...array2]);
    return Array.from(set);
  }
  
  
  const arr1: number[] = [1, 2, 3, 4, 5];
  const arr2: number[] = [4, 5, 6, 7, 8];
  console.log(getUniqueElements(arr1, arr2)); 
  