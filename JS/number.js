const str = "1.2,34/56'7:8";
// const numbersOnly = str.split('').filter(char => !isNaN(char) && char !== ' ').join('');
let numbersOnly = ''
for(let i=0; i<str.length; i++){
    if(Number(str[i])){
        numbersOnly += str[i]
    }
}
console.log(numbersOnly); // Output: "12345678"
