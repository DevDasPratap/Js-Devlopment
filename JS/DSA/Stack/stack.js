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


/**
 * Stack Identification
 * 
 * When analyzing a question, if it requires two nested loops:
 * - The outer loop typically runs from 0 to n.
 * - The inner loop often depends on the outer loop index (`i`), such as:
 *   - 0 to i
 *   - i to n
 *   - n to i
 *   - i to 0
 * 
 * These patterns commonly indicate the use of a stack in the logic.
 * 
 * When to Use:
 * - When you need to track **previous or next greater/smaller elements**.
 * - When solving **monotonic sequence problems** (increasing or decreasing order).
 * - For validating or processing **parentheses or expression syntax**.
 * - For **undo/redo functionality** in applications.
 * - When evaluating or converting **infix, prefix, postfix expressions**.
 * - When doing **DFS traversal** iteratively.
 * - For solving problems like:
 *   - Next Greater Element
 *   - Largest Rectangle in Histogram
 *   - Daily Temperatures
 *   - Valid Parentheses
 *   - Asteroid Collision
 */