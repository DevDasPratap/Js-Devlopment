// use stack class
import Stack from "./stack.js";
const stack = new Stack()

stack.push(10)
console.log(stack)
console.log('Peek', stack.peek())
console.log('pop', stack.pop())
console.log('isEmpty', stack.isEmpty())
stack.push(22)
stack.push(99)
stack.push(90)
stack.push(91)
console.log('size', stack.size())
console.log(stack)


// real life 
// - example browser back
// - text editor redo undo