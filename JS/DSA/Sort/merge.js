/*
MERGE SORT

WHEN TO USE:
- Large datasets
- When guaranteed performance is required
- When a stable sort is needed
- When worst-case performance must be O(n log n)

WHEN NOT TO USE:
- When extra space is not allowed
- When in-place sorting is strictly required

TIME COMPLEXITY:
- Best Case:    O(n log n)
- Average Case: O(n log n)
- Worst Case:   O(n log n)

SPACE COMPLEXITY:
- O(n)
  Uses extra arrays during merge step

WHY IT WORKS:
- Divide the array into halves until single elements remain
- Merge two sorted halves into one sorted array
- Guarantees balanced recursion and consistent performance
*/

const array = [4, 2, 1, 6, 7];
console.log("Original Array:", array);

function sorting(array) {
  return mergeSort(array, 0, array.length - 1);
}

function mergeSort(array, left, right) {
  if (left === right) {
    return [array[left]]; // Return a single-element array instead of a number
  }

  const mid = Math.floor((left + right) / 2);
  const leftArray = mergeSort(array, left, mid);
  const rightArray = mergeSort(array, mid + 1, right);

  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  const newArray = [];
  let leftIndex = 0, rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      newArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      newArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from leftArray
  while (leftIndex < leftArray.length) {
    newArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from rightArray
  while (rightIndex < rightArray.length) {
    newArray.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return newArray;
}

const sortedArray = sorting(array);
console.log("Sorted Array:", sortedArray);
