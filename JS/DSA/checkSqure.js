const array1 = [4, 5, 7, 9, 4];
const array2 = [16, 81, 25, 49, 16];

const checkSquare = function (array1, array2) {
    // for (let i = 0; i < array1.length; i++) {
    //     const square = array1[i] * array1[i];
    //     if (!array2.includes(square)) {
    //         return false;
    //     }
    // }
    // return true;

    let mapA = {}
    let mapB = {}
    for (const ele of array1) {
        mapA[ele] = (mapA[ele] || 0)+1
    }
    for (const ele of array2) {
        mapB[ele] = (mapB[ele] || 0)+1
    }
    for (const squre in mapA) {
        const ishas = squre * squre
        if (!mapB.hasOwnProperty(ishas)) {
            return false
        }
    }
    return true
}

const result = checkSquare(array1, array2);
console.log(result);