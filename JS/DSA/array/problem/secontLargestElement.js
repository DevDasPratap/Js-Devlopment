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
const res = secondLargestElement([10, 1, 35, 10, 34, 1])
console.log(res)