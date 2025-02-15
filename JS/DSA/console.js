// JavaScript Brain Teaser! 

// Think you're a JavaScript pro? Let's put your skills to the test with this tricky challenge!

// const obj = {
//     prop: 'value',
//     log:()=>console.log(this.prop)
// }
// obj.log()

// let arr = [];
// arr[null] = 10;
// console.log(arr)
// console.log(arr.length);

// arr[100] = 10;

// console.log(arr)
// console.log(arr.length);


// function Foo() {}
// Foo.prototype.bar = 42;

// const foo = new Foo();
// delete foo.bar;
// console.log(foo.bar);


// console.log(typeof null)


// let a = {}; 
// let b = { key: "b" }; 
// let c = { key: "c" }; 
// a[b] = 123; 
// a[c] = 456; 
// console.log(a);
// console.log(b);
// console.log(a[b]);



// console.log(1 + -"1" + 1);

// console.log([1, 2, 3].shift())



//  console.log([] + {}); 
//  console.log({} + []);

//  console.log([] == false); 
//  console.log([] === false);

//  console.log([] == ![]);
//  console.log([] === ![]);

//  console.log(1 + "2");
//  console.log("1" + 2);

//  console.log([] == true);
//  console.log([] === true);





// const p1 = new Promise((resolve) => setTimeout(() => resolve(1), 3000));

// const p2 = new Promise((resolve, reject) => setTimeout(() => reject("Error!"), 2000));

// Promise.all([p1, p2])
//   .then((values) => console.log("Resolved:", values))
//   .catch((err) => console.log("Caught:", err));


// let user = { name: 'John', age: 30, address: { city: 'New York', state: 'NY', pin: 721602, job: { title: 'swe', exp: 2.9, city: 'kolkata' } }, pin: 721602 };
// console.dir(user);
// console.dir(user, { depth: 2 });

// console.log(!!{});
// console.log(!!{});



// let course = "JavaScript";
// console.log(course);
// console.log(course = "ECMAScript");
// console.log(course);



// console.log(typeof NaN);
// for (var i = 0; i < 5; i++) { setTimeout(() => console.log(i), 1000); }
// // console.log(sum(2)(3)(4)); // output will be - 9
// console.log("5" - -"2");




// console.log(1 + "2" + 3);  // "123"
// console.log("5" - 2);
// console.log("10" * "2");
// console.log(false == 0);
// console.log(false === 0);
// console.log("123" == 123);
// console.log(null == undefined);
// console.log(null === undefined);
// console.log([] + {});
// console.log({} + []);

// What’s happening here?
// 1 + "2" + 3 → "123"
// Numbers get converted to strings in a + operation with a string.

// "5" - 2 → 3
// String "5" is converted to number 5, then 5 - 2 = 3.

// "10" * "2" → 20
// Both strings convert to numbers, 10 * 2 = 20.

// false == 0 → true
// false becomes 0, so 0 == 0 is true.

// false === 0 → false
// Strict equality checks type as well; boolean ≠ number.

// "123" == 123 → true
// String "123" becomes number 123.

// null == undefined → true
// null and undefined are loosely equal.

// null === undefined → false
// Strict equality fails since types differ.

// [] + {} → "[object Object]"
// An empty array [] converts to "", and {} converts to "[object Object]". The result is their concatenation.

// {} + [] → 0 or "[object Object]" depends on environment type and JavaScript engine.




// console.log(2 < 7);
// console.log(22 > '9');
// console.log(2 > 'abc');
// console.log('2' === '12'.length);
// console.log(55 && 3);
// console.log(4 || 3);
// console.log(+'5' + 5);
// console.log([] + {});
// console.log({} + [])
// console.log(2 == '2' && 2 === '2');
// console.log(!!"false" === !!"true");
// console.log(null || undefined && "Hello");
// console.log(typeof NaN + ' is NaN');
// console.log(('b' + 'a' + +'a' + 'a').toLowerCase());
// console.log([] == 0 && [] === 0);
// console.log([1, 2] + [3, 4]);
// console.log(typeof NaN);
// console.log(!!"");
// console.log(!!null == !!undefined);
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);
// console.log(0.1 + 0.2 === 0.3);

// const obj = {
//   dev: 'bfe',
//   a: function () {
//     return this.dev
//   },
//   b() {
//     return this.dev
//   },
//   c: () => {
//     return this.dev
//   },
//   d: function () {
//     return (() => {
//       return this.dev
//     })()
//   },
//   e: function () {
//     return this.b()
//   },
//   f: function () {
//     return this.b
//   },
//   g: function () {
//     return this.c()
//   },
//   h: function () {
//     return this.c
//   },
//   i: function () {
//     return () => {
//       return this.dev
//     }
//   }
// }

// console.log(obj.a())
// console.log(obj.b())
// console.log(obj.c())
// console.log(obj.d())
// console.log(obj.e())
// console.log(obj.f()())
// console.log(obj.g())
// console.log(obj.h()())
// console.log(obj.i()())

// console.log(0.1 + 0.2); console.log(0.1 + 0.2 === 0.3);

// console.log(!!1);    // true ✅ 
// console.log(!!0);    // false ❌ 
// console.log(!!"hello"); // true ✅ 
// console.log(!!"");   // false ❌ 
// console.log(!!null);  // false ❌ 
// console.log(!!{});   // true ✅ 
// console.log(!![]);   // true ✅ 


// console.log([] + []); // "" (empty string) 
// console.log([] + {}); // "[object Object]" 
// console.log({} + []); // 0 (not "[object Object]" due to implicit conversion)
// console.log({} + {}); // "[object Object][object Object]" 

// [] + []) → ""
// Two empty arrays come together, yet they give us… nothing. Just like when two clueless people brainstorm without direction—zero results! 😆

// ([] + {}) → "[object Object]"
// An empty array meets an empty object, and somehow, we get a descriptive string. Sometimes, even when you bring nothing to the table, people will label you with something anyway. 🤷‍♂️

// ({} + []) → 0
// You’d expect "[object Object]" here, but surprise—JavaScript treats it differently. Just like how we expect a situation to go one way, but reality has other plans. 😅

// ({} + {}) → "[object Object][object Object]"
// Two objects unite, and rather than combining meaningfully, they just stack awkwardly together—just like when two people talk without listening to each other. 🤦‍♂️


// console.log(NaN === NaN); // → false 😵
// console.log(0.1 + 0.2 === 0.3); // → false
// console.log(Math.min()); // → Infinity
// console.log({} + []) //→ 0
// console.log([] == ![]) //→ true



// var x = 10;
// function test() {
//   console.log(x);
//   var x = 20;
//   console.log(x);
// }
// test();


// console.log(3 > 2 > 1);

// console.log(this); // Refers to `window` in the browser



// const obj1 = {
//   name: "JavaScript",
//   show() {
//     console.log(this.name); // Refers to `obj`
//   }
// };
// obj1.show(); // Output: JavaScript



// const obj2 = {
//   name: "JavaScript",
//   arrowFunc: () => console.log(this.name), // `this` refers to the outer scope (window/global) 
//   regularFunc() { console.log(this.name); } // `this` refers to `obj` 
// };
// obj2.arrowFunc(); // Output: undefined (or window.name if set) 
// obj2.regularFunc(); // Output: JavaScript



// function Person(name) {
//   this.name = name;
// }
// const dev = new Person("Coder");
// console.log(dev.name); // Output: Coder


// function testScoping() {
//   var x = 1;
//   let y = 2;
//   const z = 3;
//   var a = 10;
//   if (true) {
//     var x = 100;
//     let y = 200;
//     const z = 300;
//     console.log(x, y, z, a); // Output for A
//   }
//   if (true) {
//     var x = 1000;
//     let y = 300;
//     const z = 600;
//     let a = 100;
//     console.log(x, y, z, a); // Output for B
//   }
//   console.log(x, y, z, a); // Output for C
// }
// testScoping();


// //    if (value === null) {
// //     console.log("Value is null!");
// //    }


// function example() {
//   var x = 10;
//   console.log(x); // outputs 10
//   var x = 20;
//   console.log(x); // outputs 20
//  }


//  var x = 10; var y = 20; 
// console.log( x + y ," the value is: " ); //30 the value is:
// console.log("the value is: ", x + y); //the value is 1020




// setTimeout(() => {
//   console.log("First timeout");
//  }, 0);
 
//  console.log("log 1");
 
//  new Promise((resolve) => {
//   console.log("In Promise 1");
//   resolve("Promise 1 resolved");
//  })
//   .then((resp) => {
//   console.log(resp);
//   })
//   .then(() => {
//   console.log("Promise 1 then");
//   })
//   .finally(() => {
//   console.log("promise 1 finally");
//   });
 
//  Promise.resolve("Promise 2 resolved")
//   .then((resp) => {
//   console.log(resp);
//   })
//   .then(() => {
//   console.log("Promise 2 then");
//   })
//   .finally(() => {
//   console.log("promise 2 finally");
//   });
 
//  setTimeout(() => {
//   console.log("Second timeout");
//  }, 1000);
 
//  console.log("log 2");


//  const arr = [1, [2, [3, [4, 5]]]];
// console.log(arr.flat(Infinity));




// console.log(Object.is(10, 10)); // true
// console.log(10 === 10); // true

// console.log(Object.is(NaN, NaN)); // true
// console.log(NaN === NaN); // false

// console.log(Object.is(+0, -0)); // false
// console.log(+0 === -0); // true





// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//   console.log("timerStart");
//   resolve("success");
//   console.log("timerEnd");
//   }, 0);
//   console.log(2);
//  });
  
//  promise.then((res) => {
//   console.log(res);
//  });
//  console.log(4); //end



//  console.log([] + [] + 'hello')



//  let [a = b, b = 2] = [];
// console.log(a, b);

// let [b1 = 2, a1 = b1] = [];
// console.log(a1, b1); // Output: 2, 2



// let age = 25;
// let hasID = true;

// if (age >= 18 && hasID) {
//  console.log("You can enter! ✅");
// } else {
//  console.log("Access Denied ❌");
// }


// console.log(5 > 3); // true (greater than)
// console.log(10 <= 10); // true (less than or equal)
// console.log(7 == "7"); // true (loose equality)
// console.log(7 === "7"); // false (strict equality)



// const arr3 = [1, 2]
// const arr2 = [3, 4]
// console.log(arr3.join(arr2))



// const user1 = {
//   name: "Alice",
//   greet() {
//   setTimeout(() => {
//   console.log(this.name);
//   }, 1000);
//   }
//  };
//  user1.greet();



//  const entries = [
//   ['name', 'Alice'],
//   ['age', 25],
//   ['role', 'Developer']
//  ];
 
//  const user3 = Object.fromEntries(entries);
//  console.log(user3); 
//  { name: 'Alice', age: 25, role: 'Developer' }

//  console.log("Hello, World!".length); // 13
//  console.log("JavaScript".slice(0, 4)); // "Java"
//  console.log("JavaScript".substring(4, 10)); // "Script"
//  console.log("Hello World".replace("World", "JavaScript")); // "Hello JavaScript"
//  console.log("apple apple".replaceAll("apple", "banana")); // "banana banana"
//  console.log("a,b,c".split(",")); // ["a", "b", "c"]
//  console.log("Hello World".includes("World")); // true
//  console.log("JavaScript".startsWith("Java")); // true
//  console.log("Hello.js".endsWith(".js")); // true
//  console.log("Hello World".indexOf("o")); // 4
//  console.log("Hello World".lastIndexOf("o")); // 7
//  console.log("Hi! ".repeat(3)); // "Hi! Hi! Hi! "
//  console.log("JavaScript".charAt(4)); // "S"
//  console.log("A".charCodeAt(0)); // 65
//  console.log("5".padStart(3, "0")); // "005"
//  console.log("5".padEnd(3, "0")); // "500"


// // Without optional chaining:
// const user4 = {}; 
// // console.log(user4.profile.name); 
// // ❌ TypeError: Cannot read properties of undefined

// // With optional chaining (?.):
// console.log(user4.profile?.name); 
// // ✅ undefined (no error)

// // Add a default value using ??:
// console.log(user4.profile?.name ?? "Guest"); 
// // ✅ "Guest"
