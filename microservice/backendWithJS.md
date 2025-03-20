# Understanding JavaScript Execution

## Synchronous Execution

JavaScript is a combination of an interpreted and compiled language. It follows a specific execution model:

### Definitions:
- **Synchronous**: Code executes line by line, in the order it appears.
- **Blocking**: Each operation must complete before moving to the next.
- **Single-threaded**: JavaScript executes one task at a time in a single thread.

## Asynchronous Execution

Asynchronous execution allows non-blocking operations using mechanisms like:
- Callbacks
- Promises
- Async/Await

## JavaScript Code Execution Process
When JavaScript code executes, it goes through multiple stages:

Example: `var a = 10;`

### 1. Code Parsing
The JavaScript engine processes the code through multiple steps:
- **Lexical Analysis**: The code is divided into tokens.
- **Syntax Analysis**: Converts tokens into an Abstract Syntax Tree (AST). This step checks for syntax errors. Tools like [AST Explorer](https://astexplorer.net/) help visualize this. **Code editors like VS Code use this process to highlight syntax errors in real time.**
- **Interpreter Execution**: Translates code into an intermediate format.
- **Bytecode Compilation**: The Just-In-Time (JIT) compiler optimizes and converts bytecode into machine code.
- **Garbage Collection**: After execution, unused memory is cleaned up.

## Global Execution Context (GEC)
The **Global Execution Context (GEC)** is created **twice**:
1. When the code starts execution.
2. When a function is encountered inside the code, creating a new execution context within the call stack.

### GEC and Memory Management
- **GEC is created inside the Call Stack**.
- **All code is stored in the Callback Queue**, also referred to as the **Heap Memory**.

## JavaScript as a Compiled and Interpreted Language
JavaScript is a **Just-In-Time (JIT) compiler** language, meaning it combines both compilation and interpretation:

### Interpreter
- Executes code **line by line**.

### Compiler
- Converts the **entire** code into machine code before execution for optimization.

## V8 Engine

V8 is an open-source JavaScript engine developed by Google, used in Chrome and Node.js. It compiles JavaScript to machine code before execution for improved performance.

### JavaScript Runtime Environment (in Chrome)
```
+------------------------------+
|      JavaScript Engine       |
|------------------------------|
|    Superpowers (Web APIs)    |
|    - fetch()                 |
|    - setTimeout()            |
|    - addEventListener()      |
+------------------------------+
```
- The **JS Engine** is responsible for handling JavaScript operations.
- **Web APIs** provide additional functionalities such as network requests and timers.

## V8 Engine Structure
```
+-----------------------------+
|         Call Stack          |
+-----------------------------+
|       Callback Queue        |
+-----------------------------+
|      Garbage Collector      |
+-----------------------------+
|         Heap Memory         |
+-----------------------------+
```
- **Call Stack**: Handles function execution in a Last In, First Out (LIFO) manner.
- **Callback Queue**: Stores asynchronous callbacks to be executed when the call stack is empty.
- **Garbage Collector**: Frees up memory by removing unused objects.
- **Heap Memory**: Stores objects and functions dynamically allocated during execution.

### Event Loop Workflow
```
+-----------------------------+
|         Call Stack          |
+-----------------------------+
|  ⬆ Event Loop ⬆            |
+-----------------------------+
|       Callback Queue        |
+-----------------------------+
```
1. The **Call Stack** executes functions.
2. If an async operation is encountered, it is sent to **Web APIs**.
3. Once complete, the callback is pushed to the **Callback Queue**.
4. The **Event Loop** moves the callback to the **Call Stack** if it's empty.

This structured execution model ensures efficient handling of both synchronous and asynchronous tasks in JavaScript.


Libuv: we handle async task

Sync js
Async js
node.js architucture (v8+libuv)
in depth of v8 engine
in depth of libuv library
event loop
thread pool
working of web server

ex: var a = 10
Code -> Parsing
        - Lexical analysis (division code/tokenazation) 
        - sysntext analysis (vs code show error if write worng syntext, convert into AST (https://astexplorer.net/))
        - interpreter
        - byte code
        - garbage (after code execution)


compiler vs interpiter

interpiter
   - line by line code execute
compiler
   - complete code execute

js is compiler (jit compiler) and interpiter language