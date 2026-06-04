# Server and OS Internals: The Complete Study Guide

This guide breaks down the fundamental concepts of how computer systems and servers operate under the hood, covering processes, memory architecture, CPU mechanics, and execution models.

---

## 1. Anatomy of a Process

When you run a backend application (e.g., `node server.js` or `go run main.go`), the program's code is loaded into RAM. A **program under execution is called a process**.

Every process is assigned a unique **Process Identifier (PID)** by the Operating System.

### Memory Layout of a Process
When a process runs in RAM, memory is divided into distinct segments:
- **Text Segment:** The compiled binary code of the program.
- **Data/BSS Segment:** Global and static variables.
- **Heap Memory:** Memory allocated dynamically during runtime (e.g., creating objects, instantiating arrays). The heap grows upwards.
- **Stack Memory:** Memory used for function calls and local variables. The stack grows downwards.
- **Program Counter (PC):** A specialized CPU register that stores the memory address of the *next instruction* to be executed.

---

## 2. CPU Execution & Multitasking

A **Core** is a physical processing unit on the CPU.
- **1 Core** = 1 physical CPU unit.
- **8 Cores** = 8 physical CPU units.

### The Single-Core Limitation
At any given microsecond, **a single core can only execute the instructions of exactly ONE process.**

> [!NOTE]
> **If 1 core can only run 1 process at a time, how does multitasking happen?**
> The answer is **Context Switching**.

### Context Switching
Context Switching is the mechanism by which the OS rapidly pauses one process and starts/resumes another. The OS saves the state (Program Counter, registers, memory maps) of the current process and loads the state of the next one. This happens thousands of times per second, creating the illusion that multiple processes are running simultaneously.

**Why did context switching come into the picture?**
Without it, a single long-running loop or a heavy calculation would completely freeze the entire system until it finished. Context switching ensures fairness and system responsiveness.

---

## 3. Concurrency vs. Parallelism

These terms are often used interchangeably, but they refer to completely different execution paradigms in system design.

- **Concurrency:** Managing multiple tasks at once. It is about *structure*. A single CPU core uses context switching to handle multiple processes concurrently, making progress on all of them even if they aren't executing at the exact same physical millisecond.
- **Parallelism:** Executing multiple tasks at the exact same time. It is about *execution*. If you have an 8-core CPU, you can run 8 different processes in parallel simultaneously.

---

## 4. Modern CPU Architecture: P-Cores vs. E-Cores

Modern processors (like Apple Silicon M-series or Intel's big.LITTLE architecture) split cores into two categories to optimize both battery life and performance:
- **Performance Cores (P-Cores):** Designed for raw speed and complex, heavy tasks. Conceptually, they offer the throughput of roughly 2 standard cores.
- **Efficiency Cores (E-Cores):** Designed to handle background tasks and multi-threading with minimal power consumption. Conceptually equivalent to 1 standard core.

---

## 5. Processes vs. Threads

- **1 CPU Core** can handle many processes (via context switching).
- **1 Process** can contain many threads.

### What is a Thread?
A thread is the smallest sequence of programmed instructions that can be managed independently by a scheduler. They are often called **lightweight processes**.
- Threads *within the same process* share the same memory space (Heap and Data segments).
- Each thread has its own independent **Stack** and **Program Counter**.
- Creating and context-switching between threads is significantly faster and uses fewer resources than doing so with entire processes.

---

## 6. CPU vs. GPU

- **CPU (Central Processing Unit):** Optimized for low latency and executing a sequence of complex instructions very quickly. They work sequentially—one task at a time per core.
- **GPU (Graphics Processing Unit):** Optimized for high throughput and parallel processing. A GPU consists of thousands of smaller, simpler cores that execute identical operations simultaneously. Perfect for machine learning, rendering, and vector math.

---

## 7. Process Workloads: CPU-Bound vs. I/O-Bound

When building backend servers, understanding your workload is critical for scaling.

### CPU-Heavy (CPU-Bound)
A process that spends most of its time using the processor to perform calculations. The speed of execution is bottlenecked by the CPU's power.
- *Examples:* Cryptography/Hashing, video encoding, complex mathematical simulations, image processing.

### I/O-Heavy (I/O-Bound)
A process that spends most of its time waiting for Input/Output operations to complete. During this waiting time, the CPU is technically idle and can be context-switched to do other work.
- *Examples:* Reading from a database, fetching data from an external API, reading files from the disk. Most standard web servers (like a Node.js Express app) are heavily I/O-bound.

---

## 8. File Descriptors

In Unix-like operating systems (Linux, macOS), there is a fundamental philosophy: **"Everything is a file."**

A **File Descriptor (FD)** is a unique, non-negative integer assigned by the OS to identify an open file, socket, or network connection within a specific process.
- When your server accepts an incoming HTTP request, the OS opens a network socket.
- It returns a File Descriptor to your application.
- Your application uses this FD to read the incoming request data and write the outgoing response back to the client.



raw note:
how server internally work?
how computer system work?
program under execution is a process
process runs in our ram
PID = process identifier
stack, heap memory
program counter -> point to the next instruction to next execute
component of a process in os
1 core -> 1 cpu unit
8 cores -> 8 cpu units

single core processor ->
 at one point of time we can only and only execute instructions of one process

so how all multitasking are happning?
here came: context switching
in contect switching

1 core = how many process?
1 process = how many threads?
what is parallel vs concurrent explain?

1 cpu core = 1 process
1 cpu core can handlew more process using context switching

what cpu vs gpu?
gpu for parraller process?

in mordern day CPU core two types: performance core and efficient core
1 performance core = 2 normal cores
1 efficient core = 1 normal core

what is threads
threads are nothing but light weight process
understan file description in a os

why context switching came into the picture?

CPU vs I/O

CPU heavey process vs I/O heavey process


cpu work one at a time
gpu work parallel


node.js provide runtime environment like ironmen, normal human is js but when wear jacket got super power. same here also

in browser js have:
 - interacting with html, css(dom)
 - timers
 - networking - client side (send request, received response)
 - and more

node.js provide interacting with
 - access os related like: file system
 - access processes
 - networking  - clent + server (send and recived response, create, process request, create server)

 environment variable:
 key value pairs which stores data directly on os level, any process running on the machine can access it
 process/environment is os level not any programming or node.js relate

 set env:
 set it in your bashrc or zshrc file

this is only accessable in the current terminal session window not any other new terminal seasson window yo wont get it
 like: vim ~./zshrc
 export variableName=value


