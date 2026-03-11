class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertHead(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    insertEnd(data){
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
        return
    }
    insertAtPosition(data, position){
        if (position <= 0) {
            return false
        }
        const newNode = new Node(data)
        if (position === 1) {
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        let previous = null
        let count = 1
        while (condition) {
            
        }

    }
}


const link = new LinkedList()
// link.insertHead(7)
link.insertEnd(8)
link.insertEnd(9)
link.insertEnd(10)
console.log(link)