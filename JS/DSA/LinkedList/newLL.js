class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    insertAtEnd(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
        }
    }
    traverse(){
        if(this.head === null){
            return
        }
        let current = this.head
        console.log(current.data)
        while (current.next !== null) {
            current = current.next
            console.log(current.data)
        }
    }
    deleteByValue(data){
        if(this.head === null){
            return
        }
        let current = this.head
        if (current.data === data) {
            this.head = current.next
            return
        }
        let previous = null
        while (current.next !== null) {
            previous = current
            current = current.next
            if (current.data === data) {
                previous.next = current.next
                return
            }
        }
    }
    search(data) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;
    if (current.data === data) {
      return true;
    }

    while (current.next !== null) {
      current = current.next;
      if (current.data === data) {
        return true;
      }
    }

    return false;
  }

  length(){
    if(this.head === null){
        return 0
    }
    let counter = 1
    let current = this.head
    while (current.next !== null) {
        current = current.next
        counter++
    }
    return counter
  }

}

const ll = new LinkedList()
ll.insertAtEnd(4)
ll.insertAtEnd(5)
ll.insertAtEnd(7)
ll.insertAtEnd(8)
ll.insertAtEnd(9)
// console.log('current')
// ll.traverse()
// ll.deleteByValue(5)
// console.log('after delete')
ll.traverse()
console.log(ll.search(7))
console.log(ll.length())