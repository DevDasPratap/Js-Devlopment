const transformArray = function (nums) {
    const zero = []
    const one = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            zero.push(0)
        } else {
            one.push(1)
        }
    }
    return [...zero, ...one]
};

const result = transformArray([1,5,1,4,2])
console.log(result)