// Recurssion have multi direction where loop have signle direction

const array = [10, 22, 30, 4, 7]
function print(array, startIndex) {
  // Base exit condition
  if (startIndex >= array.length) {
    return
  }

  // Logic
  console.log(array[startIndex]) // 0 to length direction -> common loop direction

  // Recursive call
  print(array, startIndex + 1)
}

// print(array, 0)

function revPrint(array, startIndex) {
  // Base exit condition
  if (startIndex >= array.length) {
    return
  }

  // Recursive call
  revPrint(array, startIndex + 1)

  // Logic
  console.log(array[startIndex])  // length to 0 direction -> reverse direction
}


// revPrint(array, 0)

function factorial(num) {
  // base case
  if (num === 0 || num === 1 || num > 0) {
    return 1
  }
  // console.log('num', num)
  return num * factorial(num - 1)
}

// console.log(factorial(4))

function sumArrayElement(array, startIndex) {
  // base case
  if (startIndex >= array.length) {
    return 0
  }
  return array[startIndex] + sumArrayElement(array, startIndex + 1)
}
// console.log(sumArrayElement(array, 0))

// time compexity (recurssion tree)
function factorial(n) {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

// console.log(factorial(4))

function exponentionGrouth(n, c) {
  if (n === 0) {
    return 1 //base case
  }
  return 2 * exponentionGrouth(n - 1, c) + c
}

// console.log(exponentionGrouth(4, 5))

function getPower(n) {
  if (n == 1) {
    return 2
  }
  let power = getPower(n - 1)
  return 2 * power
}

// console.log(getPower(4))

function printName(n) {
  if (n == 0) {
    return false
  }
  console.log('Pratap')
  return printName(n - 1)
}

// printName(5)

function sumfirstNaturalNum(n) {
  if (n === 1) {
    return 1
  }
  return n + sumfirstNaturalNum(n - 1)
}

// console.log(sumfirstNaturalNum(4))

function reverseArray(array, i, j) {
  if (i >= j) {
    return array
  }
  const swap = array[i]
  array[i] = array[j]
  array[j] = swap

  return reverseArray(array, i + 1, j - 1)
}

// console.log(reverseArray(array, 0, array.length-1))


const N = 12345
function countDigit(input) {
  if (parseInt(input / 10) === 0) {
    return 1
  }
  return 1 + countDigit(parseInt(input / 10))
}
const resCountDigit = countDigit(N)
// console.log(resCountDigit)

// print n
function printN(n) {
  if (n === 0) {
    return
  }
  console.log('n: ', n)
  printN(n - 1)
  console.log('n: ', n)
}
// printN(4)

// print n
function printN2(n) {
  if (n === 1) {
    return 0
  }
  return 1 + printN2(Math.floor(n / 2))
}
// console.log(printN2(16))

// print n to 1
function printTo1(n) {
 if (n<=0) {
  return
 }
 console.log('n: ', n)
 printTo1(n-1)
}

// printTo1(5)

// print 1 to n
function printToN(n) {
 if (n<=0) {
  return
 }
 printToN(n-1)
 console.log('n: ', n)
}

printToN(5)