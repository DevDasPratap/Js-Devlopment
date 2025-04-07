/**
 * Subarray → A contiguous part of an array (elements must be continuous).
 *
 * Sliding Window Technique:
 *   - Used to reduce the time complexity of problems involving subarrays or substrings.
 *   - Works on both arrays and strings.
 *
 * There are two types of sliding windows:
 * 
 * 1. Fixed-size window:
 *    - The size of the window (k) is fixed and known in advance.
 *    - Example: Find the maximum sum of any subarray of size k.
 *
 * 2. Variable-size window:
 *    - The window size is not fixed.
 *    - Used when we are asked to find the smallest or largest window that satisfies a certain condition.
 *    - Example: Find the smallest subarray with a sum greater than or equal to a given value.
 *
 * Common keywords that indicate sliding window problems:
 *   - Subarray / Substring
 *   - Largest / Smallest
 *   - Maximum / Minimum
 */


/**
 * 🔁 Sliding Window Technique
 * Used to solve problems involving contiguous subarrays or substrings efficiently.
 * There are two main types:
 *
 * ------------------------------------------------------------
 * 🔹 1. Fixed-Size Sliding Window
 * ------------------------------------------------------------
 * ✅ Window size is fixed (k is given).
 * ✅ Window moves one element at a time.
 * ✅ Mainly used to calculate values (sum, max, min) over a fixed-size subarray.
 *
 * 🧠 Key Idea:
 *   - Use two pointers: start and end.
 *   - Keep window size exactly k.
 *   - Slide the window by incrementing both pointers once a window is processed.
 *
 * 📌 Example Problems:
 *   - Maximum sum subarray of size k
 *   - First negative number in every window of size k
 *   - Number of anagrams of a pattern in a string (using k = length of pattern)
 *
 * ------------------------------------------------------------
 * 🔸 2. Variable-Size Sliding Window
 * ------------------------------------------------------------
 * ✅ Window size is dynamic (not fixed).
 * ✅ Expand and shrink window based on a condition (like sum, distinct count, etc.).
 * ✅ Used when asked for longest/shortest subarray/substring that satisfies a condition.
 *
 * 🧠 Key Idea:
 *   - Use two pointers: start and end.
 *   - Expand the end pointer to meet the condition.
 *   - Shrink the start pointer to optimize (minimize or maximize) the result.
 *
 * 📌 Example Problems:
 *   - Smallest subarray with sum ≥ target
 *   - Longest substring without repeating characters
 *   - Longest substring with at most K distinct characters
 *   - Fruit Into Baskets (at most 2 types)
 *
 * ------------------------------------------------------------
 * 🎯 Summary:
 * - Fixed Window → Known size (k), goal is to calculate something over that size.
 * - Variable Window → Unknown size, goal is to find the optimal window that meets a condition.
 */

// Problems
// Fixed
// 1. Max sub array of size k

// Brute force approach
function maxSubArrayBruteForce(array, k) {
    let maxSum = 0
    for (let i = 0; i < array.length - k; i++) {
        let sum = 0
        for (let j = i; j < i + k; j++) {
            sum += array[j]
        }
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
}
// console.log(maxSubArrayBruteForce([4, 5, 7, 8, 9, 1, 1, 4, 5, 5], 3))

// using Sliding Window
function maxSubArray(array, k) {
    let start = 0
    let maxSum = 0
    let windowSum = 0
    for (let end = 0; end < array.length; end++) {
        console.log(`Window ${end}: [${array[start]}, ${array[start + 1]}, ${array[end]}]`);
        windowSum += array[end]
        if (end - start + 1 === k) { // +1 use for array zero base index that is why we +1 to compare with k
            maxSum = Math.max(windowSum, maxSum)
            windowSum -= array[start]; // Remove the first element of the window
            start++; // Slide the window
        }
    }
    return maxSum
}
// console.log(maxSubArray([4,5,7,8,9,1,1,4,5,5], 3))

// 2. fist negetive number in every window size of k

function firstNegetive(array, k) {
    if (array.length <= 0) {
        return 0
    }
    // const negetive = []
    // let start = 0
    // let end = 0
    // for (end = 0; end < array.length; end++) {
        
    // }
}
console.log(firstNegetive([10, -1, -7, 8, -15, 30, 16, 22, -88], 3))