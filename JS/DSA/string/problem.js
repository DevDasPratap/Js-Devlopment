// Stricky string problem

function strMatch(strA, strB) {
    const strAStore = new String(strA) // store into heap memory
    const strBStore = strB // store into stack memory

    console.log(typeof strAStore) // String object (not same as primitive)
    console.log(typeof strBStore) // Primitive string

    return strAStore === strBStore
}

console.log(strMatch('abc', 'abc'))