// scope chain & lexical environment
// variable having access in its parent scope
// inner function can access outer function scope value access -- lexical scope

// Lexical environment = local memory + lexical environment of parent

function outer() {
    let username = "Pratap";
    // console.log(secret)
    function inner() {
        let secret = "Pratap23"
        console.log("Inner", username);
        console.log(secret)
    }
    function innerTwo() {
        console.log("innerTwo", username);
        // console.log(secret)
    }
    inner();
    innerTwo();
}

outer();

// console.log(x);

if (Math.random() > 0.5) {
    let x = 1;
} else {
    let x = 2;
}

// console.log(x);


function a(){
    var x=10;
    console.log(x);
    b();
     function b(){
        console.log(y)
     }
}

var y=20;
var z=30;
a();






