/*
Queue - FIFO
enqueue(), dequeue(), peek(), isEmpty(), size()
*/

class Queue {
    // constructor function is resposible for initial variable
    constructor (){
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        if (this.isEmpty()) {
            return `Queuebare empty`
        }
        return this.queue.shift()
    }
    isEmpty(){
        return this.queue.length === 0
    }
    front(){
        if (this.isEmpty()) {
            return `Queuebare empty`
        }
        return this.queue[0]
    }
    size(){
        return this.queue.length
    }
    printQueue(){
        let queueString = ''
        for (let i = 0; i < this.size(); i++) {
            queueString += this.queue[i] + ','
        }
        console.log(`Queue: ${queueString}`)
    }
}

const queue = new Queue()
console.log(queue)

queue.enqueue(5)
queue.enqueue(50)
queue.enqueue(52)
queue.enqueue(90)

console.log(queue)

queue.dequeue()

console.log(queue)
console.log(queue.front())
console.log(queue.printQueue())