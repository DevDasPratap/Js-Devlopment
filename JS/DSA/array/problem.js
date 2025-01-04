// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// function moveZeroes(nums) {
//     // create a new array to store non-zero elements
//     let result = [];

//     // first, add all non-zero elements to the new array
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             result.push(nums[i]);
//         }
//     }

//     // calculate how many zeros are needed
//     let zeroCount = nums.length - result.length;

//     // append the zeros to the new array
//     for (let i = 0; i < zeroCount; i++) {
//         result.push(0);
//     }

//     // copy the result array back to the original array
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = result[i];
//     }
//     return nums
// }

function moveZeroes(nums) {
    // position to place the next non-zero element
    let lastNonZeroFoundAt = 0;

    // iterate through the array
    for (let current = 0; current < nums.length; current++) {
        // check if the current element is non-zero
        if (nums[current] !== 0) {
            // swap the elements at current position with the last non-zero position
            [nums[lastNonZeroFoundAt], nums[current]] = [nums[current], nums[lastNonZeroFoundAt]];
            // move to the next position for non-zero element
            lastNonZeroFoundAt++;
        }
    }
    return nums
}

// console.log(moveZeroes([0, 1, 0, 4, 22]))

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
    const map = {}
    for (const element of nums) {
        // Update the count of each number in the map
        map[element] = (map[element] || 0) + 1
        // Check if any number appears more than n/2 times
        if (map[element] > Math.floor(nums.length/2)) {
            return element
        }
    }
    // return map
}
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// function removeDuplicates(nums) {
//     const unique = []
//     for (const num of nums) {
//         if (!unique.includes(num)) {
//             unique.push(num)
//         }
//     }
//     return unique
// }

function removeDuplicates(nums) {
    if (nums.length === 1) {
        return nums
    }
    let start = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[start] = nums[i]
            start++
        }
    }
    return start
}
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))