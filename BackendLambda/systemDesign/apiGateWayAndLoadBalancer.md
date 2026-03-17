# API Gateway vs Load Balancer

## API Gateway

An **API Gateway** is the entry point for client requests in a microservices architecture.

### Responsibilities
- Receives client requests
- Routes requests to the appropriate microservice
- Handles authentication & authorization
- Rate limiting & throttling
- Request/response transformation
- Aggregates responses from multiple services
- Logging and monitoring

### Flow
Client → API Gateway → Microservice (Auth / Payment / Order / etc.)

---

## Load Balancer

A **Load Balancer** distributes incoming traffic across multiple servers/instances to ensure high availability and performance.

### Responsibilities
- Distributes traffic across service instances
- Prevents server overload
- Improves availability
- Health checks
- Failover handling

### Flow
Client → Load Balancer → Server instances

---

## Who Comes First: API Gateway or Load Balancer?

### Short Answer
**Load Balancer comes first**, then API Gateway.

### Why?

At scale, both are used together, but they solve different problems.

### Typical Production Flow

Client  
↓  
**Load Balancer (L4/L7)**  
↓  
**API Gateway**  
↓  
Microservices  
↓  
Internal Load Balancers  
↓  
Service instances

---

## Detailed Request Flow

### Step 1 — External Load Balancer
- Handles millions of incoming requests
- Distributes traffic across multiple API Gateway instances

Example:
Client → AWS ELB / NGINX LB → API Gateway cluster

### Step 2 — API Gateway
- Understands routes
- Applies auth, rate limits, policies
- Sends request to correct service

Example:
Gateway routes:
- `/auth` → Auth Service
- `/orders` → Order Service
- `/payments` → Payment Service

### Step 3 — Internal Load Balancing
Each microservice may have multiple instances.

Example:
API Gateway → Internal LB → Order Service (Instance 1, 2, 3…)

---

## Why Not Only API Gateway?

API Gateway:
- Smart routing
- Security
- Policy enforcement

Load Balancer:
- Traffic distribution
- Scalability
- High availability

They complement each other.

---

## Scaling Architecture (Real World)

### Small System
Client → API Gateway → Services

### Growing System
Client → Load Balancer → API Gateway → Services

### Large Scale (Millions of Requests)
Client  
↓  
Global Load Balancer (CDN, Geo routing)  
↓  
Regional Load Balancer  
↓  
API Gateway cluster  
↓  
Service mesh / Internal LB  
↓  
Microservices

---

## Types of Load Balancers

### Layer 4 (Transport)
- IP + Port based
- Fast
- Example: TCP LB

### Layer 7 (Application)
- Path based routing
- Header based routing
- SSL termination

---

## API Gateway vs Load Balancer (Key Differences)

| Feature | API Gateway | Load Balancer |
|---|---|---|
| Purpose | API management | Traffic distribution |
| Routing | Path / service routing | Instance routing |
| Authentication | Yes | No |
| Rate limiting | Yes | Limited |
| Caching | Yes | No |
| Protocol handling | HTTP, REST, gRPC | TCP/HTTP |
| Load distribution | No (primary role) | Yes |
| Microservices awareness | High | Low |

---

## Example: End-to-End Request

User opens app:

1. Request hits Load Balancer
2. Load Balancer selects API Gateway instance
3. API Gateway authenticates user
4. Gateway routes request to Order Service
5. Internal LB picks Order Service instance
6. Service processes request
7. Response returns back via Gateway

---

## Summary

- **Load Balancer handles scale & availability**
- **API Gateway handles routing & API management**
- **Both are required in microservices at scale**
- Order of execution:

Client → Load Balancer → API Gateway → Microservices → Internal Load Balancer → Instances
