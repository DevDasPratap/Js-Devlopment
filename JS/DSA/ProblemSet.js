// Weird Algorithm
/**
 * Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n is one. For example, the sequence for n=3 is as follows:
$$ 3 \rightarrow 10 \rightarrow 5 \rightarrow 16 \rightarrow 8 \rightarrow 4 \rightarrow 2 \rightarrow 1$$
Your task is to simulate the execution of the algorithm for a given value of n.
Input
The only input line contains an integer n.
Output
Print a line that contains all values of n during the algorithm.
Constraints

1 \le n \le 10^6

Example
Input:
3

Output:
3 10 5 16 8 4 2 1
 */

function wriedAlgo(num) {
  if (num === 1) {
    return 1
  }
  if (num % 2 === 0) {
    return num + ' ' + wriedAlgo(num / 2)
  } else {
    return num + ' ' + wriedAlgo(num * 3 + 1)
  }
}

// console.log(wriedAlgo(3))

function collatzSequence(num) {
  const sequence = []

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num = num * 3 + 1
    }
    sequence.push(num)
  }
  return sequence
}

// console.log(collatzSequence(3))


// Missing Number
/**
 * You are given all numbers between 1,2,\ldots,n except one. Your task is to find the missing number.
Input
The first input line contains an integer n.
The second line contains n-1 numbers. Each number is distinct and between 1 and n (inclusive).
Output
Print the missing number.
Constraints

2 \le n \le 2 \cdot 10^5

Example
Input:
5
2 3 1 5

Output: 4
 */

function missingNumber(number, array) {
  const present = new Array(number).fill(false);

  for (let i = 0; i < array.length; i++) {
    present[array[i]] = true;
  }

  for (let i = 1; i <= number; i++) { 
    if (!present[i]) {
      return i; 
    }
  }

  return -1; // If no missing number is found
}

console.log(missingNumber(5, [2, 3, 1, 5])); // Output: 4