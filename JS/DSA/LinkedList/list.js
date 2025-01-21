function node(data) {
    this.data = data
    this.next = null
}

// const head = new node(1)
// // console.log('head',head)
// const mid = new node(2)
// // console.log('mid', mid)
// const tail = new node(3)
// // console.log('tail', mid)

// head.next = mid
// // console.log(head)
// mid.next = tail
// console.log(head)

// insert at => at start/ at end / at index

// let head = new node(1) // create node
// let mid = new node(5) // create node
// head.next = mid // create linklist

// let newnode = new node(10)
// // newnode.next = head
// // console.log(newnode.next)
// // head = newnode // insert at begining(start)
// // console.log(newnode)

// // insert at last(end)
// let tailnode = new node(90)
// insertAtEnd(tailnode, head)
// traversal(head)

// function insertAtEnd(temp, head) {
//     let current = head
//     while(current.next !== null){
//         current = current.next
//     }
//     current.next = temp
// }

// function traversal(head) {
//     let current = head
//     while (current !== null) {
//         console.log(current.data)
//         current = current.next
//     }
// }




// Define a node constructor function
function Node(data) {
    this.data = data;  // Store data in the node
    this.next = null;  // Pointer to the next node, initially set to null
}

// Creating the linked list
let head = new Node(1);  // Create the first node with value 1
let mid = new Node(5);   // Create the second node with value 5
head.next = mid;         // Link first node to second node

// Insert at the beginning (start)
let newnode = new Node(10);  // Create a new node with value 10
newnode.next = head;         // Point new node to the current head
head = newnode;              // Update head to the new node
// console.log('After inserting at start:', head);

// Insert at the end
function insertAtEnd(head, value) {
    let newNode = new Node(value);  // Create a new node with given value
    if (head === null) {
        head = newNode;             // If list is empty, new node becomes head
        return head;
    }
    let temp = head;
    while (temp.next !== null) {    // Traverse to the last node
        temp = temp.next;
    }
    temp.next = newNode;             // Set last node's next to new node
    return head;
}
head = insertAtEnd(head, 20);
// console.log('After inserting at end:', head);

// Insert at a particular index
function insertAtIndex(head, index, value) {
    let newNode = new Node(value);
    if (index === 0) {
        newNode.next = head;          // Insert at the start
        head = newNode;
        return head;
    }
    let temp = head;
    let count = 0;
    while (temp !== null && count < index - 1) {  // Traverse to the previous node
        temp = temp.next;
        count++;
    }
    if (temp === null) {
        // console.log('Index out of bounds');
        return head;
    }
    newNode.next = temp.next;  // Point new node to next of temp
    temp.next = newNode;       // Insert new node after temp
    return head;
}
head = insertAtIndex(head, 1, 15);
// console.log('After inserting at index 1:', head);

// Function to print the linked list
function printList(head) {
    let temp = head;
    while (temp !== null) {
        // console.log(temp.data);
        temp = temp.next;
    }
}

// console.log('Final Linked List:');
printList(head);
