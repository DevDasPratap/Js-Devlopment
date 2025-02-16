/**
 * This js concept build your problem solving approch
 */

function calculateArea(length, width) {
    if (length >= 0 || width >= 0) {
        throw new RangeError("Length should be positive number");

    }
    const area = length * width
    console.log('Area', area)
    return area
}

try {
    // calculateArea(4, 9)
    // calculateArea(-4, 8) // minus not allow because real life not happen
    // calculateArea(0, -0)
    // calculateArea(0, 0)
    // calculateArea(4, 0)
} catch (error) {
    console.log(error.name, error.message)
}


function checkIfOddOrEven(number) {
    const remainder = number % 2
    if (remainder === 0) {
        return 'Even'
    }else{
        return 'Odd'
    }
}

try {
    // console.log(checkIfOddOrEven(9))
    // console.log(checkIfOddOrEven(-9))
    // console.log(checkIfOddOrEven(0))
    // console.log(checkIfOddOrEven(num))
} catch (error) {
    console.log(error.name, error.message)
}


function smallestNumFind(a,b,c) {
    // Check if all inputs are valid numbers (manually checking instead of using isNaN)
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new TypeError('Enter valid numbers');
    }
    // if (a < b && a < c) {
    //     return a
    // }else if(b < a && b < c){
    //     return b
    // }else{
    //     return c
    // }

    let smallestNumber = a
    if (b < smallestNumber) {
      smallestNumber = b
    }
    if (c < smallestNumber) {
      smallestNumber = c
    }
    return smallestNumber
}

try {
    // console.log(smallestNumFind(9,1,5))
    // console.log(smallestNumFind('9',1,5))
    // console.log(smallestNumFind(9,100,5))
    // console.log(smallestNumFind(5,5,5))
    // console.log(smallestNumFind(5,-5,5))
    // console.log(smallestNumFind(5,50,5))
} catch (error) {
    console.log(error.name, error.message)
}


function reverseString(str) {
    if (typeof str !== 'string') {
      // return str
      throw new TypeError('Only string are allowed')
    }
    let reverse = ''
    for (let i = str.length-1; i>=0; i--) {
      reverse += str[i]
    }
    return reverse
  }
  
//   console.log(reverseString('Software Developer'))
//   console.log(reverseString('Pratap Das'))
  
//   try {
//     reverseString(999900000)
//   } catch (error) {
//     console.log(error.message)
//   }




function factorialNumber(number) {
    // if (!isNaN(number)) {
    //   throw new TypeError('Only number are allowed')
    // }
    if (typeof number !== 'number') {
      throw new TypeError('Only number are allowed')
    }
    if ( number <= 0) {
      throw new TypeError('Number should be geter then 0')
    }
    // if (number === 1) {
    //   return number
    // }
    let result = 1
    for (let i = 1; i <= number; i++) {
      result *= i
    }
    return result
  }
  
  try {
    // const result = factorialNumber(0)
    // const result = factorialNumber(4)
    // const result = factorialNumber(-1)
    // const result = factorialNumber('-0')
    // const result = factorialNumber(-0)
    // const result = factorialNumber('num')
    // const result = factorialNumber(100)
    // console.log(result)
  } catch (error) {
    console.log(error.message)
  }


  function isLeapYear(year) {
    if (year % 4 === 0) {
        return true
    }else{
        return false
    }
  }

  try {
    // const result = isLeapYear(0)
    // const result = isLeapYear(4)
    // const result = isLeapYear(-1)
    // const result = isLeapYear('-0')
    // const result = isLeapYear(-0)
    // const result = isLeapYear('num')
    // const result = isLeapYear(100)
    const result = isLeapYear(2022)
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }