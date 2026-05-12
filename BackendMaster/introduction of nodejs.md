# Introduction to Node.js & Environment Configuration

This guide covers the essentials of Node.js package management, global objects, and how to properly configure your application using environment variables across different processes.

---

## 1. Package Managers: npm vs. pnpm

When building Node.js applications, you need a package manager to handle external dependencies (like Express, Mongoose, etc.).

- **npm (Node Package Manager):** The default package manager that comes pre-installed with Node.js. It installs dependencies locally in a `node_modules` folder for each project. If 10 projects use the exact same version of a library, npm downloads and stores it 10 separate times, consuming significant disk space.
- **pnpm (Performant NPM):** A fast, disk-space-efficient alternative. Instead of copying files, pnpm uses a global store on your machine and creates **hard links** from the global store to your project's `node_modules`. If 10 projects use the same dependency, it is only saved on your disk *once*, making installations dramatically faster and saving gigabytes of storage.

---

## 2. The Node.js Global Object

In browser-based JavaScript, the highest-level scope is the `window` object. 
In Node.js, there is no browser window. Instead, the highest-level scope is the **`global`** object.

- Properties and methods attached to `global` are available everywhere in your Node.js application without needing to `require` or `import` them.
- *Examples of globals:* `console.log()`, `setTimeout()`, `setInterval()`, and `process`.

> [!WARNING]
> While you can attach custom variables to the `global` object (e.g., `global.myVar = "hello"`), it is considered a bad practice as it pollutes the global namespace and makes debugging difficult.

---

## 3. Environment Variables

**Environment Variables** are key-value pairs that store configuration data directly at the **Operating System (OS) level**, outside of your application's source code.

### Why use Environment Variables?
- **Security:** To keep sensitive data (API keys, database passwords) out of your codebase (and out of version control systems like GitHub).
- **Configuration:** To easily change application behavior between different environments (Development, Staging, Production) without changing the code.
- **Accessibility:** Because they live at the OS level, *any* process running on the machine can access them if permitted.

---

## 4. How to Set Environment Variables

There are several ways to define environment variables:

### 1. Directly in the Terminal (Temporary)
You can prepend variables directly when starting your Node application.
```bash
PORT=4000 NODE_ENV=production node server.js
```

### 2. Using the `export` Command (Session-based)
You can export a variable in your terminal session. It will persist as long as that specific terminal window remains open.
```bash
export PORT=4000
node server.js
```

### 3. Using `.env` Files (Recommended for Development)
Instead of setting them manually in the terminal every time, developers use a `.env` file to store them:
```env
PORT=4000
DATABASE_URL=mongodb://localhost:27017/mydb
```
You then use a package like `dotenv` to automatically load these variables into your Node.js process when the app starts.

---

## 5. Accessing and Sharing Environment Variables

In Node.js, you read environment variables using the global `process.env` object.

```javascript
// Accessing the PORT variable
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### How do multiple processes share the same config?
If you have multiple processes running on the same server (e.g., `Process 1` running a web server and `Process 2` running a background worker), they can both access the same `PORT` or configuration variables if:
1. The variable is exported at the OS/System level (e.g., defined in `~/.bashrc`, `~/.zshrc`, or system environment variables).
2. Both processes are started using the same `.env` configuration file or passed the same variables on startup.
3. They are orchestrated by a process manager (like Docker, PM2, or Kubernetes) which injects the same environment variables into every container/process it spawns.

> [!NOTE]
> Environment variables allow you to share a common configuration across entirely different processes, and even different programming languages, running on the same machine.

---

## Raw Notes (For Reference)
```text
node.js npm vs pnpm
node.js global
how to set env variable
 - by export
 - set directly by terminal
 - by process.env
 - etc

env variable:
key value pairs which store data directly on os level
any process running on the machine can access it.

how env variable like PORT=4000
process1 or process to access same PORT
how to share a commin config across process
```


row note:

node.js npm vs pnpm
node.js global
how to set env variable
 - by export
 - set directly by terminal
 - by process.env
 - etc

env variable:
key value pairs which store data directly on os level
any process running on the machine can access it.

how env variable like PORT=4000
process1 or process to access same PORT
how to share a commin config across process


module system
  - commonjs module
    - module global object
    - require global function
    - __dirname accessable 
  - es6 module
    - import
    - export
    - not __dirname accessable 
