# NPM (Node Package Manager) — Complete Documentation

## 1. What Is NPM?

**NPM (Node Package Manager)** is the default package manager for Node.js.  
It allows you to:

- Install third‑party modules  
- Manage dependencies  
- Publish your own packages  
- Resolve dependency trees  
- Maintain project metadata through `package.json`  

A collection of modules grouped together to provide complete functionality is called a **package**.

---

## 2. Why NPM?

When developers create reusable modules, these modules may depend on other modules.  
NPM:

- Installs the package you ask for  
- Automatically installs its dependencies  
- Resolves deep dependency graphs  
- Ensures correct versioning  
- Stores everything inside `node_modules`  

For example:

```
A → depends on B → depends on C
```

If you install **A**, NPM installs **B** and **C** automatically.

This process is known as **dependency resolution** or **topological sorting of dependencies**.

---

## 3. Installing a Package

Example:

```bash
npm install dotenv
```

When you run this:

1. A folder named **node_modules** is created.
2. The package **dotenv** is downloaded inside it.
3. Two files are generated:
   - `package.json`
   - `package-lock.json`

---

## 4. Installing a Package With Dependencies

Example:

```bash
npm install express
```

Express depends on many internal packages (like `body-parser`, `accepts`, `qs`, etc.).

So your `node_modules` becomes large because NPM installs all needed dependencies.

---

## 5. Checking NPM Installation

```bash
npm -v
```

If it prints a version, NPM is installed correctly.

---

## 6. Understanding `node_modules`

- This folder contains **all installed packages**.  
- It becomes large because packages depend on other packages.
- You **should never push** `node_modules` to GitHub.
- Instead, NPM can rebuild it using `package-lock.json`.

---

## 7. Understanding `package.json`

This file contains **metadata** about your Node.js project.

Example fields:
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "Demo project",
  "main": "index.js",
  "scripts": {},
  "dependencies": {
    "express": "^4.18.2"
  },
  "author": "Your Name"
}
```

### What it includes:
- Project name, version, author  
- Entry file  
- Dependencies  
- Scripts  
- Keywords  
- License  

### Why it matters:
- It defines what packages your project needs.
- Another developer can clone your project and run:

```bash
npm install
```

And NPM will rebuild `node_modules` exactly as required.

---

## 8. Understanding `package-lock.json`

This file stores:
- **Exact versions** of every installed package  
- Dependency structure  
- Integrity hashes  

### Why Important?

Even if a package releases a new version, your project remains stable because:

```
package-lock.json freezes all versions.
```

Thus:

- Deleting node_modules  
- Running `npm install` again  

…will recreate the exact same dependency tree.

---

## 9. Creating a New `package.json` File

Use:

```bash
npm init
```

It asks you questions:

- Package name  
- Version  
- Description  
- Entry point  
- Author  
- License  

After filling out values (or pressing Enter for defaults), it generates:

```json
{
  "name": "cjs-demo",
  "version": "1.0.0",
  "description": "some description",
  "main": "index.js",
  "author": "Your Name"
}
```

Now your directory is officially an **NPM project**.

---

## 10. Reinstalling Dependencies

If you delete **node_modules**, simply run:

```bash
npm install
```

Using `package-lock.json`, NPM restores everything exactly as before.

---

## 11. Summary

| Feature | Description |
|--------|-------------|
| **npm** | Node Package Manager used for installing packages |
| **package.json** | Defines project metadata + main dependencies |
| **package-lock.json** | Stores exact dependency versions |
| **node_modules** | Actual folder where packages are downloaded |
| **npm install <pkg>** | Installs a package |
| **npm init** | Creates a new NPM project |

---

## 12. Key Points to Remember

- Never upload **node_modules** to GitHub.
- Always keep **package.json** and **package-lock.json**.
- NPM automatically resolves dependency trees.
- Every modern Node.js project uses NPM.

