A user enters the correct username and password but still can't login
how would you debug this issue
=>
Look at the request:
  - The call itself might be failing because the url is wrong or the server is down, or the browser is blocking the api call.
Check the payload:
  - Maybe the format is wrong or some field names dont match what the backend expects.
Password check:
  - Password in the database are hashed. if the hashing logic changed after an update, the comparison might fail even when the user types the correct password

Account blocked:
  - Sometimes the account exists but cant be used. it might be blocked, inactive, or not fully verified
Session not created:
  - the login works on the server but the token or session isnot created. for example: if a session store like redis but redis is down. the server cant save the session even though the creds are valids

issue at frontend:
  - the frontend might not handle the seuucess response properly. the backend says, login ok but the UI never updates the login state.



You are creating an api that saves data the database
in some cases, you only need to store a single record.
in other cases you may have to insert thousands of records at onec, for example when a user uploads a file it may contain many records

how do you effiently implement this?

=> we can use for single use create()
for more data we can use createMaany() but it will run a oops internally so we used batching
if 10000 records we can set batch 500 
that mensa only 20 writes to database which is much faster.



we all use application for lie secores like crickbuzz. have you ever wondered about the technologies which are behind these applications?

=> we have various technology like websockets, client polling, server sent events

but for live score server sent events are useful
a server sent envt is a technlogy used to establish a unidirectional channel between a server and a client, to receive continious updates from the server.
clients dont need to poll the server for new updates.

a client needs to establish the initial http connection whit the server and the server sends the data streams to the client via this connection.



you have found an api is very slow and you need to optimize it what are the steps you are going to take?

=> optimization techniques:
   - at the service level (in code)

- check the loops:
  - dont iterate over thousands of records if the database can filter them. push work to the db whenever possible
- use proper collectio:
  - picking the wrong data structure can kill performance. for example searching in an array is slower compared to hashmap lookup
- async processing
  - use async processing for long-running tasks to improve responsiveness.
- caching and pagination:
  - use caching and pagination for a large set of data. 


- at database level
  - indexing:
    - if we query on a column without an index, db scans the whole collection, so we need to have proper indexes
  - address n+1 problem:
    - this is a very common issue and an important on to handle
  - connection pooling:
    - connectionn pooling to manage to database connections effiently


Imagine you are building an application like gmail, where you wnat to delete a row from a table but still give the user a 10 seconds option to undo the deletetion.
if the user clicks undo, the deleted row should be restored if not onece the timer expires, the row should be permanently deleted from the database

=> step: we remove the item from our local list (array) so the ui updates immediatly. this makes the app feel fast.
we set a 10 second time. during this period, the user can undo
step: if undo is clicked, we stop the timer and put the deleted row back into array. nothing sent to backend



you have an api but it takes too long to respond. how would you debug it?

Debug:
- step1: check if the api is really slow or not use postman or curl and measure the response time.
if its only in the browser, it might be a frontend issue. if postman also slows slowness, then it is the backend
step2: check the latency, latency means the time taken to reach the server. we can use curl command to check latency.
step3: check the server processing logic and time taken at each layer. we can place loggers at service layer and database layer to check the time taken by the code.
and also we can use application performance monitoring tools like new relic for more details breakdown.

this is only about debugging
but how to improve the performance of a slow api?


suppose you are working on a from, and you need to auto save it.
here the main challenge is, whether we save for every character the user types, or is there any smatter way.

=> debouncing:
    1. - Debouncing means wait until the user stops typing. then run the action once.
    2. so instead of sending 50 api calls while the user is filling the form. we send just one auto save after 1 or 2 second when the user stops typing.

    Patch:
     1. if it is a huge form then save only the updated values, dont save form data again.
     2. on the backend, we need. to use patch for this purpose.

    flow is: 
      1. whatch the form for any changes.
      2. if the user is typing continously, dont call the api yet.
      3. when then stope typing for 1 or seconds, than only trigger an auto save.
      4. this keeps the app fast and reduce load on the server.


you are implementing an api to accept the files and client might upload a large file.
how would you handle this to avoid memory issues.
=> 1. insted of loading the whole file in memeory stream the data chunk by chunk.
 2. use async to process it in the background.

in production system:
1. we dont use the rest api to handle gb of data directly.
2. insted we issue a pre signed url from s3, GCS or azure.
3. client upload file direcly to cloud while your api just coordinates.


you building a shopping cart feature for a web application. users often open your website in multiple tabs while shoppong. you need to sync cart updates across tabs. for example, if an item is added in tab A. it should instantly appear in tab B.

approch 1:
  - 1. for every add to cart button click, save item in DB through an api.
  - 2. frontend has to poll the data every 5 seconds to sync the data.
  - 3. it is not optimal solution as polling increase networks calls.
polling increases unnessary network calls

best mordern approch:
approch 2:
 broadcastChannel api from javascript:
 broadcastChannel api helps diffrent browser tabs of the same website communication with each other easily.
 when user click add to cart button, we will post a message and every tab will receive this message and update the list.


auto logout:
we can do it with two timers:
 1. one on the UI
 when we login  the frontend starts some timer, every time interact like moving the mouse, typing or making an api call then the timer resets.
 if we do not do any thing for some duration  the timer repires and triggers logout
 2. another on the server
 when we login in the server creates a session or gives a token with an expire time.
 each request we send to the server refresh that session expire time.
 if no request comes whitin thatperiod the session expires automaticlly
 after that any new request with that expired session gets rejected.

atm card check instant:
use luhn algorithm



# Load Balancer vs API Gateway (Simple Comparison)

## Load Balancer
- Distributes incoming traffic across multiple servers  
- Improves availability and performance  
- Reroutes traffic if a server goes down  
- Works at network (L4) or application (L7) level  
- Does **not** understand business logic or APIs  

**Example:**  
User → Load Balancer → Server 1 / Server 2 / Server 3  

---

## API Gateway
- Entry point for all client API requests  
- Routes requests to the correct microservice  
- Handles authentication & authorization  
- Supports rate limiting, caching, and logging  
- Can transform requests and responses  

**Example:**  
Client → API Gateway → Auth Service / Order Service / Payment Service  

---

## Quick Difference

| Feature            | Load Balancer            | API Gateway              |
|--------------------|--------------------------|--------------------------|
| Purpose            | Traffic distribution     | API management           |
| Works With         | Servers                  | APIs / Microservices     |
| Auth & Security    | ❌ No                    | ✅ Yes                   |
| Request Routing    | Simple                   | Smart (path, headers)    |
| Use Case           | Scale servers             | Manage microservices     |

---

### In One Line
- **Load Balancer:** *Balances traffic between servers*  
- **API Gateway:** *Controls, secures, and routes API requests*



# Sharding vs Replication (Simple Explanation)

## Sharding
- Splits data across multiple nodes  
- Each node stores **only a part** of the data  
- Scales **data size** and **write throughput**  
- Used when a single database cannot hold all data  

**Example:**  
Users A–M → DB Node 1  
Users N–Z → DB Node 2  

---

## Replication
- Copies the same data to multiple nodes  
- Improves **availability** and **read performance**  
- Provides fault tolerance if a node fails  

**Example:**  
Primary DB → Replica 1 → Replica 2  

---

## Together (Best Practice)
- **Sharding** handles large datasets  
- **Replication** ensures reliability and fast reads  
- Used together to build **scalable & reliable systems**

---

## Quick Difference

| Feature        | Sharding                     | Replication               |
|---------------|------------------------------|---------------------------|
| Main Goal     | Scale data size               | High availability         |
| Data Storage  | Data is split                 | Data is copied            |
| Write Scale   | ✅ Yes                        | ❌ Limited                |
| Read Scale    | ⚠️ Limited                    | ✅ Yes                    |
| Fault Tolerance | ❌ No (alone)              | ✅ Yes                    |

---

### In One Line
- **Sharding:** *Scale by splitting data*  
- **Replication:** *Scale by copying data*  
- **Both:** *Scalable + reliable systems*



Binary search patterns 🫶🏻

1- Classic binary search
2- Rotated sorted Array
3- Sorted Matrix
4- Binary search on ans




Stack isn’t just a DSA topic — it’s a full interview pattern you MUST master!

Key Stack Patterns:
• Monotonic Stack – NGE, NSE, stock span, histogram
• Expression Evaluation – decode string, basic calculator
• Stack Simulation – asteroid collision, backspace string
• Parenthesis Problems – valid parentheses, min add/remove
• Stack using Two Queues – core implementation concept


Linkedlist
 - reversal pattern
 - cyclic pattern
 - merger + sorted pattern
 - modification + reordering


 SQL vs NOSQL in terms of :
1-schema
2-scaling
3-usage


Indexing basically works like the index page of a book — it helps the database jump straight to the required data instead of scanning the whole table.

This means faster queries, smoother filtering, quicker joins, and way less load on your DB engine.

In simple words:

your app feels faster, your backend feels lighter, and your system scales better without burning extra server money.
 - clustered index
 - non clustered index



 Limit and offset basic difference which mostly people gets confused or forgets



filter() vs find() in JavaScript – don’t confuse them!
Both look similar but do very different jobs
filter() → returns all matching results (in an array)
find() → returns only the first match (single value)

This one difference can save you from a lot of bugs




Batching means grouping multiple operations together and processing them in a single go instead of handling each one individually. This approach reduces overhead, improves performance, and avoids unnecessary repeated work.

It’s useful when you have many small tasks that don’t need immediate execution, like sending multiple API requests, updating UI states, writing to a database, or processing messages in a queue.

By batching them, you minimize the number of calls, speed up the system, and keep everything more efficient. It’s widely used in React state updates, backend request handling, job schedulers, and data processing pipelines where performance matters.

- batching
- split code
- performance
- load balance
- rate limit



how to undo commit in git revert vs reset in git
You can go back to your previous commit when you commit unwanted code.Using revert command its possible but before using revert you should know the difference between reset and revert to use according to your use case.