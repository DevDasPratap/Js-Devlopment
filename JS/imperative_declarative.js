// In JavaScript, "imperative" and "declarative" are two different programming paradigms or styles for writing code. They represent different approaches to solving problems and expressing logic in your programs.

// 1. Imperative Programming:
//    - Imperative programming is a style of coding where you explicitly specify step-by-step instructions for the computer to perform a task.
//    - It focuses on "how" to achieve a particular result by describing the exact sequence of actions or operations.
//    - Imperative code often involves loops, conditionals, and mutable state, where variables can be modified throughout the program's execution.
//    - It can sometimes lead to more complex and error-prone code, as you need to manage the details of the execution flow.

// Here's an example of imperative code in JavaScript that calculates the sum of all elements in an array:

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


// 2. Declarative Programming:
//    - Declarative programming is a style of coding where you focus on "what" you want to achieve rather than specifying the exact sequence of actions.
//    - It abstracts away the low-level details of execution and emphasizes a higher-level, more expressive approach to problem-solving.
//    - Declarative code is often more concise and easier to understand because it hides the complexity of the underlying implementation.
//    - It encourages the use of functions and functional constructs to manipulate data and achieve the desired result.

// Here's the same sum calculation example using a declarative approach with the `reduce` method:


function sumArray(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}


// In the declarative code, you declare your intent by using the `reduce` function, which abstracts away the iteration and accumulation details. This makes the code shorter and easier to read.

// In summary, imperative programming is focused on describing the specific steps to achieve a task, while declarative programming is focused on expressing the desired outcome, relying on abstractions and higher-level constructs to achieve that outcome. Both paradigms have their use cases, and the choice between them often depends on the problem you are trying to solve and your personal coding style.