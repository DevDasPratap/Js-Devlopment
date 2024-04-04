const path = require('path')
// console.log(path)
console.log('Separator: ',path.sep)
console.log(path.delimiter)

console.log('Process combaine: ', process.env.PATH)
console.log(path.delimiter) //used for joint,combaine,separate

const currentFileName = __filename
console.log(path.basename(currentFileName))

const result = path.basename(currentFileName)
console.log(result)
const baseNameWithoutExt = path.basename(currentFileName, '.js')
console.log('baseNameWithoutExt:', baseNameWithoutExt)

const path_to_dir = path.join('/home', 'js', 'dist', 'index.js')
console.log('join>', path_to_dir )

console.log('Parse: ', path.parse(currentFileName))
console.log('Relative: ', path.relative('/home/user/config', '/home/user/js/'))

const pathToFile = path.format(
    {
        dir:'/public/home',
        base:'index.js'
    }
)
console.log('pathToFile:', pathToFile)

// absolute or relative path
console.log('isAbsolute:', path.isAbsolute(currentFileName))
console.log('isAbsolute:', path.isAbsolute('/index.js'))
console.log('isAbsolute:', path.isAbsolute('./index.js'))
console.log('isAbsolute:', path.isAbsolute('../index.js'))

console.log('resoleve:',path.resolve())
console.log('normalize:',path.normalize('//home//user///nodejs//////index.js'))
