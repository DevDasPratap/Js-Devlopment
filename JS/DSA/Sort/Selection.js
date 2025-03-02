// selection sort
const arr = [4, 10, 5, 9, 7, 8]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j
      }
    }
    if (i !== smallest) {
      // let temp = arr[i]
      // arr[i] = arr[smallest]
      // arr[smallest] = temp
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
    }
  }
  return arr
}
const res = selectionSort(arr)
console.log(res)



function selectionSortDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    let largest = i; // Track the index of the largest element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[largest]) { // Change condition to find the largest
        largest = j;
      }
    }
    if (i !== largest) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
    }
  }
  return arr;
}

// const result = selectionSortDescending(arr);
// console.log(result); // Output: [10, 9, 8, 7, 5, 4]
