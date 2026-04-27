1. What is Redis?

Redis is an in-memory key-value data store.
Unlike traditional databases that store data on disk, Redis keeps everything primarily in RAM — that’s why it’s extremely fast (microseconds latency).

⸻

2. How Redis Stores Data Internally

Redis uses:

🔹 Hash Table (Dictionary)

At the core, Redis uses a hash table to store keys.

Because of hashing:
• Lookup → O(1)
• Insert → O(1)
• Delete → O(1)

That’s the main reason for high speed.

3. Data Structures Used by Redis

Redis doesn’t just store strings. Internally, it uses optimized structures like SDS , hash table , Skip list, zip list.

4. Why Redis is So Fast

Redis is fast because:
• ✅ In-memory storage (no disk seek time)
• ✅ Single-threaded event loop (no lock contention)
• ✅ Uses efficient data structures
• ✅ Uses I/O multiplexing (epoll/kqueue)

Single-threaded doesn’t mean slow — it means no context switching overhead.

5. How Redis Handles Persistence

Even though Redis is in-memory, it supports durability:
• RDB → Snapshot-based persistence
• AOF (Append Only File) → Logs every write operation

This ensures recovery after crash.

6. How Redis Handles Expiry

Redis stores TTL metadata alongside keys.
It removes expired keys using:
• Lazy deletion (when accessed)
• Active expiration cycle (background cleanup)