const str = 'A man, a plan, a canal: Panama';

function validPalindrom(str) {
    let palindrom = ''
    str = str.toLowerCase()
    const has = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<str.length; i++){
        if (has.includes(str[i])) {
            palindrom += str[i]
        }
    }
    if (str.length <= 0) {
        return 'The string contains no valid alphabetic characters to check.'
    }

    for(let start=0, end=palindrom.length-1; start<end; start++, end--){
        if (palindrom[start] !== palindrom[end]) {
            return false
        }
    }

    return true
}

// console.log(validPalindrom(str))

// First unique character in a string
function fistUniqueChar(str) {
    const map = {}
    for(let i=0; i<str.length; i++){
        map[str[i]] = (map[str[i]] || 0) +1
    }
    for(let i=0; i<str.length; i++){
        if (map[str[i]] === 1) {
            return {index: i, char: str[i]}
        }
    }
    return { index: -1, char: null };
}

// console.log(fistUniqueChar('leetcode'))

// Repeated substring pattern
function repeatedSubstring(str) {
    if (!str || str.length< 2) {
        return false
    }
    const double = str+str
    const sliced = double.slice(1,-1)
    return sliced.includes(str)
}

// console.log(repeatedSubstring('abab'))

// Roman to integer
function romanToInt(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0

    for(let i=0; i<s.length; i++){
        const current = map[s[i]]
        const next = map[s[i+1]]
        if(next >current){
            total -= current
        }else{
            total += current
        }
    }
    return total
}

console.log(romanToInt('VIII'))

// 125, 67, 387, 709, 459, 13, 168, 520, 58, 1047, 392, 1844

// array
// 1, 121, 724, 26, 189, 217, 66, 268, 169, 448, 349, 414, 905, 977, 88, 2215, 704

