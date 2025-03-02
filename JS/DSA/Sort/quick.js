function quick(array) {
    if (array.length <= 1) {
        return array
    }

    const pivot = array[0]
    const left = []
    const right = []
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    // console.log('Left: ', left, 'Pivot: ', pivot, 'Right: ', right)
    return [...quick(left), pivot, ...quick(right)]
}

const array = [4, 10, 5, 9, 7, 8]

const result = quick(array)
console.log(result)