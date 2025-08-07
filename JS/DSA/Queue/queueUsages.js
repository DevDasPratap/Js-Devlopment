// import Queue from "./queue.js";

// const queueInstance = new Queue();
// queueInstance.enqueue(2);
// const item = queueInstance.dequeue();
// console.log("dequeued item is", item);
// // const item2 = queueInstance.dequeue();
// // console.log("item2 is", item2);

// queueInstance.enqueue(3);
// const peekedItem1 = queueInstance.peek();
// console.log("peekedItem1 is", peekedItem1);
// const peekedItem2 = queueInstance.peek();
// console.log("peekedItem2 is", peekedItem2);

// console.log("queue empty result 1 is is", queueInstance.isEmpty());
// queueInstance.dequeue();
// console.log("queue empty result 2 is is", queueInstance.isEmpty());

// console.log("Size of queue 1 is", queueInstance.size());
// queueInstance.enqueue(4);
// console.log("Size of queue 2 is", queueInstance.size());


const printerQueue = new Queue();
printerQueue.enqueue("Document 1");
printerQueue.enqueue("Document 2");
printerQueue.enqueue("Document 3");
printerQueue.enqueue("Document 4");
printerQueue.enqueue("Document 5");

const interval = setInterval(() => {
  if (!printerQueue.isEmpty()) {
    console.log("Printing", printerQueue.dequeue());
  } else {
    console.log('Print completed')
    clearInterval(interval);
  }
}, 1000);
