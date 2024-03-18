const str = 'treee'
function frequencySort(str) {
    const map = new Map()
    for (const char of str) {
        // if (map.has(char)) {
        //     map.set(char, map.get(char) + 1)
        // } else {
        //     map.set(char, 1)
        // }

        // or
        map.set(char, (map.get(char) || 0) + 1)

    }
    const sorted = [...map.keys()].sort((a,b)=>map.get(b) - map.get(a))
    let resultStr = ''
    for (let ch of sorted) {
        resultStr += ch.repeat(map.get(ch))
    }
    return resultStr
}

const res = frequencySort(str)
console.log(res)