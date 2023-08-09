class Stack<T> {
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
  
  function decimalToBase(decimal: number, base: number): string {
    if (decimal === 0) {
      return "0";
    }
  
    if (base < 2 || base > 36) {
      throw new Error("Base must be between 2 and 36");
    }
  
    const stack = new Stack<number>();
    const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
  
    while (decimal > 0) {
      const remainder = decimal % base;
      stack.push(remainder);
      decimal = Math.floor(decimal / base);
    }
  
    let result = "";
  
    while (stack.size() > 0) {
      const digit = stack.pop();
      if (digit !== undefined) {
        result += digits[digit];
      }
    }
  
    return result;
  }
  
  // Ejemplo:
  const decimalNumber1 = 123;
  const base1 = 16; 
  const baseRepresentation1 = decimalToBase(decimalNumber1, base1);
  
  console.log(`El número decimal ${decimalNumber1} en base ${base1} es: ${baseRepresentation1}`); 
  
  const decimalNumber2 = 42;
  const base2 = 2; 
  const baseRepresentation2 = decimalToBase(decimalNumber2, base2);
  
  console.log(`El número decimal ${decimalNumber2} en base ${base2} es: ${baseRepresentation2}`);