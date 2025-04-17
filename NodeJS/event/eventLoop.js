// Event Loop
// The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations
// by using a single thread. It does this by offloading operations to the system kernel whenever possible.
// The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
// The event loop has a queue of tasks to execute, which are called "macrotasks" or "microtasks".
// Macrotasks are tasks that are executed in the main thread, while microtasks are tasks that are executed in a separate thread.
// The event loop has a queue of tasks to execute, which are called "macrotasks" or "microtasks".

// process.nextTick(() => {
//     console.log('nextTick');
//   }
//   );
//   setImmediate(() => {
//     console.log('setImmediate');
//   }
//   );
//   setTimeout(() => {
//     console.log('setTimeout');
//   }
//   , 0);
//   Promise.resolve().then(() => {
//     console.log('Promise');
//   }
//   );
  // The output of this code will be:
  // nextTick
  // Promise
  // setTimeout
  // setImmediate
  
  const fs = require('fs');
  const crypto = require('crypto');
  
  console.log('1. Script start');

  setTimeout(() => {
    console.log('2. setTimeout 0s callback (macrotask)');
  }, 0);

  setImmediate(() => {
    console.log('3. setImmediate 0s callback (check)');
  }
  );
  Promise.resolve().then(() => {
      console.log('4. Promise callback (microtask)');
    }
);
process.nextTick(() => {
  console.log('5. process.nextTick callback (microtask)');
}
);

fs.readFile(__filename, () => {
  console.log('6. fs.readFile callback (macrotask)');
}
);
crypto.pbkdf2('secrect', 'salt', 100000, 64, 'sha512', (err, key) => {
    if (err) throw err;
    // Simulate a long-running synchronous operation
  console.log('7. crypto.pbkdf2 callback (macrotask)');
}
);
console.log('8. Script end');
// Simulate a long-running synchronous operation
