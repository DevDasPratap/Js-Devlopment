// const arr = [2, 3, 1, 10, 5, 10, 9, 16, 8]
// const element = 10
function delete_element(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      arr[i] = null
      return arr
    }
  }
}
// delete_element(arr, element)
// const result = arr.filter((item)=>item!==null)
// console.log(result)


// Function to find the index of the key to be deleted
function findElement(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

// Function to delete an element
function deleteElement(arr, key) {
  // Find position of the element to be deleted
  let pos = findElement(arr, key);

  if (pos === -1) {
    console.log("Element not found");
    return arr; // Return the array unchanged if key is not found
  }

  // Shift elements to the left to delete the element
  for (let i = pos; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // Remove the last element (redundant after shifting)
  arr.length -= 1;

  return arr; // Return the updated array
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const element = 3;

const result = deleteElement(arr, element);
console.log(result); // Output: [1, 2, 4, 5]
