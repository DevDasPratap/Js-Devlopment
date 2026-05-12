/**
 * =========================================
 * JAVASCRIPT FALSY VALUES
 * =========================================
 * Only 8 values are falsy in JavaScript:
 *
 * false
 * 0
 * -0
 * 0n (BigInt zero)
 * "" (empty string)
 * null
 * undefined
 * NaN
 */

console.log(Boolean(false))       // false
console.log(Boolean(0))           // false
console.log(Boolean(-0))          // false
console.log(Boolean(0n))          // false
console.log(Boolean(""))          // false
console.log(Boolean(''))          // false
console.log(Boolean(``))          // false
console.log(Boolean(null))        // false
console.log(Boolean(undefined))   // false
console.log(Boolean(NaN))         // false


/**
 * =========================================
 * TRUTHY VALUES
 * =========================================
 * Everything except falsy values is truthy
 */

console.log(Boolean(true))        // true
console.log(Boolean(1))           // true
console.log(Boolean(-1))          // true
console.log(Boolean("hello"))     // true
console.log(Boolean([]))          // true
console.log(Boolean({}))          // true
console.log(Boolean(function(){}))// true
console.log(Boolean(Infinity))    // true


/**
 * =========================================
 * LOGICAL AND (&&)
 * =========================================
 * Returns FIRST falsy value
 * If all are truthy -> returns LAST value
 */

console.log(10 && 6)                  // 6
console.log(true && false)            // false
console.log(true && true)             // true
console.log((5 < 10) && (6 < 3))      // false
console.log(6 && 10)                  // 10
console.log(true && 8 && 9 && 10)     // 10
console.log(0 && -0)                  // 0
console.log(null && 100)              // null
console.log(undefined && "hello")     // undefined
console.log("" && "world")            // ""
console.log(NaN && 10)                // NaN


/**
 * =========================================
 * LOGICAL OR (||)
 * =========================================
 * Returns FIRST truthy value
 * If all are falsy -> returns LAST value
 */

console.log(10 || 6)              // 10
console.log(false || false)       // false
console.log(true || false)        // true
console.log(100 || 0)             // 100
console.log(0 || -0)              // -0
console.log(null || "default")    // "default"
console.log(undefined || 500)     // 500
console.log("" || "fallback")     // "fallback"
console.log(NaN || "value")       // "value"


/**
 * =========================================
 * LOGICAL NOT (!)
 * =========================================
 * Converts value to boolean and reverses it
 */

console.log(!false)           // true
console.log(!true)            // false
console.log(!0)               // true
console.log(!1)               // false
console.log(!"hello")         // false
console.log(!"")              // true
console.log(!null)            // true
console.log(!undefined)       // true

// Double NOT converts to boolean
console.log(!!"hello")        // true
console.log(!!0)              // false
console.log(!![])             // true


/**
 * =========================================
 * NULL vs UNDEFINED
 * =========================================
 */

console.log(null)             // null
console.log(undefined)        // undefined

console.log(null == undefined)    // true
console.log(null === undefined)   // false


/**
 * =========================================
 * TYPE COERCION
 * =========================================
 */

console.log(10 / null)            // Infinity
console.log(undefined / null)     // NaN
console.log(null / 10)            // 0
console.log(null / undefined)     // NaN

console.log("5" + 1)              // "51"
console.log("5" - 1)              // 4
console.log("5" * 2)              // 10
console.log("5" / 2)              // 2.5

console.log(true + 1)             // 2
console.log(false + 1)            // 1
console.log(null + 1)             // 1
console.log(undefined + 1)        // NaN

console.log(Number(null))         // 0
console.log(Number(undefined))    // NaN
console.log(Number(""))           // 0
console.log(Number("123"))        // 123
console.log(Number("hello"))      // NaN


/**
 * =========================================
 * SPECIAL NUMBERS
 * =========================================
 */

console.log(+0)               // 0
console.log(-0)               // -0
console.log(NaN)              // NaN
console.log(Infinity)         // Infinity
console.log(-Infinity)        // -Infinity

console.log(10 < Infinity)        // true
console.log(10 < NaN)             // false
console.log(10 < -Infinity)       // false

console.log(typeof NaN)           // "number"
console.log(typeof Infinity)      // "number"

console.log(Number.MAX_VALUE)     // largest number
console.log(Number.MIN_VALUE)     // smallest positive number

console.log(Number.isNaN(NaN))        // true
console.log(Number.isNaN("hello"))    // false

console.log(isNaN("hello"))           // true (coercion)
console.log(isNaN("123"))             // false


/**
 * =========================================
 * EQUALITY
 * =========================================
 */

// Loose equality (type coercion)
console.log(5 == "5")           // true
console.log(false == 0)         // true
console.log(null == undefined)  // true

// Strict equality (no coercion)
console.log(5 === "5")          // false
console.log(false === 0)        // false
console.log(null === undefined) // false


/**
 * =========================================
 * COMPARISON
 * =========================================
 */

console.log(5 > 2)              // true
console.log(5 < 2)              // false
console.log(5 >= 5)             // true
console.log(5 <= 4)             // false

console.log("2" > 1)            // true
console.log("abc" > "aaa")      // true

console.log(NaN === NaN)        // false
console.log(Object.is(NaN, NaN))// true

console.log(0 === -0)           // true
console.log(Object.is(0, -0))   // false


/**
 * =========================================
 * NULLISH COALESCING (??)
 * =========================================
 * Only checks for null and undefined
 */

console.log(null ?? "default")      // "default"
console.log(undefined ?? "value")   // "value"
console.log(0 ?? 100)               // 0
console.log("" ?? "fallback")       // ""


/**
 * =========================================
 * OPTIONAL CHAINING (?.)
 * =========================================
 */

const user = {
  name: "John",
  address: {
    city: "Kolkata"
  }
}

console.log(user?.name)             // John
console.log(user?.address?.city)    // Kolkata
console.log(user?.contact?.phone)   // undefined


/**
 * =========================================
 * TERNARY OPERATOR
 * =========================================
 */

const age = 20

console.log(age >= 18 ? "Adult" : "Minor")


/**
 * =========================================
 * IMPORTANT INTERVIEW QUESTIONS
 * =========================================
 */

console.log([] == false)        // true
console.log([] == 0)            // true
console.log([1] == 1)           // true

console.log({} == {})           // false
console.log([] == [])           // false

console.log(typeof null)        // "object" (JavaScript bug)

console.log(1 + "2" + 3)        // "123"
console.log(1 + 2 + "3")        // "33"

console.log("5" - -"2")         // 7
console.log(true + true)        // 2
console.log(false + false)      // 0