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


function floorAndCeil(a, b) {
    let div = a / b;
    let floorVal = Math.floor(div);
    let ceilVal = Math.ceil(div);
    return [floorVal, ceilVal];
}
console.log(floorAndCeil(7, 3));   // [2, 3]
console.log(floorAndCeil(-7, 3));  // [-3, -2]
console.log(floorAndCeil(10, 5));  // [2, 2]

// sum of n natural number/ sum of the series
function sumOfSeries(n) {
    return (n * (n + 1)) / 2;
}

// Example
// console.log(sumOfSeries(5));  // 15  (1+2+3+4+5)
// console.log(sumOfSeries(10)); // 55

// sum of its digits
function sumOfDigits(n) {
    let sum = 0;
    n = Math.abs(n); // handle negative numbers
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

// Example
// console.log(sumOfDigits(1234)); // 10
// console.log(sumOfDigits(987));  // 24

// closest number
function closestNumber(n, m) {
    // floor multiple
    let q = Math.floor(n / m);
    let n1 = q * m;

    // ceil multiple
    let n2 = (n * m > 0) ? (q + 1) * m : (q - 1) * m;

    // compare distances
    if (Math.abs(n - n1) < Math.abs(n - n2)) {
        return n1;
    } else if (Math.abs(n - n1) > Math.abs(n - n2)) {
        return n2;
    } else {
        // if equal distance → pick the one with greater absolute value
        return Math.abs(n1) > Math.abs(n2) ? n1 : n2;
    }
}

// Example
// console.log(closestNumber(13, 4));   // 12 (closest multiple of 4)
// console.log(closestNumber(-15, 6));  // -18 (tie between -12 and -18, pick abs bigger)
// console.log(closestNumber(10, 5));   // 10 (already divisible)

// decimal to binary
// Using built-in
function decimalToBinary(n) {
    return n.toString(2);
}

// Example
// console.log(decimalToBinary(10)); // "1010"
// console.log(decimalToBinary(7));  // "111"

// Without using built-in
function decimalToBinary(n) {
    if (n === 0){
        return "0";
    }
    let binary = "";
    while (n > 0) {
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }
    return binary;
}

// Example
// console.log(decimalToBinary(10)); // "1010"
// console.log(decimalToBinary(7));  // "111"

// binary → decimal
// Using built-in:
function binaryToDecimal(b) {
    return parseInt(b, 2);
}

// Example
console.log(binaryToDecimal("1010")); // 10
console.log(binaryToDecimal("111"));  // 7


// Without using built-in:
function binaryToDecimal(b) {
    let decimal = 0;
    let power = 0;

    // iterate from rightmost bit
    for (let i = b.length - 1; i >= 0; i--) {
        if (b[i] === '1') {
            decimal += Math.pow(2, power);
        }
        power++;
    }

    return decimal;
}

// Example
console.log(binaryToDecimal("1010")); // 10
console.log(binaryToDecimal("111"));  // 7


// find the smallest angle between the hour hand and the minute hand of a clock
function clockAngle(h, m) {
    // normalize 12-hour format
    h = h % 12;

    let minuteAngle = 6 * m;
    let hourAngle = 30 * h + 0.5 * m;

    let diff = Math.abs(hourAngle - minuteAngle);
    return Math.min(diff, 360 - diff);
}

// Examples
// console.log(clockAngle(3, 30)); // 75
// console.log(clockAngle(12, 0)); // 0
// console.log(clockAngle(9, 0));  // 90
// console.log(clockAngle(6, 15)); // 97.5

// Perfect Number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself)
function isPerfectNumber(n) {
    if (n <= 1) return false; // no perfect numbers below 2

    let sum = 1; // 1 is always a divisor
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }
    return sum === n;
}

// Examples
// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false


// divisible by 13
function divisibleBy13(n) {
    return n % 13 === 0 ? "Yes" : "No";
}

// Examples
// console.log(divisibleBy13(26));   // "Yes"
// console.log(divisibleBy13(39));   // "Yes"
// console.log(divisibleBy13(40));   // "No"

// square root
function squareRoot(n) {
    if (n < 2) return n;

    let low = 1, high = n, ans = 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid * mid === n) return mid;
        if (mid * mid < n) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

// Examples
// console.log(squareRoot(16)); // 4
// console.log(squareRoot(20)); // 4
// console.log(squareRoot(1));  // 1
// console.log(squareRoot(0));  // 0

// using Math.sqrt
function squareRoot(n) {
    return Math.floor(Math.sqrt(n));
}

// console.log(squareRoot(16)); // 4
// console.log(squareRoot(20)); // 4
// console.log(squareRoot(1));  // 1
// console.log(squareRoot(0));  // 0

// print all divisors
function allDivisors(n) {
    let small = [];
    let large = [];

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            small.push(i);
            if (i !== n / i) {
                large.push(n / i);
            }
        }
    }

    return [...small, ...large.reverse()];
}

// Examples
// console.log(allDivisors(12)); // [1, 2, 3, 4, 6, 12]
// console.log(allDivisors(7));  // [1, 7]
// console.log(allDivisors(36)); // [1,2,3,4,6,9,12,18,36]

// prime number
function isPrime(n) {
    if (n <= 1) return false;   // 0, 1, and negatives are not prime
    if (n <= 3) return true;    // 2 and 3 are prime
    if (n % 2 === 0 || n % 3 === 0) return false;

    // check divisors from 5 to sqrt(n), skipping evens
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// Examples
// console.log(isPrime(2));   // true
// console.log(isPrime(17));  // true
// console.log(isPrime(18));  // false
// console.log(isPrime(1));   // false

// print all of its prime factors
function primeFactors(n) {
    let factors = [];

    // Step 1: check for 2
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Step 2: check odd numbers
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // Step 3: if n is still > 2, it's prime
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Examples
// console.log(primeFactors(12));   // [2, 2, 3]
// console.log(primeFactors(315));  // [3, 3, 5, 7]
// console.log(primeFactors(97));   // [97] (prime itself)


// modular multiplication technique.
function modularMultiplication(a, b, m) {
    let result = 0;
    a = a % m;

    while (b > 0) {
        if (b % 2 === 1) {
            result = (result + a) % m;
        }
        a = (a * 2) % m;
        b = Math.floor(b / 2);
    }
    return result;
}

// Examples
// console.log(modularMultiplication(5, 7, 13));    // 9  (35 % 13 = 9)
// console.log(modularMultiplication(123456789, 987654321, 1000000007)); // large numbers


// inverse division
function inverseDivision(a, b, m) {
    if (b === 0) return "Division by zero not allowed";
    return Math.floor(a / b) % m;
}

// Example:
// console.log(inverseDivision(10, 3, 5)); // 3 % 5 = 3
// console.log(inverseDivision(20, 4, 7)); // 5 % 7 = 5
// console.log(inverseDivision(15, 2, 6)); // 7 % 6 = 1


// Modular Exponentiation for Large Numbers
function modularExponentiation(a, b, m) {
    let result = 1;
    a = a % m;

    while (b > 0) {
        if (b % 2 === 1) {   // if b is odd
            result = (result * a) % m;
        }
        a = (a * a) % m;     // square the base
        b = Math.floor(b / 2); // divide exponent by 2
    }

    return result;
}

// Example:
// console.log(modularExponentiation(2, 10, 1000)); // 1024 % 1000 = 24
// console.log(modularExponentiation(3, 13, 7));    // 1594323 % 7 = 5

// Series - GP
function nthTermGP(a, r, n) {
  return a * Math.pow(r, n - 1);
}

function sumGP(a, r, n) {
  if (r === 1) return a * n;
  return a * (Math.pow(r, n) - 1) / (r - 1);
}

// Examples
// console.log(nthTermGP(2, 3, 5)); // 162  (2*3^4)
// console.log(sumGP(2, 3, 5));     // 242  (2*(3^5-1)/(3-1))


// Euler Totient Function
function eulerTotient(n) {
    let result = n;
    let temp = n;

    // check for every prime factor
    for (let p = 2; p * p <= temp; p++) {
        if (temp % p === 0) {
            // subtract multiples of prime factor
            while (temp % p === 0) {
                temp = Math.floor(temp / p);
            }
            result -= Math.floor(result / p);
        }
    }

    // if n still has a prime factor > sqrt(n)
    if (temp > 1) {
        result -= Math.floor(result / temp);
    }

    return result;
}

// Example
// console.log(eulerTotient(9));  // φ(9) = 6  (coprime numbers: 1,2,4,5,7,8)
// console.log(eulerTotient(10)); // φ(10) = 4 (coprime numbers: 1,3,7,9)


// Count numbers divisible by given primes
function countDivisible(N, primes) {
  let k = primes.length;
  let ans = 0;

  // loop over all subsets of primes
  for (let mask = 1; mask < (1 << k); mask++) {
    let lcm = 1;
    let bits = 0;

    for (let j = 0; j < k; j++) {
      if (mask & (1 << j)) {
        lcm *= primes[j];
        bits++;
      }
    }

    if (bits % 2 === 1) ans += Math.floor(N / lcm);
    else ans -= Math.floor(N / lcm);
  }
  return ans;
}

// Example
// console.log(countDivisible(20, [2, 3])); // 13
// console.log(countDivisible(30, [2, 3, 5])); // 22

// Count Special Numbers
function countSpecialNumbers(n, arr) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let x of arr) {
      if (i % x === 0) {
        count++;
        break; // already special, no need to check further
      }
    }
  }
  return count;
}

// Example
// console.log(countSpecialNumbers(10, [2, 3])); // Output: 7


// Composite numbers up to N
function composites(N) {
  let arr = [];
  for (let i = 4; i <= N; i++) {
    if (divisors(i).length > 2) arr.push(i);
  }
  return arr;
}
// console.log(composites(20)); // [4,6,8,9,10,12,14,15,16,18,20]


// Repeated digit sum (Digital root)
function digitalRoot(n) {
  return 1 + ((n - 1) % 9);
}
// console.log(digitalRoot(9875)); // 2 (9+8+7+5=29, 2+9=11, 1+1=2)

// Base conversion
function convertBase(num, fromBase, toBase) {
  return parseInt(num, fromBase).toString(toBase);
}
// console.log(convertBase("1010", 2, 10)); // 10
// console.log(convertBase("10", 10, 2));   // 1010


// AP, GP, HP, Mean, Median, Mode
// AP nth term
function apNth(a, d, n) { return a + (n - 1) * d; }
// GP nth term
function gpNth(a, r, n) { return a * Math.pow(r, n - 1); }
// HP nth term (reciprocal of AP)
function hpNth(a, d, n) { return 1 / (a + (n - 1) * d); }

// Mean
function mean(arr) { return arr.reduce((a, b) => a + b) / arr.length; }
// Median
function median(arr) {
  arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);
  return arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}
// Mode
function mode(arr) {
  let freq = {}, max = 0, res = [];
  arr.forEach(x => freq[x] = (freq[x] || 0) + 1);
  for (let k in freq) if (freq[k] > max) { max = freq[k]; res = [Number(k)]; }
  else if (freq[k] === max) res.push(Number(k));
  return res;
}

// console.log(apNth(2, 3, 5)); // 14
// console.log(gpNth(2, 3, 4)); // 54
// console.log(hpNth(1, 1, 2)); // 0.5
// console.log(mean([1,2,3,4])); // 2.5
// console.log(median([1,2,3,4,5])); // 3
// console.log(mode([1,2,2,3,3])); // [2,3]


// ncr
function nCr(n, r) {
  if (r > n) return 0;
  if (r > n - r) r = n - r;  // because nCr = nC(n-r)

  let res = 1;
  for (let i = 0; i < r; i++) {
    res *= (n - i);
    res /= (i + 1);
  }
  return res;
}

// Example usage:
// console.log(nCr(5, 2));  // 10
// console.log(nCr(10, 3)); // 120


// Sieve of Eratosthenes
function sieveOfEratosthenes(n) {
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (let multiple = p * p; multiple <= n; multiple += p) {
                isPrime[multiple] = false;
            }
        }
    }

    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) primes.push(i);
    }
    return primes;
}

// Examples
// console.log(sieveOfEratosthenes(10));  // [2, 3, 5, 7]
// console.log(sieveOfEratosthenes(30));  // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]


// Series with Largest GCD and Sum = N
function largestGCDSeries(n) {
  // find smallest divisor >= 2
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      return n / i;
    }
  }
  return 1; // fallback, though won't happen
}

// Example
// console.log(largestGCDSeries(10)); // 5 (because series: 5 + 5)
// console.log(largestGCDSeries(12)); // 6 (series: 6 + 6)
// console.log(largestGCDSeries(15)); // 5 (series: 5 + 5 + 5)



// Segmented Sieve (primes in range [L, R])
function segmentedSieve(L, R) {
  let isPrime = Array(R - L + 1).fill(true);
  for (let i = 2; i * i <= R; i++) {
    for (let j = Math.max(i * i, Math.ceil(L / i) * i); j <= R; j += i) {
      isPrime[j - L] = false;
    }
  }
  if (L === 1) isPrime[0] = false;
  return isPrime.map((v, i) => v ? i + L : null).filter(Boolean);
}
// console.log(segmentedSieve(10, 30)); // [11,13,17,19,23,29]

// Number of trailing zeros in n!
function trailingZeros(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}
// console.log(trailingZeros(100)); // 24


// Find greatest number with some remainder
function greatestWithRemainder(N, d, r) {
  return N - ((N - r) % d);
}
// console.log(greatestWithRemainder(100, 7, 3)); // 94

// Find all divisors
function divisors(n) {
  let res = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      res.push(i);
      if (i !== n / i) res.push(n / i);
    }
  }
  return res.sort((a, b) => a - b);
}
// console.log(divisors(36)); // [1,2,3,4,6,9,12,18,36]


// Has exactly 3 divisors
function hasExactly3Divisors(n) {
  let root = Math.sqrt(n);
  if (root % 1 !== 0) return false;
  for (let i = 2; i * i <= root; i++) if (root % i === 0) return false;
  return root > 1;
}
// console.log(hasExactly3Divisors(4));  // true (1,2,4)
// console.log(hasExactly3Divisors(9));  // true (1,3,9)


// Number with most divisors in [1..N]
function mostDivisors(N) {
  let max = 0, num = 1;
  for (let x = 1; x <= N; x++) {
    let d = divisors(x).length;
    if (d > max) { max = d; num = x; }
  }
  return num;
}
// console.log(mostDivisors(22)); // 12


