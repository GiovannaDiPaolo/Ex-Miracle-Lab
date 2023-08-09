class Stack1<T> {
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
  
  // Ejemplo:
  const stack = new Stack1<number>();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.size()); 
  
  console.log(stack.pop()); 
  console.log(stack.pop());   
  console.log(stack.size());  