const commonChars = function (words) {
    const common = []
    for (let letter of words[0]) {
        if (words.every(word => word.includes(letter))) {
            common.push(letter)
            words = words.map(word => word.replace(letter, ''))
            console.log('words', words)
        }
    }
    return common
};

console.log(commonChars(["bella", "label", "roller"]))

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]