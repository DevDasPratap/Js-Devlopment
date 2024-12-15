const nums = [1,2,1]
// Output: [1,2,1,1,2,1]

// for (let i = 0; i < nums.length; i++) {
//     nums.push(nums[i])
// }

const arr = [1,2,1,1,4,4, 5,5,8,5]
// const dup = []
// const unique = []
// for (let i = 0; i < arr.length; i++) {
//     if (unique.includes(arr[i])) {
//         dup.push(arr[i])
//     }else{
//         unique.push(arr[i])
//     }
// }

// console.log('dup', dup)
// console.log('unique', unique)

const freq = {}
const dup = []
const unique = []
for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0 ) + 1
}
for (const [key, value] of Object.entries(freq)) {
    if (value > 1) {
        dup.push(key)
    }else{
        unique.push(key)
    }
}

// console.log('freq', freq)
// console.log('dup', dup)
// console.log('unique', unique)

// Checking for Prime Numbers

let prime = true
const num = 101
for(let i =2; i<=num; i++){
if (num %i===0) {
    prime = false
}
}
console.log('prime', prime)