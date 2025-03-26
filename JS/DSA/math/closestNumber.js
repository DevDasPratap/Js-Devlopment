// Find the number closest to n and divisible by m

// Input: n = 13, m = 4
// Output: 12
// Explanation: 12 is the closest to 13, divisible by 4.


// Input: n = -15, m = 6
// Output: -18
// Explanation: Both -12 and -18 are closest to -15, but-18 has the maximum absolute value.

function closestNumber(n, m) {
    let closest = 0
    closest = Math.round(n/m)  // Find the closest integer quotient
    return closest * m  // Multiply by m to get the closest multiple
}

const res = closestNumber(-15, 6)
console.log(res)