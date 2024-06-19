// printing something N times

let count = 0;
function func() {
    if (count === 4) {
        return
    }
    console.log(count)
    count++
    func()
}
// func()

// Print Name N times using Recursion
function printNameNTimes(name, n) {
    if (n === 0) return;
    console.log(name);
    printNameNTimes(name, n - 1);
  }
  
  function main() {
    const name = "John Doe";
    const N = 5;
    printNameNTimes(name, N);
  }
  
//   main();

// Print 1 to N using Recursion
function printNumbers(current, n) {
    if (current > n) {
        return
    }
    console.log(current)

    printNumbers(current + 1, n)
}

function main(){
    let n = 5
    printNumbers(1, n)
}

// main()

// Print N to 1 using Recursion
function printToNumbers(current) {
    if (current < 1) {
        return
    }
    console.log(current)

    printToNumbers(current - 1)
}

function main(){
    let n = 5
    printToNumbers(n)
}

// main()

// Sum of first N Natural Numbers
// Input: N=5
// Output: 15

function sumOfNumber(n) {
    if (n === 0) {
        return 0
    }
    return n + sumOfNumber(n-1)
}

function main(){
    const n = 5
    const sum = sumOfNumber(n)
    console.log('sum: ', sum)
}

main()