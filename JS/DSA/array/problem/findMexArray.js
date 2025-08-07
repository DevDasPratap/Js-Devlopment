function findMaxMex(array, x) {
    const set = new Set(array);
    let mex = 0;

    while (true) {
        if (set.has(mex)) {
            mex++;
        } else if (x > 0) {
            // insert a missing number
            x--;
            mex++;
        } else {
            break;
        }
    }

    return mex;
}

console.log(findMaxMex([1, 2, 3, 4, 5], 3)); // 6
console.log(findMaxMex([0, 1, 2, 3, 4], 2)); // 5
