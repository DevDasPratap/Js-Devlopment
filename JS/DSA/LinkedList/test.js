class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertAtEnd(data) {
        if (!data) {
            return
        }
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        current.next = newNode
    }

    insertAtBegin(data) {
        if (!data) {
            return
        }
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        return
    }

    insertAtPosition(data, position) {
        // if (!data || !position) {
        //     return
        // }
        // if (position <= 0) {
        //     console.log("Invalid position!");
        //     return
        // }
        if (position > this.length()) {
            console.log("Invalid index!");
            return
        }
        let newNode = new Node(data)
        let current = this.head
        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
            return
        }

        for (let index = 0; index < position - 1; index++) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode

    }

    search(data) {
        if (!data) {
            return
        }
        if (!this.head) {
            return
        }
        let current = this.head
        while (current) {
            if (current.data === data) {
                return true
            }
            current = current.next
        }
        return false
    }

    reverse() {
        // If list is empty, nothing to reverse
        if (!this.head) {
            return
        }

        // current → start from head
        let current = this.head

        // previous → will become the new previous node (initially null)
        let previous = null

        // next → temporary variable to store next node
        let next = null

        // Traverse the list
        while (current) {

            // 1 Save the next node before breaking the link
            next = current.next

            // 2 Reverse the link
            // Instead of pointing forward, point to previous node
            current.next = previous

            // 3 Move previous forward
            // previous becomes the current node
            previous = current

            // 4 Move current forward
            // go to the next node in the original list
            current = next
        }

        // 5 Update head
        // previous will be the new first node of reversed list
        this.head = previous
    }

    display() {
        if (!this.head) {
            return 'Empty'
        }
        let current = this.head
        while (current) {
            console.log(`current node: ${current.data}`)
            current = current.next
        }
    }

    length() {
        if (!this.head) {
            return 'empty'
        }
        let count = 0
        let current = this.head
        while (current) {
            count++
            current = current.next
        }
        return count
    }

    recursiveTraverse(head) {
        if (!head) {
            return
        }
        console.log('head.data:', head.data)
        this.recursiveTraverse(head.next)
    }

    getCurrentHead() {
        if (!this.head) {
            return
        }
        return this.head.data
    }

    getCurrentTail() {
        if (!this.head) {
            return
        }
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        return current.data
    }

    findMiddleNode(){
        if (!this.head) {
            return
        }
        const len = this.length()
        let current = this.head
        for (let index = 0; index < Math.floor(len/2); index++) {
            current = current.next
        }

        return current.data
    }

    removeHead(){
        if (!this.head) {
            return
        }
        this.head = this.head.next
        return
    }

    removeTail(){
      if (!this.head) {
        return
      }
      if (!this.head.next) {
        this.head = null
        return
      }
      let current = this.head
      while (current.next.next !== null) {
        current = current.next
      }
      current.next = null
    }

    removeMiddle(){
      if (!this.head) {
        return
      }
      const len = this.length()
      const middle = Math.floor(len/2)

      // if middle is head
      if (middle === 0) {
        this.head = this.head.next
        return
      }

      let current = this.head
      for (let index = 0; index < middle-1; index++) {
        current = current.next
      }

      // remove middle node
      current.next = current.next.next
    }
}

const ll = new LinkedList()

console.log('LinkedList', ll)

ll.insertAtEnd(7)
ll.insertAtEnd(8)
ll.insertAtEnd(9)
ll.insertAtEnd(10)

console.log('LinkedList', ll)

ll.insertAtBegin(4)

console.log('LinkedList', ll)

ll.display()

const lengthRes = ll.length()
console.log(`Length: ${lengthRes}`)

ll.insertAtPosition(5, 0)
ll.display()
console.log(`Length: ${ll.length()}`)

console.log(`Seach value: ${ll.search(5)}`)

// console.log('LinkedList', ll.recursiveTraverse(ll.head))

// after reverse
// console.log('-----after reverse-----')
// ll.reverse()
// ll.display()

console.log(`Get current head value: ${ll.getCurrentHead()}`)
console.log(`Get current tail value: ${ll.getCurrentTail()}`)

console.log(`middle of the linkedlist: ${ll.findMiddleNode()}`)

// console.log('----- remove head -----')
// ll.removeHead()
// ll.display()

// console.log('----- remove tail -----')
// ll.removeTail()
// ll.display()

console.log('----- remove middle -----')
ll.removeMiddle()
ll.display()

console.log('----- -----')
console.log('----- -----')
console.log('----- -----')