const word = '    fly me    to   the    moon    '
const lastElement = function (word) {
    return word = word.trim().split(' ').at(-1).length
}
const res = lastElement(word)
console.log(res)