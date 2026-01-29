/*
CYCLIC SORT

WHEN TO USE:
- When the array contains numbers in the range 1 to N
- N = array.length
- Each number should ideally appear once (or controlled duplicates)
- Very common in problems like:
  - Find missing number
  - Find duplicate number
  - Find all missing numbers
  - Set mismatch problems

WHEN NOT TO USE:
- Array has negative numbers
- Array has 0 or values > N
- Random unsorted values (use quick/merge sort instead)

TIME COMPLEXITY:
- O(n)
  Each element is swapped at most once into its correct position

SPACE COMPLEXITY:
- O(1)
  In-place sorting, no extra memory used

WHY IT WORKS:
- Each number knows its correct index → value - 1
- We keep swapping until the current number is at its correct index
*/

function cyclic(array) {
    const length = array.length
    if (length <= 1) {
        return array
    }
    let i = 0
    while (i<length) {
        let correctIdx = array[i]-1
        if (array[i] !== array[correctIdx]) {
            [array[i], array[correctIdx]] = [array[correctIdx], array[i]]
        }else{
            i++
        }
    }
    return array
}

const array = [3, 5, 2, 1, 4]
console.log(cyclic(array))