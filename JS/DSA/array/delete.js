const arr = [2, 3, 1, 10, 5, 10, 9, 16, 8]
const element = 10
function delete_element(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      arr[i] = null
      return arr
    }
  }
}
delete_element(arr, element)
const result = arr.filter((item)=>item!==null)
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
const arr1 = [1, 2, 3, 4, 5];
const element1 = 3;

const result1 = deleteElement(arr1, element1);
// console.log(result1); // Output: [1, 2, 4, 5]


// Function to delete an element from an array
function deleteElementFromArray(arr2, element) {
  // Find the index of the element to be deleted
  const index = arr2.indexOf(element);

  // If the element is not found, return the original array
  if (index === -1) {
    return arr2;
  }

  // Remove the element from the array
  arr2.splice(index, 1);

  return arr2; // Return the updated array
}
// Example usage
const arr2 = [1, 2, 3, 4, 5];
const element2 = 3;
const result2 = deleteElementFromArray(arr2, element2);
// console.log(result2); // Output: [1, 2, 4, 5]


// Delete element
function deleteEle(array, ele) {
  const afterDelete = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== ele) {
      afterDelete.push(array[i])
    }
  }
  return afterDelete
}

const result3 = deleteEle([1, 2, 3, 4, 5], 3)
console.log('Result: ', result3)