// An Not in-place Javascript program
// to reverse an array

/* Function to reverse arr[]
   from start to end*/
function reverseArray(arr, n) {
  // Create a copy array
  // and store reversed
  // elements
  let rev = new Array(n);
  for (let i = 0; i < n; i++){
    rev[n - i - 1] = arr[i];
  }
// console.log('rev', rev)
  // Now copy reversed 
  // elements back to arr[]
  for (let i = 0; i < n; i++){
    arr[i] = rev[i];
  }
  return arr
}

const array = [1, 2, 3, 4, 5, 6]
let n = array.length;
console.log(reverseArray(array, n))
