class CircularQueue<T> {
    private data: T[];
    private front: number;
    private rear: number;
    private size: number;
  
    constructor(size: number) {
      this.data = new Array(size);
      this.front = -1;
      this.rear = -1;
      this.size = size;
    }
  
    isFull(): boolean {
      return (this.front === 0 && this.rear === this.size - 1) || this.front === this.rear + 1;
    }
  
    isEmpty(): boolean {
      return this.front === -1 && this.rear === -1;
    }
  
    enqueue(item: T): void {
      if (this.isFull()) {
        throw new Error('Queue is full');
      }
  
      if (this.front === -1) {
        this.front = 0;
      }
  
      this.rear = (this.rear + 1) % this.size;
      this.data[this.rear] = item;
    }
  
    dequeue(): T | undefined {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
  
      const item = this.data[this.front];
  
      if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.size;
      }
  
      return item;
    }
  
    getSize(): number {
      if (this.isEmpty()) {
        return 0;
      }
  
      if (this.front <= this.rear) {
        return this.rear - this.front + 1;
      } else {
        return this.size - this.front + this.rear + 1;
      }
    }
  }
  
  // Ejemplo:
  function juegoPapaCaliente(players: string[]): string {
    const queue = new CircularQueue<string>(players.length);
    for (const player of players) {
      queue.enqueue(player);
    }
  
    while (queue.getSize() > 1) {
        for (let i = 0; i < 3; i++) {
        queue.enqueue(queue.dequeue()!);
      }
      const eliminatedPlayer = queue.dequeue();
      console.log(`Eliminado: ${eliminatedPlayer}`);
    }
  
    return queue.dequeue()!;
  }
  
  // Ejemplo:
  const players = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const winner = juegoPapaCaliente(players);
  
  console.log(`El ganador es: ${winner}`);
  