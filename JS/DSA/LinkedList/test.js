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
}


const link = new LinkedList()
// link.insertHead(7)
link.insertEnd(8)
link.insertEnd(9)
link.insertEnd(10)
console.log(link)