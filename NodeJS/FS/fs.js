const fs = require('fs')
// console.log(fs)

/* Read */
// async
// console.log('Start read')
// fs.readFile('input.txt', function(err, data){
//     if (err) {
//         console.log('Error: ',err)
//     }
//     console.log('Data:', data.toString())
//     console.log('Read end')
//     return data
// })
// console.log('After data read')

// synchronus
// console.log('Read start')
// const result = fs.readFileSync('input.txt')
// console.log('Read inprogress')
// console.log('Result:',result.toString())
// console.log('Read end')

/* Open and read => Behind the sense read file */
// const buf = new Buffer(1024) //buffer data store
// fs.open('input.txt', 'r+', function(err, fd){
//     if (err) {
//         console.log('Error in opening file:', err)
//     }
//     console.log('File open successfully')
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){ //buf=>for store, first 0=> offset/how much data store, 2nd 0=> position to read
//         if (err) {
//             console.log('Error in reading file:', err)
//         }
//         console.log('Data:', bytes)
//         console.log('Buf:', buf.slice(0, bytes).toString())
//     })
// })


// Writing file
fs.writeFile('input.txt', 'PD', function(err){
    if (err) {
        console.log('Error in writing file')
    }else{
        console.log('Success in writing file')
    }
})

// append in file
fs.appendFile('input.txt', 'Append this text', 'utf-8', function(err){
    if (err) {
        console.log('Error in appending file')
    }else{
        console.log('Success in appending file')
    }
})