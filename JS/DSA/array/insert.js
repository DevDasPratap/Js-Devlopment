const arr = [2,3,1,10,5,10,9,16,8]
const value = 100
const index = 5
function insert_element(array, value, index) {
    for (let i = 0; i < array.length; i++) {
        if (array.length <= index) {
            console.log(`Index geter then to array length`)
            return -1
        }
        if (i === index) {
            arr[i] = value
        }
    }
    return arr
}
const result = insert_element(arr, value, index)
console.log(result)