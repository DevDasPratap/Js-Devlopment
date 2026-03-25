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

// export default Queue;
export { Queue, LinkedQueue };
