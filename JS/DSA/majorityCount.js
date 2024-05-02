const A = [2, 1, 2] //ans 2
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

const res = majority(A)
console.log(res)