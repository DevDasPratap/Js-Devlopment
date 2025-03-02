// test('Checks if one is equal to one', () => {
//     expect(1).toBe(1);
// });

/**
 * Jest provides the expect() function to define assertions.
 * The toBe() matcher checks for exact equality.
 * format of file: spec/test .js/.ts
 */


// const sum = (x)=>{
//     return x+1
// }

// test('Checks if one is equal to one', () => {
//     expect(sum(1)).toBe(2);
// });


function muliply(y) {
    return y*2
}
test('Checks if one is equal to one', () => {
    expect(muliply(4)).toBe(8);
});
