const calculateSums = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] > array[j]) {
                sum += array[i];
            }
        }
        result.push(sum);
    }
    return result;
};

const array = [5, 1, 4, 2];
const result = calculateSums(array);
console.log(result); // Output: [15, 0, 8, 2]