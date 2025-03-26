// Program to find sum of first n natural numbers

/**
 * Input: n = 3
 * Output: 6
 * Explanation: Note that 1 + 2 + 3 = 6
 * 
 * Input  : 5
 * Output : 15 
 * Explanation : Note that 1 + 2 + 3 + 4 + 5 = 15
 */

function findSumFirstNumber(num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

const res = findSumFirstNumber(5)
console.log(res)