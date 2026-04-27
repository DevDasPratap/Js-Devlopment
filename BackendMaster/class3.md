Internal Architecture of Node.js — Full Beginner Friendly Guide

Node.js looks simple from the outside, but internally it has a powerful and complex architecture built using JavaScript + C/C++ + libuv + V8.

- Node.js layers
- What modules are
- libuv (event loop, thread pool, handles, requests)
- Is Node.js single-threaded?
- Who controls the event loop?
- How TCP/WebSockets work internally
- Operating System concepts (process, CPU core, context switching)
- Resumable uploads (like S3)

🔗 Reference: [Node.js internals — not everything happens in the thread pool](https://medium.com/softup-technologies/node-js-internals-not-everything-happens-on-the-thread-pool-a14d0a286efb)

## 1️⃣ High Level Architecture of Node.js

```
┌──────────────────────────────────────┐
│        Your JavaScript Code          │  <-- JS Layer
└──────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────┐
│     Node.js JS Engine (Modules)      │
│  - CommonJS / ES Modules             │
│  - Node APIs (fs, net, http, etc.)   │
└──────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────┐
│         C++ Layer of Node.js         │
│  - libuv, V8 Engine, c-ares (DNS)    │
└──────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────┐
│      Operating System (Linux/Win)    │
│ - epoll / kqueue / IOCP              │
└──────────────────────────────────────┘
```

## 2️⃣ Two Main Layers Inside Node.js

**JavaScript Layer** — where your code runs (fs, net, http modules, etc)

**C/C++ Layer** — V8 (JavaScript engine), libuv (async I/O), c-ares (DNS)

## 3️⃣ What is a Module?

A module is a reusable piece of code that performs one specific task. Modules enable reusability, clean code, and better structure.

## 4️⃣ libuv – The Heart of Node.js

libuv is a C library providing:

- Cross-platform support (Linux, Windows, macOS)
- Event loop and async programming
- Thread pool for I/O operations
- Powers fs, net, UDP, timers, child processes, DNS

## 5️⃣ Is Node.js Single-Threaded?

✔ Correct: JS execution runs on one main thread, but libuv uses multiple threads internally (default 4 threads in thread pool).

## 6️⃣ libuv Main Components

1. **Event Loop** — controls async flow
2. **Handles** — long-lived resources (TCP servers, timers) that keep Node.js alive
3. **Requests** — short-lived resources (file reads, DNS queries) that cannot keep process alive

## 7️⃣ Who Controls the Event Loop?

✔ libuv controls the event loop. Node.js just uses it. V8 only runs JavaScript.

## 8️⃣ TCP & WebSockets Under the Hood

- TCP operations use libuv with epoll (Linux), kqueue (macOS), or IOCP (Windows)
- WebSockets start as HTTP, upgrade to persistent TCP connection
- libuv handles read/write operations

## 9️⃣ OS Concepts

**Process** — A running program with memory, CPU time, and resources

**CPU Core** — Physical processing unit (more cores = more parallel execution)

**Context Switching** — CPU switching between tasks by saving/loading state

**Instruction** — Smallest CPU command (add, move, compare, jump)

<!-- ## 🔟 Resumable Upload Example (S3)

Split 10GB into 5MB chunks, upload incrementally. If interrupted, resume by uploading only missing parts.

Progress = (bytes uploaded / total bytes) × 100

Use aws-sdk or @aws-sdk/lib-storage for multipart uploads. -->














<!-- Internal architucture for nodejs

on the nodejs 2 layer(parts):
  - js counter layaer
  - cpp counter layaer(v8, livuv, c-ares)

when you write js code you intract with js layer of nodejs, now js in nodejs having concept called is module
what is module?
it is a resuable peace of code doing one particular task

Livuv:
- is nodejs single threaded?
- is event loop part of nodejs or it get from someone?

nodejs run on a single thread -it is worng

nodejs is extreamely powerful

nodejs performace slightly slower then java and security issue on npm packages (3rd party)

livuv:
  - it written on C
  - it provides cross platfrom support
  - it is the driving force to make nodejs support async programming
  - support of event loop
  - event loop present inside livuv
  - event loop core logic link: https://github.com/libuv/libuv/blob/v1.x/src/unix/core.c
  - tcp connection/socket power by livuv (npm net package)
  - udp power by livuv 
  - file I/O power by livuv (npm fs package)
  - thread pool
  - Full-featured event loop backed by epoll, kqueue, IOCP, event ports.
  - Asynchronous TCP and UDP socket
  - Asynchronous DNS resolution
  - Asynchronous file and file system operations
  - File system events
  - ANSI escape code controlled TTY
  - IPC with socket sharing, using Unix domain sockets or named pipes (Windows)
  - Child processes
  - Thread pool
  - Signal handling
  - High resolution clock
  - Threading and synchronization primitives

livuv main 3 pert:
 - event loop
 - handles
 - requests

Handles:
  - this are long lived resources
  - example: tcp socket(if you want to prepare a server listing for tcp connection - it is long lived resource keep server up), also example like settimeout. so what ever resources are clasified as handles, they are capable of keeping nodejs code alive.

Requests:
  - they are short lived resources
  - they are not capable of keeping nodejs code alive, because they themself stay for very small amount of time in the memoery
  - example: file I/O, when we do file i/o we start reading a file still the time file has been read, your file object free in the memory

Livuv enable to access to the OS for the nodejs
in linux have epoll 
epoll: event handeler here actually handle event driven architecture behind the sence, this are present/implement in OS level
     use for very high performance, asynchronous I/O machanisom for you OS.



https://medium.com/softup-technologies/node-js-internals-not-everything-happens-on-the-thread-pool-a14d0a286efb

if run time support we can a live forever or years
how event loop works?
who control event loop?
who does tcp connection for nodejs?
how websocket works under the hood?
what is context switching and how it works?
what is instion of an computer?
what is iteration?
what is exprementional analysis
what is asymphotic analysis
what is cpu core
what is process

livuv platform dependence but nodejs not dependence it indendence, because when you write js code you donot care about os(win/linux) internally it handle it
livuv handle auto base os

if i have very large data like 10gb i am upload to s3 now after few percent like 5% complete and internet gone how to resume you upload insted of sending from stat. how we know how percent data upload and how many are left ?  -->