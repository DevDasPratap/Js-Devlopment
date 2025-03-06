# Setting Up Microservices with Moleculer

Moleculer is a progressive microservices framework for Node.js that provides an efficient way to build scalable and maintainable applications.

### Step 1: Install Moleculer CLI
```sh
npm i moleculer-cli -g
```

### Step 2: Create a New Moleculer Project
```sh
moleculer init project my-microservice
cd my-microservice
npm install
```

### Step 3: Start a Sample Service
Modify `services/greeter.service.js`:
```javascript
module.exports = {
    name: "greeter",
    actions: {
        hello(ctx) {
            return `Hello, ${ctx.params.name || "World"}!`;
        }
    }
};
```

### Step 4: Start the Microservice
```sh
npm run dev
```

### Step 5: Call the Service
Use the Moleculer REPL to test your service:
```sh
call greeter.hello --name John
```

This setup provides a quick and scalable way to develop microservices with Node.js using Moleculer.



[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# moleculer_project
This is a [Moleculer](https://moleculer.services/)-based microservices project. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

## Usage
Start the project with `npm run dev` command. 
After starting, open the http://localhost:3000/ URL in your browser. 
On the welcome page you can test the generated services via API Gateway and check the nodes & services.

In the terminal, try the following commands:
- `nodes` - List all connected nodes.
- `actions` - List all registered service actions.
- `call greeter.hello` - Call the `greeter.hello` action.
- `call greeter.welcome --name John` - Call the `greeter.welcome` action with the `name` parameter.
- `call products.list` - List the products (call the `products.list` action).


## Services
- **api**: API Gateway services
- **greeter**: Sample service with `hello` and `welcome` actions.
- **products**: Sample DB service. To use with MongoDB, set `MONGO_URI` environment variables and install MongoDB adapter with `npm i moleculer-db-adapter-mongo`.

## Mixins
- **db.mixin**: Database access mixin for services. Based on [moleculer-db](https://github.com/moleculerjs/moleculer-db#readme)


## Useful links

* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose
