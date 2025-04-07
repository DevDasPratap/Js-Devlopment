/**
 * List list example if you click any link open antother website not related to previous website
 * another exaple is a train if any one goto one coach(block) to another coach(block) it not possible to fly or skip, must be follow one by one change and go, it is look like change
 * browser history data store history format
 * store in heap memoery
 * [data|linked with next block]<->[]<->[data| here not linked so it will null]
 * [data|next(referance)] = it called block/node(object(1sta part data, 2nd part referance of next node))
 * [first node call head]<->[]<->[]<->[last node called tail]
 */


/**
 * A **linked list** is a data structure where each element (node) contains two parts:
 * 1. **Data** – The actual value stored in the node.
 * 2. **Reference (Pointer)** – A link to the next node in the sequence.
 * 
 * Unlike arrays, which store elements in contiguous memory locations, linked lists store nodes 
 * in **heap memory**, with each node dynamically linked to the next.
 * 
 * ### Key Properties:
 * - The **first node** is called the **head**.
 * - The **last node** is called the **tail** and does not point to any other node (its next reference is `null`).
 * - Nodes are connected **sequentially**, meaning traversal must happen step by step without skipping.
 * 
 * ### Browser History Example:
 * Think of a **web browser's history** stored as a **doubly linked list**.
 * - When you visit a website, a new node is created and linked to the previous one.
 * - Clicking "Back" moves to the previous node (previous website).
 * - Clicking "Forward" moves to the next node (if available).
 * - If a new page is visited after pressing "Back", a new history path starts, and the forward links are removed.
 * 
 * **Representation in memory:**
 * ```
 * [Page A | next ->] <-> [Page B | next ->] <-> [Page C | next (null)]
 * ```
 * 
 * ### Train Coach Example:
 * A **train** is another great analogy for a **doubly linked list**:
 * - Each **coach (node)** is connected to the **next** and **previous** coach.
 * - You **cannot jump over** coaches; you must pass through them sequentially.
 * - The **first coach** is the **head**, and the **last coach** is the **tail**.
 * 
 * **Representation:**
 * ```
 * [Engine (Head)] <-> [Coach 1] <-> [Coach 2] <-> [Last Coach (Tail)]
 * ```
 * 
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

    addHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
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

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    insertAtPosition(index, data) {
        if (index < 0 || index > this.size()) {
            console.log('Invalid index');
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    removeHead() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    removeAtPosition(index) {
        if (index < 0 || index >= this.size()) {
            console.log('Invalid index');
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    print() {
        let current = this.head;
        if (!current) {
            console.log('Linked list are empty')
        }
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


// const linkedlist = new LinkedList()
// // linkedlist.print()
// linkedlist.addHead(10)
// linkedlist.addHead(20)
// linkedlist.addHead(30)
// linkedlist.print()


const list = new LinkedList();
list.addHead(3);
list.addHead(2);
list.addHead(1);
list.addLast(4);
list.insertAtPosition(2, 10);
list.print();
console.log("Size:", list.size());
list.removeAtPosition(2);
list.removeHead();
list.removeLast();
list.print();
