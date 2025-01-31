/**
 * Stack => LIFO
 * Stack key operations =>
 *   - Push: adds an element to the top of the stack
 *   - Pop: Removes and return the top element of the stack
 *   - Peek: Return the top element without removing it
 *   - isEmpty: Checks if the stack is empty
 *   - Size: Returns the number of elements in the stack
 */

// Stack implementation=> No in build support of stack in js
// Create a own stack class

class Stack {
  #items = []
  constructor() {
    this.#items = []
  }
  push(element) {
    this.#items.push(element)
  }
  pop() {
    if (this.#items.length === 0) {
      return 0
    }
    return this.#items.pop()
  }
  peek() {
    if (this.#items.length === 0) {
      return 0
    }
    return this.#items[this.#items.length-1]
  }
  isEmpty() {
    return this.#items.length === 0
  }
  size() {
    return this.#items.length
  }
}


export default Stack

// let stack = new Stack()
// console.log(stack.push(10))
// console.log(stack)