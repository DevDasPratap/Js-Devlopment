// Global module
const fs = require('fs')
// fs.writeFileSync('write.js', 'console.log("Hello nodejs")')
console.log(__dirname)
console.log(__filename)

const mod = require('./module')
console.log(mod)

// console.log(mod(4,5))

console.log(mod.sub(70,9))
console.log(mod.mul(5,11))
console.log(mod.div(4,5))
console.log(mod.add(4,5))