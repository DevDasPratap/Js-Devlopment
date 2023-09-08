const os = require('os')

console.log(os.arch())
console.log(`Free memory in GB: ${os.freemem()/1024/1024/1024}`)
console.log(`Total memory in GB: ${os.totalmem()/1024/1024/1024}`)
console.log(os.hostname())
console.log(os.platform())
console.log(os.type())
console.log(os.tmpdir())
console.log(os.userInfo())


module.exports = os