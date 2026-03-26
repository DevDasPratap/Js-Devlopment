// Implementation of Queue using Array in Javascript
class Queue {
  #items = [];
  enqueue(item) {
    this.#items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    return this.#items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    return this.#items[0];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }
}

// Implementation of Queue using Linked List in Javascript
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedQueue {
  #head = null;
  #tail = null;
  #count = 0;

  enqueue(item) {
    const node = new ListNode(item);
    if (this.isEmpty()) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#count += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    const value = this.#head.value;
    this.#head = this.#head.next;
    if (!this.#head) {
      this.#tail = null;
    }
    this.#count -= 1;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    return this.#head.value;
  }

  isEmpty() {
    return this.#count === 0;
  }

  size() {
    return this.#count;
  }
}

// Using map/object
class MapQueue {
  #items = new Map();
  #front = 0;
  #rear = 0;

  enqueue(item) {
    this.#items.set(this.#rear, item);
    this.#rear += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    const value = this.#items.get(this.#front);
    this.#items.delete(this.#front);
    this.#front += 1;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    return this.#items.get(this.#front);
  }

  isEmpty() {
    return this.#items.size === 0;
  }

  size() {
    return this.#items.size;
  }
}

// Using circular array
class CircularQueue {
  #items;
  #capacity;
  #front = 0;
  #rear = 0;
  #count = 0;

  constructor(capacity = 10) {
    this.#capacity = capacity;
    this.#items = new Array(capacity);
  }

  enqueue(item) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }
    this.#items[this.#rear] = item;
    this.#rear = (this.#rear + 1) % this.#capacity;
    this.#count += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    const value = this.#items[this.#front];
    this.#front = (this.#front + 1) % this.#capacity;
    this.#count -= 1;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    return this.#items[this.#front];
  }

  isEmpty() {
    return this.#count === 0;
  }

  isFull() {
    return this.#count === this.#capacity;
  }

  size() {
    return this.#count;
  }
}

// export default Queue;
export { Queue, LinkedQueue, MapQueue, CircularQueue };
