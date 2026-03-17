// Take a character and check whether it’s uppercase, lowercase, a digit, or a special character. 


function checkNum(n) {
    if(n >='A' && n <= 'Z'){
        return 'uppercase'
    }if (n >='a' && n <= 'z') {
        return 'lowercase'
    }else if(n >=0 && n <= 9){
        return 'digit'
    }else{
        return 'special character'
    }
}

console.log(checkNum('_'))