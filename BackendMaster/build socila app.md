# Backend Engineering First Principles

When building a backend for an application (like a simple social media app), we must address three fundamental questions:
1. **How do we run the logic of the app?**
2. **How will we store the data of our app?**
3. **How can we scale our application?**

---

## 1. Code vs. Process

To understand backend engineering, we must first distinguish between the code we write and how the computer executes it.

* **Code (Program):** This is a static entity. It is a simple piece of text code (written in Node.js, Python, Java, etc.) saved on your machine's secondary storage (ROM, such as an SSD or HDD). Code on disk does nothing until it is executed.
* **Process:** When you run the code (e.g., typing `node server.js` in the terminal), the operating system reads the program from the disk, allocates memory for it in the **RAM**, and begins executing its instructions via the CPU. A program in this active, running state is called a **process**. 
  * *Deep Dive:* A process contains not just the code, but also its current activity (program counter, registers), a **Stack** (for temporary data like function parameters and local variables), and a **Heap** (for dynamically allocated memory during runtime).

---

## 2. Client-Server Architecture

A process running in isolation isn't very useful; it needs to handle Input/Output (I/O). To structure distributed applications, we heavily rely on the **Client-Server Architecture**.

### The Client
The client is a process that initiates a request for a service or resource.
* **Human-Driven Clients (Thick/Thin Clients):** Where a user provides input or consumes output. For example, a React web application running in a browser, or an iOS mobile app.
* **Machine-Driven Clients (Service-to-Service):** No human involvement is required. Backend servers frequently act as clients to other servers.
  * A bank's automated CRON job that wakes up every day at midnight to check EMI statuses and request a notification service to send SMS reminders.
  * Your backend calling a third-party payment gateway (like Stripe) or an email provider (like SendGrid). In this interaction, *your server* is the client.

### The Server
A server is an always-running process capable of:
1. **Listening/Accepting:** Continuously waiting for incoming requests on a specific network port.
2. **Processing:** Applying business logic, authenticating the user, querying the database, etc.
3. **Responding:** Formulating a response (usually in JSON or HTML) and sending it back over the network to the client.

---

## 3. Client and Server Communication

How do the client (one process) and the server (another process) share data?

* **Scenario 1: Hosted on the Same Machine (Localhost)**
  * Both the client and server processes run on the same physical computer. 
  * *How they talk (Inter-Process Communication - IPC):* They can communicate via **Pipes**, **Shared Memory**, or **Unix Domain Sockets**. For example, your local frontend React app (`localhost:3000`) talking to your local Node.js server (`localhost:8080`) communicates through the local loopback network interface.

* **Scenario 2: Hosted on Different Machines (The Internet/Intranet)**
  * The client and server are on entirely different machines separated by geography.
  * They connect via physical mediums (fiber optic cables, ethernet) and wireless mediums (Wi-Fi, 4G/5G). To ensure the data doesn't get lost in this massive web of cables, they must use standardized protocols.

---

## 4. Networking Stack & Protocols

When data leaves your machine, it must be packaged, addressed, and converted into electrical/light signals. This is governed by a **Networking Stack**.

### TCP/IP Model (The Backbone of the Internet)
When a client sends a message to a server, the data moves *down* the networking stack on the client side, and *up* the stack on the server side. This process is called **Encapsulation/Decapsulation**.

1. **Application Layer (HTTP, HTTPS, WebSocket, SMTP, FTP):**
   * Determines the format of the data being shared. If you are requesting a web page, your browser uses HTTP to format the request ("GET /profile").
2. **Transport Layer (TCP, UDP):**
   * Breaks the Application Layer data into smaller chunks called **Segments**.
   * **TCP (Transmission Control Protocol):** Extremely reliable. It establishes a connection via a "3-Way Handshake" before sending data. It guarantees that packets will arrive in order and without errors (if a packet is lost, TCP retransmits it).
   * **UDP (User Datagram Protocol):** Fast but unreliable. It just fires data at the receiver without checking if it arrived (used in video calling and live gaming).
3. **Network Layer (IP - Internet Protocol):**
   * Takes the TCP segments and packages them into **Packets**.
   * It is responsible for **Routing** and **Logical Addressing (IP Addresses)**. It determines the best path through the internet's millions of routers to reach the destination server.
4. **Data Link Layer (Ethernet, Wi-Fi):**
   * Packages packets into **Frames**.
   * Responsible for **Physical Addressing (MAC Addresses)**. It figures out how to get the frame to the *very next* physical device on the network (like your home router).
5. **Physical Layer:**
   * Converts the frames into physical signals: electrical pulses on a copper wire, radio waves in Wi-Fi, or pulses of light in fiber optic cables.

---

## 5. Ports and Sockets

**Does every process running on a machine act as a server?**
No. Most processes (like your text editor or calculator) do not listen for network requests.

Because a server machine might run multiple server processes simultaneously (e.g., a web server, a database server, and an SSH server), network traffic needs to know exactly *which* process it is meant for. 

* **Port Numbers:** A 16-bit logical identifier (ranging from 0 to 65,535). 
  * If the web server process binds to Port 80 (HTTP) or 443 (HTTPS), the OS guarantees that any network traffic arriving for Port 443 goes directly to that specific web server process.
  * *Well-Known Ports:* 0-1023 (e.g., 80 for HTTP, 443 for HTTPS, 22 for SSH, 5432 for PostgreSQL).
  * *Ephemeral Ports:* 49152-65535. When a *client* makes a request, the OS assigns it a random, temporary port so the server knows where to send the reply back.

* **Sockets:**
  A socket is the ultimate endpoint for communication. It binds the machine's address to the specific process's address.
  > `Socket = IP Address + Port Number`
  > *Example: `192.168.1.5:8080`*

---

## 6. IP Addresses and DNS

**What is an IP address?** 
It is a logical address that identifies a device on a network so that routing algorithms know how to reach it. 
* **IPv4:** 32-bit address (e.g., `142.250.190.46`), allowing for ~4.3 billion addresses. We ran out of these.
* **IPv6:** 128-bit address (e.g., `2607:f8b0:4005:808::200e`), allowing for a practically infinite number of addresses.

### The Dynamic IP Problem
Most home devices and temporary servers are given **Dynamic IPs**. If a server restarts or the router reconnects, the ISP assigns it a new IP address. 
* **The Problem:** If a server's IP changes from `1.1.1.1` to `2.2.2.2`, clients have no way of knowing how to reach the server anymore. 

### The Solution: Static IPs and DNS
1. **Static IPs:** Servers run by major companies (like AWS or Google) buy **Static IPs** that are guaranteed never to change. 
2. **DNS (Domain Name System):** Humans are bad at remembering IPs (like `142.250.190.46`), and even Static IPs can sometimes change due to infrastructure migrations. 
   * We use **URLs (Domain Names)** like `google.com`.
   * **How it works:**
     1. The client process asks the DNS Resolver: *"What is the IP address for google.com?"*
     2. The DNS system searches its massive distributed directory and returns: *"It is 142.250.190.46"*.
     3. The client process now has the IP address and can initiate the TCP 3-way handshake with the server.

---

## 7. Open Questions & Advanced Concepts for Further Study

* **NAT (Network Address Translation):** How do multiple devices in a home share a single public IP address provided by the ISP?
* **Load Balancing:** When you visit `google.com`, you aren't hitting one single server. How does a load balancer distribute traffic across thousands of identical server processes?
* **MAC vs IP:** Why do we need *both* MAC addresses (physical) and IP addresses (logical)? (Hint: IPs get you to the right neighborhood/city, MAC addresses deliver to the exact physical door in the building).



raw description

Backend engineering first principles

let build a simple social media app

=> how to run the logic of the app
=> how will we store the data of our app
=> how can we scale our application


code (program -> simple piece of text code written and saved in your machine) ->saved into disk (ROM - SSD/HDD)

code----run this program---->process

code/program in running state is called as process.

process is technically store in RAM


process------>input/output---> need client server architucture

client (where user give input or get output mobile/web)
client is process that will be make a capable initiate a request mine be run your mobile/web 

also where no human involve like bank check emi status remide to user here emi check machine/server also client he also make a request.
like this due payments, system check expire(coupon code, etc) something alret do some action
like any app like bookmyshow it not main focus email send, then maybe used any other email serive and that service waork as client

server (server is a process capable of accepting request, processing them and return a response back)

client one process and server one process how they connected

previous/old days we connect via wire
share data


how client and server communicate each other?
senaior 1 we can host in single server client and server means same machine we use, there is client process and server process. these two process talk diffrent diffrent way to each other in same machine.

give me list of ways:

senario 2 client and server host on diffrent machine
ways: we can connect via wire, via network wireless like wifi

network protocols: define rules such that processes in diff machine can communicate with each other by following the given set of rules.



networking stack => where 2 or more machine are connected

networking stack are 2 type: OSI and TCP

tcp: 7 layer model
 - application layer (http, smtp, https, ftp, smto, etc) what data to share
 - transport layer (tcp, udp) this layer handle how setup will happen, how data will devide, reliable and unreliable share
 - network layer (reposiblity routing, ip addressing), how data routing will work and what is ip addresing, ex: nic card
 - data link layer (do take all row data, error corrections, format data to understand physical layer (electic pulse), now data traveling physical layer)
 - physical layer

osi: 5 layer model
 - 

 these came from client same thing happen for server in reverse order, server take nerest physical layer. like:
  - physical layer
  - data link layer
  - network layer
  - transport layer
  - application layer

connection establishment phase (client<=>server)

Doces every process running on my machine is acting as a server?
probably not
if only some of the process are running as server
can we not allocate a logical unique number to them(aprat from PID) that will be strictly allocated to them. everytime if we restart the process the unique number stays same. if a process is already using a unique number no one else can get a hold of it.

port number

in machine run same time multiple processes how to know which to intract so we use port number


socket numner = ip address + port number

what is ip address?
how many bites/bits

if we connect internet by any chance prower cut or disconnect, how we connect again because ip was change? because ip is limited we cant hold forver.
problem 1 = if we reconnect the server to internet, ip changes
problem 2: by any reason if the ip changes, how does the client know about the new ip.

solution
we can buy static ip
url: uniform resource locator

previously was client and server connect via http over tcp connections

after face this ip change problem we can use DNS
so client will first connect with dns.
now dns will check ip address for this url and his directory and return back ip
we connect tcp connect

how to client know ip address and port?
why not used mac address insted ip?