const str1 = 'hello'
const str2 = 'oellh'

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let counter = {}
    for (const char of str1) {
        counter[char] = (counter[char] || 0) +1
    }
    for (const char of str2) {
        if (!counter[char]) {
            return false
        }
        counter[char] -= 1
    }
    return true

}

const res = isAnagram(str1, str2)
console.log(res)