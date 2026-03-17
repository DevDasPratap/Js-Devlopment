/**
 * ✅ Insert at the end
 * ✅ Insert at the beginning
 * ✅ Insert at a specific position
 * ✅ Delete by value
 * ✅ Delete from beginning
 * ✅ Delete from end
 * ✅ Delete from a specific position
 * ✅ Search for a value
 * ✅ Reverse the list
 * ✅ Find length
 * ✅ Traverse & Print
 * ✅ Recursive Traversal
 * ✅ Remove duplicates from a sorted Singly Linked List
 */

/**
 * Linked List
 *
 * A linked list is a linear data structure where each element (node)
 * contains data and a reference (pointer) to the next node in the sequence.
 *
 * --------------------------------------------------
 * Time Complexity
 * --------------------------------------------------
 *  - Insertion at the beginning: O(1)
 *  - Insertion at the end: O(1) if a tail pointer is maintained
 *  - Deletion from the beginning: O(1)
 *  - Insertion or deletion in the middle: O(1) if the previous node reference is known
 *  - Searching for an element: O(n)
 *
 * --------------------------------------------------
 * Advantages
 * --------------------------------------------------
 *  - Dynamic size (no fixed memory allocation like arrays)
 *  - Efficient insertion and deletion operations
 *  - No need to shift elements when inserting or deleting
 *  - Efficient memory utilization when the size changes frequently
 *  - Easy implementation of other data structures such as stacks, queues, and deques
 *  - Useful for applications that require frequent insertions and deletions
 *  - Can easily grow or shrink during runtime
 *
 * --------------------------------------------------
 * Disadvantages
 * --------------------------------------------------
 *  - Extra memory required to store pointers
 *  - No direct access to elements (unlike arrays)
 *  - Traversal is required to access elements (O(n))
 *  - Poor cache locality compared to arrays
 *  - More complex implementation compared to arrays
 *  - Reverse traversal is difficult in singly linked lists
 *
 * --------------------------------------------------
 * Real-world Applications
 * --------------------------------------------------
 *  - Round Robin scheduling algorithm in operating systems
 *
 *  - LRU Cache implementation (HashMap + Doubly Linked List)
 *    Used in caching systems like Redis, Memcached, and browsers
 *
 *  - Browser back and forward navigation
 *
 *  - Undo / Redo functionality in text editors
 *
 *  - Efficient merging of sorted linked lists
 *    Useful in streaming systems and database query processing
 *
 *  - Memory management systems where free memory blocks are linked
 *
 *  - Implementation of queues and deques
 *
 *  - Graph adjacency list representation
 *
 *  - Music or video playlist management
 *
 *  - Task scheduling systems
 *
 *  - Network packet buffering
 *
 *  - File system block chaining
 *
 * --------------------------------------------------
 * Backend Engineering Use Cases
 * --------------------------------------------------
 *  - Cache eviction policies (LRU / LFU)
 *  - Job queues and background task processing
 *  - Memory pool management
 *  - Database page linking
 *  - Event streaming buffers
 */

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert at the end
    insertAtEnd(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Insert at the beginning
    insertAtBeginning(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Insert at a specific position (1-based index)
    insertAtPosition(data, position) {
      if (position <= 0) {
        console.log("Invalid position!");
        return;
      }
  
      const newNode = new Node(data);
      if (position === 1) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      let prev = null;
      let count = 1;
  
      while (current && count < position) {
        prev = current;
        current = current.next;
        count++;
      }
  
      if (!prev) {
        console.log("Invalid position!");
        return;
      }
  
      prev.next = newNode;
      newNode.next = current;
    }
  
    // Delete by value
    deleteByValue(data) {
      if (!this.head){
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.data !== data) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
      }
    }
  
    // Delete from beginning
    deleteFromBeginning() {
      if (!this.head){
        return;
      }
      this.head = this.head.next;
    }
  
    // Delete from end
    deleteFromEnd() {
      if (!this.head){
        return;
      }
  
      if (!this.head.next) {
        this.head = null;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.next) {
        current = current.next;
      }
  
      current.next = null;
    }
  
    // Delete from a specific position (1-based index)
    deleteAtPosition(position) {
      if (!this.head || position <= 0) {
        console.log("Invalid position!");
        return;
      }
  
      if (position === 1) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let prev = null;
      let count = 1;
  
      while (current && count < position) {
        prev = current;
        current = current.next;
        count++;
      }
  
      if (!current) {
        console.log("Invalid position!");
        return;
      }
  
      prev.next = current.next;
    }
  
    // Search for a value
    search(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) return true;
        current = current.next;
      }
      return false;
    }
  
    // Reverse the linked list
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  
    // Get length of the linked list
    length() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    // Print all elements
    traverse() {
      let current = this.head;
      while (current) {
        process.stdout.write(current.data + " -> ");
        current = current.next;
      }
      console.log("null");
    }

    // Recursive Traversal
    recursiveTraverse(head){
      if (head === null) {
        return
      }
      console.log('Value: ', head.data)
      this.recursiveTraverse(head.next)
    }

    // Remove duplicates from a sorted Singly Linked List
    removeDuplicates(){
      if (!this.head) {
        return
      }
      let current = this.head
      while (current && current.next) {
        if (current.data === current.next.data) {
          current.next = current.next.next
        }else{
          current = current.next
        }
      }
    }
  }
  
  // Testing the LinkedList
  const linkedList = new LinkedList();
  linkedList.insertAtEnd(10);
  linkedList.insertAtEnd(20);
  linkedList.insertAtEnd(30);
  linkedList.traverse(); // Output: 10 -> 20 -> 30 -> null
  
  console.log("Inserting 5 at the beginning:");
  linkedList.insertAtBeginning(5);
  linkedList.traverse(); // Output: 5 -> 10 -> 20 -> 30 -> null
  
  console.log("Inserting 15 at position 3:");
  linkedList.insertAtPosition(15, 3);
  linkedList.traverse(); // Output: 5 -> 10 -> 15 -> 20 -> 30 -> null
  
  console.log("Deleting 10:");
  linkedList.deleteByValue(10);
  linkedList.traverse(); // Output: 5 -> 15 -> 20 -> 30 -> null
  
  console.log("Deleting from beginning:");
  linkedList.deleteFromBeginning();
  linkedList.traverse(); // Output: 15 -> 20 -> 30 -> null
  
  console.log("Deleting from end:");
  linkedList.deleteFromEnd();
  linkedList.traverse(); // Output: 15 -> 20 -> null
  
  console.log("Deleting from position 2:");
  linkedList.deleteAtPosition(2);
  linkedList.traverse(); // Output: 15 -> null
  
  console.log("Searching 15:", linkedList.search(15)); // Output: true
  console.log("Searching 100:", linkedList.search(100)); // Output: false
  
  console.log("Reversing linked list:");
  linkedList.insertAtEnd(20);
  linkedList.insertAtEnd(30);
  linkedList.insertAtEnd(40);
  linkedList.insertAtEnd(40);
  linkedList.traverse();
  // linkedList.reverse();
  linkedList.traverse();
  
  linkedList.recursiveTraverse(linkedList.head)

  console.log("Length of linked list:", linkedList.length());
  
  
  linkedList.removeDuplicates()
  console.log("After removing duplicates:");
  linkedList.traverse();
  console.log("Length of linked list:", linkedList.length());