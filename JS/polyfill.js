// Array.prototype

let arr = [1,2,3,4,5]
// with map
let squreArr = arr.map(function(x){
    return x*x
})
// console.log(arr)
// console.log(squreArr)
//  own map/behinde the map
function myMap(arr, cb) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr
}
function squre(x) {
    return x*x
}
// console.log(myMap(arr, squre))


// filter
let fArr = [2,4,3,1,10,91,100, 16,22,51,7]
let evenArr = fArr.filter(function(x){
    return x%2===0
})
console.log(fArr)
console.log(evenArr)

// Behinde filter
function myFilter (arr, cb){
    let filterArr = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            filterArr.push(arr[i])
        }
    }
    return filterArr
}
function isEven(x) {
    if(x%2===0){
        return x
    }
}
console.log(myFilter(fArr, isEven))