function removeSpaceses(string) {
    return string.split(' ').join('')
}
function repeatString(string) {
    // return string + string
    return string.repeat(2)
}

function convertToUpperCase(string) {
    return string.toUpperCase()
}

const input = 'abc def ghi'

// const output = convertToUpperCase(repeatString(removeSpaceses(input)))

// console.log('output', output)


// with redux
import { compose } from "redux";

// accoding requiremnet execution order add function
const composeFunction = compose(removeSpaceses, repeatString, convertToUpperCase) // take multiple function and return function

const composeOutput = composeFunction(input)
console.log('compose', composeOutput)