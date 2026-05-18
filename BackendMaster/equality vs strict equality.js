/**
 *  == abstract equlity operator
 *  === strict equality operator
 * 
 * == check types and === value + data types (it is not correct properly)
 * in document mention: 
 * 
 * == 
 * it check the type of both operands
 * if types is same then it calls ===
 * if types are not same then type conversion occurs (coercion) & then comparision is done
 * 
 * ===
 * it also checks type of both the operands value
 * if types are diffrent it returns false
 * if types are same then value comparion occurs
 * 
 * 
 * example:
 * 
 * 1 == '1'
 * here first check both value here 1 == '1'
 * so number == string javascript will try number == toNumber('1')
 * then again check number == number
 * then if same both value then call ===
 * 
 * 
 * 1 == 'pratap'
 * here first check both value here 1 == 'pratap'
 * so number == string javascript will try number == toNumber('pratap') // here invalid number in js means NaN
 * then again check number == NaN
 * 
 * 
 * coercion - have concept -> type conversion
 * 1+1 = 2
 * '1' + 1 = 11
 * '1' - 1 = 0
 * 
 * when we do an operation, based on the input we can actually convert the input for operation
 * convert = we can convert type of input
 * this conversion cn be manually done by us
 * or
 * the language based an some certian rules automacally convert the types. (it is called implicet(coercion) type casting/type conversion)
 * 
 * 
 * abstract operation
 * 
 * these are some set of algorithms, that is present i the ecma script docs, but they are not avaliable for usage in ecmascript
 * i.e: we as developer cannot use these operation directly
 * 
 * they are mentioned in the docs to aid(help) the documention only
 * i.e: in the ecma docs there are a lot of things that are done by the language internally. to explain these internal details of how and what language is doing, we how abstract operation mentioned in the docs.
 * 
 * so this is aid/help of specification so we as developer 
 * 
 * 
 * toNumber abstract corecion
 * 
 * argument type and result
 * undefined -> return NaN
 * null -> return +0
 * Boolean -> if arguemnt is true return 1, if false return +0
 * Number -> return argument (no conversion)
 * String -> check grammer conversion algorithm
 * Object -> 
 * 
 * the subsctractuon operator (-)
 *  runtime semantics evalution
 *  - js will forcefully convert to number both side values
 * 
 */

// toNumber
console.log('Hi')
console.log(1-9) // -8
console.log(1-null) // 1 - null -> 1 - 0 -> 1
console.log(1 - undefined) // 1 - undefined -> 1 - NaN -> NaN
console.log(-0 == +0)
console.log(-0 === +0)
// toNumber(10)


// toNumber abstract
console.log('91' - 1) // 9*10^2 + 1*10^2
console.log('91' + 1)

console.log('9abc1' - 1)
console.log(Number('9abc1') - 1)
console.log(parseInt('9abc1') - 1)
console.log('9abc1' - 1)

console.log('9abc1' + 1)
console.log(Number('9abc1') + 1)
console.log(parseInt('9abc1') + 1)

console.log('0xa' - 1)
console.log('0xa' + 1)


// understand the substruction operation
// toPremitive abstruct operation

// toString and valueOf
let obj = {}
console.log(obj.toString()) // how to fix [object object]
console.log(typeof obj.toString())

let newObj = {
    toString(){
        // if you not override then by default return [object Object]

        // if we return this
        // return 'Let learn JavaScript'
        return 10
    }
}
console.log(newObj.toString())


console.log(obj.valueOf()) // by default return same {}
obj = {x:10}
console.log(obj.valueOf())
console.log(typeof obj.valueOf())

const valueOfObj = {
    x:91,
    valueOf(){
        return 10
    }
}
console.log(valueOfObj.valueOf())

// typeOf and valueOf

console.log(typeof valueOfObj.valueOf())


// toPrimitive and toNumber

let object = {}
console.log(object)
console.log(10 - object)
console.log(10 + object)

object.valueOf = function(){
    return 10
}

console.log(object)
console.log(10 - object)
console.log(10 + object)



console.log(null - undefined)
console.log(null + undefined)
console.log(false == '0')
console.log(true == '0')
console.log(false === '0')
console.log(true === '0')
console.log(null == false)
console.log(null === false)
console.log(null == true)
console.log(null === true)

console.log("" + 0)
console.log("" - 0)
console.log("" + (-0))
console.log("" - (-0))
console.log("" + [])
console.log("" - [])
console.log("" + {})
console.log("" - {})
console.log("" + [1,2,3,4])
console.log("" - [1,2,3,4])
console.log("" + [null, undefined])
console.log("" - [null, undefined])

console.log(0 + '010')
console.log(0 - '010')
console.log(0 + 'O10')
console.log(0 - 'O10')

console.log(0 + 010) // here convert octal number
console.log(0 - '0xb') // hexa decimel
console.log([] + 1)
console.log([] - 1)
console.log([''] + 1)
console.log([''] - 1)

// why use abstract equality


const objectDemo = {x:10, y:90}
const num = 10
console.log(`my num ${num}`)
console.log(`my object ${objectDemo}`) // here we got [object Object] because js try to toString

console.log(true > true)
console.log(true > 1)
console.log(true < true)
console.log(true > 1)