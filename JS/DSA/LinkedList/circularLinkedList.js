class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null
    }

    // Add node to the head
    addToHead(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            newNode.next = this.head // Point to itself (single node)
        } else {
            let current = this.head
            while (current.next !== this.head) {
                current = current.next // find the last node
            }
            newNode.next = this.head // Point new node to head
            current.next = newNode
            this.head = newNode
        }
    }

    insertAtBegin(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            newNode.next = newNode
            return
        }

        // insert after head
        newNode.next = this.head.next
        this.head.next = newNode

        // swap data
        let temp = this.head.data
        this.head.data = newNode.data
        newNode.data = temp
    }

    // Delete the head node
    deleteHead() {
        if (!this.head) {
            console.log('The list id empty, nothing to delete')
        }
        if (this.head.next === this.head) {
            // Single node case: List only has one node
            this.head = null
        } else {
            let current = this.head
            //Traverse to find the last node
            while (current.next !== this.head) {
                current = current.next
            }
            // Last node now points to the second node, effectively removing the head
            current.next = this.head.next
            this.head = this.head.next // Move head to the next node
        }
    }

    // Prrint the list
    // printList() {
    //     if (!this.head) {
    //         console.log('Empty list')
    //         return
    //     }
    //     let result = ''
    //     let current = this.head
    //     // do {
    //     //     result += `${current.data}-> `
    //     //     current = current.next
    //     // } while (current !== this.head) {
    //     //     console.log(`${result} Back to head`)
    //     // }

    //     do {
    //         if (!current){
    //             break
    //         }
    //         result += `${current.data}-> `
    //         current = current.next
    //     } while (current !== this.head)

    //     console.log(`${result}Back to head`)


    //     // for (let current = this.head; ; current = current.next) {
    //     //     result += `${current.data}-> `
    //     //     if (current.next === this.head) {
    //     //         break
    //     //     }
    //     // }

    //     // console.log(`${result}Back to head`)
    // }

    printList() {
        if (!this.head) {
            console.log("Empty list")
            return
        }

        let current = this.head
        let result = ""

        do {
            result += current.data + " -> "
            current = current.next
        } while (current && current !== this.head)

        console.log(result + "Back to head")
    }
}

const list = new CircularLinkedList()
list.addToHead(10)
list.addToHead(40)
list.addToHead(50)
list.addToHead(80)
list.addToHead(90)
list.insertAtBegin(100)

console.log('Orginal list')
list.printList()

console.log('After Deleting the head')
list.deleteHead()
list.printList()