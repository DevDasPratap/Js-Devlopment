const secondLargestElement = (input) => {
  let large = - Infinity
  let secondLarge = - Infinity
  for (let i = 0; i < input.length; i++) {
    if (input[i] > large) {
      secondLarge = large
      large = input[i]
    }
    if (input[i] > secondLarge && input[i] < large) {
      secondLarge = input[i]
    }
  }
  return secondLarge
}
const res = secondLargestElement([10, 1, 35, 10, 34, 1, 9])
// console.log(res)

// second smallest element
function secondsmallestElement(array) {
  let smallest = Infinity
  let secondSmallest = Infinity
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      secondSmallest = smallest
      smallest = array[i]
    }else if(array[i] > smallest && array[i] < secondSmallest){
      secondSmallest = array[i]
    }
  }
  return secondSmallest
}
const result = secondsmallestElement([10, 1, 35, 10, 34, 1, 9, 80])
console.log(result)