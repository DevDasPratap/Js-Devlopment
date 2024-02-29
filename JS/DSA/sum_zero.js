const arr = [-5, -4, -2, 0, 2, 4, 6, 8]

function getSumPairZero(arr) {
    if (arr.length < 0) return 0;
    let left = 0
    let right = arr.length-1
    let sum = 0
    while (left < right) {
        sum = arr[left] + arr[right]
        if (sum===0) {
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--
        }else{
            left++
        }
    }
}

const res = getSumPairZero(arr)

console.log(res)