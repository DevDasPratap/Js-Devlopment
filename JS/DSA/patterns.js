function pattern1(num) {
    let result = ''
    for (let row = 0; row < num; row++) {
        let str = ''
        for (let col = 0; col < num; col++) {
            str += '* '
        }
        // console.log(str)
        result += str + "\n";
    }
    return result
}

// console.log(pattern1(5))

function pattern2(num) {
    let result = ''
    for (let row = 0; row < num; row++) {
        let str = ''
        for (let col = 0; col < row; col++) {
            str += '* '
        }
        // console.log(str)
        result += str + "\n";
    }
    return result
}

// console.log(pattern2(5))

function pattern3(num) {
    let result = ''
    for (let row = 0; row < num; row++) {
        let str = ''
        let spaces = num - row
        // 0-row spaces
        for (let col = 0; col < spaces; col++) {
            str += ' '
        }
        let starts = row
        for (let col = 0; col < starts; col++) {
            str += '*'
        }
        // console.log(str)
        result += str + "\n";
    }
    return result

}

// console.log(pattern3(5))

function pattern4(num) {
    let result = ''
    for (let row = 0; row < num; row++) {
        let str = ''
        let spaces = num - row
        // 0-row spaces
        for (let col = 0; col < spaces; col++) {
            str += ' '
        }
        // let starts = row
        let starts = 2*row-1
        for (let col = 0; col < starts; col++) {
            str += '*'
        }
        // console.log(str)
        result += str + "\n";
    }
    return result

}

// console.log(pattern4(5))

function pattern5(num) {
    let result = ''
    for (let row = 0; row < num; row++) {
        let str = ''
        for (let col = row; col < num; col++) {
            str += '* '
        }
        // console.log(str)
        result += str + "\n";
    }
    return result

}

// console.log(pattern5(5))


function upperTriangle(num) {
    let result = '';
    for (let row = 0; row < num; row++) {
        let str = '';
        let spaces = num - row - 1; // spaces decrease
        for (let col = 0; col < spaces; col++) {
            str += ' ';
        }
        let stars = 2 * row + 1; // stars increase
        for (let col = 0; col < stars; col++) {
            str += '*';
        }
        result += str + "\n";
    }
    return result;
}

function lowerTriangle(num) {
    let result = '';
    for (let row = 1; row < num; row++) { // start from 1 to avoid duplicate middle line
        let str = '';
        let spaces = row;
        for (let col = 0; col < spaces; col++) {
            str += ' ';
        }
        let stars = 2 * (num - row) - 1; // stars decrease
        for (let col = 0; col < stars; col++) {
            str += '*';
        }
        result += str + "\n";
    }
    return result;
}

function pattern6(num) {
    let result = '';
    result += upperTriangle(num);
    result += lowerTriangle(num);
    return result;
}

// console.log(pattern6(5));

function upper(num) {
    for (let row = 0; row < (num/2) ; row++) {
        let str = ''
        let leftStars = row
        for (let leftStart = 0; leftStart < leftStars; leftStart++) {
            str += '*'
        }
        let spaces = num-2*row
        for (let space = 0; space < spaces; space++) {
            str += ' '
        }
        let rightStarts = row
        for (let rightStart = 0; rightStart < rightStarts; rightStart++) {
            str += '*'
        }
        console.log(str)
    }
}

function middle(num) {
    let str = ''
    for (let i = 0; i < num; i++) {
        str += '*'
    }
    console.log(str)
}

function lower(num) {
    for (let row = 0; row < num/2; row++) {
        let str = ''
        let leftStars = (num/2)-row+1
        for (let leftStart = 0; leftStart < leftStars; leftStart++) {
            str += '*'
        }
        let spaces = 2*row-1
        for (let space = 0; space < spaces; space++) {
            str += ' '
        }
        let rightStarts = num/2-row+1
        for (let rightStart = 0; rightStart < rightStarts; rightStart++) {
            str += '*'
        }
        console.log(str)
    }
}


function pattern7(num) {  
    upper(num)
    middle(num)
    lower(num)
}

// console.log(pattern7(5))

function pattern8(num) {
    for (let row = 0; row < num; row++) {
        let str = ''
        let spaces = num - row
        for (let sapce = 0; sapce < spaces; sapce++) {
            str += ' '
        }
        let counters = 1
        for (let counter = 0; counter < row; counter++) {
            str += counters
            counters++
        }
        console.log(str)
    }
}

pattern8(5)