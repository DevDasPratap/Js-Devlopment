// setTimeout(() => {
//   console.log('A') // Executes after 2 seconds
// }, 2000);

// setTimeout(() => {
//   console.log('B') // Executes after 1 second
// }, 1000);

// console.log('H');  // Executes first (Synchronous)

// Promise.resolve(console.log('D')); // "D" is logged immediately

// setTimeout(() => {
//   console.log('E') // Executes after 0ms (setTimeout)
// }, 0);

// setImmediate(() => {
//   console.log('F') // Executes in the Check Phase
// });

// console.log('G');  // Executes immediately (Synchronous)

// process.nextTick(() => {
//   console.log('C') // Executes before next event loop iteration
// });

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

// execute();



const nums = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicate(nums){
    const unique = []
    for(let i=0; i<nums.length; i++){
        if(!unique.includes(nums[i])){
            unique.push(nums[i])
        }
    }
    return unique
}

// console.log(removeDuplicate(nums))

const strs = ["fllower","fllow","fllllight"]

function longPreFix(strs) {
  let longPreFixStr = ''
  for (let i = 0; i < strs[0].length; i++) {
    for(let j=1; j<strs.length; j++){
      // if(strs[j].charAt(i)==strs.charAt(i)){
      //   longPreFixStr+=strs.charAt(i)
      // }
      // else{
      //   return longPreFixStr
      // }
    }
  }
  // console.log('hhh',longPreFixStr)
  
}
// console.log("hi",longPreFix(strs))

// nums = [0,0,1,1,1,2,2,3,3,4]

// [1,8,6,2,5,4,8,3,7]

// strs = ["flower","flow","flight"]

// decimal to baniry

function decToBinary(dec){
  let bin = ''
  if (dec === 0){
    return '0'
  }
  while(dec > 0){
    bin += dec % 2
    dec = Math.floor(dec / 2)
  }
  return Number(bin)
}

// console.log(decToBinary(15))

function findGCDorHCF(a, b) {
  // Euclidean algorithm for GCD/HCF
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// console.log(findGCDorHCF(22,22))

function div13(nums) {
  const div = Number(nums/13)
  return div
}

// console.log(div13(2911285))

// clouser
function parent() {
  var localVar = 22
  var b = 10
  function child() {
    console.log(localVar)
  }
  return child
}

// const closerFn = parent()
// closerFn()
// console.dir(closerFn())


function once(fn) {
  let executed = false
  return function(...args){
    if (!executed) {
      executed = true
    return fn(...args)
    }
    return undefined
  }
}

const initialize = once(()=>{
  console.log('Initiaze')
})
// initialize()
// initialize()
// initialize()
// initialize()


function memorize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('return from cache')
      return cache[key];
    } else {
      const res = fn(...args);
      cache[key] = res;
      console.log('return as new')
      return res;
    }
  };
}

const add = (a, b) => a + b;
const memorizedAdd = memorize(add); // Pass the add function to memorize
// console.log(memorizedAdd(4, 5)); // Now call the memorized function with arguments
// console.log(memorizedAdd(4, 5)); // Now call the memorized function with arguments


function outerFn(outerVariable) {
  return function innerFn(innerVariable) {
    console.log(`Outer: ${outerVariable}, inner: ${innerVariable}`)
  }
}
const clouserExample = outerFn('Hello')
// clouserExample('World')

const apiResponseFn = new Promise((resolve, reject)=>{
  const apiResponse = {
    statusCode:400,
    success: false,
    data:{
      name:'pd',
      address:'bangalore'
    }
  }
  if (apiResponse.statusCode === 200 && apiResponse.success) {
    resolve(apiResponse)
  }else{
    reject('Something went wrong')
  }
  
})

apiResponseFn.then((res)=>{
  console.log(res)
}).catch((error)=>{
  console.log(error)
})

// input { a: { b: {c:1}, d:2 }, e: 3 }
// outpu ["a.b.c", "a.d", "e"]
function fetchKeysFromNestedObjectArray(data) {
  const result = [];

  function traverse(obj, path = '') {
    if (obj !== null && typeof obj === 'object') {
      for (let key in obj) {
        traverse(obj[key], path ? `${path}.${key}` : key);
      }
    } else {
      result.push(path);
    }
  }

  traverse(data);
  return result;
}

// console.log(fetchKeysFromNestedObjectArray({ a: { b: { c: 1 }, d: 2 }, e: 3 }));

// console.log(fetchKeysFromNestedObjectArray([1, { a: 2, b: [3, 4] }, 5]));


// simple loop over 10k array length
async function processRecords(records) {
  console.time('Sequential processing time')

  for (let index = 0; index < records.length; index++) {
    await processRecord(records[index])
  }

  console.timeEnd('Sequential processing time')

  const memory = process.memoryUsage()
  console.log('Memory used MB:', (memory.heapUsed / 1024 / 1024).toFixed(2))
  console.log('All records processed successfully')
}

async function processRecord(record) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processed record: ${record}`)
      resolve()
    }, 10)
  })
}

const records = Array.from({ length: 10000 }, (_, i) => i + 1)

// processRecords(records)

// optimized loop over 10k array length with batch processing
async function processRecordsOpt(records) {
  console.time('Batch processing time')

  const BATCH_SIZE = 1000

  for (let index = 0; index < records.length; index += BATCH_SIZE) {
    const batch = records.slice(index, index + BATCH_SIZE)

    // Run batch in parallel
    const promises = batch.map((record) => processRecord(record))

    await Promise.all(promises)

    console.log(`Processed batch ${index / BATCH_SIZE + 1}`)
  }

  console.timeEnd('Batch processing time')

  const memory = process.memoryUsage()
  console.log('Memory used MB:', (memory.heapUsed / 1024 / 1024).toFixed(2))
  console.log('All records processed successfully')
}

// processRecordsOpt(records)




// JSON vs js Object
// npm vs npx

