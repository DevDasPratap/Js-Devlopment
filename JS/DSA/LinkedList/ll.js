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

// function node(data) {
//     this.data = data
//     this.next = null
// }

// let head = new node(5)
// console.log(head)

// let mid = new node(10)
// // console.log(head)
// // console.log(head.next)
// head.next=mid
// // console.log(head)

// let tail = new node(15)

// mid.next = tail
// console.log(head)



function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(1);
let mid = new Node(2);
head.next = mid;

let insertFirstNode = new Node(3);
insertFirstNode.next = head;
head = insertFirstNode;

let insertAtIndex = new Node('ramdomPosition')
let index = 1
insertAtIndexFn(insertAtIndex, head, index)

let insertTailNode = new Node(4);
insertEndNode(insertTailNode, head);

traversal(head);

function insertEndNode(temp, head) {
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = temp;
}

function traversal(head) {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}

function insertAtIndexFn(insertAtIndex, head, index) {
    
}

