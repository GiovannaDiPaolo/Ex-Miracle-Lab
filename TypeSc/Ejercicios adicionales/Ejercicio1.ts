function countJewels(jewels: string, stones: string): number {
    let count = 0;
  
    for (const stone of stones) {
      if (jewels.includes(stone)) {
        count++;
      }
    }
  
    return count;
  }
  
  console.assert(countJewels("aA", "aAAbbbb") === 3);
  console.assert(countJewels("z", "ZZ") === 0);
  