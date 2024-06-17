const wordA = 'abc', wordB = 'xyz'
const mergeAlternativly = function (wordA, wordB) {
    let result = '';
    for (let i = 0; i < Math.max(wordA.length || wordB.length); i++) {
        if (i < wordA.length) {
            result += wordA.charAt(i)
        }
        if (i < wordB.length) {
            result += wordB.charAt(i)
        }
    }
    return result
}

const res = mergeAlternativly(wordA, wordB)
console.log(res)