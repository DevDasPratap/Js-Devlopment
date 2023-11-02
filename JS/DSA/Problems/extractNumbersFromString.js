// input=['12hde3h', '5gehh34', '46g8veu7', 'ftd45xsw3']
// output=[123, 534, 4687, 453]

const arr = ['12hde3h', '5gehh34', '46g8veu7', 'ftd45xsw3']
let res = []
function extractNumbersFromString(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = ''
        for (let j = 0; j < arr[i].length; j++) {
            if (!isNaN(arr[i][j])) {
                temp += arr[i][j]
            }
        }
        if (temp !== String) {
            res.push(Number(temp))
        }
    }
    return res
}
extractNumbersFromString(arr)
console.log(res)