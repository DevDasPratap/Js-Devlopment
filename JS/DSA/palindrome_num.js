const palindromeNum = 110011
const str = String(palindromeNum)
function palindrome(str) {
    let rev = ''
    for (let index = str.length-1; index>= 0; index--) {
        rev += str[index]
    }
    if (str === rev) {
        return true
    }else{
        return false
    }
}

const res = palindrome(str)
console.log(res)