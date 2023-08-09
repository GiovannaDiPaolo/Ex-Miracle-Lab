class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value: T): void {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }

    this.size++;
  }

  remove(value: T): void {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        }

        this.size--;
        return;
      }

      current = current.next;
    }
  }

  find(value: T): ListNode<T> | null {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  invert(): void {
    let current = this.head;
    let temp: ListNode<T> | null = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp) {
      this.head = temp.prev;
    }
  }
}

export default LinkedList;

// Ejemplo de uso:
const linkedList = new LinkedList<number>();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

console.log(linkedList.size); // 3

linkedList.remove(2);

console.log(linkedList.size); // 2

console.log(linkedList.find(1)); // ListNode { value: 1, next: ListNode { value: 3, next: null, prev: [Circular] }, prev: null }

linkedList.invert();

console.log(linkedList.find(1)); // ListNode { value: 1, next: null, prev: [Circular] }
