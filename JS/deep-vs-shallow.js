// Deep and shallow copy in objecet
const obj = {
    a:1,
    b:2
}
console.log(obj)

const obj2 = obj
console.log(obj2)

console.log(obj2.a)

obj2.a = 10
console.log(obj2)
