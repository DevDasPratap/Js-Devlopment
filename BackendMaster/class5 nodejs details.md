I/O 2 types:
 - blocking
 - non blocking
    - async 

Details in nodejs:

# Node.js Internal Architecture — Complete Documentation

## 1. Why Node.js Is “Very Cool”
Node.js stands out because it uses a **non-blocking I/O architecture** that allows high concurrency even though it runs on a **single thread**.  
I/O tasks (file-system access, network requests, user input, etc.) are some of the **most expensive operations** in a computer system. A blocking system would pause execution until I/O completes. Node.js avoids this limitation using its event-driven architecture.

---

## 2. Understanding I/O (Input/Output)

### 2.1 I/O Is Expensive
I/O operations depend heavily on external entities:
- User input (may take seconds or minutes)
- Printers (slow hardware)
- File systems
- Network responses

Because external dependencies are slow, I/O is considered **expensive**.

---

### 2.2 Blocking I/O
Blocking I/O means:
- A thread starts an I/O operation.
- The thread **waits** until the operation completes.
- No further work can be executed on that thread.

To handle multiple tasks → the system must create **multiple threads**.

---

### 2.3 Non-Blocking I/O
Non-blocking I/O:
- Does **not** block the thread.
- Delegates operations to the system.
- When done, a callback/task is queued.
- Enables concurrency on a **single thread**.

This is the foundation of **JavaScript async programming**.

---

## 3. Event Loop & Queues
Non-blocking I/O in Node.js works using:
- **Event Loop**
- **Macro task queue**
- **Micro task queue**

### How It Works:
1. JavaScript calls a runtime API (fs, http, timers, etc.)
2. Node.js runtime delegates operations to lower-level systems.
3. Once finished, they return callbacks/tasks to queues.
4. The **event loop** processes queued tasks one by one.

Node.js uses the same concept as browsers but with different internal components.

---

## 4. What Node.js Is Made Of
Node.js =  
**V8 Engine + C/C++ Libraries + libuv + Bindings + Event Loop**

---

## 4.1 V8 Engine
- Developed by **Google**
- Written in **C++**
- Compiles JavaScript into **machine code**
- Executes JavaScript inside Node.js

Responsible for:
- Parsing JavaScript
- Compilation & optimization
- Garbage collection

---

## 4.2 Node.js Runtime APIs
Node.js exposes APIs that do NOT exist in the browser:
- `fs`
- `http/https`
- `crypto`
- `net`
- `timers`
- Many more

These APIs are powered by **bindings** and **libuv**, not by V8 alone.

---

## 4.3 libuv — The Heart of Node.js
libuv is a:
- High-performance C library  
- Created by Node.js core team  
- Provides **cross-platform async I/O**

### Why libuv is needed
Different OSes handle I/O differently:
- Linux file reads → blocking
- Windows file reads → can be async

Node.js must remain **consistent** across platforms.

### libuv provides:
- Event loop implementation
- Thread pool (when OS does not support non-blocking I/O)
- File system operations
- Network operations
- Timers
- Async handles & watchers

**Example: reading a file in Linux**
- Linux blocks by default
- libuv uses its internal **thread pool** to simulate non-blocking I/O
- Node.js developer experiences a smooth async API

---

## 4.4 Bindings
Bindings are C/C++ connectors that:
- Link JavaScript APIs ↔ C++ core ↔ libuv
- Allow Node.js to expose functionality such as:
  - `fs.readFile`
  - `http.createServer`
  - `crypto` operations

Without bindings → JS cannot interact with OS-level features.

---

## 5. Node.js Internal Flow (Simplified)
1. JS code runs inside **V8**
2. Code calls Node.js API
3. Bindings forward the request to libuv
4. libuv performs the operation  
   - Uses OS async features when available  
   - Otherwise uses thread pool  
5. On completion, libuv signals event loop
6. Event loop places callback into appropriate queue
7. V8 executes callback when event loop picks it

This allows Node.js to be:
- Fast  
- Scalable  
- Non-blocking  
- Single-threaded at JS level but multi-threaded internally  

---

## 6. Node.js Architecture Summary

| Component | Description |
|----------|-------------|
| **V8 Engine** | Executes JavaScript, compiles to machine code |
| **Node.js Runtime APIs** | Provides filesystem, networking, crypto, etc. |
| **libuv** | Cross-platform async I/O, event loop, thread pool |
| **Bindings** | Bridge between JS APIs and C++/libuv implementations |
| **Event Loop** | Processes async tasks and callbacks |

---

## 7. Advantages of Node.js Architecture
- High concurrency
- Efficient memory usage
- True non-blocking I/O
- Can handle thousands of requests per second
- Ideal for:
  - Real-time apps
  - APIs
  - Microservices
  - Developer tools

---

## 8. Other JavaScript Runtimes
Some alternatives include:
- **Deno** (V8-based, Rust backend)
- **Bun** (JavaScriptCore engine)

Node.js remains the most widely adopted runtime globally.

---

## 9. Final Notes
By understanding:
- Event Loop  
- Queues  
- V8  
- libuv  
- Bindings  

You now fully understand how Node.js executes asynchronous operations and interacts with the OS while remaining non-blocking.

---


Globals in nodejs:
 - process
 - __dirname
 - require
 - global
 - module