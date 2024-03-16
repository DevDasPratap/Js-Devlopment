const array = [1,1,1, 4,5,5,8,8, 9]
function countUnique(array) {
    if (array.length > 0) {
        let i = 0
        for (let index = 0; index < array.length; index++) {
            if (array[i] !== array[index]) {
                i++
                array[i] = array[index]
            }
        }
        return i+1
    }else{
        throw new Error('Array is empty')
    }
}

const res = countUnique(array)
console.log(res)