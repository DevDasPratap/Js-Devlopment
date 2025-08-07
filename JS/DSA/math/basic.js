// Sum of Digits of a Number
function sumOfDigit(digits) {
    let sum = 0
    while (digits) {
        const lastDigit = Math.floor(digits % 10)
        sum += lastDigit
        digits = Math.floor(digits / 10)
    }
    return sum
}
// console.log(sumOfDigit(687))

function reverse(digits) {
    let rev = 0
    while (digits) {
        const remainder = Math.floor(digits % 10)
        rev = rev * 10 + remainder
        console.log('rev', rev)
        digits = Math.floor(digits / 10)
    }
    return rev
}

// console.log(reverse(789))

function primeTest(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if(num%i===0){
            return false
        }
    }
    return true
}

// console.log(primeTest(15))


function primeTestOptimze(num) {
    if (num <= 1){
        return false;
    }
    if (num === 2 || num === 3){
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0){
        return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}


// console.log(primeTestOptimze(1000))

// Tailing Zeros in factorial

function countZeroFact(n) {
    let fact = 1
    for (let i = 2; i <= n; i++) {
        fact = fact * i
    }
    let res = 0
    while (fact % 10 === 0) {
        res++
        fact = fact/10
    }
    return res
}

// console.log(countZeroFact(10))

// GCD
function gcd(a,b) {
    if (b===0) {
        return a
    }
    return gcd(b, a%b)
}

// console.log(gcd(40,50))


function gcdFact(a,b) {
    while (b!==0) {
        a=a%b
    }
    return a
}

// console.log(gcd(40,50))

// LCM
function lcm(a,b) {
    let max = Math.max(a,b)
    while (true) {
        if (max%a===0 && max%b===0) {
            return max
        }
        max++
    }
}

// console.log(lcm(40, 50))

// Prime Factors
function primeFact(num) {
    let prime = ''
    for (let i = 2; i < num; i++) {
        if (primeTest(i)) {
            let x = i
            while (num%x===0) {
                // console.log(i)
                prime +=i
                x=x*i
            }
        }
        
    }
    return Number(prime)
}

// console.log(primeFact(315))

function printPrimeFactors(n) {
    if (n <= 1) {
        return;
    }

    while (n % 2 === 0) {
        console.log(2);
        n = n / 2;
    }

    while (n % 3 === 0) {
        console.log(3);
        n = n / 3;
    }

    for (let i = 5; i * i <= n; i = i + 6) {
        while (n % i === 0) {
            console.log(i);
            n = n / i;
        }

        while (n % (i + 2) === 0) {
            console.log(i + 2);
            n = n / (i + 2);
        }
    }

    if (n > 3) {
        console.log(n);
    }
}

// console.log(printPrimeFactors(450))

// All Divisors of a Number
function getDivisors(Number) {
    let divisor = 1;
    let Divisors = [];
    for(divisor = 1; divisor * divisor <= Number; divisor++) {
        if(Number % divisor === 0) {
            Divisors.push(divisor);
            if(divisor != Math.floor(Number / divisor)) {
                Divisors.push(Number / divisor);
            }
        }
    }
    
    return Divisors;
}

// console.log(getDivisors(25))

// Sieve of Eratosthenes

function sieveOfEratosthenes(N) {
    let primes = [];
    if(N <= 1) return primes;
    
    let isPrime = [];
    for(let i = 0; i <= N; i++) {
        isPrime.push(true);
    }
    isPrime[0] = false;
    isPrime[1] = false;
    
    for(let i = 2; i * i <= N; i++) {
        if(isPrime[i]) {
            for(let j = 2 * i; j <= N; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    for(let i = 0; i <= N; i++) {
        if(isPrime[i]) primes.push(i);
    }
    
    return primes;
}

// console.log(sieveOfEratosthenes(8))

// Computing Power
function Power(X, n) {
    if(n === 0) return 1;
    if(n % 2 == 0) {
        let result = Power(X, Math.floor(n / 2));
        return result * result;
    } else {
        let result = Power(X, Math.floor(n / 2));
        return result * result * X;
    }
}

// console.log(Power(4,5))

function binaryExponentiationPower(X, n) {
    if(n == 0) return 1;
    let answer = 1;
    while(n > 0) {
        if(n & 1) {
            answer *= X;
        }
        X = X * X;
        n >>= 1;
    } 
    return answer;
}

// console.log(binaryExponentiationPower(10,9))

function rev(num) {
    let reverse = 0
    while (num !== 0) {
        let last = num % 10;
        reverse = reverse * 10 + last;
        num = Math.floor(num / 10);
    }
    return reverse
}

// console.log(rev(708090))

function palindom(num) {
    if (num === rev(num)) {
        return true
    }else{
        return false
    }
}

// console.log(palindom(708090))

// factorial

function factorial(num) {
    let result = 1
    for (let i = 2; i <= num; i++) {
        result *= i
    }
    return result
}

// console.log(factorial(7))

// sort by charCode
// output: GEaeSk
// function sorti(str) {
//     const strArr = str.split('')
//     strArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
//     return strArr.join('')
// }

// console.log(sorti('GEekSa'))