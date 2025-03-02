// Find Symmetric Difference
// Question: Find elements that are in either array but not in both.

let arr1 = [2, 1, 4, 6, 3];
let arr2 = [1, 7, 8, 3, 2];
// Output: [4, 6, 7, 8]

function findDiffrentEach(arr1, arr2) {
  const arr = []
  const hash = {}
  for (let i = 0; i < arr1.length; i++) {
    hash[arr1[i]] = (hash[arr1[i]] || 0) + 1
  }
  for (let i = 0; i < arr2.length; i++) {
    hash[arr2[i]] = (hash[arr2[i]] || 0) + 1
  }
  for (let key in hash) {
    if (hash[key] === 1) {
      arr.push(Number(key))
    }
  }
  return arr
}
const result = findDiffrentEach(arr1, arr2);
console.log(result);