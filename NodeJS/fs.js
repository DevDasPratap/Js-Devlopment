const fs = require('fs');
// sync
// fs.mkdirSync('dir')
// fs.writeFileSync('dir/text.txt', 'Hi node')
// fs.appendFileSync('dir/text.txt', ', js')
// const readData = fs.readFileSync('dir/text.txt', 'utf-8')
// console.log(readData.toString())
// console.log(readData)
// fs.renameSync('dir/text.txt', 'dir/file.txt')
// fs.unlinkSync('dir/file.txt')
// fs.rmdirSync('dir')

// Async
// fs.mkdir('dir', (req, res, error)=>{
//     console.log('create dir')
// })

// fs.writeFile('dir/text.txt', 'Hello node', (req, res, error)=>{
//     console.log('Create file')
// })

// fs.readFile('dir/text.txt', 'utf-8',(error, data)=>{
//     console.log('Read file', data)
// })

// fs.appendFile('dir/text.txt', ', Js(JavaScript)', (error)=>{
//     console.log('Append data')
// })

// fs.rename('dir/text.txt', 'dir/file.txt',(error, data)=>{
//     console.log('Rename file',)
// })

// fs.unlink('dir/file.txt',(error, data)=>{
//     console.log('Delete file')
// })

// fs.rmdir('dir',(error, data)=>{
//     console.log('Delete dir')
// })

module.exports = fs