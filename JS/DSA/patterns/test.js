const arr = [1,2,3,4,5]

const reverse = function (array, k) {
    const len = array.length;
    if(!len){
        return false
    }
    if (k <= 0) {
        return array
    }
    console.log("k", k, "len", len)
    k = len % k
    console.log("k", k)
    // return rev(array, 0, len-1) //reverse entier/whole array
    return rev(array, len-k, len-1) // Reverse k to last numbers
    // return rev(array, len-k, len-1) // Reverse the first n-k terms
}


const rev = function(array, start, end) {
    while (start < end) {
        [array[start], array[end]] = [array[end], array[start]]
        start++
        end--
    }
    return array
}

console.log(reverse(arr, 3))
