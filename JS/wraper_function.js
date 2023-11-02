// (function (exports, require, module, __filename, __dirname) {
//     var people = ['Pratap', 'Das', 'PD'];
//     var a = 7;
//     function test() {
//         console.log('test fn');
//     }
//     module.exports = people;
//     return
// });

// or

// (function (exports, require, module, __filename, __dirname) {
//     var people = ['Pratap', 'Das', 'PD'];
//     var a = 7;
    
//     function test() {
//         console.log('test fn');
//     }
    
//     return {
//         people: people,
//         test: test
//     };
// })();

// or

(function (exports, require, module, __filename, __dirname) {
    var people = ['Pratap', 'Das', 'PD'];
    var a = 7;
    function test() {
        console.log('test fn');
    }
    
    console.log(people); // Output: ['Pratap', 'Das', 'PD']
})();