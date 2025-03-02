test('is one equal to 1', () => {
    expect(1).toBe(1)
})

function fun(x) {
    if (x==1) {
        return x+1
    }else{
        return x+10
    }
}

test('add 10 with x value', () => {
    expect(fun(5)).toBe(15)
})

const sum = require("../../app.js");
test('add 2 with x value', () => {
    expect(sum(2)).toBe(4)
})


function checkNumber(num) {
    if (num > 0) return "Positive";
    if (num < 0) return "Negative";
    return "Zero";
}

test('check number cases', () => {
    expect(checkNumber(5)).toBe("Positive");
    expect(checkNumber(-3)).toBe("Negative");
    expect(checkNumber(0)).toBe("Zero");
});



function throwError() {
    throw new Error('Something went wrong');
}

test('throws error as expected', () => {
    expect(() => throwError()).toThrow('Something went wrong');
});



const colors = ['red', 'blue', 'green'];

test('array contains blue', () => {
    expect(colors).toContain('blue');
});




function fetchDataPromise() {
    return Promise.resolve("data received");
}

test('fetches data using promises', () => {
    return fetchDataPromise().then(data => {
        expect(data).toBe("data received");
    });
});
