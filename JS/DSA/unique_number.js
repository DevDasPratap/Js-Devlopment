// count unique number
const arr = [1,1,2,2,3,4,4,5,6,7,8,8,9,10]
const countUnique = function (arr) {
    if (arr.length < 0) {
        return false
    }
    const count = []
    for (let i = 0; i < arr.length; i++) {
        if (!count.includes(arr[i])) {
            count.push(arr[i])
        }
    }
    return count.length
}

const res = countUnique(arr)
console.log(res)