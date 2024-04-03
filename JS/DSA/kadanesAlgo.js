// sub array largest sum
const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

const maxSubArray = function(input) {
    let max = input[0]
    for (let i = 0; i < input.length; i++) {
        let curentSum = 0
        for (let j = i; j < input.length; j++) {
            curentSum = curentSum + input[j]
            if (curentSum > max) {
                max = curentSum
            }
        }
    }
    return max
}
const res = maxSubArray(input)
console.log(res)