/*
 Stack - (LIFO) Last in first out
 Operation - push(), pop(), peek(), isEmpty(),size()
*/
// class is template to create stack
class Stack {
    constructor(){
        this.stack = []
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if (this.isEmpty()) {
            return `Stack is empty`
        }
        return this.stack.pop()
    }
    peek(){
        if (this.isEmpty()) {
            return `Stack is empty`
        }
        return this.stack[this.size() -1]
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.stack.length
    }
    printStack(){
        return this.stack
    }
}

// create new object
const stack = new Stack()
stack.push(10)
stack.push(16)
stack.push(9)
stack.push(22)

console.log(stack)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.printStack())
console.log()