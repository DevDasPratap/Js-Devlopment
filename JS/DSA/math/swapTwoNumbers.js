// Swap Two Numbers

// Input: a = 2, b = 3
// Output: a = 3, b = 2

// Input: a = 20, b = 0
// Output: a = 0, b = 20

// Input: a = 10, b = 10
// Output: a = 10, b = 10 

function swap(a, b) {
    // return {a: b, b: a}

    // let temp = a
    // a = b
    // b = temp
    // return {a, b}

    return [a,b] = [b,a]
}

const res = swap(a=2,b=3)

console.log(res)