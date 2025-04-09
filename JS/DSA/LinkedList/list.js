/**
 * Head pointer will always be the first of the linked list
 * Current pointer will be used for traversing
 */


class Node {
    constructor(data) {
        // One node is an object having 2 part (data/referance other node)
        this.data = data // Store data in the node
        this.next = null;  // Pointer to the next node, initially set to null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    // Append operation - adds a new node to the end of the list
    append(data){
        const newNode = new Node(data)
        if (this.head===null) {
            this.head=newNode
            this.head.next=null
        }else{
            // add at last position if head not null
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
        }
    }
    // Display operation - prints the linked list
    display(){
        let current = this.head
        while (current) {
            // console.log(current)
            // console.log(current.data)
            console.log(`Current: ${current.data} - Next: ${current.next ? current.next.data : null}`)
            current = current.next
        }
    }
    // Prepend operation - adds a new node to the beginning of the list
    prepend(data){
        const newNode = new Node(data)
        newNode.next = this.head // point new node to current head
        this.head = newNode // update head to new node
    }
    // get current head
    getCurrentHead(){
        return this.head
    }

    // get current tail
    getCurrentTail(){
        let tail = this.head
        while (tail && tail.next !== null) {
            tail = tail.next
        }
        return tail
    }

    // insert at a particular position
    insertAtPosition(target, data){
        const newNode = new Node(data)
        let current = this.head
        while (current !== null) {
            if (current.data === target) {
                newNode.next = current.next
                current.next = newNode
            }
            current = current.next
            if (current === null) {
                console.log('Target not found')
                return
            }
        }
    }
}

const linklist = new LinkedList()
linklist.append(1)
linklist.append(2)
linklist.append(3)
linklist.append(4)
linklist.append(5)
// linklist.display()
linklist.prepend(0)
linklist.display()
// const currentHead = linklist.getCurrentHead()
// console.log('Current Head:', currentHead)
// const currentTail = linklist.getCurrentTail()
// console.log('Current Tail:', currentTail)

linklist.insertAtPosition(3, 3.5)
linklist.display()


// function node(data) {
//     this.data = data
//     this.next = null
// }

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
// function Node(data) {
//     this.data = data;  // Store data in the node
//     this.next = null;  // Pointer to the next node, initially set to null
// }

// // Creating the linked list
// let head = new Node(1);  // Create the first node with value 1
// let mid = new Node(5);   // Create the second node with value 5
// head.next = mid;         // Link first node to second node

// // Insert at the beginning (start)
// let newnode = new Node(10);  // Create a new node with value 10
// newnode.next = head;         // Point new node to the current head
// head = newnode;              // Update head to the new node
// // console.log('After inserting at start:', head);

// // Insert at the end
// function insertAtEnd(head, value) {
//     let newNode = new Node(value);  // Create a new node with given value
//     if (head === null) {
//         head = newNode;             // If list is empty, new node becomes head
//         return head;
//     }
//     let temp = head;
//     while (temp.next !== null) {    // Traverse to the last node
//         temp = temp.next;
//     }
//     temp.next = newNode;             // Set last node's next to new node
//     return head;
// }
// head = insertAtEnd(head, 20);
// // console.log('After inserting at end:', head);

// // Insert at a particular index
// function insertAtIndex(head, index, value) {
//     let newNode = new Node(value);
//     if (index === 0) {
//         newNode.next = head;          // Insert at the start
//         head = newNode;
//         return head;
//     }
//     let temp = head;
//     let count = 0;
//     while (temp !== null && count < index - 1) {  // Traverse to the previous node
//         temp = temp.next;
//         count++;
//     }
//     if (temp === null) {
//         // console.log('Index out of bounds');
//         return head;
//     }
//     newNode.next = temp.next;  // Point new node to next of temp
//     temp.next = newNode;       // Insert new node after temp
//     return head;
// }
// head = insertAtIndex(head, 1, 15);
// // console.log('After inserting at index 1:', head);

// // Function to print the linked list
// function printList(head) {
//     let temp = head;
//     while (temp !== null) {
//         // console.log(temp.data);
//         temp = temp.next;
//     }
// }

// // console.log('Final Linked List:');
// printList(head);








// Rohan Kumar Sahu
// 4:03 PM
// Let A = [1,2,3]
// Let B = [1,2,3]

// (A==B)

// (A===B)
// Let A = { “name” : “abc”}
// Let B = A;
//  B.name = “cde”

// A.name = ?
// B.name = ?
// Rohan Kumar Sahu
// 4:05 PM
// for(var i = 0; i < 5; i++){
//  setTimeout(() => {
//   console.log(i);
// }, 1000)
// }
// var count=1;
// var func1=()=>console.log(count);
// var func2=()=>{
// 	var count=2;
// 	func1();
// }
// func2();
// Rohan Kumar Sahu
// 4:07 PM
// 10 + “10” + 5
// Rohan Kumar Sahu
// 4:08 PM
// input  - [1, 2, 3, 4, 5]
// output - [1,2,3,4,5,1,2,3,4,5]



// // console.log(10 + “10” + 5)

// // //1015

// // input  - [1, 2, 3, 4, 5]
// // output - [1,2,3,4,5,1,2,3,4,5]

// const input = [1, 2, 3, 4, 5]
// // const result = [...input, ...input]
// // console.log()
// const result = []
// for(let i=0; i<input.length; i++){
//     result.push(input[i])
// }
// for(let i=0; i<input.length; i++){
//     result.push(input[i])
// }
// console.log(result)