/**
 * Loop
 * for loop when we know start to end
 * for(start; end; change){}
 * 
 * continue => skip current iteration
 * bresk => leave and go outside the loop
 */

// Infinte loop
// for (let i = 1; i < 5;) {
//     console.log(i)
// }

// for (let i = 1; ;) {
//     console.log(i)
// }

// for (; ;) {
//     console.log('')
// }

// logical question: var outside print last value
// for (var i = 0; i < 5; i++) {
//     console.log('i: ', i)
// }
// console.log(i)



// for (let i = 1; i < 5; i++) {
//     console.log(i)
// }


// half time loop run
// const n = 10
// for (let i = 1; i < Math.floor(n/2); i++) {
//     console.log(i)
// }

function primeNumber(n) {
    if (n <= 1) {
        return false
    }
    if (n === 2) {
        return true
    }
    if (n % 2 === 0) {
        return false
    }
    for (let i = 3; i < Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
// console.log(primeNumber(10))

// square root 36 => 6 now 2 => 6 


/**
 * While
 * 
 * while(true){}
 */

let start = 0
let end = 10
// while (end) {
//     console.log(end)
//     end--
// }

/**
 * Array => Linear Data Structure
 * - Stores multiple values in **continuous memory locations**
 * - Fast access because elements are stored sequentially
 * - Fixed size (for static arrays) or dynamic (for JS arrays)
 */

/**
 * Linked List => Linear Data Structure
 * - Stores multiple values in **different memory locations**
 * - Each element (node) contains data and a reference (pointer) to the next node
 * - Slower access compared to arrays but allows **efficient insertion and deletion**
 */


function findMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

// console.log(findMax([10, 9, 78, 100, 4]))

function findSecondMax(arr) {
    let firstMax = Math.max(arr[0], arr[1])
    let secondMax = Math.min(arr[0], arr[1])
    for (let i = 2; i < arr.length; i++) {
        if (firstMax < arr[i]) {
            secondMax = firstMax
            firstMax = arr[i]
        } else if (arr[i] > secondMax && firstMax !== arr[i]) {
            secondMax = arr[i]
        }
    }
    return { firstMax, secondMax }
}

// console.log(findSecondMax([1000, 9, 78, 100, 4]))

function findSecondMin(arr) {
    let firstMin = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstMin) {
            secondMin = firstMin;
            firstMin = arr[i];
        } else if (arr[i] > firstMin && arr[i] < secondMin) {
            secondMin = arr[i];
        }
    }

    return { firstMin, secondMin };
}
// console.log(findSecondMin([1000, 9, 78, 100, 4]));


// reverse
function reverse(arr) {
    let first = 0
    let last = arr.length - 1
    while (first !== last) {
        [arr[first], arr[last]] = [arr[last], arr[first]]
        first++
        last--
    }
    return arr
}
// console.log(reverse([10, 9, 78, 100, 4]));

function swapZero(arr) {
    let left = 0, right = 0
    while (left < arr.length) {
        if (arr[left] === 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            right++
        }
        left++
    }
    return arr
}
// console.log(swapZero([0,0,1,1,1,0,1,0]))

function swapNegetive(arr) {

}
console.log(swapNegetive([0, -1, 4, 5, -10, 10, 9, -22, 22]))


/**
 * Array - mutable
 * String - imutable - dont change current state
 */

function palindrom(str) {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// console.log(palindrom('madam'));  // true
// console.log(palindrom('start'));  // false
// console.log(palindrom('oovoo'));  // true

function charSwapCapitalAndSmall(str) {
    let output = ''
    for (let i = 0; i < str.length; i++) {
        let ch = str.charCodeAt(i)
        if (ch >= 65 && ch <= 90) {
            output += output + String.fromCharCode(ch + 32)
        } else if (ch >= 97 && ch <= 122) {
            output += output + String.fromCharCode(ch - 32)
        }
    }
    return output
}

// console.log(charSwapCapitalAndSmall('aBcDeFgH')) // AbCdEfGh



// let str = ''
// for (let i = 97; i <= 122; i++) {
//     str += String.fromCharCode(i)
// }

// for (let i = 122; i >= 97; i--) {
//     str += String.fromCharCode(i)
// }

// console.log('str', str)


// let charMap = {}
// let count = 26
// for (let i = 122; i >= 97; i--) {
//     charMap[String.fromCharCode(i)] = count
//     count--
// }

// console.log(charMap)

// advance array
// left rotation by 1 element
function leftRotation(arr) {
    let copy = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = copy
    return arr
}
// console.log(leftRotation([4,5,7,8,9]))

// right rotation by 1 element

function rightRotation(arr) {
    const copy = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = copy
    return arr
}
// console.log(rightRotation([4,5,7,8,9]))

// left and right rotation by k element
function rotationKElement(arr, rotate) {
    rotate = rotate % arr.length
    for (let i = 0; i < rotate; i++) {
        for (let j = 0; j < arr.length; j++) {

        }
    }
}

// console.log(rotationKElement([21, 22, 23, 24, 25, 26, 27], 4))

function rotationKElementAlgo(arr, rotate) {
    rotate = rotate % arr.length
    const temp = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[(i + rotate) % arr.length]
    }
    return temp
}

// console.log(rotationKElementAlgo([21, 22, 23, 24, 25, 26, 27], 4))

// merge two sorted array
function mergeArray(arr1, arr2) {
    let i = 0, j = 0, k = 0
    const merge = new Array(arr1.length + arr2.length)

    // Merge both arrays while both have elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            // merge[k] = arr1[i];  // Copy arr1[i] into merge[k]
            // i++;  // Move to the next element in arr1
            // k++;  // Move to the next position in merge

            merge[k++] = arr1[i++] // pre increment
        } else {
            merge[k++] = arr2[j++]
        }
    }
    // Copy remaining elements from arr1 (if any)
    while (i < arr1.length) {
        merge[k++] = arr1[i++];
    }

    // Copy remaining elements from arr2 (if any)
    while (j < arr2.length) {
        merge[k++] = arr2[j++];
    }

    return merge; // Return the merged sorted array
}

console.log(mergeArray([7, 8, 21, 22], [9, 10, 23, 34]))