setTimeout(() => {
    console.log('A') // Executes after 2 seconds
  }, 2000);
  
  setTimeout(() => {
    console.log('B') // Executes after 1 second
  }, 1000);
  
  console.log('H');  // Executes first (Synchronous)
  
  Promise.resolve(console.log('D')); // "D" is logged immediately
  
  setTimeout(() => {
    console.log('E') // Executes after 0ms (setTimeout)
  }, 0);
  
  setImmediate(() => {
    console.log('F') // Executes in the Check Phase
  });
  
  console.log('G');  // Executes immediately (Synchronous)
  
  process.nextTick(() => {
    console.log('C') // Executes before next event loop iteration
  });

// H  // (Synchronous)
// D  // (Synchronous inside Promise.resolve)
// G  // (Synchronous)
// C  // (process.nextTick - executed before the next event loop cycle)
// E  // (setTimeout with 0ms delay, goes to Timer phase)
// F  // (setImmediate - executed in Check phase after Timer phase)
// B  // (setTimeout with 1s delay)
// A  // (setTimeout with 2s delay)


// Write a function to find all subsets of a given array of unique integers. A subset of an array is a selection of elements (including an empty set and the array itself).
// Input:  [1, 2, 3]:
// Output:  [[],[1],[1, 2],[1, 2,3],[1, 3],[2],[2,3],[3]]

const subsets = function (nums) {
    const subSet = [[]]
    for (let i = 0; i < nums.length; i++) {
        let len = subSet.length
        for (let j = 0; j < len; j++) {
            subSet.push([...subSet[j], nums[i]])
        }
    }
    return subSet
};

// console.log(subsets([1,2,3]))

// How to Execute One Async Function After Another in JavaScript?
async function demo1() {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log('demo1');
          resolve(true); // Resolves after logging "demo1"
      }, 1000);
  });
}

async function demo2() {
  console.log('demo2');
}

async function execute() {
  await demo1(); // Waits for demo1 to complete
  demo2();       // Executes demo2 after demo1
}

execute();
