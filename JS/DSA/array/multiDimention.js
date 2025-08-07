function transpose(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr[0].length; j++){
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }
    return arr
}

const arr = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(transpose(arr))


function rotate90Degeree(arr) {
    // transpose the array
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr[0].length; j++){
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }
    // reverse each row of the matrix (which is 1d array)
    for(let i=0; i<arr.length; i++){
        rotateArr(arr[i])
    }
    // // reverse the whole matrix (which is 2d array)
    // for(let i=0; i<arr.length/2; i++){
    //     [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
    // }
    return arr
}
function rotateArr(arr) {
    let left=0, right=arr.length-1
    while(left<right){
        // Swap elements from left to right
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
}

const rotatedArr = rotate90Degeree(arr)
// console.log(rotatedArr)

// spiral traversal (sprial printing of a matrix)
function spiralTraversal(matrix) {
    if (matrix.length === 0) return;

    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // move right
        for (let i = left; i <= right; i++) {
            console.log(matrix[top][i]);
        }
        top++;

        // move down
        for (let i = top; i <= bottom; i++) {
            console.log(matrix[i][right]);
        }
        right--;

        // move left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                console.log(matrix[bottom][i]);
            }
            bottom--;
        }

        // move up
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                console.log(matrix[i][left]);
            }
            left++;
        }
    }
}

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]]
console.log(spiralTraversal(matrix))

