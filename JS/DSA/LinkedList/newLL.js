/**
 * LinkedList
 * nodes are linked together by a referance fielda
 * 
 * two types of linkedlist:
 *  - singly linked list
 *    (Head)[value/data | pointer] -> [value/data | pointer] -> [value/data | pointer] -> [value/data | pointer(null)](Tail)
 *  - doubly linked list
 *    (Head)[ prointer to previous node | value/data | pointer to next node] <-> [ prointer to previous node | value/data | pointer to next node(null)] (Tail)
 * 
 * how linked list diferance from array?
 * 
 * linkedlist:
 *  - linear
 *  - non contigeous
 *  - node(value+pointer)
 *  - getting element is hard
 *  - insert/deleteion/update is easy
 *  - extra menory
 * 
 * Array:
 *  - linear
 *  - contigeous
 *  - just value
 *  - getting element is easy
 *  - insert/deleteion/update is complex
 *  - menory efficient
 * 
 * Usecases:
 *  - if you want to access by index fast => array
 *  - insert/delete at head or tail frequintly => linkedlist
 *  - memory efficient => array
 *  - do lost of traversa/manupulation => linkedlist
 */

// Insert a node:

// At the beginning

// At the end

// At a given position

// Delete a node:

// From the beginning

// From the end

// By value

// Traverse and print a linked list.

// Find the length of a linked list (iterative & recursive).

// Search an element in a linked list.

// Reverse a linked list (iterative approach).

// Reverse a linked list using recursion.

// Find the middle node of a linked list.

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

  // Insert at the end
  insertAtEnd(data) {
    const newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
    } else {
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
  }

  // Insert at the beginning
  insertAtStart(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  // Insert at a given position
  insertAtPosition(data, position) {
    if (position <= 0) {
      console.log(`Invalid postion: ${position}`)
      return
    }
    const newNode = new Node(data)
    if (position === 1) {
      this.head.next = this.head
      this.head = newNode
      return
    }
    let currentNode = this.head
    let previousNode = null
    let count = 1
    while (currentNode && count < position) {
      previousNode = currentNode
      currentNode = currentNode.next
      count++
    }
    if (!previousNode) {
      console.log(`Invalid postion: ${position}`)
      return
    }
    previousNode.next = newNode
    newNode.next = currentNode
  }

  //Traverse
  traverse() {
    if (this.head === null) {
      console.log(`Empty Linkedlist`)
      return
    }
    let currentNode = this.head
    console.log(`Current node: ${currentNode.data}`)
    while (currentNode.next !== null) {
      currentNode = currentNode.next
      console.log(`Current node: ${currentNode.data}`)
    }
  }

  // Delete from the beginning
  deleteAtStart() {
    if (this.head === null) {
      console.log(`Empty Linkedlist`)
      return
    }
    this.head = this.head.next
  }
  // Delete from the end
  deleteAtEnd() {
    if (this.head === null) {
      console.log("Empty LinkedList");
      return;
    }

    // If only one node
    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
  }

  // Delete by value
  deleteByValue(dataToDelete) {
    if (this.head === null) {
      console.log(`Empty Linkedlist`)
      return
    }
    let currentNode = this.head
    if (currentNode.data === dataToDelete) {
      this.head = currentNode.next
      return
    }

    let previousNode = null
    while (currentNode.next !== null) {
      if (currentNode.data === dataToDelete) {
        previousNode.next = currentNode.next
        return
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // Search
  Search(data){
    if (this.head === null) {
      console.log(`Empty Linkedlist`)
      return
    }
    let currentNode = this.head
    if (currentNode.data === data) {
      return true
    }
    while (currentNode.next !== null) {
      if (currentNode.data === data) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  // Find the length of a linked list (iterative).
  Length(){
    if (this.head === null) {
      console.log(`Empty Linkedlist`)
      return 0
    }
    let lengthCount = 1
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
      lengthCount++
    }
    return lengthCount
  }

  // Find the length of a linked list (recursive)
  LengthRecursive(){}
}

const ll = new LinkedList()
// console.log(ll)
ll.insertAtEnd(4)
ll.insertAtEnd(5)
ll.insertAtEnd(7)
ll.insertAtEnd(9)
ll.insertAtPosition(8, 4)
ll.insertAtStart(1)
ll.insertAtStart(10)
ll.traverse()
console.log(`------Delete------`)
// ll.deleteAtStart()
// ll.deleteAtEnd()
// ll.deleteByValue(7)
console.log(`------Delete------`)
ll.traverse()

console.log(`------Search------`)
const searchResult = ll.Search(4)
console.log(`Search result: ${searchResult}`)
console.log(`------Search------`)
console.log(`------Length------`)
const length = ll.Length()
console.log(`Total length of this linked list ${length}`)
console.log(`------Length------`)
// console.log(ll)