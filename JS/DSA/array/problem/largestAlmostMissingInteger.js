function largestAlmostMissingInteger(nums, k) {
    let n = nums.length;
    let countMap = new Map();

    // Iterate over all subarrays of size k
    for (let i = 0; i <= n - k; i++) {
        let subarray = nums.slice(i, i + k); // Extract subarray of size k
        let uniqueSet = new Set(subarray); // Unique elements in subarray

        // Count occurrences of each element across all subarrays
        for (let num of uniqueSet) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
    }

    let result = -1;
    
    // Find the largest number appearing in exactly one subarray
    for (let [num, count] of countMap) {
        if (count === 1) {
            result = Math.max(result, num);
        }
    }

    return result;
}

// Example Usage:
console.log(largestAlmostMissingInteger([3,9,2,1,7], 3)); // Output: 7
console.log(largestAlmostMissingInteger([3,9,7,2,1,7], 4)); // Output: 3
console.log(largestAlmostMissingInteger([0,0], 1)); // Output: -1
