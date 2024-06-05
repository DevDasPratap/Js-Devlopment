const A = [5, 1, 5, 4, 4, 4, 4]
const majority = (A) => {
    let hasmap = new Map()
    const len = Math.floor(A.length / 2)
    for (let i in A) {
        let num = A[i]
        if (hasmap.has(num)) {
            hasmap.set(num, hasmap.get(num) + 1)
        } else {
            hasmap.set(num, 1)
        }
    }
    for (let [key, value] of hasmap.entries()) {
        if (value > len) {
            return key
        }
    }
    return -1
}

// const res = majority(A)
// console.log(res)

// function majorityEle(A){
//     let map = {}
//     for(let i = 0; i<A.length; i++){
//         const num = A[i]
//         map[num] = map[num] + 1 || 1
//         if (map[num] > A.length/2) {
//             return num
//         }
//     }
//     return map
// }
// const result = majorityEle(A)
// console.log(result)

// function majorityEle(A){
//     let map = {}
//     for(let i = 0; i<A.length; i++){
//         const num = A[i]
//         map[num] = map[num] + 1 || 1
//     }
//     for (const key in map) {
//         if (map[key] > A.length/2) {
//             return key
//         }
//     }
//     return map
// }
// const result = majorityEle(A)
// console.log(result)