const arr = [2,3,1,10,5,10,9,16,8]
const target = 10
function find_element(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
}
const result = find_element(arr, target)
if (!result) {
    console.log(`${target} not found`)
}else{
    console.log(`${target} element found`)
}