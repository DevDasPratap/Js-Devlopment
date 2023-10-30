const arr = [2,3,1,10,5,10,9,16,8]
const element = 10
function delete_element(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            arr[i] = null
            return arr
        }
    }
}
delete_element(arr, element)
const result = arr.filter((item)=>item!==null)
console.log(result)