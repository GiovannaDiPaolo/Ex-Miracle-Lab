class Queue<T> {
    private data: T[];
  
    constructor() {
      this.data = [];
    }
  
    enqueue(item: T): void {
      this.data.push(item);
    }
  
    dequeue(): T | undefined {
      return this.data.shift();
    }
  
    size(): number {
      return this.data.length;
    }
  }
  
  // Ejemplo:
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.size()); // 3
  
  console.log(queue.dequeue()); // 1
  console.log(queue.dequeue()); // 2
  
  console.log(queue.size()); // 1
  