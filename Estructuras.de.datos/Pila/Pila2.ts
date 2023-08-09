class Stack2<T> {
    private data: T[];
  
    constructor() {
      this.data = [];
    }
  
    push(item: T): void {
      this.data.push(item);
    }
  
    pop(): T | undefined {
      return this.data.pop();
    }
  
    size(): number {
      return this.data.length;
    }
  }
  
  function decimalToBinary(decimal: number): string {
    if (decimal === 0) {
      return "0";
    }
  
    const stack = new Stack2<number>();
  
    while (decimal > 0) {
      const remainder = decimal % 2;
      stack.push(remainder);
      decimal = Math.floor(decimal / 2);
    }
  
    let binary = "";
  
    while (stack.size() > 0) {
      binary += stack.pop();
    }
  
    return binary;
  }
  
  // Ejemplo:
  const decimalNumber = 13;
  const binaryRepresentation = decimalToBinary(decimalNumber);
  
  console.log(`El número decimal ${decimalNumber} en binario es: ${binaryRepresentation}`); 