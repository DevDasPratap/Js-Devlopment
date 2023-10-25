// input = ['a-1', 'b-2', 'd-05', 'e-10', 'c-4']
// output = [1,2,4,5,10]

const arr = ['a-1', 'b-2', 'd-05', 'e-10', 'c-4']
let res = []
function extractNumbersFromStringAndSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i].split('-')
        for (let j = 0; j < temp.length; j++) {
            if (!isNaN(temp[j])) {
                res.push(Number(temp[j]))
            }
        }
    }
    res.sort((a,b)=>a-b)
    return res
}
extractNumbersFromStringAndSort(arr)
console.log(res)