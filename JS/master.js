// We're going to dive deep into the fascinating world of JavaScript logic building.

function calculateArea(height, width) {
  if (height === undefined || width === undefined) {
    throw new TypeError(`${height === undefined ? "Height" : "Width"} must be defined.`);
  }

  if (typeof height !== "number" || typeof width !== "number" || isNaN(height) || isNaN(width)) {
    throw new TypeError(`${isNaN(height) ? "Height" : "Width"} must be a valid number.`);
  }

  if (!isFinite(height) || !isFinite(width)) {
    throw new RangeError(`${!isFinite(height) ? "Height" : "Width"} must be a finite number.`);
  }

  if (height <= 0 || width <= 0) {
    throw new RangeError(`${height <= 0 ? "Height" : "Width"} must be a positive number.`);
  }

  const area = height * width;
  console.log("Area of rectangle is:", area);
  return area;
}

// Test cases
// try { calculateArea(10, 20); } catch (e) { console.error(e.message); }   // ✅ Should work
// try { calculateArea(200, 500); } catch (e) { console.error(e.message); } // ✅ Should work
// try { calculateArea(-2, 50); } catch (e) { console.error(e.message); }   // ❌ Should throw RangeError
// try { calculateArea(5, -80); } catch (e) { console.error(e.message); }   // ❌ Should throw RangeError
// try { calculateArea(-5, -88); } catch (e) { console.error(e.message); }  // ❌ Should throw RangeError
// try { calculateArea(Infinity, Infinity); } catch (e) { console.error(e.message); } // ❌ Should throw RangeError
// try { calculateArea("10", "20"); } catch (e) { console.error(e.message); } // ❌ Should throw TypeError
// try { calculateArea(NaN, 50); } catch (e) { console.error(e.message); }  // ❌ Should throw TypeError
// try { calculateArea(50, NaN); } catch (e) { console.error(e.message); }  // ❌ Should throw TypeError
// try { calculateArea(null, 50); } catch (e) { console.error(e.message); } // ❌ Should throw TypeError
// try { calculateArea(undefined, 50); } catch (e) { console.error(e.message); } // ❌ Should throw TypeError
// try { calculateArea(); } catch (e) { console.error(e.message); } // ❌ Should throw TypeError


// Find and return smallest number

function smallest(a, b, c) {
  // if (a < b && a < c) {
  //   return a
  // } else if (b < a && b < c) {
  //   return b
  // } else if (c < b && c < a) {
  //   return c
  // }
  // return a

  let smallestNumber = a
  if (b < smallestNumber) {
    smallestNumber = b
  }
  if (c < smallestNumber) {
    smallestNumber = c
  }
  return smallestNumber
}

// console.log(smallest(70, 8, 9))
// console.log(smallest(7, 7, 7))
// console.log(smallest(7, 7, 1))
// console.log(smallest(-7, 7, 1))
// console.log(smallest(-7, -7, 1))
// console.log(smallest(-1, -1, -1))


// Write a function reverse a string

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

// console.log(reverseString('Software Developer'))
// console.log(reverseString('Pratap Das'))

// try {
//   reverseString(999900000)
// } catch (error) {
//   console.log(error.message)
// }


// Factorial Number Calculate

function factorialNumber(number) {
  // if (!isNaN(number)) {
  //   throw new TypeError('Only number are allowed')
  // }
  if (typeof number !== 'number') {
    throw new TypeError('Only number are allowed')
  }
  if ( number < 0) {
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
  const result = factorialNumber(0)
  // const result = factorialNumber(4)
  // const result = factorialNumber(-1)
  // const result = factorialNumber(-0)
  console.log(result)
} catch (error) {
  console.log(error.message)
}