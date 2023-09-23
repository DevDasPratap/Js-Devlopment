const path = require('path')
console.log(path)
console.log('Separator: ',path.sep)
console.log(path.delimiter)

console.log('Process combaine: ', process.env.PATH)
console.log(path.delimiter) //used for joint,combaine,separate

const currentFileName = __filename
console.log(path.basename(currentFileName))

const result = path.basename(currentFileName)
console.log(result)

const path_to_dir = path.join('/home', 'js', 'dist', 'index.js')
console.log('join>', path_to_dir )

console.log('Parse: ', path.parse(currentFileName))
console.log('Relative: ', path.relative('/home/user/config', '/home/user/js/'))