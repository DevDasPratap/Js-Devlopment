// Bit Manipulation
// Means working with the binary (0s & 1s) of numbers.

// In JS, numbers are 64-bit floats (IEEE 754).
// But bitwise operators convert them into 32-bit signed integers.

// Bitwise Operators:

// & (AND) → 1 only if both bits are 1
//   10 & 01 = 00
//   10 & 11 = 10

// | (OR) → 1 if any one bit is 1
//   10 | 01 = 11
//   10 | 11 = 11

// ^ (XOR) → 1 if bits are different
//   10 ^ 01 = 11
//   10 ^ 11 = 01

// ~ (NOT) → flips bits (1→0, 0→1)
//   ~5 = -(5+1) = -6

// << (Left Shift) → moves bits left, adds 0 on right
//   5 << 1 = 10

// >> (Signed Right Shift) → moves bits right, keeps sign
//   -10 >> 1 = -5

// >>> (Unsigned Right Shift) → moves bits right, fills left with 0
//   -10 >>> 1 = large positive number

// 🔥 BIT MANIPULATION CHEATSHEET (JS)

// 1. Swap two numbers (without temp)
a = a ^ b
b = a ^ b
a = a ^ b

// 2. Set the i-th bit (make it 1)
// Formula: n | (1 << i)
n = n | (1 << i)

// 3. Toggle the i-th bit (flip it)
// Formula: n ^ (1 << i)
n = n ^ (1 << i)

// 4. Check if the i-th bit is set (1)
// Formula: (n & (1 << i)) != 0
isSet = (n & (1 << i)) !== 0

// 5. Clear the i-th bit (make it 0)
// Formula: n & ~(1 << i)
n = n & ~(1 << i)

// 6. Check if number is even or odd
// Formula: n & 1
isOdd = (n & 1) === 1

// 7. Count number of 1s (Set Bits)
// Built-in: n.toString(2).split('1').length-1
// Formula (Brian Kernighan’s Algo):
count = 0
while (n > 0) {
  n = n & (n - 1)
  count++
}

// 8. Get rightmost set bit
// Formula: n & -n
rmsb = n & -n

// 9. Gray Code of n
// Formula: n ^ (n >> 1)
gray = n ^ (n >> 1)

// 10. Check if a number is Power of 2
// Formula: n > 0 && (n & (n - 1)) === 0
isPow2 = n > 0 && (n & (n - 1)) === 0

// 11. Find the only non-repeating element (all others appear twice)
// Formula: XOR all numbers
ans = 0
for (let x of arr) ans ^= x

// 12. Find two non-repeating elements (all others appear twice)
xorAll = arr.reduce((a,b)=>a^b,0)
rmsb = xorAll & -xorAll
x = y = 0
for (let num of arr) {
  if (num & rmsb) x ^= num
  else y ^= num
}

// 13. Find missing number in 0..n
// Formula: XOR all numbers ^ XOR(0..n)
missing = arr.reduce((a,b)=>a^b,0) ^ Array.from({length:n+1},(_,i)=>i).reduce((a,b)=>a^b,0)

// 14. Reverse bits of 32-bit integer
rev = 0
for (let i = 0; i < 32; i++) {
  rev = (rev << 1) | (n & 1)
  n >>= 1
}

// 15. Check if n is multiple of 4
isMult4 = (n & 3) === 0

// 16. Multiply/Divide by 2 (fast)
// n << 1 (multiply by 2)
// n >> 1 (divide by 2)

// 17. Turn off rightmost set bit
// Formula: n & (n - 1)
n = n & (n - 1)

// 18. Isolate rightmost 0 bit
// Formula: ~n & (n+1)
res = ~n & (n + 1)

/**
 * Count set bits in an integer (Brian Kernighan, DP).

Find single element (others appear twice).

Find two single elements (others twice).

Find missing number (0..n).

Check if number is power of 2.

Generate Gray code sequence.

Reverse bits of integer.

Swap odd and even bits.

Find XOR of all numbers from 1 to n.

Find XOR of a range [L, R].

Find rightmost different bit in two numbers.

Check if number is palindrome in binary.

Find position of rightmost set bit.

Fast multiply/divide by powers of 2 using shift.

leetcode: 136, 137, 260, 3158
 */