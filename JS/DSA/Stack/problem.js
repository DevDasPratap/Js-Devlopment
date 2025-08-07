// Valid parentheses
const input = '(){}[]{'

function isValidParenthesis(input) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    for (const char of input) {
        if (char in pairs) {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

const res = isValidParenthesis(input)
console.log(res)