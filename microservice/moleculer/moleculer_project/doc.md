# Moleculer.js Commands and REPL Commands with Use Cases

## 1. Moleculer CLI Commands

### 1.1 Installation
```sh
npm install -g moleculer-cli
```

### 1.2 Create a New Project
```sh
moleculer init project my-project
```
**Use Case:**
- Creates a new Moleculer-based microservices project.

### 1.3 Run a Service
```sh
moleculer run --repl
```
**Use Case:**
- Starts the Moleculer broker and services with an interactive REPL shell.

### 1.4 Run Services with Specific Configurations
```sh
moleculer run --config moleculer.config.js
```
**Use Case:**
- Runs Moleculer services with a specific configuration file.

### 1.5 Generate a New Service
```sh
moleculer generate service serviceName
```
**Use Case:**
- Generates a new service with a template.

### 1.6 Start Services with Hot Reload
```sh
moleculer-runner --hot services/
```
**Use Case:**
- Runs services and automatically reloads them on file changes.

### 1.7 Run Service with Environment Variables
```sh
SERVICE_LOGLEVEL=debug moleculer run
```
**Use Case:**
- Runs services with specified environment variables.

## 2. Moleculer REPL Commands

### 2.1 List Available Services
```sh
services
```
**Use Case:**
- Displays all registered services.

### 2.2 List Services with Details
```sh
services -d
```
**Use Case:**
- Shows detailed information about all registered services.

### 2.3 Call a Service Action
```sh
call serviceName.actionName --params '{"key": "value"}'
```
**Use Case:**
- Calls an action of a specific service.

### 2.4 Call a Demo Service Action
```sh
call "mydemo.hello"
```
**Use Case:**
- Calls the `hello` action of the `mydemo` service.

### 2.5 Get Node Information
```sh
info
```
**Use Case:**
- Displays information about the local node.

### 2.6 List All Nodes
```sh
nodes
```
**Use Case:**
- Lists all nodes in the network.

### 2.7 List Nodes with Details
```sh
nodes -d
```
**Use Case:**
- Shows detailed information about all nodes in the network.

### 2.8 Check Health of Node
```sh
health
```
**Use Case:**
- Shows system health statistics like memory usage and CPU load.

### 2.9 Reload a Service
```sh
reload serviceName
```
**Use Case:**
- Reloads a specific service without restarting the entire application.

### 2.10 Load a Service Dynamically
```sh
load servicePath
```
**Use Case:**
- Dynamically loads a new service into the broker.

### 2.11 Emit an Event
```sh
emit eventName --data '{"key": "value"}'
```
**Use Case:**
- Emits an event manually to trigger event listeners.

### 2.12 Broadcast an Event
```sh
broadcast eventName --data '{"key": "value"}'
```
**Use Case:**
- Broadcasts an event to all nodes.

### 2.13 View Service Actions
```sh
actions
```
**Use Case:**
- Displays a list of all available actions across services.

### 2.14 View Service Actions with Details
```sh
actions -d
```
**Use Case:**
- Shows detailed information about all service actions.

### 2.15 Quit REPL
```sh
quit
```
**Use Case:**
- Exits the REPL shell.

## Conclusion
Moleculer.js CLI and REPL commands allow efficient service management, debugging, and execution of actions in a distributed microservices architecture.

