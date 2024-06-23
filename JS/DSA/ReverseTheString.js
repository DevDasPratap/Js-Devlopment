const str = "the sky    is    blue"
const rev = (str)=>{
    const strArr = str.trim().split(' ')
    for (let index = 0; index < strArr.length; index++) {
        if (strArr[index] === '') {
            strArr.splice(index, 1);
            index--;
        }
    }
    const newArr = []
    for (let i = strArr.length-1; i>=0; i--) {
        newArr.push(strArr[i])
    }
    let final = ''
    for (let index = 0; index < newArr.length; index++) {
        final += newArr[index] + ' '   
    }
    return final
}

const res = rev(str)
console.log(res)