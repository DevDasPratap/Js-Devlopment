/*
QUICK SORT (Recursive, Not In-Place)

WHEN TO USE:
- General-purpose sorting
- When average performance matters more than worst case
- Works well for large datasets
- Very common in interviews and real systems

WHEN NOT TO USE:
- When worst-case O(n²) must be avoided (use Merge Sort)
- When extra space is not allowed (this version uses extra arrays)
- When stability is required (Quick Sort is not stable)

TIME COMPLEXITY:
- Best Case:    O(n log n)
- Average Case: O(n log n)
- Worst Case:   O(n²)  (bad pivot selection, e.g. already sorted)

SPACE COMPLEXITY:
- O(n)
  Due to recursion + left/right arrays (not in-place)

WHY IT WORKS:
- Choose a pivot
- Partition remaining elements into left (< pivot) and right (≥ pivot)
- Recursively sort left and right
- Combine: left + pivot + right
*/

function quick(array) {
  if (array.length <= 1) {
    return array
  }

  const pivot = array[0]
  const left = []
  const right = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  // console.log('Left: ', left, 'Pivot: ', pivot, 'Right: ', right)
  return [...quick(left), pivot, ...quick(right)]
}

const array = [4, 10, 5, 9, 7, 8]

const result = quick(array)
console.log(result)