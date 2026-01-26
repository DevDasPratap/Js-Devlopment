function print(n) { // input
  console.log('print') // operation no of 1
}
// print(10)

/**
 * Time Complexity:
 *  The function runs only ONE statement (console.log)
 *  It does NOT depend on the input size (n)
 *  TC = O(1) → Constant Time
 * Space Complexity:
 *  No extra variables or data structures are used
 *  SC = O(1) → Constant Space
 */

function print1(n) { // input size 10
  for (let index = 0; index < n; index++) {
    console.log('Hello') // operation no of n
  }
}
// print1(10)
/**
 * Time Complexity:
 *  The loop runs from 0 to n-1
 *  console.log executes n times
 *  Execution time grows linearly with input size n
 *  TC = O(n) → Linear Time
 *
 * Space Complexity:
 *  Only one loop variable (index) is used
 *  No additional memory grows with input size
 *  SC = O(1) → Constant Space
 */

function sumNat1(n) {
  return n * (n + 1) / 2
}
// console.log('sumNat1', sumNat1(10))
/**
 * Time Complexity:
 *  The function performs a constant number of arithmetic operations
 *  (multiplication, addition, division)
 *  It does NOT depend on the input size (n)
 *  TC = O(1) → Constant Time
 *
 * Space Complexity:
 *  No extra variables or data structures are used
 *  SC = O(1) → Constant Space
 */
function sumNat2(n) {
  let sum = 0
  for (let index = 0; index <= n; index++) {
    sum += index
  }
  return sum
}
// console.log('sumNat2', sumNat2(10))
/**
 * Time Complexity:
 *  The loop runs from 0 to n
 *  The addition operation executes n+1 times
 *  Execution time grows linearly with input size n
 *  TC = O(n) → Linear Time
 *
 * Space Complexity:
 *  Only one variable (sum) and one loop counter are used
 *  Memory usage does NOT grow with input size
 *  SC = O(1) → Constant Space
 */

function printNumber(n) {
  for (let index = 1; index <= n; index++) {
    console.log(index)
  }
}
// printNumber(10)
/**
 * Time Complexity:
 *  The loop runs from 1 to n
 *  console.log executes n times
 *  Execution time grows linearly with input size n
 *  TC = O(n) → Linear Time
 *
 * Space Complexity:
 *  Only one loop variable (index) is used
 *  No additional memory grows with input size
 *  SC = O(1) → Constant Space
 */

function printAllPair(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, j)
    }
  }
}

// console.log(printAllPair(10))
/**
 * Time Complexity:
 *  Two nested loops each run from 1 to n
 *  console.log executes n × n times
 *  Execution time grows quadratically with input size n
 *  TC = O(n²) → Quadratic Time
 *
 * Space Complexity:
 *  Only loop variables (i, j) are used
 *  No additional memory grows with input size
 *  SC = O(1) → Constant Space
 */

function printAllTripple(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        console.log(i, j, k)
      }
    }
  }
}

// printAllTripple(10)

/**
 * Time Complexity:
 *  Three nested loops each run from 1 to n
 *  console.log executes n × n × n times
 *  Execution time grows cubically with input size n
 *  TC = O(n³) → Cubic Time
 *
 * Space Complexity:
 *  Only loop variables (i, j, k) are used
 *  No additional memory grows with input size
 *  SC = O(1) → Constant Space
 */

function repeatedDivision(n) {
  while (n > 1) {
    n = Math.floor(n / 2)
    console.log(n)
  }
}
// repeatedDivision(10)

/**
 * Time Complexity:
 *  In each iteration, n is divided by 2
 *  The loop continues until n becomes 1
 *  Number of iterations ≈ log₂(n)
 *  Execution time grows logarithmically with input size n
 *  TC = O(log n) → Logarithmic Time
 *
 * Space Complexity:
 *  No extra data structures are used
 *  Only the variable n is updated
 *  Memory usage does NOT grow with input size
 *  SC = O(1) → Constant Space
 */


function printFactor(n) {
  for (let i = 1; i * i <= n; i++) {
    console.log('i', i)
    if (n % i === 0) {
      console.log('n/i', n / i)
    }
  }
}

// printFactor(10)
/**
 * Time Complexity:
 *  The loop runs while i * i <= n
 *  i increases from 1 to √n
 *  Total iterations are proportional to √n
 *  TC = O(√n) → Square Root Time
 *
 * Space Complexity:
 *  No extra data structures are used
 *  Only loop variable (i) is used
 *  Memory usage does NOT grow with input size
 *  SC = O(1) → Constant Space
 */

function printFactor2(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log('i', i)
      if (i !== n / i) {
        console.log('n/i', n / i)
      }
    }
  }
}

// printFactor2(10)
/**
 * Time Complexity:
 *  The loop runs while i * i <= n
 *  i increases from 1 to √n
 *  Factor checking is done in constant time
 *  Duplicate factors are avoided
 *  TC = O(√n) → Square Root Time
 *
 * Space Complexity:
 *  No extra data structures are used
 *  Only loop variable (i) is used
 *  Memory usage does NOT grow with input size
 *  SC = O(1) → Constant Space
 */

function repeatedSqureRoot(n) {
  while (n > 1) {
    n = Math.sqrt(n)
    console.log(n)
  }
}
// repeatedSqureRoot(10)