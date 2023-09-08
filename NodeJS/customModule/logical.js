const sum = (a, b)=>{
    let c = a+b;
    return c
}
const div = (a, b)=>{
    let c = a/b;
    return c
}
const mul = (a, b)=>{
    let c = a*b;
    return c
}

const sub = (a, b)=>{
    let c = a-b;
    return c
}

// module.exports = sum // for single export
module.exports = {
    sum, div, mul, sub
} 
// for multiple export