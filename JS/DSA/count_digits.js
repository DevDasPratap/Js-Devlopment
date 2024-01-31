const digits = 7789
function countDigits(digits) {
    let count = 0
    const str = String(digits)
    for (let index = 0; index < str.length; index++) {
        if (str[index] >= 0) {
            count++
        }
    }
    return count
}

const res = countDigits(digits)
console.log(res)
