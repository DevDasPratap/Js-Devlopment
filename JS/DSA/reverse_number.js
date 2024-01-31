const rev = 7789
const str = String(rev)
function revNum(str) {
    let reverse = ''
    for(let i=str.length-1; i>=0; i--){
        reverse += str[i]
    }
    return Number(reverse)
}

const res = revNum(str)
console.log(res)