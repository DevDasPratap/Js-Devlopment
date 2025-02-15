// try {
// } catch (error) {
// }finally{
// }

// try {
//     const a = undefined
//     console.log(a[0])
// } catch(error) {
//     console.log(`Catch error handaling get executed: ${error}`)
// }finally{
//     console.log(`Finally alaways get executed`)
// }


// try {
//     console.log('Srart try')
//     console.log(a)
//     console.log('End try')
// } catch (error) {
//     console.log('error: ',error.message)
// }finally{
//     console.log(`Finally`)
// }


/**
 * Error Handlaing
 * Essential part of writing robust and reliable code
 * Error handling allows program to function correctly even in the face of unexpected situations
 * Error can occur because of: 
 *    - invalid input
 *    - Network issue
 *    -unexpected behaviour
 *   
 */

// console.log('Before Error')
// const result = someFunction()
// console.log('After Error')


// console.log('Before Error')
// try {
//     const result = someFunction()
// } catch (error) {
//     console.log(error)
// }
// console.log('After Error')


// console.log('Before Error')
// function devide(a,b) {
//     if(b==0){
//         throw new Error('B cannot be zero')
//     }
//     return a/b
// }
// const divisionResult = devide(1,0)
// console.log('After Error')


// console.log('Before Error')
// function devide(a,b) {
//     if(b==0){
//         throw new Error('B cannot be zero')
//     }
//     return a/b
// }
// try {
//     const divisionResult = devide(4,0)
//     console.log(divisionResult)
// } catch (error) {
//     // console.log(error)// error stack
//     console.log(error.message) // message
//     console.log(error.name) // Error type name
//     // console.log(error.stack)// error stack trace
// }finally{
//     console.log('I am finally block, Alawys run')
// }
// console.log('After Error')



/**
 * Error Object
 *   - The generic Error object represents a runtime error
 *   - It serves as the base constructor for other error types
 *   - It is also used to create custome error instance
 */

// const myError = new Error() // it used when may be code crush
// // throw myError // exception raised maybe my code throw error here
// console.log(myError.name)
// console.log(myError.message)


// try {
//     const myError = new Error()
//     throw myError
// } catch (error) {
//     console.log('Caugth an error')
// }


// try {
//     someFunction()
// } catch (error) {
//     console.log(error.message)
//     throw new Error("Error occured", {cause: error});
// }

/**
 * Error - Types & SysntaxError
 * 
 * Error Types:
 *   - Syntax Error
 *   - Type Error
 *   - Referance Error
 *   - Range Error
 *   - URI Error
 *   - Eval Error
 *   - Custom Error
 */

/**
 *  Syntax Error
 * 
 * Occurs when code doesn't follow js syntax rules
 *   - Systax errors during parse time
 */

// console.log('Systax error') // not execute because time got syntax error below line
// when do not follow js syntax that time got syntax error
// console.log('my messages' // SyntaxError: missing ) after argument list
// const myName = 'Pratap Das // SyntaxError: Invalid or unexpected token

// function my fun() {} // SyntaxError: Unexpected identifier 'fun'



/**
 *  Eval Error
 * 
 * JS code take string abd evaluate and execute
 *   - This is runtime error
 */

// console.log('Hello from main program') // so here execute because it is runtime error
// eval("console.log('Hello from eval'") // SyntaxError: missing ) after argument list

// run time error handle with trycatch
// try {
// eval("console.log('Hello from eval'") // SyntaxError: missing ) after argument list
// } catch (error) {
//     console.log(error)
// }



/**
 *  Type Error
 * 
 * Type error is thrown when value is not of the executed type
 *    - Happens a lot JS is a weakly/dynamic type language
 *    - Type error on null
 */

// console.log('After error') // type error time this line will execute
// // null.myFunction() // TypeError: Cannot read properties of null (reading 'myFunction')

// let person = null;
// // console.log(person.name); // ❌ TypeError: Cannot read properties of null (reading 'name')

// try {
// console.log(person.name);
// } catch (error) {
//     console.log(error.message)
// }
// console.log('Before error')




/**
 *  Referance Error
 * Referance error is thrown when a variable or a function doesn't exist
 *  - Access an undeclared variable name
 *  - Access an misspelled variable name
 *  - Access variable not in scope
 *  - Access not exist function
 */

// console.log(x) // ReferenceError: x is not defined

// const message = 'I am a message'
// console.log(messege) // ReferenceError: messege is not defined


// try {
//     const message = 'I am a message'
//     console.log(messege)
// } catch (error) {
//     console.log(error.name, error.message)
// }

// function myFun() { // function scope
//     const age = 25
//     console.log(`inside function ${age}`)
// }

// myFun()

// global scope
// console.log(`outside function ${age}`) // ReferenceError: age is not defined

// nonExistFunction() // ReferenceError: nonExistFunction is not defined


/**
 *  Range Error
 * Range error occurs when value is not in the acceptable range
 *  - Range error string repeat time
 *  - Custom checkAge error
 *  - Infinite Recursion (Call Stack Exceeded)
 *  - Invalid Array.length
 *  - Infinite Recursion (Call Stack Exceeded)
 */

// const myString = 'Pratap Das'
// console.log(myString)

// const myStringRepeat = myString.repeat(-1) // RangeError: Invalid count value: -1
// console.log('myStringRepeat' , myStringRepeat)

// function checkAge(age) {
//     if (age < 0 || age > 100) {
//         throw new RangeError('Age should be between 0 and 100')
//     }
//     console.log('Perfect age')
// }

// // checkAge(-1) // RangeError: Age should be between 0 and 100

// try {
// checkAge(-1) // RangeError: Age should be between 0 and 100
// } catch (error) {
//     console.log(error.name, error.message)
// }


// function recursiveFunction() {
//     return recursiveFunction(); // Calls itself infinitely
// }

// recursiveFunction(); // ❌ RangeError: Maximum call stack size exceeded


// let arr = new Array(-5); // ❌ RangeError: Invalid array length

// function checkStr(str) {
//     const acceptedValues = ['banana', 'apple', 'orange']
//     if(!acceptedValues.includes(str)){
//         throw new RangeError('String value not match')
//     }
//     console.log('correct string value')
// }

// checkStr('banana')

// try {
//     checkStr('greps')
// } catch (error) {
//     console.log(error.name, error.message)
// }



/**
 *  URI Error
 *  URI - Uniform Resource Identifier (e.g., https://google.com)
 *  URIError occurs when an incorrect or malformed URI is used in encoding/decoding.
 */

const myURI = 'https://google.com?search=JavaScript Error Handling';

const encodedURI = encodeURIComponent(myURI);
console.log('Encoded URI:', encodedURI);

const decodedURI = decodeURIComponent(encodedURI);
console.log('Decoded URI:', decodedURI);

// ❌ Incorrect URI decoding (Malformed URI)
try {
    console.log(decodeURIComponent('%')); // ❌ URIError: URI malformed
} catch (error) {
    console.log(error.name, error.message); // ✅ URIError: URI malformed
}

// ✅ Correct way to avoid URI errors
try {
    const safeURI = '%25'; // Represents encoded '%'
    console.log(decodeURIComponent(safeURI)); // ✅ Output: '%'
} catch (error) {
    console.log(error.name, error.message);
}




/**
 * Custom Error Classes
 * - Provide better understanding of errors specific to the application.
 * - Add more debugging information like error codes, metadata, timestamps.
 * - Handle specific error scenarios like database failures, API errors, validation errors, network errors, HTTP errors, etc.
 */

// Base Custom Error
class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.name = this.constructor.name; // Set class name as error name
        this.code = code || 'UNKNOWN_ERROR';
        this.timestamp = new Date(); // Add timestamp
    }
}

// 1️⃣ Database Error
class DBError extends CustomError {
    constructor(message, query) {
        super(message, 'DB_ERROR');
        this.query = query; // Store query for debugging
    }
}

// 2️⃣ API Error
class APIError extends CustomError {
    constructor(message, endpoint, statusCode) {
        super(message, 'API_ERROR');
        this.endpoint = endpoint;
        this.statusCode = statusCode;
    }
}

// 3️⃣ Validation Error
class ValidationError extends CustomError {
    constructor(message, field) {
        super(message, 'VALIDATION_ERROR');
        this.field = field;
    }
}

// 4️⃣ Network Error
class NetworkError extends CustomError {
    constructor(message, url) {
        super(message, 'NETWORK_ERROR');
        this.url = url;
    }
}

// 5️⃣ HTTP Error
class HTTPError extends CustomError {
    constructor(message, statusCode) {
        super(message, 'HTTP_ERROR');
        this.statusCode = statusCode;
    }
}
// Handling Database Errors
function fetchDataFromDB(query) {
    if (!query.includes('SELECT')) {
        throw new DBError('Invalid database query', query);
    }
    return { data: 'User Data' };
}

try {
    fetchDataFromDB('DELETE * FROM users'); // ❌ Throws DBError
} catch (error) {
    console.error(`❌ ${error.name}: ${error.message}`);
    console.error(`🔍 Query: ${error.query}`);
    console.error(`📅 Time: ${error.timestamp}`);
}

// Handling API Errors
async function fetchData(url) {
    try {
        throw new APIError('Failed to fetch data', url, 500);
    } catch (error) {
        console.error(`❌ ${error.name}: ${error.message}`);
        console.error(`📡 Endpoint: ${error.endpoint}`);
        console.error(`📜 Status Code: ${error.statusCode}`);
    }
}

fetchData('https://api.example.com/data');


// Handling Validation Errors
function validateUserInput(username) {
    if (username.length < 3) {
        throw new ValidationError('Username must be at least 3 characters long', 'username');
    }
    console.log('✅ Valid username:', username);
}

try {
    validateUserInput('Jo'); // ❌ Throws ValidationError
} catch (error) {
    console.error(`❌ ${error.name}: ${error.message} (Field: ${error.field})`);
}


// Handling Network Errors
async function makeRequest(url) {
    try {
        throw new NetworkError('No internet connection', url);
    } catch (error) {
        console.error(`❌ ${error.name}: ${error.message}`);
        console.error(`🌍 URL: ${error.url}`);
    }
}

makeRequest('https://example.com');


// Handling HTTP Errors
async function fetchUserData() {
    try {
        throw new HTTPError('Unauthorized access', 401);
    } catch (error) {
        console.error(`❌ ${error.name}: ${error.message}`);
        console.error(`🔢 Status Code: ${error.statusCode}`);
    }
}

fetchUserData();




/**
 * Catch multiple errors - Conditional Catch Blocks
 * Handles different error types differently
 * Use Case: User Data Processing
 *    - Imagine an application that processes user data. If:
 *         - ✅ A variable is undefined, it throws a ReferenceError.
 *         - ✅ A wrong type is passed, it throws a TypeError.
 *         - ✅ A number exceeds a limit, it throws a RangeError.
 */

function validateUserData(user) {
    if (!user.name) {
        throw new ReferenceError('User name is missing');
    }
    if (typeof user.age !== 'number') {
        throw new TypeError('Age must be a number');
    }
    if (user.age < 0 || user.age > 120) {
        throw new RangeError('Age must be between 0 and 120');
    }
}

try {
    // Example user object (change values to test different errors)
    const userData = { name: 'John Doe', age: 'twenty' }; // ❌ Will throw TypeError
    
    validateUserData(userData); // Call validation function
    console.log('✅ User data is valid');
} catch (error) {
    switch (true) {
        case error instanceof ReferenceError:
            console.log('❌ Caught ReferenceError:', error.message);
            break;
        case error instanceof TypeError:
            console.log('❌ Caught TypeError:', error.message);
            break;
        case error instanceof RangeError:
            console.log('❌ Caught RangeError:', error.message);
            break;
        default:
            console.log('❌ Caught Unknown Error:', error.message);
    }
}


// ✅ User-Side Errors
// Error Scenario	Trigger
// ReferenceError	validateUserData({ age: 25 }) (Missing name)
// TypeError	validateUserData({ name: 'John', age: 'twenty' }) (Age not a number)
// RangeError	validateUserData({ name: 'John', age: 150 }) (Invalid age range)
// UserError	fetchUserFromDB(null) (Missing User ID)

// ✅ Server-Side Errors
// Error Scenario	Trigger
// Database Error	fetchUserFromDB(123) when DB fails
// API Error	Can simulate failed API response
// Network Error	Can simulate network failure