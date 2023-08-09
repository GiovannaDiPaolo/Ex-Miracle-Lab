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
  
  class DoublyLinkedList<T> {
    head: ListNode<T> | null;
    tail: ListNode<T> | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    add(value: T): void {
      const newNode = new ListNode(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail!.next = newNode;
        this.tail = newNode;
      }
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
          } else {
            this.tail = current.prev;
          }
  
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
  
    deleteDups(): void {
      const duplicates = new Set<T>();
      let current = this.head;
  
      while (current) {
        if (duplicates.has(current.value)) {
          if (current.prev) {
            current.prev.next = current.next;
          } else {
            this.head = current.next;
          }
  
          if (current.next) {
            current.next.prev = current.prev;
          } else {
            this.tail = current.prev;
          }
        } else {
          duplicates.add(current.value);
        }
  
        current = current.next;
      }
    }
  }
  
  // Ejemplo de uso:
  const linkedList = new DoublyLinkedList<number>();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(3);
  
  console.log(linkedList.find(2)); // ListNode { value: 2, next: ListNode { value: 3, ... }, prev: ListNode { value: 1, ... } }
  
  linkedList.deleteDups();
  
  console.log(linkedList.find(2)); // null
  