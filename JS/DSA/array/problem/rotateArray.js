// Given an array 'arr' with 'n' elements, the task is to rotate the array to the left by 'k' steps, where 'k' is non-negative.

function rotateArray(array, k) {
  if (array.length === 0 || k <= 0) {
    return
  }

  k = k % array.length
  for (let i = 0; i < k; i++) {
    let first = array[0] // store first element
    for (let j = 0; j < array.length; j++) {
      array[j] = array[j+1] // Shift elements left
    }
    array[array.length-1] = first  // Move first element to the end
  }
  return array
}
const array = [1,2,3,4,5]
const result = rotateArray(array, k = 4)
console.log(result)