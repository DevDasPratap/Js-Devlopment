const des = 10
function decToBin(n) {
    let bin = ''
    while(n>0){
        bin = n%2 + bin
        n = Math.floor(n/2)
    }
    return Number(bin);
}

console.log(decToBin(des))