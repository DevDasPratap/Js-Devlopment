const searchFunction = require('./seaching') // complete module in single variable
// const {linearSearch, binarySearch} = require('./seaching') // distructure 

console.log(searchFunction.linearSearch([1,2,3,4,5], 4))
console.log(searchFunction.binarySearch([1,2,3,4,5], 4))