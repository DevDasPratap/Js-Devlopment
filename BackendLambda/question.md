Mollions of records in database search we add indexing but internally database which data statucture and algorithm used to speed boost find query?

If your all redis caache keys expire same time so you your database will crash, is cache stampede how to prevent and how to fix those? hints: (ttl with jitter, sharding)

you are working on a flight booking app and one flight only single seat avaliable and 2 person same time tying to book the seat without performace and dobule booked prevent which macanism you will used ? (hint: pressimistic locking, optimistic locking)

You are build instagram like feed currently not structure define which database will choose? sql, nosql and reason

flipkart big billion day sale ongoing, suddenly 10x traffic increase how save your sever from crash? which system will used? hint: redis cacse, database sharding, load balancer

you are build a real time stock trading app if network fail/break which system define hint: consistency/availability

Website slow performance issue
Slow websites are rarely caused by a single issue.
Start by identifying where time is actually spent, instead of guessing.
It could be slow APIs, unoptimized business logic, inefficient database queries, or even a fast backend slowed down by too many frontend API calls or heavy images.
Fix the real bottleneck: optimize queries, improve logic, merge or parallelize APIs, and load assets smartly.
Performance is a chain—break the slowest link first.

WAL (Write Ahead Log):
A mechanism where every change is written to a log first,
and only then applied to the actual data.
This makes crash recovery possible.

Cascading replication in database
Replication using WAL (PostgreSQL):
The primary database generates WAL and streams it to replicas.
Replicas replay the WAL to reach the same data state.
Replication flow: generate WAL → stream WAL → replay WAL.

Databse Dual write problem
Transactional Outbox:
Business data and the event are stored in the same database transaction, so the event is never missed and direct dual writes are avoided.
A background worker reads the outbox table and publishes the event to Kafka.
Event-Driven Architecture:
After the event is published, consumers asynchronously update Redis, Search, Analytics, and other systems.
Because of this, data is not immediately consistent, but eventually consistent, which is acceptable at scale.

N+1 query problem
Fetch Join
Parent and child data are loaded in a single query
Avoids extra database calls completely

✔ Entity Graph
You explicitly define which relations should be loaded
Lazy loading becomes controlled and predictable

✔ DTO Projection
Only required fields are fetched, not full entities
Read APIs become faster and lightweight


Uber nerest driver algorithm
Uber brute force search nahi karta.

Pehle driver matching O(N) thi, jahan N = millions of drivers.
H3 aur spatial partitioning ke baad search ban jaati hai O(K² + M).
K = nearby hexagon radius
M = sirf nearby drivers

Isliye millions ki jagah sirf 50–100 drivers check hote hain.
That’s why Uber seconds me driver assign karta hai.



How git diff really works 👇

Git diff internally uses the Myers diff algorithm (by default) and the Histogram diff for better readability. These algorithms are designed to find the minimum set of changes so that diffs stay clean and easy for humans to understand.

At the core, they rely on the Longest Common Subsequence (LCS) concept — Git first identifies lines that are common and in the same order, and then treats everything outside the LCS as additions and deletions.


Performance testing validates how a system behaves under real-world traffic before launch.

• Load Testing: performance under expected traffic
• Stress Testing: system breaking point
• Spike Testing: sudden traffic surge handling
• Endurance Testing: stability over long durations
• Volume Testing: handling large data volumes
• Response Time Testing: speed of responses



git diff → Working Directory ↔ Staging Area

git diff —staged → Staged Changes ↔ Last Commit

git diff HEAD → Working Directory ↔ Last Commit (staged + unstaged)

📌 Important rule
Sirf staged changes hi commit hoti hain.
Agar git add ke baad file change ki, toh wo commit me reflect nahi hoti jab tak dobara stage na karo.

🧠 Line-by-line diff kaise milta hai?
Git diff ko store nahi karta — wo runtime pe calculate hota hai.
LCS (Longest Common Subsequence) algorithm common lines identify karta hai,
aur jo match nahi karti, wahi additions aur deletions ke form me dikhata hai.



Git Merge vs Git Rebase 👇

🔀 Merge
✅ History preserve hoti hai (real timeline)
✅ Shared / public branches ke liye safe
❌ Extra merge commits se history thodi noisy ho sakti hai

🔁 Rebase
✅ Clean, linear history milti hai
✅ Commit flow zyada readable ho jaata hai
❌ History rewrite hoti hai (shared branches pe risky)

👉 Team work & safety? Merge
👉 Clean history & local work? Rebase



Git Staging Area
The staging area is Git’s checkpoint where you decide exactly what goes into the next commit.

With partial staging (git add -p), you can stage only specific lines instead of the entire file.

❓If I modify a file after staging it, are the new changes staged automatically?
👉 No. Git stores a snapshot at the time of git add. Any new changes remain unstaged until you add them again.
Clean commits come from intentional staging.



Payment chahe kitni bhi baar retry ho
process sirf ek hi baar hota hai 💳

Idempotent APIs + Idempotency Keys ensure
retries allowed, duplicate payments not allowed.



TOTP works without internet because both your phone and the server generate the same code using a shared secret and the current time ⏱️
Every 30 seconds, a new password is created — no SMS, no network, just math 🔐



Optimistic Locking
Assumes conflicts are rare. Data update tabhi hota hai jab version match kare — warna update fail & retry. Best for read-heavy systems.
🔒 Pessimistic Locking
Assumes conflicts are common. Pehle hi row lock hoti hai (FOR UPDATE), baaki requests wait karti hain. Best for bookings, inventory, payments.
⚖️ Rule: Low conflict → Optimistic | High conflict / critical data → Pessimistic



In distributed systems, one failure shouldn’t take everything down.
Circuit Breaker temporarily “opens” when a service starts failing, immediately rejecting calls so the system can recover instead of getting overwhelmed.
Timeouts enforce an upper limit on how long a request can wait, freeing threads and resources instead of letting them hang indefinitely.
Bulkheads split resources into isolated pools so failure or overload in one component doesn’t cascade into others, while Rate Limiting controls traffic to prevent spikes from crashing the system.



And not just this, you have to handle service discovery, load balancing, configs, secrets, certificates, monitoring, and infra automation. In microservices, code might be simple but operations become complex very fast.

Normal flow breaks during deployment.�Independent deploy doesn’t mean independent change. You must manage backward compatibility, schema migrations, and coordinated rollouts, or one service can break many others.

Don’t use microservices just because big tech is using them. Use them when you see real value when scale, team autonomy, and independent deployments actually matter.�If the complexity isn’t worth it yet. A simpler architecture is the smarter choice.


Ledger Balance: Your account’s official total as of the last banking update (end-of-day). It includes posted transactions, even if some amounts are still on hold.
Available Balance: What you can actually spend right now — ledger balance minus pending holds/blocks (ATM attempts, card swipes, pre-authorizations).

Ledger is used for: final accounting, audits, settlements, and regulatory reporting — it is the bank’s source of truth.

Example (IPO via UPI mandate):
You have ₹50,000 in your account. You apply for an IPO of ₹15,000.
→ Available balance = ₹35,000 (₹15,000 is blocked)
→ Ledger balance = ₹50,000 (money not debited yet)
If shares are allotted → ₹15,000 is finally debited.
If not allotted → the block is released and available goes back to ₹50,000.

Why they differ: Banks first place a hold; until it’s confirmed or released, available balance drops while ledger may still look higher.



NFS (National Financial Switch) by NPCI (National Payments Corporation of India) is India’s ATM switching network.
It connects ATMs across banks, routes transactions to the correct bank, and handles inter-bank withdrawals, failures, and reconciliation.

Ledger Balance: Your account’s official total as of the last banking update (end-of-day). It includes posted transactions, even if some amounts are still on hold.
Available Balance: What you can actually spend right now — ledger balance minus pending holds/blocks (ATM attempts, card swipes, pre-authorizations).

Ledger is used for: final accounting, audits, settlements, and regulatory reporting — it is the bank’s source of truth.

Example (IPO via UPI mandate):
You have ₹50,000 in your account. You apply for an IPO of ₹15,000.
→ Available balance = ₹35,000 (₹15,000 is blocked)
→ Ledger balance = ₹50,000 (money not debited yet)
If shares are allotted → ₹15,000 is finally debited.
If not allotted → the block is released and available goes back to ₹50,000.

Why they differ: Banks first place a hold; until it’s confirmed or released, available balance drops while ledger may still look higher.


2 Phase Commit (2PC) ensures atomicity in distributed systems —
either Order Service, Store Service, and Delivery Service all succeed, or all rollback.
✅ Pros
• Strong consistency — no partial orders
• Clear commit/rollback guarantee
• Easy to reason about correctness
❌ Cons
• Blocking if coordinator fails
• Resource locking can cause deadlocks
• Slow due to multiple network calls
• Doesn’t scale well for high-traffic systems
That’s why modern systems often prefer Saga with trade-offs.



CI/CD Pipelines automate build → test → deploy, so every code change is shipped faster, safer, and repeatedly without manual steps.

Jenkins
Self-hosted, highly customizable CI/CD tool with thousands of plugins — great when you need full control over pipelines and infrastructure.

GitHub Actions
Native to GitHub, YAML-based workflows triggered directly from repos — simple setup, tight GitHub integration, and less maintenance.

Other popular CI/CD tools: GitLab CI, CircleCI, Azure DevOps





How systems handle Race Conditions

Optimistic Locking – Update only if data hasn’t changed (using version check).
👉 Use for low-conflict updates like profiles. ✅ Fast | ❌ Retry needed.

Pessimistic Locking – Lock data before read/update so others must wait.
👉 Use for money, inventory, seats. ✅ Safe | ❌ Blocking & slower.

Atomic Operations – Read-modify-write happens in one step.
👉 Use for counters, balances. ✅ Fast & correct | ❌ Limited logic.

Idempotency – Same request repeated → processed only once.
👉 Use for payments & retries. ✅ Prevents double debit | ❌ Extra tracking.

Single-Writer Principle – Only one service is allowed to write data.
👉 Use in distributed systems. ✅ No write conflicts | ❌ Async complexity.




Fixed Delay
Request fail hone ke baad sab requests same fixed time ke baad retry hoti hain.
Simple hai, par spike create hota hai ❌

Exponential Backoff
Har retry ke saath delay badhta hai (2s → 4s → 8s).
Load thoda spread hota hai, par collisions abhi bhi possible hain ⚠️

Jitter
Retry delay me randomness add hoti hai.
Sab requests alag-alag time pe retry karti hain → system stable 🛡️





When too many requests hit the same resource at once, systems don’t fail slowly —
they collapse instantly 🐎🐎🐎

Scenario 1️⃣: API Level Overload

👉 When thousands of requests reach your API together

• Rate Limiting – Per client request cap so no one can flood the API
• Throttling – Gradually slow down traffic instead of hard failing
• Circuit Breaker – Temporarily reject requests when system is unhealthy

Scenario 2️⃣: Database Level Overload

👉 When every request hits DB after cache miss

• Redis / Cache – Serve repeated reads without touching the DB
• Request Coalescing – One request fetches data, others wait and reuse the same result

Scenario 3️⃣: Service Was Down

👉 When service recovers and retries arrive together

• Exponential Backoff – Retry after increasing delays
• Jitter – Add randomness so retries don’t sync
• Graceful Degradation – Return partial / cached response instead of failing

⚠️ Thundering Herd isn’t a bug —
it’s good systems reacting at scale.

Design for failure, or failure will design for you.






Request Coalescing: most important 3 implementations 🔁

Jab same request multiple users ek saath bhejte hain, goal hota hai
backend ko sirf ek baar hit karna.

Ye kaam in 3 most important patterns se hota hai 👇

1️⃣ Future / Promise based (Most used)
Map<Key, Future/Promise)
First request Future banati hai, baaki usi pe attach
✔ Non-blocking
✔ Clean fan-out
❌ Failure handling carefully design karni padti hai

2️⃣ SingleFlight Pattern (Industry standard)
Har key pe sirf ek execution
All concurrent requests same result wait karti hain
✔ Cache-miss storms ke liye best
❌ JVM me custom implementation chahiye

3️⃣ Redis-based Leader / Lock (Distributed systems)
SETNX → leader election
Leader DB hit karta hai, cache bharta hai
✔ Multi-instance safe
❌ Redis dependency & expiry tuning needed

🔑 Golden rule:
Same request → same key → single execution





UPI apps can’t talk to NPCI directly.
A UPI app cannot directly interact with NPCI (National Payments Corporation of India)
because NPCI only allows regulated banks to connect — apps are not authorized to debit, credit, or settle money.

UPI still works as a bank-to-bank transfer behind the scenes.
The app hides banking complexity using a VPA (Virtual Payment Address / UPI ID).

What a VPA actually looks like
A VPA is typically in the format mobileNumber@bank or username@bank,
not a random identifier. It’s just an alias mapped to your real bank account.

Why apps can’t call NPCI
NPCI connects only with banks for security, compliance, and auditability.
Banks handle KYC, authentication, debit/credit, settlements, and disputes.
UPI apps are just the frontend — they don’t move money.

How a UPI ID is generated
Your PSP bank maps mobileNumber@bank to your actual bank account
and registers this mapping with NPCI.

Maximum-separation UPI flow (who’s involved)
• Sender PSP Bank – bank backing the sender’s UPI app
• Payer Bank – bank holding sender’s account (debit happens here)
• Receiver PSP Bank – bank backing the receiver’s UPI app
• Payee Bank – bank holding receiver’s account (credit happens here)
• NPCI – central switch that routes the transaction (not a bank)

So one UPI payment can involve 4 banks + NPCI.
UPI feels simple — but it’s a carefully regulated distributed system underneath.






Sync vs Async Communication (Microservices)

SYNC (REST / gRPC)
Pros:
• Immediate response milta hai
• Simple flow, easy to debug
• Strong consistency maintain hoti hai

Cons:
• Services tightly coupled ho jaate hain
• Cascading failures ka risk
• High traffic me latency badh sakti hai

ASYNC (Events / Messaging)
Pros:
• High scalability & better resilience
• Services loosely coupled rehte hain
• Background & heavy processing ke liye best

Cons:
• Debugging thoda complex hota hai
• Event duplication & ordering handle karni padti hai
• Eventual consistency ke saath design karna padta hai






How backend logs reach Kibana 👇

This entire flow is called the ELK Stack.

Logs don’t magically appear on dashboards.
They move through a designed pipeline.

Log file
→ Backend writes raw text logs (INFO / ERROR / WARN)

Logstash
→ Reads log files
→ Parses unstructured text
→ Converts logs into structured JSON
→ Acts as the data processing pipeline

Elasticsearch
→ Stores logs as documents
→ Builds an inverted index
→ Enables fast search & analytics
→ No scanning at query time

Kibana
→ Queries Elasticsearch
→ Visualizes logs as charts, tables, timelines
→ Used for monitoring & debugging

This is why production log search is fast, even with millions of log lines.

Logs don’t scale by accident.
They scale by design.







How Elasticsearch handles word order 👇

Elasticsearch doesn’t scan raw text.
It uses an inverted index that stores word positions inside documents.

For every word, Elasticsearch knows:

which document it appears in

exact position of that word

So when you search:

teaches you (normal full-text search)
→ Order doesn’t matter
→ Elasticsearch checks documents containing both words
→ Ranking decides which result comes first

teaches you (phrase search)
→ Elasticsearch checks positions
→ you must appear right after teaches
→ you teaches ❌ won’t match

Word order is not guessed.
It’s calculated using positions stored in the inverted index
still without scanning text.

That’s real search system design.





There are mainly two file storage options when designing backend architecture.

1. Store files in object storage (for example Amazon S3) and save the file URL in the database
Pros:
Scales easily for large files and high traffic.
Cheaper storage and better performance via CDN support.
Databases stay small and optimized for queries.

Cons:
Needs access control and signed URLs for security.
Data consistency between DB and storage must be handled carefully.

2. Encrypt and store the file directly in the database
Pros:
Strong consistency since data and metadata live together.
Simpler backups and transactions.
Easier to apply database-level encryption and access rules.

Cons:
Poor performance for large files.
Database size grows quickly and becomes expensive.
Harder to scale and impacts query performance.

In practice, object storage + DB references is preferred for most scalable systems.






Redis basics

On read, the system first checks Redis.
If the value is missing, it retrieves the data from the database, writes it back into Redis, and returns the result.
This gives you a fast path with a reliable fallback.

On update, the cache must be invalidated.
If not, Redis may continue serving stale data even after the database has changed.

TTL (time-to-live) allows entries to expire automatically.
Use it when data changes frequently or when freshness is more important than perfect accuracy.





Databases recover from crashes using a write-ahead log (WAL). Every change is written to the log before the database updates.

So even if the server crashes, the WAL lets it replay and restore everything safely.
https://medium.com/@vinciabhinav7/write-ahead-logs-but-why-494c3efd722d





Atlassian ne 4 million Jira databases migrate kiye
AWS RDS se AWS Aurora par bina downtime ke 😳

Why migrate?
👉 Higher reliability Aurora deta hai 99.99 percent uptime
RDS sirf 99.95 percent deta tha
👉 Faster performance multiple reader nodes and autoscaling ke saath
👉 Lower cost because Aurora shared storage use karta hai
Aur writer plus readers dono efficiently use hote hain
Isliye instance size half ho sakta hai but performance strong rehti hai
Aur off peak hours me clusters automatically scale in ho jate hain
Jisse compute aur storage cost dono kam ho jati hain

Result
Zero downtime
Faster Jira performance
Massive cost savings for millions of tenants

Full article [Full article](https://www.atlassian.com/blog/atlassian-engineering/migrating-jira-database-platform-to-aws-aurora)



Sharding in MongoDB — why it matters
MongoDB scales by splitting your data across multiple shards instead of keeping everything on one machine.

Each shard holds a portion of the data, so reads and writes get distributed —
meaning more speed, more scale, less load
That’s how MongoDB handles massive traffic with ease.







Why NoSQL Scales Better Than SQL

SQL is a relational database — data is connected through joins and to run these joins fast, SQL needs the whole dataset on a single powerful machine…
which means vertical scaling (bigger cpu, more ram).
but vertical scale always hits a limit.
NoSQL works differently — no complex joins, flexible schema,
and data can be sharded across multiple machines.
that’s why NoSQL scales horizontally and handles massive traffic with ease

Perfect for high-scale modern apps 🌍







Indexes speed up SELECT queries — but there’s a catch.
Every time you INSERT, UPDATE, or DELETE a row,
the database must also update all related indexes.

More indexes = more work = slower writes.
So indexing is all about balance, not quantity ⚖️
Choose the right indexes, not the most.





Indexes let the database locate data instantly instead of scanning the entire table.
Faster lookups → faster queries → faster apps



Semantic search and vector database
like ecom platform product with reviews
Data Modelling in NoSQL Database
like: lookup:{from (where we will join), localfield, foreignField, as (alias)}, lookup only work in single filed


API vs Webhooks


How do you debug an api which is having high latency?
How do you debug & optimize a slow database query?
Do you know how WhatsApp shows if a user is online or offline ?


Ever wondered how apps like Namma Yatri, Uber, Rapido find a driver in seconds?
It’s not luck. It’s backend engineering.
Ride request → live location tracking → nearby driver matching → notifications → ride assigned
all happening in milliseconds.
The real challenge isn’t finding drivers —
it’s handling millions of live location updates without breaking the system.


Struggling to understand CAP Theorem?

Pagination->offset (offset->wher to start, limit-> how many records to fetch)/cursor based/bidirectional pagination

network optimisation



Latency vs Throughput — Two Core Performance Metrics Every Backend Engineer Must Know
⚡ Latency = Time taken to process a single request (response delay).
Higher latency → Slower user experience.
🚀 Throughput = Number of requests processed per second/minute.
Higher throughput → System handles more load efficiently.




In a microservices architecture, failures are inevitable.
That’s where Circuit Breaker and Retry patterns come in.

🔹 Retry Pattern
When a request fails due to a temporary issue (network glitch, timeout), the service retries the request a limited number of times.
⚠️ Must be used with:
Max retry limit
Backoff strategy (fixed / exponential)
Otherwise, it can overload the system.
🔹 Circuit Breaker Pattern
Prevents cascading failures by stopping calls to an unhealthy service.
States:
Closed → Requests flow normally
Open → Calls are blocked immediately
Half-Open → Test requests to check recovery
🔹 Why together?
Retry handles transient failures,
Circuit Breaker protects the system from continuous failures.




Docker runs your app. Kubernetes keeps it alive in production. 🚀
Docker
Packages application + dependencies into a container
Ensures consistent runtime across environments
Ideal for local development & single-host deployment

Kubernetes
Orchestrates multiple containers across multiple nodes
Provides auto-scaling, load balancing, self-healing
Designed for production & microservices architecture






Many developers confuse API Gateway with Load Balancer — but they solve very different problems.
.
API Gateway
• Acts as a single entry point for all APIs
• Handles authentication & authorization (JWT, OAuth2, API Keys)
• Supports rate limiting & throttling
• Performs request/response transformation
• Routes requests to multiple microservices
• Can aggregate multiple API responses into one
Load Balancer
• Distributes incoming traffic across multiple servers
• Improves availability & fault tolerance
• Prevents single server overload
• Supports algorithms like:
– Round Robin
– Least Connections
– IP Hash
• Performs health checks
• Can work at Layer 4 or Layer 7





Authentication evolved from passwords → sessions → tokens — scale decides the choice.
🔐 1. Basic Authentication
Client sends username and password in every request
Credentials are Base64 encoded
Sent using the Authorization header
Server does not store any session
Must be used only with HTTPS
High risk if credentials are intercepted
Use case:
Internal tools, testing, learning basics

🔐 2. Session-Based Authentication
User logs in and server creates a session
Session data is stored on the server
Browser stores session ID in cookies
Cookie is sent automatically with every request
Server validates session on each request

🔐 3. JWT Authentication
User logs in and server issues a token
Token contains header, payload, and signature
Token is signed by the server
Stored on client side
Sent using Authorization: Bearer token
Server does not store token







No rate limiting means no protection 🔥
Rate limiting restricts the number of requests a client can make within a defined time window.
Limit format:
N requests / time window
Example: 100 requests / minute / user
Applied on:
User ID
IP address
API key
Specific endpoints (login, OTP, payment)
Common algorithms:
Fixed Window – counter resets every window (simple, inaccurate)
Sliding Window Counter – weighted count of current + previous window (most used)
Token Bucket – allows short bursts
Leaky Bucket – smooth, constant rate





Encryption vs Hashing — they sound similar, but they solve very different problems.
🔐 Encryption
Converts data into an unreadable format
Reversible using a secret key
Used when data needs to be retrieved later
🍳 Hashing
Converts data into a fixed-length value
Irreversible (original data cannot be recovered)
Used only for verification, not retrieval
👉 That’s why:
Passwords → Hashing
Messages, files, API data → Encryption





HTTP and HTTPS are not separated by just one letter.
HTTPS adds encryption, server authentication, and data integrity to protect user data.
With HTTP, data travels in plain text.
With HTTPS, data moves through a secure encrypted channel.
If you’re learning web, backend, or system design,
this is a concept you can’t afford to ignore.




Database Sharding explained in 60 sec 🚀
When one database can’t handle the load, you don’t scale up — you scale out.
That’s where sharding comes in 💡
Split data ➝ distribute load ➝ handle millions of users ⚡





Session vs JWT Authentication 🔥
Backend devs, this one is IMPORTANT ⚡
Know the difference before choosing auth for your app 🔐
🧠 Session Authentication (Details)
Server stores user session data
Client sends Session ID in cookies
Stateful authentication
Easy to invalidate on logout
Best for monolithic apps
🔑 JWT Authentication (Details)
Client stores JWT token
Token sent in Authorization Header
Stateless authentication
Scales well with microservices
Token expires by time





Authentication vs authorization 




How Instagram handle 10M users at a time ??



Load Balancer = Traffic police of backend systems




Micro services without API Gateway? Chaos 





When users grow, your system must scale… vertically or horizontally.

📌 Vertical Scaling (Scale Up)
Upgrade single server — more CPU, more RAM, more power.
Easy to implement, but has a limit (one machine can’t grow forever).
If the server fails, everything goes down.
Good for small apps or when you need a quick performance boost.
📌 Horizontal Scaling (Scale Out)
Add more servers to handle traffic.
More reliable — if one goes down, others keep working.
Can handle millions of users by distributing load.
Perfect for modern microservices and big apps.



Redis: The secret behind fast apps 🚀

1. In-Memory Speed
Redis stores data in RAM, so reading/writing becomes extremely fast.
This helps your APIs respond in milliseconds.
2. Caching Power
It saves frequently used data temporarily.
This reduces database hits and boosts overall performance.
3. Key–Value Store
Redis stores data in a simple key → value structure.
This makes data retrieval ultra-quick and lightweight.






Kafka part-1 🔥
Kafka:- is a distributed event streaming platform used to handle huge amounts of data in real time.
Big companies like Netflix, Uber, LinkedIn use Kafka to process billions of events per day.

Producer → sends messages
Broker → stores messages
Topic → category of messages
Consumer → reads messages
Consumer Group → load-balanced consumers



Why we have to use Kafka ? 🔥
.
.
1. REST is synchronous; Kafka is asynchronous and doesn’t block.
2. Kafka handles huge traffic and spikes much better than REST.
3. Kafka decouples microservices, so one service failure doesn’t affect others.
4. Kafka stores and replays messages; REST can’t do that.



How JWT token 🔑 works ??


Token & JWT Token 


 n+1 query problem


 Check the connection pool. You nod. You understood nothing.





 “VMs vs Containers vs Serverless” is never a trick question.
It’s a design question.

💻 Use VMs when full OS control and legacy dependencies matter.
📦 Use containers to ship microservices fast and scale them in seconds.
🌐 Go serverless when traffic is unpredictable, and speed matters more than servers.





A CDN is not limited to images and videos. It can also be used for APIs — including authenticated APIs - if designed carefully.

Yes, APIs can be cached on a CDN, but with rules:

1. Cache only safe requests

- Cache GET APIs

- Never cache POST / PUT / DELETE

2. Cache key must include identity

- Cache key =

URL + user token / auth header

- Prevents data leakage between users

3. Token-based caching

- Short-lived access tokens

- CDN respects token expiry

4. Writes bypass the CDN

- Mutations always go to origin

- CDN used only for reads

CDNs are not about static content — they're about reducing origin load safely.





What if the loadalancer itself goes down???
=> we use multiple lb
   each lb instance:
   - has same config
   - knows backend helth
   - can independently route traffic
so question how/where to traffic came to load balancer
 dns routing
 anycast ip
 - anycast cant be a single point failure
 - no single physical machine owns the ip
 - if one location goes down routes are withdrawn
 - traffic automacally shifts to the next nearest LB


Redis has this functionality (bloom filter)







HTTP success ≠ business success.

200 OK only means:
👉 The request was received and processed correctly at the protocol level

Not that the operation succeeded logically.

Common reasons:

1. Business errors live in the response body
Example:

{
"success": false,
"error": "INSUFFICIENT_BALANCE"
}

Transport = success
Business = failure

2. Client-side simplicity
Some systems always return 200 to simplify client logic
→ error handling happens via response codes inside JSON

3. Legacy API patterns
Older systems didn’t follow strict REST semantics

4. Idempotency & retries
Returning non-200 can trigger automatic retries
→ causing duplicate operations
If a payment fails logically, returning 500 may trigger retries → double charges.
200 + error message avoids dangerous retries.

5. Bad design (yes, sometimes)
Some teams misuse 200 to hide bad API design or monitoring gaps.

🧠 Reality Rule:

HTTP codes describe network/transport state
Application logic describes business state




Sharding v/s partitioning?



how big system scale data? like blinkit, uber, flipkat, youtube, netflix, zomato, swiggy, myntra






Rate limiter Algorithms



Content delivery network



How do big systems scale? (how does netflix scale to support 500 milion users without crashing)



Load balancer v/s api gateway ?



How does big system manage 100+ microservices???



Consistent hashing explained
we are using redis as a distributed cache. intially cache hit ratio was 90%
traffic increased, we added more cache servers, but suddenly cache hit ratio dropped to 10% why can this happen



Lb algorithms types and usecase





What is IP Hashing? (sticky session)
with and without sticky sessions
session based and determinitic LB algo
 - ip hash
 - random








 Netflix prevents buffering by routing user traffic to the closest, healthiest edge servers using geo-distributed load balancing, Anycast DNS, and real-time health metrics, ensuring videos start fast and servers never overload.

1️⃣ Traffic Never Goes Directly to One Server

Netflix does not send all users to a central backend.

Instead, traffic is distributed across:
• Multiple regions
• Thousands of edge servers (CDN – Open Connect)
• Multiple load balancer layers

This avoids congestion at any single point.

2️⃣ Geo-Distributed Load Balancing

When a user presses Play:
• DNS / Anycast routing sends the request to the nearest geographical location
• This minimizes network latency

👉 A user in India is routed to Indian edge servers, not US servers.

3️⃣ Anycast + DNS Ensure the Nearest Healthy Entry Point

Netflix uses:
• Anycast IPs advertised from multiple locations
• Internet routing automatically picks the nearest healthy node

If one location is overloaded or down:
• Routes are withdrawn
• Traffic shifts automatically

No single load balancer becomes a bottleneck.

4️⃣ Load Balancers Use Real-Time Health Signals

Netflix’s load balancers don’t blindly rotate traffic.

They consider:
• Server health
• Response time
• Current load
• Network congestion

Requests are sent only to healthy, responsive servers.

If a server slows down:
• It’s removed from rotation instantly

5️⃣ CDN Edge Servers Handle the Heavy Work

Video content is served from Netflix’s CDN (Open Connect):
• Located inside ISPs
• Close to users
• Optimized for high throughput

This ensures:
• Minimal distance
• Maximum bandwidth
• Reduced buffering

6️⃣ Adaptive Bitrate Streaming

Even if network conditions change mid-stream:
• Netflix dynamically adjusts video quality
• Streaming continues smoothly without buffering

End-to-End Flow (Mental Model)
User → DNS / Anycast
→ Nearest Geo Load Balancer
→ Healthy CDN Edge Server
→ Adaptive Streaming
Each layer adds redundancy + intelligence.





how to handle and scale when user user continously increase on app?
 - use load balancer
 - client:
   - load balancer
     - web server 1
        - load balancer
          - application server
             - load balancer
                - database server
                  - use database replica
     - web server 2
        - load balancer
          - application server
            - load balancer
                - database server



How does dns evolve with increasing traffic





understand the difference between data and metadata. 
-Data : It is the actual file content like actual page of the book that is stored in disk data blocks
-Metadata : It is info about the file — name, size, location like index of the book that is stored in file system tables.

How deletion works-
Easy Explanation (Step by Step)
1. ✅OS deals with metadata first
◦When you delete a file, the OS does not touch the actual data.
◦It only updates the metadata.

2.✅File entry is removed
◦The file’s metadata entry (name, location, size) is removed from the file system table.
◦From the OS point of view, the file no longer exists.

3.✅Disk space is marked as free
◦The blocks where the data was stored are simply marked as available.
◦No data is erased at this moment.

4.✅Actual data remains temporarily
◦The data stays on the disk until new files overwrite it.
◦That’s why file recovery tools can work.

5.✅Deletion feels instant
◦Updating metadata takes milliseconds, no matter if the file is 1MB or 10GB.
◦Hence, large files get deleted instantly.






Both are used to control the traffic and protect the system but at different layers.
• Rate limiting → User level control
• Throttling → System level control

1️⃣ Rate Limiting (User / Client level)
Limit how many requests one user / API key / IP can make in a time window.

If user crosses limit → request is rejected ❌
📌 Applied at:
API Gateway / Load balancer / Auth layer

2️⃣ Throttling (System level)
Control traffic when the system itself is under pressure.
• System slows down or temporarily blocks requests
• Decision is based on CPU, memory, DB load, queue size
📌 Applied at:
Service layer / Queue / Thread pool / DB connections

3️⃣ When to Use What

👉 Rate limit → Stop bots, scrapers, brute-force attacks.
👉 Throttle → Handle traffic spikes, bursty clients, peak hours.
Most of the systems use both.






Handling 1 Million RPS isn’t about code — it’s about smart architecture.

1️⃣ Traffic Distribution (Load Balancers)
➡️ Spreads incoming requests across many servers so nothing overloads.
Example: 1M requests split across 200 servers = ~5K requests per server.
⸻
2️⃣ Scale Out, Not Up (Horizontal Scaling)
➡️ Add more machines instead of making one server bigger.
Example: Flash sale traffic? Instantly launch 50 new API instances.
⸻
3️⃣ Fast Reads with Cache
➡️ Use Redis/Memcached to avoid hitting the database every time.
Example: Cached user data = millions of DB calls saved daily.
⸻
4️⃣ Edge Delivery with CDN
➡️ Static content loads from servers closest to the user.
Example: Users in Delhi fetch images from a Delhi CDN node.
⸻
5️⃣ Background Work with Queues
➡️ Heavy tasks run asynchronously so APIs respond instantly.
Example: Payment succeeds now, email receipt sent in background.
⸻
6️⃣ Split the Database (Sharding)
➡️ Divide data across multiple databases to handle scale.
Example: Usernames A–M on one shard, N–Z on another.
⸻
7️⃣ Rate Limiting
➡️ Prevent abuse and traffic spikes from taking the system down.
Example: Limit clients to 100 requests/sec to block bots from killing the API.
⸻
8️⃣ Lightweights Payloads
➡️ Smaller payloads = faster responses + less bandwidth.
Example: Send only required fields instead of massive JSON blobs.








When many applications run simultaneously, the system becomes slow. how does OS deside which process gets CPU tim, explain?

✅CPU can work on only one thing at a time (per core)
Even if many apps are open, each CPU core can run only one process at a time. Others must wait.

✅OS uses a scheduler to share the CPU
The OS has a special component called the scheduler that decides who gets the CPU next.

✅Each process gets a small time slot (time slice)
The scheduler gives every runnable process a tiny slice of CPU time (milliseconds).
After the slice ends → OS switches to the next process.

✅Fast switching creates the illusion of multitasking
Because the CPU switches very fast, it feels like everything is running together.

✅Priority matters
Some processes have higher priority (e.g., system tasks, active window).
High‑priority apps get more CPU time; low‑priority apps get less.

✅Blocked processes don’t use CPU
If an app is waiting for disk, network, or user input, it is put on hold—no CPU wasted.

✅OS tries to be fair
Modern OS schedulers ensure no app is starved completely—they rotate everyone fairly.

✅If CPU is overloaded → sluggish system
Too many ready‑to‑run processes → heavy context switching → performance drops.








A database allows only 5 concurrent connections at a time. extra request must wait until a connection is freed. which sysnchronizaton mechanism is used, explain?

OS Concept Used: Semaphore (Counting Semaphore).

🧩 Why Not a Mutex?
• A mutex allows only one process at a time → not suitable here.
• A counting semaphore handles multiple simultaneous users (3 machines).

🍀Explanation in simple words:🤝
•In an operating system, many programs (processes) may want to use the same resource at the same time.
•In this example, the resource is the database connections.
•Only 5 connections are available, so only 5 processes can use them at once.
•A semaphore acts like a counter that keeps track of how many connections are free.
•When a process gets a connection:
◦ The counter decreases by 1
•When the counter becomes 0:
◦ New processes have to wait
•When a process finishes and releases the connection:
◦ The counter increases by 1
◦ One waiting process is allowed to continue.









Increasing the number of processes reduced system performance insted of improving it. what caan be the reason?
More Processes → RAM Full → Disk Swapping → Thrashing → System Slows Down

Prevent Thrashing → Reduce processes + Add RAM + Optimize apps

Explanation🤝:
1. Every process needs RAM
• When you open more apps or processes, each one takes some memory.
• Your system has limited RAM.

2. RAM gets full quickly
• With too many processes, RAM reaches 100%.
• Once RAM is full, your system cannot store new data quickly.

3. The system starts using Disk
• When RAM is full, the OS uses the hard disk (virtual memory).
• But the disk is much slower than RAM.

4. Constant swapping happens → Thrashing
• The OS keeps moving data back and forth between RAM and disk.
• This is called thrashing.
• The CPU spends more time managing memory than running your apps.

5. Result → System becomes very slow
• Apps lag
• Mouse freezes
• CPU usage spikes
• Everything takes longer
• Performance collapses








👉Deadlock
•Occurs when two or more processes are waiting indefinitely for resources held by each other.
•No process can proceed because each is blocking the other.
•The system is stuck permanently unless external intervention occurs.
Example:
Process A holds Resource 1 and waits for Resource 2.
Process B holds Resource 2 and waits for Resource 1.
👉 Neither can move forward.
Key Point:
Deadlock is a circular wait situation.

👉Starvation
•Occurs when a process waits for a long time because resources are continually given to others.
•The system is still making progress, but some processes never get scheduled.
Example:
Low-priority threads never get CPU time because high-priority threads keep executing.
Key Point:
Starvation is caused by unfair scheduling or resource allocation.









Your load balancer returns 503 for 20-30% of request, what will be your next steps?

503 Service Unavailable : Server is currently unable to handle requests because backend servers are down.

Server / Load Balancer Troubleshooting Steps👩‍💻
1.Check load balancer health
Verify that the load balancer is up and routing traffic correctly.

2.Identify unhealthy servers or pods
Inspect server or pod health status to detect failing instances.

3.Review recent changes
Check for recent code or configuration deployments and roll back if necessary.

4.Check backend load
Monitor CPU usage, memory, thread counts, and database connections.

5.Remove bad instances
Take unhealthy servers out of rotation and scale up healthy instances if needed.

6.Reduce traffic impact
Apply rate limiting and increase caching to reduce backend pressure.

7.Inspect logs
Analyze application and load balancer logs to identify health check failures.

8.Monitor and fix
Continuously track 503 errors and perform root cause analysis to prevent recurrence.



Confirm where 503 is coming from
• Is the load balancer itself unhealthy?
• Or is it propagating 503 from backend services?

👉 Check LB logs & metrics first.

⸻

2️⃣ Check backend health
• Are backend instances up and reachable?
• Are health checks failing?
• Sudden deploy? Config change?

👉 If backends are down, LB is doing its job.

⸻

3️⃣ Check capacity & scaling
• Traffic spike?
• Backend at max CPU / connection limits?
• Auto-scaling lagging?

👉 Scale backend or shed load.

⸻

4️⃣ Inspect health check configuration
• Wrong path?
• Timeout too strict?
• Dependency inside health check failing?

👉 Healthy service marked unhealthy = instant 503.

⸻

5️⃣ Check load balancer limits
• Connection limits reached?
• Thread pool exhausted?
• Rate limiting kicking in?

👉 LB itself can be the bottleneck.

⸻

6️⃣ Mitigation
• Temporarily relax health checks
• Scale LB horizontally
• Route traffic to another region
• Enable failover / fallback

⸻

503 usually means the system is protecting itself — the key is finding which layer is under stress.







Your homepage is taking time to load, where should we add caching and why?

✅ 1. Browser-Side Caching (Client Cache)
What it is: Store static assets (JS, CSS, images) in the user’s browser so future visits load instantly.
Why: Reduces repeat network requests and speeds up subsequent page loads.

✅ 2. CDN Layer Caching (Edge Caching)
What it is: CDN caches your static content near users (Cloudflare, Azure Front Door).
Why: Cuts round‑trip latency drastically and reduces load on your servers.

✅ 3. Application-Level Caching
What it is: Stores API response or computed data in memory so that backend doesn’t process the same request again.
Types:
• In-memory (fastest, per node)
• Distributed (Redis, Memcached)

✅ 4. Database Query Caching
What it is: Cache results of heavy joins or repeated queries.
Why: Minimizes DB load and speeds up dynamic content.

✅ 5. Reverse Proxy / Gateway Caching (Nginx Level)
What it is: A gateway layer caches responses before they hit your backend.
Why: Protect backend from repetitive load during spikes.
(Nginx, AWS API Gateway Cache etc)





A user complains they can log in but can't access certain features. is this an authentication or authorization issue, explain

The Situation:
• User CAN log in ✅
• User CANNOT access some features ❌
What’s the Issue?
This is an AUTHORIZATION issue, NOT authentication

Why?
Authentication = Proving who you are (like showing ID at the door)
◦The user already passed this step because they logged in successfully

Authorization = What you’re allowed to do (like which rooms you can enter)
◦This is where the problem is - they’re inside but don’t have permission for certain features

How to Troubleshoot:
1.Check user’s role/permissions
◦ Is the user assigned the right role? (Admin, User, Guest, etc.)
2.Verify feature access settings
◦ Does their account plan include this feature?
◦ Is it a premium-only feature?
3.Look at access control rules
◦ Are there any restrictions based on time, location, or subscription?
4.Check the logs
◦. What error message appears when they try to access the feature?
◦ Does it say “403 Forbidden” or “Insufficient Permissions”?
5.Test with another account
◦ Can other users with the same role access it?
◦ This helps identify if it’s a user-specific or system-wide issue





How instagram loads infinite posts without your phone exploding

If Instagram loaded everything:
• 100 posts = 200 MB
• 1000 posts = 2 GB
• Your phone = 💥 CRASH
Solution needed:
Make it feel infinite, but load very little 🎯

1️⃣ Pagination (Cursor-Based)
• Instagram loads only 10 posts at a time
• Uses “cursor” = bookmark to remember position
• When you reach post 8, API loads next 10
📌 Database sends small chunks, not everything

2️⃣ Virtual Scrolling / Windowing
• You’re at post 50
• Only keeps posts 45-55 in memory
• Posts 1-44? Removed from memory 🗑️

3️⃣ Lazy Loading
• Far posts → Images not loaded 💤
• Close posts → Start downloading 📥
• Visible posts → Show full image ✅
• Past posts → Stop video, free memory
📌 Load on demand, not in advance

4️⃣ Pre-fetching / Predictive Loading
• At post 7 of 10? Load posts 11-20
• Ready before you scroll
• User never sees loading spinner
📌 Always stay 2 steps ahead

5️⃣ CDN (Content Delivery Network)
• Images stored in nearest server
• Serves compressed thumbnails first
📌 Faster delivery from nearby location

6️⃣ Memory Management (LRU Cache)
• Keeps only recent posts
• Old posts deleted automatically
• If you scroll back, re-fetch from cache
📌 Aggressive cleanup = smooth performance

System Design Concepts Used
✅ Pagination - Load in batches
✅ Virtual Scrolling - Reuse components
✅ Lazy Loading - Load on demand
✅ Pre-fetching - Predict user behavior
✅ CDN - Nearby servers
✅ Memory Management - Auto cleanup
Result: ♾️ Infinite feel + ⚡ Fast + 📱 No crash







Your api gets flooded with milions of fake request, how do tou survive a DDOS attack?

DDoS (Distributed Denial of Service) is when attackers send millions of fake requests from many machines to overwhelm your API, so real users can’t get served.

Ways to protect the system👇

1️⃣ Rate Limit Requests
👉 Limit how many calls each client can send, so bots can’t flood you.
Example: Like allowing only 5 people per minute at an ATM so one person can’t block everyone.

2️⃣ Block Bad Traffic at the Network Edge
👉 Drop malicious IPs before they reach your servers.
Example: Like stopping unwanted visitors at the main gate instead of your front door.

3️⃣ CDN Absorbs the Attack
👉 Use Cloudflare/Akamai etc to handle huge spikes globally.
Example: Instead of one shop facing 1M customers, the load spreads across 1,000 branches.

4️⃣ Web Application Firewall (WAF)
👉 Automatically blocks bots, SQL injection attempts, weird headers, etc.
Example: Like a security guard rejecting anyone with fake IDs or suspicious behavior.

5️⃣ Challenge Suspicious Traffic (CAPTCHA / JS Challenge)
👉 Force bots to prove they’re real.
Example: Like asking someone for an OTP before letting them into your apartment.

6️⃣ Autoscale Under Heavy Load
👉 Add more servers when traffic spikes to avoid total collapse.
Example: Like opening extra billing counters when a crowd suddenly forms.





Explain rest api with example in few seconds

A REST API is a way for two applications to communicate over the web using HTTP. 

Think of it like ordering a cab through an app 🚖:
• You request a ride → the system processes it → a driver shows up.
• Similarly: your app sends a request → server handles it → data comes back.

Breaking down REST(R – Representational, S – State, T – Transfer.)
🔹 Representational-  Instead of raw info, data is exchanged in formats like JSON or XML.

🔹 State - The server doesn’t remember you. Every request is independent and it carries everything it needs→ stateless.

🔹 Transfer  - Communication happens through HTTP methods:
• GET → fetch data
• POST → create something new
• PUT → update existing info
• DELETE → remove data

Everyday Example (Social Media App 📱)
• View your profile → GET
• Post a new photo → POST
• Edit bio → PUT
• Delete a comment → DELETE

Why REST is powerful
✔ Easy to understand ✔ Works across platforms ✔ Scales with growing systems ✔ Clear rules for communication ✔ Stateless design






How does Amazon sysnc your cart across phone, laptop, web, multiple devices in real time?

1️⃣ Backend as Single Source of Truth
All reads and writes go through a centralized Cart Service, making the backend authoritative.

2️⃣ Synchronous Write Before UI Update
The UI updates only after server confirmation(db plus cache write), so crashes don’t cause data loss.

3️⃣ Pull-Based Sync (Primary Mechanism)
Amazon relies mainly on pull-based synchronization.
Whenever:
• The app opens
• The page refreshes
• The user logs in on a new device
➡️ The client fetches the latest cart state from the server.
This guarantees:
👉 Same cart across laptop, phone, and tablet.

4️⃣ Push-Based Sync (Near Real-Time Updates)
For a smoother experience, Amazon also uses push mechanisms:
• WebSockets or long polling
If the cart changes on one device:
• Other active devices are notified
• Cart count and UI update automatically
This reduces manual refresh and improves real-time feel.

5️⃣ Handling Concurrent Updates (Multiple Devices)
Example:
• Phone adds an item
• Laptop removes another item at the same time
Amazon uses:
• Versioning
• Optimistic locking

6️⃣ Stateless Clients Enable Reliability
Devices don’t maintain cart state locally.
If a device crashes or disconnects, it simply re-pulls the cart from the server when it comes back online.










Ever wonndered how uber/ola finds the nearest driver to you quickly even millions of drivers are online?

5 million drivers sending GPS every 4 seconds and you request a ride.
If we check all 5M drivers = too slow
Goal: Answer in 2 seconds, handle 1M+ rides/hour.
 
How Uber Actually Solves It

1️⃣ Real-Time Location Streaming
• Driver apps send GPS updates (latitude, longitude) every few seconds
• These updates are streamed via Kafka / PubSub
• Consumed by a dedicated Location Service

2️⃣ Geo-Spatial Indexing
• The city is divided into small geographic cells
• Drivers are indexed using Geohash / QuadTree
• Stored in Redis GEO or ElasticSearch for quick searching.
📌 Nearby drivers end up in the same or neighboring cells.

3️⃣ Fast Proximity Search
• Rider location → geo cell lookup
• Query only nearby cells (e.g., within 3 km)
• Fetch drivers within a small radius.
📌 No full scan. No global search.

4️⃣ Filtering & Ranking
From nearby drivers, apply:
• Availability
• Vehicle type
• Driver rating
• ETA
Best candidates are ranked and sent forward.

5️⃣ Dispatch & Atomic Locking
• Ride request sent to top-ranked driver
• On acceptance → driver is atomically locked
• Prevents multiple riders from booking the same driver







You seean instagram post and see 90 likes ut your friends sees 91 likes why? explain CAP theorm?
Why Instagram Shows 100 Likes to You and 101 to Me🤔 Understand CAP theorm with this example.

What You Observe
👉 You see 100 likes
👉 Your friend sees 101 likes
👉 Same post. Same time.
Looks like a bug… but it’s intentional design😳🤔

The CAP Theorem
👉 In a distributed system, you can only fully guarantee 2 out of 3:
• Consistency
• Availability
• Partition Tolerance
Instagram must handle network failures, so P is mandatory.
Now the trade-off is between C and A.

What Instagram Chooses
👉 Availability + Partition Tolerance (AP)
👉 Not Strong Consistency
Why?
• Billions of users
• Global traffic
• Likes are non-critical

What Actually Happens Internally
1️⃣ You Like a Post
• Like request goes to nearest data center
• Local counter increments
• Response returned immediately
📌 Fast UX > perfect accuracy

2️⃣ Replication Happens Later
• Like count propagates to other regions
• Other users see updated count slightly later
📌 This delay causes 100 vs 101

3️⃣ Eventual Consistency
• After some time
• All regions converge to same count
📌 No permanent inconsistency

Why Strong Consistency Would Be Bad Here
If Instagram chose CP:
• Every like would wait for global sync
• Likes would feel slow
• App would freeze during network issues
❌ Bad user experience

Where Instagram Uses Strong Consistency
• Login
• Password change
• Username availability
• Payments / Ads billing
📌 Critical correctness → CP

Hence Instagram chooses availability over strong consistency for likes, accepting temporary mismatches to keep the app fast and reliable globally.








the Git commands that I have used mostly.

1. git clone - Clone a repository
2. git add - Stage changes for commit
3. git commit - commit staged changes
4. git push - Push commits to remote
5. git pull - Fetch and merge changes from remote
6. git branch - List, create, or delete branches
7. git checkout - Switch branches or restore files
8. git merge - Merge branches
9. git stash - Stash changes for later
10. git status - Check the status of your repository
11. git log - View commit history
12. git diff - See changes between commits
13. git rebase - Reapply commits on top of another base tip.









Why do companies put API Gateway in front of microservices, please read below 👇.

1️⃣ Single Entry Point
👉 Clients hit one URL instead of 10-20 microservices.
Example: Like entering a office building through one main gate instead of multiple side doors.
 
 2️⃣ Load Balancing & Smart Routing
 👉 Gateway sends each request to the right service/server.
Example: Like a front desk guiding you to finance, support, or sales.
 
 3️⃣ Central Authentication and Authorization
 👉 Login check happens once at the gateway.
Example: Like showing your ID at building entrance, not at every room.
 
4️⃣ Rate Limiting and Traffic Control
👉 Stops spam/abuse before it reaches services.
Example: Like security controlling crowd so rooms don’t get overcrowded.
 
 5️⃣ Caching at the Gateway
 👉 Cached responses reduce load on backend services.
Example: Like keeping frequently asked answers.
 
6️⃣ Request Transformation
 👉 Converts incoming requests into formats services understand.
Example: Like a receptionist translating your query into the right department language.
 
 7️⃣ Central Logging & Monitoring
 👉 One place to track all failures, slow APIs, and traffic spikes.
Example: Like CCTV at the main gate capturing everyone entering.






The same API returns in 100ms for US users but 1seconds for INDIAN users, how do you fix global latency?

1️⃣ Run Services Across Multiple Regions Servers
👉 Host application servers in different geographies so user requests travel shorter distances.
Example: Requests from India go to Noida or nearby region servers, while US traffic is handled in their region.

2️⃣ Use Global Traffic Routing
👉 Automatically send users to the closest available region based on location and health.
Example: Users from Delhi connect to India servers, Singapore users connect to Singapore.

3️⃣ Deliver Static Files via CDN
👉 Serve static assets from edge locations distributed worldwide.
Example: Website images load from a Noida edge node instead of a US data center.

4️⃣ Store API Data in Regional Caches
👉 Keep frequently used API responses in local cache layers to avoid long backend calls.
Example: Homepage API cached in India prevents calls to US services.

5️⃣ Minimize Response Payloads
👉 Smaller JSON move faster across networks with high distance.
Example: Send only required fields like {id} instead of sending full object details.

6️⃣ Replicate Databases Geographically
👉 Copy data across regions so applications read from nearby replicas.
Example: Indian users read from an India DB replica instead of the US primary.

7️⃣ Reuse Network Connections
👉 Keep connections alive to avoid repeated TCP and TLS setup time.
Example: Use the same open connection for multiple API calls.

8️⃣ Push Logic to the Edge
👉 Execute lightweight processing closer to users instead of central servers.
Example: Authentication checks or user-specific rules handled at edge locations.








Two microservices need to talk what options do you have for their communication and how do you choose?

1️⃣ Synchronous HTTP (REST)
👉 One service calls another and waits for the response.
Choose this when:
You must get a result immediately to proceed.
Example:
Checkout Service → Payment Service
“Was the payment successful?”

2️⃣ Asynchronous Messaging (Queue/Event Based)
👉 A service sends a message and continues without waiting.
Choose this when:
The work does not block the main request.
Example:
Order placed → send message →
Email service sends confirmation later.

3️⃣ Event-Driven Communication
👉 A service publishes an event, multiple services react independently.
Choose this when:
Many services depend on the same business event.
Example:
Order placed event →
Inventory updated, analytics recorded, notification sent-All services will react to the same order placed event.

4️⃣ gRPC (Fast Internal Communication)
👉 High-speed binary calls between internal services.
Choose this when:
Services communicate frequently and low latency matters.
Example:
Pricing service calling discount service hundred of times per second.

Quick Decision Rule
👉 Need response now? → Synchronous
👉 Can process later? → Asynchronous
👉 Many services reacting? → Event-driven
👉 High-frequency internal calls? → gRPC





If 2 deliviery agent from zomato or swiggy try to accept the same order at the same time. how do you prevent double assignment?


1️⃣ Order enters ‘Pending Assignment’ state
When the restaurant confirms the order, it enters:
status = pending_assignment
No delivery partner is assigned yet.
 
2️⃣ Zomato sends the order to a small eligible pool
🎯 Agents are filtered based on:
📍 Distance
🚦 Traffic
⭐ Rating
📊 Acceptance probability
⚡ Past behaviour
🔥 Surge demand
Only a few agents receive the order.
 
3️⃣ When an agent taps “Accept” → Atomic Locking
As soon as an agent taps Accept, the backend attempts an atomic lock.
✔ If the order is not locked → assignment success
❌ If locked → request rejected
This prevents race conditions.
 
4️⃣ Queueing + Idempotency
Every accept action has a unique request_id.
Zomato processes each request exactly once.
Duplicates or late attempts are ignored.
 
5️⃣ Conditional Database Update
The backend performs a conditional update like:
 
UPDATE orders
SET assigned_to = agent_id
WHERE order_id = X
AND assigned_to IS NULL
 
Only one update succeeds.
All others fail automatically.
 
6️⃣ Order moves to “Accepted” state
📲 Notifications are sent to:
🍽 Restaurant
🧑‍🍳 Customer
🏍️ Assigned delivery partner
 
No other agent can take the order.
 
Hence to make it work, Zomato uses:
🔐 Atomic locks
🧾 Transactional updates
🔁 Idempotent APIs
⚡ Millisecond acceptance windows
📦 Real-time queueing
 
This ensures only one agent gets the order.
 
Asked in interviews at:
Zomato • Swiggy • FAANG •UberEats • DoorDash

(Backend scalability, traffic distribution, system design
Interview, high traffic systems, backend engineering, Zomato design, microservices architecture)







Kafka handles milions of request per second, how does it avoid message loss and duplication?

When you send data through Kafka, it isn’t just a simple ‘send and forget’ system. It’s built like a high-security bank vault👇

1️⃣ Messages Are Persisted on Storage
Kafka does not rely only on RAM.
👉 Every event is saved to disk before it is acknowledged.
So even if a broker stops unexpectedly, the data remains safe.

2️⃣ Data Is Replicated Across Servers
Kafka keeps multiple copies of each message on different brokers.
👉 If one machine fails, another one still holds the same.

3️⃣ Consumers Maintain Read Position (Offsets)
Kafka does not remove messages after delivery.There is a retention policy and messages are kept for a configured time even after being read.
👉 Each consumer tracks how far it has read using an offset.
If it crashes, it continues from where it left off.

4️⃣ Messages Are Retried Instead of Dropped
If a consumer fails after reading a message but before confirming it,
👉 Kafka delivers that message again.
This ensures reliability, even if duplicates may occur.

5️⃣ Duplicate Handling Using Idempotency
Producers attach unique identifiers to messages.
👉 When retries happen, Kafka can recognize duplicates and ignore them.
This avoids storing the same message in Kafka more than once.

6️⃣ Exactly-Once Processing for Critical Use Cases
For scenarios like payments or stock.

Example: Kafka send payment message to the payment server and payment succeeds but the server crash before sending the result back to Kafka. Hence Kafka doesn’t know if the payment succeeds or not. This is called ‘partial failure problem’.
In this case , Kafka will re- deliver the message again to the payment service , now the payment systems must be idempotent and it mush check whether the same transaction has been done or not in their db and then if the payment already done then it will send the success to Kafka without any op

Kafka prioritizes reliability by re-delivering messages instead of losing them, using replication, offsets, and idempotency to ensure safety.






How Netflix Blocks Screen Recording👇 . I have tried to explain it in simple words.

“When you press play on Netflix, the video doesn’t behave like a normal app screen.

Netflix uses DRM (Digital Rights Management) systems like Widevine(Chrome/Android)and FairPlay(Safari/IOS). These tell your phone or laptop that
👉 This video is protected

Because of that, the video is rendered inside a secure hardware-backed video layer.
Your screen recorder can only capture the normal UI — not that protected layer — so the video appears black in recordings.

Behind the scenes:

* The video stream is encrypted
* Decryption happens inside secure hardware
* Screen recording APIs are explicitly blocked by the OS

This prevents piracy, illegal uploads, and content leaks — especially for premium movies and shows.

In short:
Netflix isn’t blocking your recorder.
Your device is protecting the video.

That’s why screenshots and screen recordings don’t work.







Your double click the pay button how do you stop duplicate API calls?
This is a critical real-world system design concept that backend engineers must understand👩‍💻💰

Let’s break it down 👇

1️⃣ Idempotency Key
What it is:A unique key attached to each request from the client-side so the backend can safely ignore duplicates.
How it helps:Even if the same request is sent multiple times, it’s processed only once.
Example:User taps “Pay Now” twice → both requests carry the same payment_id → backend executes the payment only once.

2️⃣ Client-Side Protection (Disable / Debounce)
What it is:Prevent users from triggering multiple requests unintentionally.
How it helps:Reduces duplicate calls before they even reach the server.
Example:Disable the “Pay” button immediately after the first click or debounce clicks within a short time window.

3️⃣ Database-Level Safety (Locks / Constraints)
What it is:Use database guarantees to prevent duplicate records.
How it helps:Even if duplicates reach the backend, the database rejects them.
Example:A unique constraint on payment_id ensures the same paymet can’t be inserted twice.

4️⃣ Message Queue Deduplication
What it is:Ensure the same message isn’t processed more than once in async systems.
How it helps:Prevents duplicate processing in event-driven architectures.
Example:If Kafka or SQS receives two messages with the same ID, only one is consumed and processed.

💰💰Real-world payment systems (Stripe, Razorpay, etc.) use all of these together — not just one.







How does bookmyshow make sure 2 or more people dont book the same seat at the same time?

Ever wondered how BookMyShow or any other ticket booking app/site handles seat booking without chaos🤔👩‍💻
Here’s the real system design logic behind it👇

1️⃣ Temporary Seat Lock (Server-Side Lock)
𝗗𝗲𝗳𝗶𝗻𝗶𝘁𝗶𝗼𝗻: The backend locks the selected seat so only one user can proceed.
𝗘𝘅𝗮𝗺𝗽𝗹𝗲: User-1 selects seat A10 → User-2 immediately sees it as unavailable.

⸻

2️⃣ Lock Expiry via TTL (Timeout Handling)
𝗗𝗲𝗳𝗶𝗻𝗶𝘁𝗶𝗼𝗻: Seat locks automatically expire if payment isn’t completed in time.
𝗘𝘅𝗮𝗺𝗽𝗹𝗲: User leaves checkout → after 5–10 minutes, seat A10 becomes free again.

⸻

3️⃣ Atomic Database Update (Single Winner)
𝗗𝗲𝗳𝗶𝗻𝗶𝘁𝗶𝗼𝗻: Database allows only one update when multiple users try the same seat.
𝗘𝘅𝗮𝗺𝗽𝗹𝗲: Two users click A10 → only one booking update succeeds.

⸻

4️⃣ Distributed Locking (Redis)
𝗗𝗲𝗳𝗶𝗻𝗶𝘁𝗶𝗼𝗻: Prevents different backend servers from booking the same seat.
𝗘𝘅𝗮𝗺𝗽𝗹𝗲: Server-A locks A10 → Server-B request is instantly rejected.

⸻

5️⃣ Queue-Based Booking (Kafka/RabbitMQ)
𝗗𝗲𝗳𝗶𝗻𝗶𝘁𝗶𝗼𝗻: Booking requests are processed one-by-one during peak demand.
𝗘𝘅𝗮𝗺𝗽𝗹𝗲: First request in queue books the seat → others fail safely.

⸻

6️⃣ Final Booking After Payment Confirmation
𝗗𝗲𝗳𝗶𝗻𝗶𝘁𝗶𝗼𝗻: Seat is marked Booked only after successful payment.
𝗘𝘅𝗮𝗺𝗽𝗹𝗲: Payment fails → seat is released automatically.

Interview Tip:
“Seat booking is a concurrency problem - solved using locks, TTLs, atomic writes, and queues.”




You search GOA flights once and suddenly every app starts showing goa ads/reels?

This is backend architecture + ad systems doing their job👩‍💻

1️⃣ Your activity gets captured (Event Flow)
• Tracks searches, clicks, views, likes — even off-platform activity.
• Example: You search “Goa flights” → event is collected instantly.
• Tech: Kafka / RabbitMQ to stream events in real time.

⸻

2️⃣ Your interest profile is updated (Distributed Database)
• Builds and updates your interest profile at scale.
• Example: interest = travel, flights, Goa.
• Tech: Distributed databases for fast reads & writes.

⸻

3️⃣ Predicts Interests (Machine Learning)
• Models predict what ads you’re likely to engage with.
• Example: Travel searches → hotel & flight ads.
• Tech: ML pipelines running continuously.

⸻

4️⃣ Chooses the Best Ad (Ad selection and ranking)
• Advertisers compete; most relevant ad wins instantly.
• Example: Hotel app beats airline based on relevance + bid value.
• Tech: Real-time auctions, low-latency ad servers.

⸻

5️⃣ Learns From Your Behavior (Feedback Loop)
• Clicks, skips, time spent improve future predictions.
• Example: Skip flights → see hotel deals next time.
• Tech: Continuous model retraining.

⸻

6️⃣ Scales for Billions (System Design)
• Handles millions of users without slowing down.
• Example: Peak searches, ads still load instantly.
• Tech: Horizontal scaling, caching, load balancers.








Idempotent API?






Lets understand Sharding and Replication🎉

🌟Sharding (splitting data)
Sharding means breaking a big database into smaller pieces and storing them on different servers.
Why we do it
• Too much data for one server
• Faster performance
• Handles more user
Real-time example
Think of WhatsApp users 🌍
• Server 1 → users from Asia
• Server 2 → users from Europe
• Server 3 → users from America
Each server stores only its part of the data.
That part is called a shard.

🔁 Replication (copying data)
Replication means making copies of the same data and storing them on multiple servers.
Why we do it
• Backup
• High availability
• Data safety
Real-time example
Think of Instagram posts 📸
• Main server → original data
• Copy server 1 → backup
• Copy server 2 → backup
If the main server goes down, users still see posts from the copy.





What a NAT Gateway actually keeps
Connection state (session table)
It tracks:
Private IP + port → Public IP + port mapping
So responses from the internet go back to the right private instance
Translation mappings (NAT table)
Example:
10.0.1.25:54321 → 54.12.8.9:40001
Idle connection timers
If a connection stays idle for too long, NAT drops it ⏱️
(this is where many “stale connection” bugs come from)


t looks like a highly scalable system, and I’d love to learn more about the scale you’ve worked on. Could you share some details about the traffic, data volume, or number of users/services your system handled?

Also, in cases where an operation involves multiple microservices (for example, 3–4 services working together) and one of them fails, how do you handle rollback and maintain consistency? What patterns or approaches did you use in such scenarios?

Specifically:
• Did you implement the Saga pattern for distributed transactions?
• How did you design and manage compensation logic at scale to ensure reliability?
• Were compensations orchestrated centrally or handled in a choreographed way across services?
• How did you balance the consistency vs availability trade-off when designing the system?
• What were the key challenges you faced, and what solutions worked well in practice?







It’s your Primary Key 👀

Using random UUIDs in MySQL can silently destroy performance:
❌ Random inserts
❌ Page splits
❌ Index fragmentation
❌ CPU spikes under load

InnoDB stores data using B+ Trees.

And random UUIDs = random tree writes = production pain.
Before choosing UUID as PK… understand the storage engine.
https://drive.google.com/file/d/1-byQ4biTdB0wFJi6he7YnNXGyXEDj8LQ/view?utm_referrer=sp_auto_dm


How kubernetes know how much give cpu and memory to service and how much scale?

Deployment.yaml defines the desired state.
Kubernetes controllers make it reality. ⚙️🚀
That’s declarative architecture in action.




Service B was returning 200 OK…
Still the Circuit Breaker was OPEN 😳”

Turns out, we were throwing a custom RuntimeException inside the same CB-protected method.

Circuit Breaker doesn’t know business vs network failure.
It just sees: Exception = Failure 🚨

💡 Lesson:
Separate business logic from CB calls or configure ignoreExceptions.









If your app depends heavily on Redis, a single node failure can’t be allowed to bring everything down.

That’s where Redis Sentinel & Redis Cluster come in 👇

🔁 Redis Sentinel – High Availability (HA)

Best when:
- You want automatic failover
- Single primary + replicas
- Reads & writes still go to one master

👉 Ideal for: Caching, session storage, leader-based systems

🌐 Redis Cluster – Scalability + HA
Best when:

- You need horizontal scaling
- Huge data volume
- High throughput systems
-
👉 Ideal for: Large-scale, distributed, high-QPS applications

https://drive.google.com/file/d/1xp-SpQFBZf4JOY8oFPH6oRfqtZ489NdM/view?utm_referrer=sp_auto_dm









How Messaging Apps Show Online / Last Seen?


• Real-time presence is tracked using persistent connections (WebSocket / TCP / MQTT).
• Online / Offline = Backend marks user in in-memory state (Redis)
• Last Seen = stored only when user goes offline
• Heartbeats prevent false offline
• Multi-device? Online if any device is connected
• Privacy filters decide who can see your status
https://drive.google.com/file/d/1Gn0dHHEUTpHHvFrM52WJf4kbwy8SjGJm/view?utm_referrer=sp_auto_dm







Advanced Inheritance & Polymorphism (1–10)

1. What happens if a subclass defines a field with the same name as its parent?
2. How does Java resolve field access vs method calls in inheritance?
3. What happens when a parent's reference points to a child object?
4. Can a child reference point to a parent object? Why or why not?
5. Explain method overriding rules in Java.
6. What is covariant return type in overridden methods?
7. Can a subclass reduce the visibility of an overridden method?
8. How does runtime polymorphism actually work internally?

final Keyword Deep Dive (11–20)

static Keyword & Inheritance (21–30)

https://drive.google.com/file/d/1dGPRrb4oeJ840idtZUPNxd218vzfSAox/view?utm_referrer=sp_auto_dm





Think of Kubernetes as a restaurant chain manager for your apps 🍽️

Pod = A Table ( Where your food is served)

1. Where your app actually runs
2. Can restart anytime
3. Never store user data locally
👉 Apps must be stateless

Node = The Restaurant Building
1. Real server (CPU + RAM)
2. Shared with other apps
3. Limited resources
👉 Heavy builds & memory leaks hurt everyone

Cluster = All Restaurants Together

1. Dev / Staging / Prod are different clusters
2. Different capacity
3. Different behavior
👉 “Works in staging” doesn’t mean prod is same
https://drive.google.com/file/d/1gi4whNltR3IXWdI_Jg1stVrc-3Qe_CIQ/view?utm_referrer=sp_auto_dm









If you scale one service, but the dependent services aren’t scaled — what breaks?”
Problems you’ll hit 👇

Comment "pdf" for a detailed tailored solution for this problem.

🔥 Downstream bottlenecks – the unscaled service becomes the choke point

⏳ Increased latency – fast service waits on slow dependencies

💥 Cascading failures – retries + timeouts overload other services

🧵 Thread/connection exhaustion – pools get maxed out quickly

📉 Wasted scaling – extra instances give no real throughput gain

How to avoid this 🚀

⚖️ Scale dependencies together (capacity planning, load tests)

📨 Async communication (queues, events instead of sync calls)

🛑 Rate limiting & backpressure to protect downstream services

🧱 Circuit breakers & timeouts to stop cascading failures

📊 End-to-end observability (latency, saturation, error rates)

🧠 Bulkheads – isolate failures per service or dependency
https://drive.google.com/file/d/1pW03G7O4O3dIhCg8K9z_YP4H6OkvbLzF/view?utm_referrer=sp_auto_dm






Limiting explained
https://drive.google.com/file/d/1l7mObCFRac60fe4v5RAy7RiPOd1d2coM/view?utm_referrer=sp_auto_dm









Consistent hashing minimizes key redistribution during scaling, ensuring stable routing and preventing cache stampedes.”

✅ Why we need Consistent Hashing

• Keys are placed on a hash ring
• Servers are also placed on the same ring
• A key moves only when its server changes

Add/remove 1 server → ~1/N keys move

What problems it solves

✔ Cache stampede
✔ Thundering herd
✔ Hot partitions
✔ Expensive rebalancing
✔ Unstable routing

🧠 Real-world usage

• Distributed caches (Redis, Memcached)
• Microservice routing
• DB sharding
• Message consumers
• CDN edge routing









Many devs blindly use polling to check payment/order status.

But numbers expose the truth👇

🔴 Case 1: Polling
Assume:

1 transaction takes 5 minutes to complete
Client polls every 5 seconds
➡️ Calls per transaction
= 5 min × 60 sec / 5 sec
= 60 API calls
➡️ For 1,000,000 transactions
= 60 × 1,000,000 = 60 MILLION API calls
And most of them return:
❌ “Still processing…”

📉 Problems:

1. Wasted CPU & DB reads
2. Higher infra & API gateway cost
3. Rate limiting issues
4. Unnecessary load during peak traffic

🟢 Case 2: Webhooks
Assume:

Payment gateway sends 1 webhook on success/failure
➡️ Calls per transaction
= 1
➡️ For 1,000,000 transactions
= 1,000,000 API calls

📈 Benefits:

1. ~60x fewer requests
2. Event-driven (no useless calls)
3. Lower infra cost
4. Better scalability
5. Cleaner architecture

🧠 Final Verdict
❌ Polling = client keeps asking “are we there yet?”
✅ Webhook = server tells you only when something happens
Use polling only when webhooks are NOT possible.
Otherwise, you’re burning money 🔥










Start as a Modular Monolith, scale to Microservices only when you feel the pain."
Comment "pdf" for detailed notes.

🔹 What is a Modular Monolith?

- A single deployable application
- Internally divided into independent modules
- Each module has clear boundaries
- Modules don’t access each other’s internals
Communication via interfaces / contracts
- Same codebase, same database (usually)

🔹 Why Modular Monolith over Microservices?

1. Lower Complexity
- No network calls
- No service discovery
- No distributed transactions
- Easier debugging & tracing

2. Faster Development
- One repo, one build
- Simple local setup
- Faster onboarding for new devs

3. Lower Infrastructure Cost
- No multiple services to host
- No extra DevOps overhead
- No heavy monitoring stack initially

4. Avoid Premature Microservices
- Most apps don’t need microservices on Day-1
- Scaling problems come later, not at MVP stage

5. Stronger Domain Boundaries
- Forces clean architecture
- Clear ownership per module
- Prevents “big ball of mud” monolith

6. Easy to Migrate Later
- Each module can be extracted into a microservice
- Acts as a stepping stone to microservices

🔹 When Modular Monolith is BEST?
- Early-stage startups
- Small to mid-size teams
- Products < 1M users
- Fast iteration is priority
https://drive.google.com/file/d/1P-YtkqiyB0JY4yBc_b_cvCVpXpldJ9tt/view?utm_referrer=sp_auto_dm










A CDN is not limited to images and videos. It can also be used for APIs — including authenticated APIs - if designed carefully.

Yes, APIs can be cached on a CDN, but with rules:

1. Cache only safe requests

- Cache GET APIs

- Never cache POST / PUT / DELETE

2. Cache key must include identity

- Cache key =

URL + user token / auth header

- Prevents data leakage between users

3. Token-based caching

- Short-lived access tokens

- CDN respects token expiry

4. Writes bypass the CDN

- Mutations always go to origin

- CDN used only for reads

CDNs are not about static content — they're about reducing origin load safely.








What if the lb itself goes down???





What if the api gateway itself goes down???







System Design interview:
1. CAP Theorem
2. ACID vs BASE
3. Strong vs Eventual Consistency
4. Quorum
5. Sharding
6. Replication (Sync vs Async)
7. Consistent Hashing
8. Load Balancer vs API Gateway
9. Reverse Proxy
10. CDN
11. Pub/Sub vs Queue
12. gRPC
13. Rate Limiting Algorithms
14. Circuit Breaker Pattern
15. Backpressure
16. Load Shedding
17. Cache Strategies
18. Cache Eviction Policies
19. Cache Stampede
20. Database Isolation Levels
21. Deadlocks
22. Distributed Locks
23. CQRS
24. Event Sourcing
25. Leader Election
26. Raft Consensus
27. Service Discovery
28. Distributed Tracing
29. Vector Databases
30. Full-Text Search Systems




system design because they don’t structure their answer.
question ask to interviwer Use this framework:

• Clarify requirements
• Define scale
• Draw high-level design
• Identify bottlenecks
• Optimize

Structure > complexity.

Comment link to get the detailed explanation on
how to approach a system design round interview.






What is an Idempotent REST API in simple words
• Same API call multiple times → final server state stays the same
• GET → only reads data (safe to retry)
• PUT → updates with same data (no duplicates)
• DELETE → deletes once (state remains deleted)
• POST → creates new data (can create duplicates)
• Important for payments, retries, and real-world backend systems






Cache invalidation and write stageties

Types of caching









dempotent API in System Design explained step by step:
• Problem
Network retries and double clicks can create duplicate orders or payments
• Add Idempotency-Key
Client sends a unique Idempotency-Key in request headers
Same operation = same key
• Server check
Backend checks Redis or DB for the Idempotency-Key
• Return cached response
If key exists, return stored response
Do not process again
• Process only once
If key does not exist, execute business logic once
• Store result
Store key, request hash, response, and status code
• Handle concurrent retries
Use Redis SETNX or DB unique constraint
• Set expiry
Use TTL to clean old idempotency keys
• Secure usage
Reject same key with different payload
• Real use cases
Payments, orders, bookings, webhooks








TLS Certificate explained in simple steps
• Client sends hello with supported TLS versions and encryption methods
• Server sends TLS certificate with public key
• Client verifies domain, CA, and certificate validity
• Client generates a secret key and encrypts it using server’s public key
• Server decrypts the secret using its private key
• Secure tunnel is created
• All data is now encrypted and safe between client and server
• This is how HTTPS becomes secure using TLS certificates and encryption







Pagination = dividing large data into smaller chunks instead of loading everything at once.

Why?
Because loading 1 million rows = slow DB + high memory + bad UX.

There are 3 main types 👇

1️⃣ Offset-Based Pagination

Example:
/users?page=2&limit=10

DB Query:
LIMIT 10 OFFSET 10

✅ Easy to implement
✅ Works for small datasets
❌ Slow on large tables (DB scans skipped rows)
❌ Data inconsistency if new rows are inserted

👉 Best for: Admin panels, small datasets

2️⃣ Cursor-Based Pagination

Example:
/users?cursor=eyJpZCI6MTAwfQ==

Instead of page number, we use a reference value (like last id).

Query:
WHERE id > last_id LIMIT 10

✅ Very fast
✅ Scales well
✅ No duplicate/missing data
❌ Slightly complex

👉 Best for: Infinite scroll, large datasets, social media feeds

3️⃣ Keyset Pagination (Advanced Form of Cursor)

Uses indexed columns like created_at or id.

Query:
WHERE created_at < last_created_at ORDER BY created_at DESC LIMIT 10

✅ Best performance
✅ Perfect for real-time systems
❌ Cannot jump to random page

👉 Best for: High-scale apps like Instagram, Twitter

💡 Interview Tip:
Offset = simple but slow
Cursor/Keyset = scalable and production-ready

If you’re building scalable APIs, stop using offset blindly.








Node.js is single-threaded… and still handles millions of users 🤯

Sounds impossible?
Here’s the truth 👇

Node.js doesn’t wait.
It delegates work, keeps the event loop free,
and handles concurrency without blocking.

One thread for JavaScript.
Multiple threads under the hood.
Zero wasted CPU cycles.

That’s why Node powers real-time apps, APIs, and systems at scale.

If you still think
“single-threaded = slow”
you’re thinking in the wrong decade.

🚀 Event Loop
⚙️ Non-blocking I/O
🧠 Concurrency without chaos





Ever wondered how BookMyShow handles seat booking without chaos? 🎟️
Here’s the real system design logic behind it 👇

🔹 1️⃣ User Selects Seats

When you select seats:
• The request goes to Seat Availability Service
• Seats are checked in real-time cache (Redis) for speed

⸻

🔹 2️⃣ Seat Locking (MOST IMPORTANT)

To avoid double booking:
• Selected seats are LOCKED temporarily
• Lock duration: 5–10 minutes
• Status changes from:
• AVAILABLE → LOCKED

⚠️ Other users cannot see or select locked seats

⸻

🔹 3️⃣ Distributed Lock Mechanism

Behind the scenes:
• Redis / Zookeeper / DB Row Lock
• Ensures only ONE user can lock a seat
• Prevents race conditions in peak traffic

⸻

🔹 4️⃣ Payment Flow
• User is redirected to payment gateway
• Two possible outcomes:

✅ Payment Success
• Seat status → CONFIRMED
• Booking ID generated
• Notification sent

❌ Payment Failed / Timeout
• Lock expires automatically
• Seats become AVAILABLE again

⸻

🔹 5️⃣ Why Cache is Critical
• Millions of reads per minute
• DB alone would crash
• Redis Cache = fast seat availability
• DB used only for final confirmation

⸻

🔹 6️⃣ High-Level Architecture
• API Gateway
• Seat Service
• Booking Service
• Payment Service
• Cache (Redis)
• Database (Transactional)

⸻

🚀 Final Thought

BookMyShow doesn’t just sell tickets…
It masters concurrency, locking, and scalability 💡










When Netflix releases Stranger Things 5, millions of users open the app at the exact same moment… but the platform still runs smoother than ever.
Here’s the architecture that makes it impossible to crash 👇

💥 1. Global CDN (Open Connect):
Netflix uses its own CDN—servers placed inside ISP networks.
Your video streams from the nearest server, not from one central backend.
Result? Low latency, high speed, zero buffering.

⚡ 2. Microservices Everywhere:
Login, search, recommendations, playback, billing – everything is a separate service.
If one service fails, the entire platform doesn’t go down.

📊 3. Auto-Scaling on AWS:
As traffic spikes, servers scale up within seconds using EC2 auto-scaling groups.
You get consistent speed even during insane load.

🧠 4. Intelligent Caching:
Popular shows (like Stranger Things) are cached closest to users.
So your device pulls pre-prepared content instantly.

🧪 5. Chaos Engineering:
Netflix literally breaks its own servers using “Chaos Monkey” to ensure the system survives failures.
This is why the platform is battle-tested for peak traffic.

🎥 6. Adaptive Bitrate Streaming (ABR):
Video quality changes based on your network speed—preventing buffering even on weak connections.

🔥 This is why Netflix never lags, never crashes, and delivers flawless streaming even during global show drops.






What is a REST API?
Explained in the simplest way 👇

REST API = A standard way for two systems to talk over HTTP smoothly.

Here’s how to remember it:

🔹 R – Representational
You send/receive “representations” of data (JSON, XML).

🔹 S – State
Your server does NOT store your session — every request carries its own data = stateless.

🔹 T – Transfer
Everything happens over HTTP — GET, POST, PUT, DELETE etc.

Why REST APIs matter?
✔️ Simple
✔️ Scalable
✔️ Easy to integrate
✔️ Works across languages/services
✔️ Backbone of modern apps like Instagram, Zomato, Paytm, Netflix

Real-life example:
When you book a cab on Uber → your app calls REST APIs → get driver, distance, price, maps.

If you’re preparing for Backend/DevOps interviews — REST API is the No.1 must-know topic! 🚀







Everyone says they know REST APIs.
But interviews don’t test if you can “build an endpoint” — they test if you understand the fundamentals.

Here are the REST API concepts you MUST know:

1️⃣ What is REST & why it is stateless
2️⃣ HTTP Methods (GET, POST, PUT, PATCH, DELETE) — when to use what
3️⃣ Idempotency (Why PUT is idempotent but POST isn’t)
4️⃣ Status Codes (200 vs 201 vs 204 vs 400 vs 401 vs 403 vs 404 vs 500)
5️⃣ Request vs Response structure
6️⃣ Path Params vs Query Params
7️⃣ Headers (Authorization, Content-Type, Accept)
8️⃣ Authentication vs Authorization
9️⃣ Rate Limiting
🔟 Versioning (/v1/ vs header versioning)
1️⃣1️⃣ Pagination, Filtering, Sorting
1️⃣2️⃣ Caching (ETag, Cache-Control)

Why this matters 👇
Because companies don’t just want coders.
They want engineers who understand scalability, reliability, and proper API design.

If you don’t know:
• Why REST is stateless
• Why 201 is returned after POST
• Or why PUT must replace the entire resource

You’re not interview ready yet.

Master fundamentals. That’s what separates 6 LPA from 25 LPA developers. 🚀

Save this. Revise this. Practice explaining each concept clearly.







What is API Rate Limiting?

Rate limiting controls how many requests a client can send to your API within a specific time window.

Without it:
• Servers crash
• Bots abuse your system
• DB gets overloaded
• Costs explode

It protects your system from abuse, DDoS, brute force, and traffic spikes.

🔥 Most Important Rate Limiting Algorithms

1️⃣ Fixed Window Counter

You allow X requests per minute.
Counter resets every minute.

Problem → Traffic spike at window boundary.

2️⃣ Sliding Window Log

Store timestamps of each request.
Allow only if requests in last N seconds < limit.

Accurate ✅
But memory heavy ❌

3️⃣ Sliding Window Counter (Optimized version)

Instead of storing logs, use weighted counters.
More efficient + smoother than fixed window.

Most practical in real systems.

4️⃣ Token Bucket (Very Popular 🔥)

Tokens are added at a fixed rate.
Each request consumes one token.
If no tokens → request rejected.

Allows burst traffic ✅
Widely used in production.

5️⃣ Leaky Bucket

Requests enter a queue.
Processed at constant rate.

Smooth traffic flow
Used in networking.

💡 Where is Rate Limiting Implemented?

• API Gateway
• Load Balancer
• Nginx
• Redis-based distributed limiter
• Cloud (AWS API Gateway)








What is Docker?

Docker is a containerization platform that packages your:
• Code
• Runtime
• Libraries
• Dependencies
• Environment configs

into a single portable unit called a container.

That container can run anywhere:
✔ Local
✔ Server
✔ Cloud
✔ Kubernetes

❌ The Problem (Before Docker)

Earlier:
• Dev machine → Python 3.11
• Server → Python 3.8
• Different OS
• Missing dependencies

Result?
🔥 “Works on my machine” problem.

✅ How Docker Solves It

Docker creates an isolated environment using:
• Dockerfile → Blueprint
• Image → Read-only packaged app
• Container → Running instance of image

Now your app runs the same everywhere.

🏗 Why Docker is Important in System Design

✔ Microservices architecture
✔ CI/CD pipelines
✔ Auto scaling
✔ Environment consistency
✔ Faster deployments
✔ Works perfectly with Kubernetes

If you’re building scalable systems — Docker is non-negotiable.






CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls which frontend origins are allowed to access your backend APIs.

📌 Important:
CORS is enforced by the browser, not the backend.

❌ The Problem (Without CORS)

Imagine this scenario:
• User is logged into yourbank.com
• A malicious site hacksite.com makes an API call using the user’s cookies
• Backend processes the request 😨

👉 This is where CORS protects you.

✅ How CORS Works

1️⃣ Browser sends a request with an Origin header
2️⃣ Server responds with headers like:
• Access-Control-Allow-Origin
• Access-Control-Allow-Methods
• Access-Control-Allow-Headers

3️⃣ Browser decides whether to allow or block the response

✈️ Preflight Request (VERY IMPORTANT)

For unsafe requests (PUT, DELETE, custom headers):
• Browser sends an OPTIONS request first
• This is called Preflight
• Server must explicitly approve it

📌 Interviewers LOVE this concept.

🔐 Why CORS is CRITICAL in System Design

✔ Prevents unauthorized API access
✔ Protects user data
✔ Essential for microservices + frontend-backend separation
✔ Frequently asked in backend & system design interviews

💡 Common Interview Question

❓ “Why does API work in Postman but fail in browser?”
✅ Because Postman doesn’t enforce CORS. Browsers do.









Pub/Sub vs Queue — Explained Simply 🔥

Many developers confuse them, but interviewers don’t.

🧵 Queue (Point-to-Point Model)

• One producer → One consumer processes the message
• Message is consumed once
• Used for task processing
• Ensures load balancing

✅ Best for: Background jobs, payment processing, order handling

Examples:
• RabbitMQ
• Amazon SQS

📢 Pub/Sub (Broadcast Model)

• One publisher → Multiple subscribers
• All subscribers receive the message
• Used for event-driven systems
• Loosely coupled architecture

✅ Best for: Notifications, analytics, microservices events

Examples:
• Apache Kafka
• Google Cloud Pub/Sub

🚀 Interview One-Liner:

Queue = Task distribution
Pub/Sub = Event broadcasting

If your system needs work distribution → Queue
If your system needs event notification → Pub/Sub

Modern systems (especially microservices) often combine both.

If you’re preparing for backend or system design interviews, you MUST understand this difference.









Most developers use Redis for caching.

But in production, Redis is used for much more 👇

1️⃣ Rate Limiting (API Protection)
Using INCR + TTL
Every request increments a counter.
If limit exceeds → block user.
Used in login APIs, payment systems.

2️⃣ Distributed Locking
Using SETNX or Redlock algorithm.
Prevents multiple services from processing same job.
Example: Avoid double payment or duplicate order.

3️⃣ Real-Time Leaderboards
Using Sorted Sets (ZADD, ZRANGE).
Used in gaming apps, live scoring, ranking systems.

4️⃣ Session Store
Instead of storing sessions in DB, store in Redis.
Fast lookup + automatic expiry.

5️⃣ Pub/Sub (Real-Time Notifications)
Chat apps, live dashboards, stock updates.
One service publishes → many subscribers receive instantly.

6️⃣ Job Queues
Background processing with Lists or Streams.
Used in email sending, video processing, async tasks.

7️⃣ Distributed Counters & Analytics
Track page views, likes, clicks in real-time.

Why Redis works so well for this?

✔ In-memory speed
✔ Atomic operations
✔ Single-threaded predictable execution
✔ High availability with replication
✔ Horizontal scaling with clustering

This is why Redis is used in high-scale systems.









Redis is not just “a cache”. It’s an in-memory data structure store.

Here’s how it actually works 👇

Redis stores data in RAM, not disk.
That’s why it’s extremely fast (microseconds latency).

But how does the mechanism work?

1️⃣ Client sends request
2️⃣ App checks Redis first
3️⃣ If data exists → return instantly (Cache Hit)
4️⃣ If not → fetch from DB → store in Redis → return (Cache Miss)

This reduces database load massively.

But Redis is more than key-value:

• Strings
• Lists
• Sets
• Sorted Sets
• Hashes
• Pub/Sub
• Streams

Internally, Redis is:

✔ Single-threaded (event loop based)
✔ Uses I/O multiplexing (epoll/kqueue)
✔ Non-blocking operations
✔ Data stored in memory with optional persistence (RDB & AOF)

Why single-threaded?

Because no context switching, no locking overhead → predictable performance.

Bonus:
Redis also supports:

• TTL (auto expiry)
• LRU/LFU eviction policies
• Replication
• Clustering

That’s why it’s used for:

• Caching
• Session storage
• Rate limiting
• Leaderboards
• Real-time analytics

If you understand this deeply, system design becomes 10x easier.










Instagram doesn’t load everything at once. It loads smartly.

1️⃣ Cursor-Based Pagination
Loads 10–15 posts at a time. When you scroll → next batch loads.

2️⃣ Lazy Loading
Images/videos load only when about to appear on screen.

3️⃣ CDN Delivery
Media comes from the nearest server → low latency, smooth scroll.

4️⃣ Caching
Recently viewed posts are stored in memory/disk → no repeated API calls.

5️⃣ Background Prefetching
While you watch one post, the next few are downloaded silently.

6️⃣ Virtualized Rendering
Only visible posts stay in memory. Others are destroyed → saves RAM.

💡 Infinite scroll = Load small + Prefetch smart + Destroy unused







Caching is a performance optimization technique where frequently accessed data is stored in a faster layer (usually memory like Redis) to reduce latency and database load.

Normal flow:
User → App → Database → Response (slow)

With cache:
User → App → Cache → Response (fast)
If cache miss → DB → Update cache → Return response

🔥 Most common pattern: Cache Aside (Lazy Loading)
App checks cache → if data exists return → if not fetch from DB → store in cache → return.

Other important patterns:
• Write Through – update cache & DB together
• Write Back – update cache, DB asynchronously
• Read Through – cache layer handles DB fetch

Senior-level concepts interviewers expect:
• TTL (expiry time to avoid stale data)
• Cache Invalidation (hardest problem in CS)
• Eviction policies (LRU, LFU)
• Cache Stampede (many requests after expiry)
• Cache Avalanche (many keys expire together)
• Cache Penetration (requests for non-existent data)

Why caching matters?
Without cache → DB overload + high latency
With cache → scalable, cost-efficient, high-performance system












What exactly is WebSocket?

Think of HTTP like ordering food on Zomato 🍔
You order → wait → delivery → connection closed.

Now imagine calling the restaurant 📞
Both of you stay connected and talk anytime.
That’s WebSocket.

👉 A single persistent connection between client & server.

🔄 Why HTTP fails for real-time apps?

With HTTP:
• Client keeps asking 👉 “Any update?”
• Server replies 👉 “No”
• Repeat ❌ (wastes time & bandwidth)

This is called polling (slow & inefficient).

⚡ How WebSocket solves this?

WebSocket:
• Connection opens once
• Stays open
• Server can push data anytime
• Client can send data anytime

👉 Two-way (bi-directional) communication

🌍 Real-Life Examples (Interviewers LOVE this)

✔️ Chat apps – WhatsApp, Slack
✔️ Live notifications – Instagram likes, comments
✔️ Stock prices – Live market updates
✔️ Live dashboards – CPU, server metrics
✔️ Online gaming – Player movements
✔️ Live tracking – Uber, Swiggy delivery

🧑‍💻 Technical but simple
• Starts as HTTP handshake
• Upgrades to WebSocket protocol (ws / wss)
• No repeated headers like REST
• Very low latency
• Perfect for real-time systems

❓ Interview Question You’ll Get

Q: When should you NOT use WebSockets?

❌ Simple CRUD apps
❌ Normal APIs
❌ When real-time is not required

Use REST for normal apps
Use WebSocket when instant updates matter










Hashing vs Encryption – Explained Simply + Technically

Let’s end this confusion once and for all 👇

🟢 What is Hashing?

Easy Language:
Hashing is like a one-way machine.
You put data in → you get a fixed output → you can never get the original data back.

Technical Language:
Hashing uses a mathematical function to convert input data into a fixed-length hash value.
It is deterministic, irreversible, and mainly used for data integrity & password storage.

📌 Example:

password123 → 482c811da5d5b4bc6d497ffa98491e38

Popular Hashing Algorithms:
• SHA-256
• SHA-512
• bcrypt
• Argon2

✅ Used for:
• Password storage
• Data integrity checks
• Digital signatures

🔵 What is Encryption?

Easy Language:
Encryption is like a lock & key system.
Data is locked using a key 🔑 and can be unlocked using the same or another key.

Technical Language:
Encryption transforms plaintext into ciphertext using an encryption algorithm and key.
It is reversible if you have the correct decryption key.

📌 Example:

Hello → X8#@!kL → Hello

Popular Encryption Algorithms:
• AES
• RSA
• DES (legacy)

✅ Used for:
• Securing data in transit (HTTPS)
• Securing data at rest
• Secure communication

💡 Interview Tip (Very Important!)

❌ Never encrypt passwords
✅ Always hash passwords + salt









gRPC – When SPEED matters

gRPC is a synchronous, request–response communication protocol.

Use gRPC when:
• You need real-time communication
• Low latency is critical (milliseconds)
• One service needs immediate response from another
• Microservice-to-microservice calls
• Mobile ↔ Backend, Backend ↔ Backend

Examples:
• User authentication
• Payment processing
• Fetch user profile
• Inventory check before order placement

👉 Think: “Call & get response immediately”

🔥 Kafka – When SCALE & EVENTS matter

Kafka is an asynchronous, event-driven messaging system.

Use Kafka when:
• You want loose coupling
• High throughput & scalability
• One event must be consumed by multiple services
• You don’t need an instant response
• Event replay & durability are important

Examples:
• Order placed event
• User activity tracking
• Logs & analytics
• Email / notification systems
• Data pipelines

👉 Think: “Fire event & forget”

“gRPC is for direct service calls, Kafka is for event-driven architecture.”










Top 30 Database Interview Questions

1️⃣ What is the difference between SQL and NoSQL databases?
2️⃣ When should you choose SQL over NoSQL?
3️⃣ What is normalization and why is it important?
4️⃣ What is denormalization and when should we use it?
5️⃣ What is a primary key vs unique key?
6️⃣ What is a foreign key and how does it maintain integrity?
7️⃣ What is an index and how does it improve performance?
8️⃣ What are the types of indexes (B-Tree, Hash, GIN, GiST)?
9️⃣ When NOT to use indexes?
🔟 What is a composite index?

1️⃣1️⃣ Difference between DELETE, TRUNCATE, and DROP
1️⃣2️⃣ What is ACID property in databases?
1️⃣3️⃣ What are transactions and why are they important?
1️⃣4️⃣ What is isolation level? Explain all levels
1️⃣5️⃣ What is deadlock? How do you prevent it?

1️⃣6️⃣ What is sharding vs partitioning?
1️⃣7️⃣ What is replication and its types?
1️⃣8️⃣ Difference between clustered and non-clustered index
1️⃣9️⃣ What is query execution plan?
2️⃣0️⃣ How do you optimize a slow SQL query?

2️⃣1️⃣ What is JOIN? Explain different types of joins
2️⃣2️⃣ Difference between INNER JOIN and LEFT JOIN
2️⃣3️⃣ What is N+1 query problem?
2️⃣4️⃣ What is database locking?
2️⃣5️⃣ What is optimistic vs pessimistic locking?

2️⃣6️⃣ What is CAP theorem?
2️⃣7️⃣ What is eventual consistency?
2️⃣8️⃣ Difference between OLTP and OLAP
2️⃣9️⃣ What is stored procedure vs function?
3️⃣0️⃣ How do you handle database migrations in production?












Multithreading vs Multiprocessing in Node.js

🔹 Multithreading in Node.js

👉 What it is:

Node.js is single-threaded by default

Uses an event loop + async non-blocking I/O

Can create real threads using Worker Threads

👉 Key Point (VERY IMPORTANT):

Main thread runs JavaScript

Heavy tasks can block the event loop ❌

Worker Threads allow parallel execution ✔

👉 Result:

❌ Not ideal for CPU-heavy tasks on main thread

✅ Excellent for I/O-bound tasks using async/await, promises

👉 Best Use Cases:

API calls

Database queries

File operations

Network requests

👉 Why it’s powerful:
When one async task waits (DB/API), Node handles other requests → high scalability.

🔹 Multiprocessing in Node.js

👉 What it is:

Multiple processes using:

cluster module

child_process

Each process has:

Its own memory

Its own event loop

Separate V8 instance

👉 Result:

✅ Uses multiple CPU cores

✅ True parallelism

❌ Higher memory usage than threads

👉 Best Use Cases:

CPU-intensive computations

Image/video processing

Data crunching

ML workloads

🔥 CPU-Bound vs I/O-Bound (Interview Gold)
🧠 CPU-Bound

Heavy computation

Blocks event loop if run in main thread

Examples:

Encryption

Image processing

Large calculations

➡️ Use:

Worker Threads

child_process / cluster

🌐 I/O-Bound

Waiting for external resources

Examples:

API calls

DB queries

File read/write

Network requests

➡️ Use:

Async/await

Promises

Event loop (default Node strength)

⚡ Node.js Architecture Insight (Important for interviews)

Node is not truly single-threaded:

Main thread → Event loop

Background threads (libuv):

File I/O

DNS

Network

Worker Threads → CPU tasks

Cluster → Multi-core scaling













What is Database Indexing?

Indexing is a data structure that helps the database find rows faster without scanning the entire table.

Think of it like:
📖 Book index → Jump directly to the page
🗄️ DB index → Jump directly to the row

Without index → Full Table Scan
With index → Direct Lookup

🟢 How Indexing Works (Simple)
1. DB creates a separate structure (index)
2. Index stores:
• Column value
• Pointer to actual row
3. Query hits the index first
4. DB jumps directly to required rows

Result → ⚡ Faster SELECT queries

🟢 Types of Indexing (Most Important)

1️⃣ B-Tree Index (Most common)
• Used for =, <, >, BETWEEN
• Default in most databases
• Balanced tree structure

2️⃣ Hash Index
• Very fast for exact match =
• ❌ Doesn’t work for range queries

3️⃣ Composite Index
• Index on multiple columns
• Order matters ((user_id, created_at) ≠ (created_at, user_id))

4️⃣ Unique Index
• Prevents duplicate values
• Improves lookup speed + data integrity

5️⃣ Full-Text Index
• Used for search (LIKE, text search)
• Great for blogs, search features

🟢 Pros of Indexing ✅

✔️ Faster SELECT queries
✔️ Better performance on large tables
✔️ Efficient sorting & filtering
✔️ Optimized JOIN operations

🟢 Cons of Indexing ⚠️

❌ Slower INSERT / UPDATE / DELETE
❌ Extra disk space
❌ Too many indexes = bad performance
❌ Needs proper planning

🟢 When NOT to Use Index

🚫 Small tables
🚫 Columns with very few unique values
🚫 Tables with heavy write operations

🟢 Golden Rule 💡

“Index what you READ often,
not what you WRITE often.”













What is an API Gateway?
An API Gateway is a single entry point between clients (mobile/web) and backend microservices.

❌ Without API Gateway

• Frontend talks to multiple services
• Complex client logic
• Security duplicated everywhere
• Hard to scale & monitor

✅ With API Gateway

Client → API Gateway → Microservices

⚙️ What API Gateway Actually Does

1️⃣ Request Routing
Routes /users → User Service
Routes /orders → Order Service

2️⃣ Authentication & Authorization
Validates JWT / OAuth
Blocks unauthorized users before backend

3️⃣ Rate Limiting
Prevents abuse
Example: 100 requests/min per user

4️⃣ Load Balancing
Distributes traffic across multiple service instances

5️⃣ Response Aggregation
Calls multiple services
Returns one combined response to client

6️⃣ Logging & Monitoring
Tracks request time, failures, traffic spikes

7️⃣ Protocol Translation
Client → HTTP
Backend → gRPC / internal protocols

🔥 Why Interviewers Love This Topic

Because API Gateway =
✅ Scalability
✅ Security
✅ Clean Architecture
✅ Production-ready systems

🛠️ Real-World Examples

• AWS API Gateway
• NGINX
• Kong
• Zuul

API Gateway = Smart security guard + traffic manager for your backend









They are actually asked in DevOps interviews 👇

🔹 Core DevOps
1. What is DevOps and why do companies need it?
2. CI vs CD – what is the real difference?
3. How does DevOps improve deployment frequency?
4. What are the biggest DevOps challenges you faced?

🔹 Linux & OS
5. Difference between process and thread?
6. How do you find which service is using a port?
7. Explain system load average.
8. How do you troubleshoot high CPU usage?

🔹 Docker
9. What happens internally when you run docker run?
10. Difference between Docker image and container?
11. COPY vs ADD in Dockerfile?
12. How do you reduce Docker image size?
13. What is a multi-stage Docker build?

🔹 Kubernetes
14. Why Kubernetes if we already have Docker?
15. Pod vs Deployment vs Service?
16. What happens when a pod crashes?
17. How does Kubernetes handle scaling?
18. What is HPA (Horizontal Pod Autoscaler)?

🔹 CI/CD
19. How does a CI/CD pipeline work?
20. What happens if a deployment fails?
21. Blue-Green vs Canary deployment?
22. How do you roll back a release?

🔹 Cloud & Infra
23. Difference between EC2, ECS, and EKS?
24. How does load balancing work?
25. What is Auto Scaling and when do you use it?
26. Difference between public and private subnet?

🔹 Monitoring & Security
27. How do you monitor applications in production?
28. What is centralized logging?
29. How do you secure secrets in DevOps?
30. How do you handle production incidents?













Ever noticed this on shopping apps or payment apps?
You tap Pay twice because the app lagged…
But 💡 only ONE payment is deducted.

This is NOT magic.
This is backend engineering done right.

Here’s what actually happens 👇

⸻

🔹 1️⃣ Every payment has a Unique Transaction ID

The moment you click Pay, the app generates a unique payment ID
(example: txn_9834abc)

Even if you click twice,
👉 both requests carry the SAME transaction ID

So the backend knows:

“This payment already exists.”

⸻

🔹 2️⃣ Backend uses Idempotency

Idempotency = same request → same result

If the server receives:
• Request #1 → payment processed ✅
• Request #2 (same ID) → ignored safely

💡 This prevents duplicate charges.

⸻

🔹 3️⃣ Database has unique constraints

Payment tables usually enforce:
• transaction_id as UNIQUE

So even if two requests race:
• First insert → success
• Second insert → ❌ rejected automatically

Database saves your money 💰

⸻

🔹 4️⃣ Payment Gateway confirms only once

Apps don’t blindly trust the click.

They always:
• Ask the payment gateway
• Verify payment status
• Update order only after confirmation

No confirmation = no second charge.

⸻

🔹 5️⃣ Frontend disables the button (extra safety)

You may not notice it, but:
• Button becomes disabled
• Loader is shown
• Clicks are blocked temporarily

This is just UI protection — real safety is on the backend.

⸻

🚨 Why this is SUPER IMPORTANT?

Without these checks:
• Users get double charged
• Companies lose trust
• Refund chaos 💥

That’s why fintech & ecommerce systems are built to be idempotent.

If clicking twice doesn’t charge twice —
thank your backend engineer. 😎











Uber looks simple — open app, click ride, driver shows up.
But behind the scenes? It’s one of the craziest real-time systems ever built 🤯

Here’s how Uber finds your cab every single time 👇

🚕 1. Location Streaming
Your phone and every driver continuously send GPS updates — so Uber always knows who’s nearby.

🎯 2. Geo-Index Search
Instead of checking all drivers, Uber uses grid-based maps & geohash indexing.
Only drivers in your zone are considered — FAST.

⚡ 3. Matching Algorithm
Uber picks the best driver, not just the closest — it checks:
• ETA
• Driver availability
• Traffic
• Surge pricing zones
• Cancellation probability

🧠 4. Distributed Microservices
Pricing, matching, maps, payments — all separate services talking over APIs.
If one fails, the others don’t break.

💾 5. Caching + Load Balancing
Hot data → cached
Requests → routed across thousands of servers
No bottlenecks. No downtime.

🛡️ 6. Redundancy Everywhere
Multiple data centers
Replicas
Failovers
You can request a ride even if a whole region goes down 🔥

From your tap → to driver assignment → to navigation
Everything happens in milliseconds.










Ever faced this?
Local: Code runs perfectly
Server: BOOM 💥 Errors everywhere

You’re not alone 😅
Here are real reasons why this happens, and how to fix them 👇

🚨 Why your code fails on server

1️⃣ Different Python/Node/Java version
Your laptop is running v1.1
Server is running v1.0 or v1.4 → behavior changes

2️⃣ Missing dependencies
Locally you installed packages
But didn’t add them to requirements.txt, Pipfile, or package.json

3️⃣ Environment variables
Local .env exists
Server doesn’t know the secrets, DB URL, API keys, etc

4️⃣ Different OS or CPU
OS X vs Ubuntu vs Windows
Path issues, permissions, and system libraries differ

5️⃣ Database / storage issues
Local DB: clean & small
Prod DB: large, real data, permissions, migrations missing

6️⃣ Case sensitivity & file paths
Windows ignores case → Linux does NOT
User.png ≠ user.png

7️⃣ Server security
Firewall, SSL, HTTPS, CORS, IAM policies → block requests that run fine locally

🛠 How to fix it (Step-by-step plan)

✔ 1. Match versions
Use docker / poetry / pyenv / nvm / requirements lock files

✔ 2. Track every dependency
Never rely on “it installed on laptop magically”

✔ 3. Use .env consistently
Local + staging + prod with same key names

✔ 4. Run DB migrations
Before deploying → run migrate or schema updates

✔ 5. Log EVERYTHING
Prod logs tell the truth your laptop hides 😎

✔ 6. Test on staging
Don’t deploy straight to prod
Staging = your safety net

✔ 7. Automate deployment
CI/CD stops human errors & missing steps











Caching is the secret weapon behind fast apps — and Redis is the superhero 💥

Here’s how it actually works 👇

🔹 Step 1 — First Request
Client hits your API.
Your backend queries the database and sends data back.
But before responding, the server stores the output in Redis.
🧠 Redis = memory-based super-fast key/value storage.

🔹 Step 2 — Next Requests
Next user requests the same data —
❌ No DB call
✔ Redis returns the result instantly
This reduces latency from 100ms → 1ms ⚡

🔹 Why Redis Saves You
🔥 Cuts DB load massively
📈 Boosts speed & user experience
💰 Saves infrastructure cost — fewer servers
🔒 Can handle millions of reads/sec

🔹 Where It Works Best
✨ Homepage, Dashboard
✨ Frequently viewed products
✨ Leaderboards & sessions
✨ Shopping cart stored in memory

🔹 TTL Magic 🕒
Set expiry (TTL) to keep cache fresh
Example:
User profile — 30 min cache
Trending page — 10 sec

🔹 Bonus: Cache Invalidation Strategy
✨ Cache-Aside Pattern
• Check Redis → Miss → Fetch DB → Write to Redis
• Redis Hit → Return instantly
Simple + powerful











Pub/Sub vs Queue — Explained Simply 🔥

Many developers confuse them, but interviewers don’t.

🧵 Queue (Point-to-Point Model)

• One producer → One consumer processes the message
• Message is consumed once
• Used for task processing
• Ensures load balancing

✅ Best for: Background jobs, payment processing, order handling

Examples:
• RabbitMQ
• Amazon SQS

📢 Pub/Sub (Broadcast Model)

• One publisher → Multiple subscribers
• All subscribers receive the message
• Used for event-driven systems
• Loosely coupled architecture

✅ Best for: Notifications, analytics, microservices events

Examples:
• Apache Kafka
• Google Cloud Pub/Sub

🚀 Interview One-Liner:

Queue = Task distribution
Pub/Sub = Event broadcasting

If your system needs work distribution → Queue
If your system needs event notification → Pub/Sub

Modern systems (especially microservices) often combine both.

If you’re preparing for backend or system design interviews, you MUST understand this difference.










If an API works in postman but fails in browser, which headers would you inspect first?


1️⃣ CORS headers
Access Control Allow Origin
Access Control Allow Methods
Access Control Allow Headers
Access Control Allow Credentials
Postman does not care about CORS
Browser does
If it works in Postman but not in browser 90 percent chance it is CORS

2️⃣ Authorization header
Is Bearer token actually going from frontend
Is cookie being sent
Did I enable withCredentials
Did backend allow credentials

3️⃣ Content Type
Frontend might accidentally send text plain instead of application json and body parser just ignores it

4️⃣ Cookies
SameSite
Secure
HttpOnly
SameSite strict or lax can silently block your request and you keep debugging for 2 hours

5️⃣ DevTools Network tab
Compare request headers
Compare response headers
Read the console error properly









If an API endpoints response size suddenly spikes in production, which monitoring metrics and payload level checks would you use to quickly identify the root cause?

API debugging methods

1️⃣ First I don’t assume it’s a code issue. I check monitoring. I look at APM dashboards like Datadog or New Relic and see which specific endpoint’s response_body_size or bytes_sent increased. I correlate it with the exact deployment time. If it started right after a release, that’s already a strong signal.

2️⃣ Next I check at the load balancer or CDN level. I verify Content Length and whether Content Encoding gzip is still enabled. Sometimes the payload didn’t grow, compression just stopped working and now everything looks bigger.

3️⃣ After that I compare the actual payload. I hit the endpoint locally or in Postman and inspect the JSON. Did someone remove pagination. Did a select or projection get removed. Are we now returning full nested relations instead of summaries. Overfetching is one of the most common causes.

4️⃣ Then I quickly check database metrics. Are more rows being returned. Did a filter break. Did a limit get removed.









When response are slow only for a specific endpoint, how do you narrow down wheather its network, db or code ?


1️⃣ First I confirm only that endpoint is slow and others are fine. If yes then it’s not infra wide. It’s something specific to that route. I measure execution time inside the server. If the server finishes in 80ms but client gets response in 2 seconds then clearly it’s network or load balancer or gateway issue.

2️⃣ If server itself is taking time then I log database time separately. If DB call is slow I run explain and check indexing, full scans, sorting, locks, CPU spikes. Most of the time missing index is the villain.

3️⃣ If DB is fast then I look at the code. Heavy loops, large JSON processing, blocking sync logic in Node, or maybe that endpoint is calling another microservice which is slow. I log each external call duration











Can you explain cache control in the context of APIs and tell me the diffrence between- no cache, no store, private

Cache Control is not something browser sends first. It is a response header sent by the server along with the API response. Server is basically telling browser or CDN how to treat that data.

Example
User hits GET /api/profile
Server sends profile JSON + Cache Control header

Now what happens next depends on the type of Cache Control 👇

1️⃣ no-cache
This does NOT mean do not cache.
It means you can store the response, but before using it again you must check with the server if it is still valid.
So browser keeps a copy, but every time before reuse it revalidates.

Perfect for dashboards or data that changes often but not every second.

2️⃣ no-store
This means do not store this response anywhere.
Not in browser memory. Not on disk. Not in CDN.
Used for login response, OTP verification, bank details or anything sensitive.
Every single request must hit the server again. No shortcuts.

3️⃣ private
This means browser can store it, but shared caches like CDN cannot.
Very important for authenticated APIs like user profile.
It ensures one user’s data is not cached and accidentally served to another user.

🚨Real production mistake 🚨
If you accidentally send public with max-age on an authenticated endpoint, CDN may cache it based on URL.

Now imagine
User A hits /api/profile
CDN caches it
User B hits same URL
CDN serves User A’s data
Boom. Data leak !!!!!











Your payment API timed out so the client retried the request. Customer was charged only once but three orders got created in production. as a backend engineer how will you fix this and make sure even if the request is sent five times only one order is created

This is a classic retry problem and the correct solution is idempotency.

- First I will introduce an Idempotency Key.
The client must send a unique key with every payment request. For example a UUID generated on the client side.When the request hits the server I will first check in the database whether this idempotency key already exists.

If it exists I will immediately return the stored response instead of processing the payment again.

If it does not exist I will start a database transaction. Inside that transaction I will process the payment create the order and store the idempotency key along with the final response in a table.

I will also put a unique constraint on the idempotency key column so even if two requests hit at the exact same time the database itself will prevent duplicate entries.

Additionally I will add a unique constraint on payment_id in the orders table. This ensures that even if application logic fails the database will never allow duplicate orders for the same payment.

So the full protection is
Client generated idempotency key
Database level unique constraint
Transaction to keep operations atomic
Return same response on retries

This guarantees that even under network retries concurrency or mobile app resubmissions only one order will ever be created.

This is the difference between writing APIs and designing production safe systems.









Explain diffrence between put and patch method?

PUT vs PATCH (in simple words)
Think of it like this 👇

PUT = Replace everything
PATCH = Change only what’s needed

Imagine you have a profile data :

Name: Deep
Email: deep@mail.com
Verified: Yes

Now…
If you use PUT and send only: “Change name to Deepchand”
The system may replace the whole profile with just the name.

Email? Gone.
Verified? Gone.

That’s how production breaks.

But if you use PATCH:
It only changes the name.
Everything else stays safe.

Simple rule:
If you’re updating just one or two fields -> use PATCH.
If you’re replacing the entire thing on purpose -> use PUT.









A load balancer is NOT random.

It follows algorithms.

Here’s how it really works:

1️⃣ Round Robin
Requests go sequentially
Server A → B → C → repeat

Simple. Works for similar-capacity servers.

2️⃣ Least Connections
Traffic goes to the server
with the fewest active requests.

Better for uneven workloads.

3️⃣ Weighted Routing
Stronger servers get
more traffic.

Example:
Server A (weight 3)
Server B (weight 1)
A gets 3x traffic.

4️⃣ Health Checks
Every few seconds
LB checks if server is alive.

If a server fails →
It’s instantly removed from rotation.

5️⃣ Consistent Hashing
Used when session stickiness matters.
Same user → same server.

Important for:
• Caching
• WebSockets
• Stateful services

At scale, a load balancer does 3 things:

• Distributes traffic
• Removes unhealthy nodes
• Prevents overload

It’s not random.

It’s controlled traffic engineering ⚙️









A user likes a post with 1m likes. does db lock and update count immediatly?

Answer 👇

Step 1️⃣
The like event is captured
but the main counter is NOT updated instantly.

Step 2️⃣
The like is pushed to a queue
(Kafka / PubSub).

Step 3️⃣
A background worker processes likes
in batches.

Step 4️⃣
The like count is updated periodically
(not per request).

Step 5️⃣
Cache (Redis) is used
to show near-real-time counts.

Why this design works:
• Avoids database locking
• Handles spikes smoothly
• Scales to millions of likes

Exact counts are slow.
Approximate counts scale.

That’s how social apps stay fast ⚙️











How does instagram generate  your feed in miliseconds?

It’s NOT fetching everything in real time.

It’s pre-computed + ranked smartly.

Here’s what actually happens:

1️⃣ Candidate Generation

Instagram first selects a small pool of posts:
• Accounts you follow
• Suggested accounts
• Popular content

Not the entire database.

---

2️⃣ Pre-Computed Signals

For every post, Instagram already stores:
• Engagement score
• Like velocity
• Watch time
• Your past interaction history

This avoids heavy computation per request.

---

3️⃣ Ranking Model

A machine learning model ranks
those candidate posts
based on probability you’ll engage.

Only top ~50–100 are selected.

---

4️⃣ Caching Layer

Your feed is partially cached.

Frequently accessed data
comes from in-memory systems (Redis).

Database is not hit every time.

---

5️⃣ Async Updates

Likes, comments, view counts
update asynchronously.

Feed rendering doesn’t wait.

---

Instagram doesn’t build your feed
from scratch every time.

It narrows → ranks → caches.

That’s real large-scale system design ⚙️










Your system is handling 10000 req per second, suddenly crash one server what happen next?

 well-designed system
does NOT panic.

Here’s what actually happens:

1️⃣ Health Check Fails

Load balancer continuously pings servers.

If a server stops responding →
It’s immediately removed from traffic rotation.

No new requests go to it.

---

2️⃣ In-Flight Requests

Requests already running on that server
may fail.

Clients retry automatically
(using retry logic + exponential backoff).

This is why idempotency matters.

---

3️⃣ Traffic Redistribution

The remaining servers now receive
more traffic.

If they were already near capacity →
Latency increases.

That’s why we never run servers at 100%.

---

4️⃣ Auto Scaling Kicks In

Cloud monitors CPU / request rate.

New instance starts automatically.

Once healthy →
Load balancer adds it back.

---

5️⃣ Protection Mechanisms

To prevent cascading failure:

• Rate limiting
• Circuit breakers
• Backpressure
• Connection draining

Without these,
one crash can bring down the system.

---

High availability is not about
preventing crashes.

It’s about surviving them.











403 isn’t a “code bug”.
It’s usually a **policy / auth / gateway** problem.

Here’s the exact checklist I follow:

1️⃣ Confirm WHO is blocking
• App logs show request reached?
• Or blocked before app (CDN/WAF/API Gateway/Nginx)?

2️⃣ Check Auth Headers
• Is `Authorization` header present in prod?
• Token format correct (Bearer <token>)?
• Proxy stripping headers?

3️⃣ CORS vs 403 Confusion
• Browser preflight (OPTIONS) failing?
• Missing `Access-Control-Allow-*` headers?
• Allowed origins wrong?

4️⃣ Reverse Proxy Rules (Nginx/ALB/API Gateway)
• Path mismatch `/api/v1` vs `/api/v1/`
• Method blocked (PUT/DELETE not allowed)
• IP allowlist/denylist enabled?

5️⃣ Role/Permission Mismatch
• Prod uses real RBAC/ABAC policies
• Local uses bypass / dev user
• Verify user roles + scopes in token

6️⃣ WAF / Security Rules
• ModSecurity / Cloudflare / AWS WAF
• Blocking patterns like SQLi/XSS
• Large payload / suspicious params

7️⃣ Environment Config Drift
• Wrong secrets / issuer / audience
• Wrong public keys (JWT verify fails)
• Clock skew causing token “expired” in prod

8️⃣ Reproduce with cURL
Test outside browser to isolate CORS:
• `curl -v -H "Authorization: Bearer …" https://prod/api`

At scale, debugging is about finding
**which layer said NO**.

That’s real backend system design ⚙️













How do you handle 10 million request per minute without your database melting?

Answer ➡️ High traffic isn’t a database problem.
It’s an architecture problem.

Here’s the system that survives:

1️⃣ Cache First
Serve hot reads from Redis / CDN.
Don’t hit DB for repeated data.

2️⃣ Read/Write Split
Reads go to replicas.
Writes go to primary.

3️⃣ Queue the Heavy Work
Emails, reports, notifications → async.
API stays fast.

4️⃣ Rate Limit + Throttle
Stop abuse and spikes at the edge.
Protect core services.

5️⃣ Partition/Sharding
Split big tables by user_id / region.
No single DB becomes a bottleneck.

6️⃣ Observability
Slow queries, p95 latency, error rate.
Fix before users notice.

At scale, the fastest database query
is the one you never run.

That’s real backend system design ⚙️













How does whatsapp send a message in 0.1 seconds?

Sending fast isn’t about typing speed.
It’s about connection design.

Here’s what actually happens:

1️⃣ Persistent Connection
WhatsApp keeps a live TCP/WebSocket
connection open with its server.
No need to create a new connection per message.

2️⃣ No HTTP Overhead
Unlike normal APIs,
messages aren’t sent as fresh HTTP requests.
They go through an already-open channel.

3️⃣ Lightweight Protocol
Only minimal message data is sent.
No heavy payload, no unnecessary metadata.

4️⃣ Smart Routing
The server instantly routes the message
to the receiver’s active session.

5️⃣ Asynchronous Delivery
If receiver is offline,
message is queued —
not blocking the sender.

6️⃣ Distributed Infrastructure
Traffic is handled by multiple servers
across regions — no single bottleneck.

Why it feels instant:
• No connection setup delay
• No polling
• Real-time push architecture

Speed isn’t magic.
It’s smart architecture.

That’s real system design ⚙️












How do you desing an API that survives 1 milion request per seconds?

1 Million RPS isn’t about code.
It’s about architecture.

Here are the 8 layers that matter:

1️⃣ Load Balancer
Split traffic across hundreds of servers.
No single machine becomes a bottleneck.

2️⃣ Horizontal Scaling
Add more servers as traffic grows.
Scale out, not up.

3️⃣ Caching Layer
Most requests are repeated.
Serve from Redis / CDN instead of DB.

4️⃣ Stateless Services
Any request can hit any server.
No in-memory session dependency.

5️⃣ Database Scaling
Read replicas for heavy reads.
Sharding for massive data growth.

6️⃣ Async Processing
Move slow operations to queues.
API should respond fast.

7️⃣ Rate Limiting
Protect from abuse and traffic spikes.

8️⃣ Monitoring & Auto-Scaling
Detect load early.
Scale before the system melts.

At this level,
performance is a system problem —
not a coding problem.











Telegram group has 200000 members. you send 1 message. is is 1 database write or 200000 writes?

Step 1️⃣
When you send a message,
Telegram stores it ONLY ONCE
in the group’s message table.

Example:
(message_id, group_id, sender_id, content)

Step 2️⃣
There is a separate table
that links users to the group.

(group_id ↔ user_id)

This tells Telegram
who belongs to that group.

Step 3️⃣
The message is linked to the group,
not to individual users.

Step 4️⃣
When any user opens the group,
Telegram fetches messages
where group_id = X.

Everyone sees the same shared history.

Step 5️⃣
Each user’s app just remembers
the last message they have seen.

Telegram only sends
what they missed.

Why this design works:
• Only 1 message stored
• No duplicate copies
• Massive groups scale smoothly

Messages are stored once.
Users are linked through the group.

That’s real system design ⚙️









You search for a flight price = 5000
now its 5500

you search again after 10 minutes
now its 5800

did the airline increase the price because you searched again?

Step 1️⃣
Flight prices are dynamic,
not fixed.

Step 2️⃣
Airlines divide seats into
price “buckets”.

Example:
First 20 seats → ₹5,000
Next 20 seats → ₹5,800
Next seats → ₹6,500

Step 3️⃣
When someone books a seat,
the cheaper bucket may get exhausted.

Step 4️⃣
When you search again,
you might now be seeing
the next pricing bucket.

Step 5️⃣
Prices also update in real time based on:
• Demand
• Time left before departure
• Seat availability

Step 6️⃣
Your search doesn’t increase the price.
Inventory and demand do.

Why this design works:
• Maximizes airline revenue
• Adjusts to real-time demand
• Prevents underpricing popular routes

Flight pricing is algorithm-driven,
not revenge-driven.





You request an uber a driver is assigned within seconds. how does uber find the right driver so fast?

Answer 👇

Step 1️⃣
Drivers keep sending
their live location to Uber servers.

Step 2️⃣
Uber breaks the city into
small nearby zones.

Step 3️⃣
When you request a ride,
Uber searches ONLY nearby zones,
not the entire city.

Step 4️⃣
From these drivers, Uber filters by:
• Availability
• Distance
• Vehicle type

Step 5️⃣
A matching algorithm ranks drivers
and sends the request to the best one.

Step 6️⃣
If the driver rejects,
the next best driver is tried.

Why this design works:
• Super fast matching
• No global search
• Scales to millions of rides

Uber doesn’t search more.
It searches smarter.












A UUID is like a digital fingerprint for data.🤯

Instead of saying:
• User ID = 1
• User ID = 2

(which can clash if two systems both create “User 1”)

You generate something like:
550e8400-e29b-41d4-a716-446655440000

The chance that another system randomly creates the exact same UUID is astronomically small.
Now you might wonder: Why UUIDs Exist?

In modern systems you often have:
• Multiple servers
• Microservices
• Offline devices syncing later
• Distributed databases
• APIs across companies

You can’t rely on simple incremental IDs anymore.
UUIDs let every system generate IDs independently without asking permission from a central authority. And that’s literally it😁












Webhooks are the real-time secret you need for your next system design interview. Instead of your app constantly asking “Did it happen?”, the service calls YOU the second the event occurs. ⚡️
Perfect for:
✅ Payment processing (Stripe)
✅ CI/CD updates (GitHub)
✅ Real-time notifications


What is webhook?

A webhook is an event-based HTTP callback that automatically sends real-time data from one application to another when a specific event occurs

How Webhook works?

1️⃣ Client/Frontend – User initiates an action (like making a payment from a web or mobile app).

2️⃣ Backend (API Server) – The frontend sends a purchase request to your backend server.

3️⃣ Stripe Server (Payment Processing) – Your backend calls Stripe API to process the payment.

4️⃣ Event Triggered – After payment success or failure, Stripe creates an event internally.

5️⃣ Webhook Call (HTTP POST) – Stripe sends that event data to your webhook endpoint (e.g., /api/webhook).

6️⃣ Your Server (Webhook Handler) – Your backend receives the webhook request and verifies the event signature.

7️⃣ Business Logic Execution – Based on the event type (payment success, failure, refund), your server runs logic.

8️⃣ Action Layer – The system updates the database, sends email confirmation, or triggers notifications












What is Cache Stampede?

Cache Stampede happens when:
1. A popular cache key expires
2. Many users request the same data at the same time
3. All requests miss the cache
4. Every request hits the database
5. DB gets overloaded → latency spikes → possible crash

Instead of reducing load, cache suddenly becomes the reason for system failure.

💥 Why It Happens?
• Fixed TTL expiration
• Highly popular endpoints
• No request coordination
• No protection for cache miss

When one key expires, traffic explodes toward DB instantly.

🛠 How to Prevent Cache Stampede

✅ 1. Mutex / Distributed Lock
Allow only ONE request to rebuild cache
Others wait for updated value

Example: Redis SETNX locking

✅ 2. Cache Warming
Refresh important keys before they expire

✅ 3. Randomized TTL
Add small random time to expiry
Prevents multiple keys expiring together

Instead of:
TTL = 60s

Use:
TTL = 60 + random(0–30)s

✅ 4. Stale-While-Revalidate (Best Pattern)
Serve old data
Refresh cache in background

Users never wait.
System never crashes.













Redis is single-threaded for command execution, but not single-threaded overall.
It handles millions of requests per second because of:
👉 Event-driven architecture
👉 Non-blocking I/O
👉 In-memory operations
👉 Very small & optimized commands
🧠 What “Single-Threaded” Actually Means
Redis uses one main thread to:
✅ Execute commands
✅ Modify data structures
This guarantees:
No race conditions
No locks
No context switching overhead
Which = faster execution
🚀 Then How Does It Handle Millions of Requests?

1️⃣ Event Loop + Non-Blocking I/O
Redis uses an event loop (like Node.js):
One thread
Handles many client connections
Uses OS multiplexing (epoll/kqueue)
So instead of:
❌ One thread per client
It does:
✅ One thread → many sockets → async handling

2️⃣ Everything Is In-Memory
Redis does RAM operations, not disk:
No disk seek time
No heavy serialization
RAM access = nanoseconds ⚡

3️⃣ Commands Are Extremely Fast
Most Redis operations are:
O(1) or O(logN)
Example:
GET
SET
INCR
HSET
LPUSH
Each finishes in microseconds.

4️⃣ No Locks = No Waiting











MQ = Asynchronous communication between producer and consumer. Its a concept.

Kafka & RabbitMQ = tools that implement it.
.

MQ (Message Queue) is a middleware that allows systems to communicate asynchronously using a
Producer → Queue → Consumer model.
It helps systems talk to each other without waiting, improving scalability and reliability.
.
🧃 Easy Example (Layman + Technical)
Example: Food Delivery App
When you place an order:
1️⃣ Order Service receives request
2️⃣ It sends order details to MQ
3️⃣ Payment Service consumes it
4️⃣ Inventory Service consumes it
5️⃣ Notification Service consumes it
Even if notification fails, order still succeeds.
👉 That’s decoupling.
.
⚙️ Internal Working
1️⃣ Producer Sends Message
Creates message (JSON, XML, etc.)
Sends to MQ broker over network
Broker assigns ID / offset
Message stored in memory or disk
2️⃣ Broker Stores Message
Message stored in queue (FIFO usually)
If durable → written to disk
Maintains order (within queue/partition)
Tracks which consumer read which message
3️⃣ Consumer Reads Message
Pulls (or receives) message
Processes business logic
Sends ACK (acknowledgment)
4️⃣ Acknowledgment Mechanism
If ACK received → message removed
If no ACK → retried
If repeated failure → moved to Dead Letter Queue (DLQ)
5️⃣ Scaling
Multiple consumers can process messages
Load distributed automatically
Ordering guaranteed per partition
.
🔒 Why MQ is Powerful
✔ Decouples services
✔ Handles traffic spikes
✔ Improves fault tolerance
✔ Enables async processing
✔ Prevents cascading failures
.
🛠 Popular MQ Tools
Some implementations of MQ:
Apache Kafka
RabbitMQ
ActiveMQ
Amazon SQS











Redis is single-threaded for command execution.

But that’s NOT the whole story.

Here’s why it’s insanely fast:

1️⃣ Everything is in Memory

No disk seek.
No complex joins.
No heavy query planner.

Memory access = microseconds.

---

2️⃣ No Context Switching

Multi-threaded systems waste time
switching between threads.

Redis avoids:
• Locks
• Race conditions
• Thread scheduling overhead

Single-thread = predictable + fast.

---

3️⃣ Event-Driven I/O

Redis uses non-blocking I/O (epoll/kqueue).

One thread can handle
thousands of concurrent connections
without blocking.

It doesn’t wait.

---

4️⃣ Simple Data Structures

Optimized internal structures:
• Hash tables
• Skip lists
• Compact encoding

Operations are O(1) or O(log n).

---

5️⃣ Pipelining

Clients can send multiple commands
without waiting for responses.

This massively increases throughput.

---

6️⃣ Horizontal Scaling

Need more power?

Use:
• Redis Cluster
• Sharding
• Replicas

Single-thread per node.
Multiple nodes = massive scale.









A user logs in once and stays logged in, now they click logout from all the devices. how will you invalidate all active sessions

1️⃣ Session‑based authentication (Server sessions)
How it works
•When user logs in, server creates a session.
•Session ID is stored on server (DB/Redis).
•Browser/mobile stores only the session ID (cookie).
Logout from all devices
•Server finds all sessions for that user.
•Deletes them from session store.
•Any request from any device → session not found → user logged out.

2️⃣ JWT‑based authentication (Token based)
How it works
•On login, server issues JWT access token + refresh token.
•Client stores tokens.
•JWT is stateless (not stored on server).

Logout from all devices (correct way)You cannot delete JWT directly, so you do one of these:

Option A
•Store refresh tokens in DB/Redis.
•On “logout all devices” → revoke/delete all refresh tokens.
•Access tokens expire soon → user forced to login again everywhere.

Option B (Timestamp / version trick)
•Store logoutAllAt timestamp or tokenVersion in DB.
•When validating JWT:
◦If token issued before logoutAllAt → reject.
Key point (one‑liner)
Logout all devices = revoke refresh tokens or invalidate JWT using version/timestamp.

Interview summary🌟
Session‑based: easy — delete all sessions from server.
JWT‑based: revoke refresh tokens or invalidate tokens using timestamp/version so all devices are logged out.





find 4 highiest product in mongodb

[{
  $group:{
    _id: "$price"
  },
  {
    $sort:{
      _id:-1
    }
  },
  {
    $skip:3
  },
  {
    $limit: 1
  },
  {
    $project:{
      _id: 0,
      price: "$_id"
    }
  }
}]


find 4 highiest users base high spending in mongodb











What is Event-Driven Architecture (EDA)?

Event-Driven Architecture is a design pattern where services communicate through events instead of direct API calls.

👉 In traditional architecture:
Service A → calls → Service B

👉 In Event-Driven Architecture:
Service A → publishes an event
Other services → listen & react

Example:
When a user places an order:

1️⃣ Order Service publishes “OrderPlaced”
2️⃣ Payment Service listens & processes payment
3️⃣ Inventory Service reduces stock
4️⃣ Notification Service sends confirmation

No service directly calls another.
They only react to events.

🔥 Core Components

• Event Producer (Publisher)
• Event Broker (Kafka / RabbitMQ)
• Event Consumer (Subscriber)

💡 Why It’s Powerful

✔ Loose coupling → Services don’t depend on each other
✔ Better scalability → Consumers scale independently
✔ Resilience → If one service fails, others continue
✔ Perfect for microservices

⚠️ Interview Follow-up Questions

• Difference between EDA & REST architecture?
• What is Eventual Consistency?
• How do you handle duplicate events?
• How do you ensure reliability?









what is circuit baker pattern?













Elasticsearch is not a database replacement.
It’s a distributed search & analytics engine built for speed.

Instead of scanning rows like traditional SQL (LIKE %keyword%), it uses an inverted index — which maps words to documents. That’s why search happens in milliseconds, even with millions of records.

🔥 Why companies use Elasticsearch:

• Full-text search with ranking
• Fuzzy search (handles typos)
• Autocomplete
• Real-time log analysis (ELK stack)
• Horizontal scaling with shards & replicas
• Near real-time indexing

In production systems, we often use:

👉 PostgreSQL → source of truth
👉 Elasticsearch → fast search layer

That’s how large-scale systems handle search efficiently.

If you’re preparing for backend interviews, you must understand:
• Inverted Index
• Sharding
• Replication
• Index vs Document
• Cluster architecture
• Query DSL










How load balancer decides which server to send traffic ?


1️⃣ Checks Available Servers (Healthy Only)
First, it performs health checks (HTTP/TCP/ping).
Removes unhealthy servers from rotation.

2️⃣ Uses Load Balancing Algorithm (v.imp)
Common algorithms:
Round Robin → Sends requests sequentially (Server1 → Server2 → Server3 → repeat).
Weighted Round Robin → More traffic to powerful servers.
Least Connections → Sends to server with fewest active connections.
Least Response Time → Sends to fastest responding server.
IP Hash → Same client IP goes to same server (session stickiness).

3️⃣ Considers Server Load Metrics
CPU usage
Memory usage
Active connections
Network bandwidth
(Some advanced load balancers monitor real-time metrics.)

4️⃣ Session Persistence (Sticky Sessions)
If enabled, user’s requests go to the same backend.
Used when session data is stored locally.

5️⃣ Geographic Routing (If Global LB)
Routes based on user location (nearest data center).

6️⃣ Layer-Based Decision
Layer 4 (Transport) → Uses IP + Port.
Layer 7 (Application) → Can route based on:
URL path (/api → Server A)
Headers
Cookies
Domain name














37 Niche System design problems to solve and prepare for system design interviews, if you're targeting Senior & Staff+ roles at Big Tech (with compensation crossing 75 LPA - 1Cr+)

A Senior Engineer at Amazon in India (L6) can make 1Cr+
A Senior Engineer at Microsoft in India (L64) can make 1Cr+
A Senior Engineer at Google in India (L5) can make 1Cr+

Tech salaries at upper-level roles are high, but so is the standard of the interview loop.

I compiled questions I used while preparing and put 37 of them into 6 categories for focused practice. 

[1] Observability, metrics, and control
- Distributed metrics logging and aggregation
- Collecting performance metrics from thousands of servers
- Monitoring health for a large compute cluster
- Designing a distributed tracing system
- Building a system to sort huge datasets across machines
- Control plane for a distributed database

[2] Streams, queues and live features
- Kafka style distributed stream processing
- Distributed queue service like RabbitMQ
- Surge pricing engine for ride sharing
- ETA and live location sharing between driver and rider
- Live comments system for a social app
- Showing live viewer count on a page

[3] Storage, sync and large files
- Key value store at scale
- Cloud file storage like Dropbox or Google Drive
- Photo sharing platform like Google Photos or Flickr
- Distributed file transfer like Bittorrent
- Reliable file downloader library
- Bulk data migration from on-prem to cloud

[4] Consumer apps, content and feeds
- Calendar application like Google Calendar
- User analytics dashboard and data pipeline
- Hotel booking system with availability, reservation and booking
- Weather application backend
- Marketplace feature inside a social app
- Ads management and serving for a social feed

[5] Money, commerce and pricing
- API rate limiter for public or paid APIs
- Price alert system for products or stocks
- Credit card processing engine
- Wire transfer API between banks
- Parts compatibility system for an ecommerce site
- Rider matching for a ride hailing or food delivery app

[6] Platform, auth and reliability
- Login and authentication system for web and mobile apps
- Distributed job scheduler for background tasks
- Notification system that works at global scale
- A/B testing platform for experiments
- On call escalation system for incidents
- IoC or dependency injection framework
- Counting and broadcasting likes for very high traffic users













How do push notifications work





Some architectures:
Socket architecture
pub/sub architecture
loadbalancer architecture
logger architecture
microservice architecture
serverless architecture
monolighith architecture











How will you diagnose and optimize database query time from 5 seconds to 50 ms?