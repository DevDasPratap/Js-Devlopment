// LinkedList 10 -> 16 -> 21
// const linkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 16,
//             next: {
//                 value: 21,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(data ){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head,
        this.length = 1
    }
    append(data){ //add in last
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(data){ // add in first
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    traversing(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    
    insert(index, data){
        const insertNode = {
            value: data,
            next: null
        }
        const leaderNode = this.traversing(index-1)
        const nextNode = leaderNode.next
        leaderNode.next = insertNode
        insertNode.next = nextNode
        this.length++
    }
    remove(index){
        const leaderNode = this.traversing(index-1)
        const unwantedNode = leaderNode.next
        const nextNode = unwantedNode.next

        leaderNode.next = nextNode
        this.length--
    }
    reverse(){
        let first = this.head
        this.tail = this.head
        let second = first.next
        while(second){
            let temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first

    }
}

const myList = new LinkedList(10)

// console.log(myList)
myList.append(16)
myList.prepend(8)
myList.insert(1, 9)
myList.remove(1)
myList.reverse()
console.log(myList)