# Express.js - Project Setup, Configuration & Routing Architecture
## Complete Class Lecture Notes

---

## Table of Contents

1. [Project Initialization](#project-initialization)
2. [Hot Reloading with Nodemon](#hot-reloading-with-nodemon)
3. [NPM vs NPX](#npm-vs-npx)
4. [Environment Variables](#environment-variables)
5. [Configuration Layer](#configuration-layer)
6. [MVC Architecture in Practice](#mvc-architecture-in-practice)
7. [Express Router Fundamentals](#express-router-fundamentals)
8. [API Versioning Strategy](#api-versioning-strategy)
9. [Questions & Answers](#questions--answers)
---

## Project Initialization

### Creating a New Project

```bash
# Create project folder
mkdir todo-api-setup
cd todo-api-setup

# Initialize npm with default values (skip prompts)
npm init -y
```

This creates a `package.json` file containing:
- Project metadata
- Dependencies list
- Scripts configuration
- Version information

### Installing Express

```bash
npm install express
```

### Creating Basic Server Structure

Create `source/index.js`:

```javascript
const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
```

Run the server:
```bash
node source/index.js
```

---

## Hot Reloading with Nodemon

### The Problem with Manual Restarts

Every time you modify files, you must:
1. Stop the server (Ctrl+C)
2. Restart the server manually
3. Repeat for every change

This workflow is tedious, time-consuming, and interrupts development flow.

### Solution: Nodemon

**Nodemon** is a tool that automatically restarts your server when files change.

#### Installation

```bash
npm install nodemon
```

**Why install locally?**
- Global packages create versioning issues
- Different projects may need different versions
- Local installation ensures consistency across team
- Safer approach for team collaboration

#### Using Nodemon with NPX

```bash
npx nodemon source/index.js
```

**What happens**:
1. Nodemon starts watching your files
2. Detects any file modification
3. Automatically restarts the server
4. You see the changes instantly

**Output example**:
```
[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,json
[nodemon] starting `node source/index.js`
Server started at port 3000
```

#### Setting Up NPM Scripts

Instead of typing the long command every time, use `package.json` scripts:

```json
{
  "name": "todo-api-setup",
  "version": "1.0.0",
  "scripts": {
    "start": "npx nodemon source/index.js",
    "dev": "npx nodemon source/index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^3.0.1"
  }
}
```

Now simply run:
```bash
npm start
```

No need to type the full command anymore!

### Alternative: Node's Built-in Watch Flag

Available in Node.js 19 and above:

```bash
npm start  # with script: "node --watch source/index.js"
```

**Comparison**:

| Feature | Nodemon | Node --watch |
|---------|---------|-------------|
| Availability | All Node versions | Node 19+ only |
| Installation | External package | Built-in |
| Stability | Mature, widely used | Newer feature |
| Dependencies | Adds dependency | No extra dependency |
| Use Case | Recommended for courses | For latest Node users |

**For this course**: We recommend **Nodemon** for broader compatibility.

### Important: ENV File Not Tracked

By default, Nodemon **does not track `.env` files**. If you modify environment variables, you must manually restart the server.

**Example**:
- You modify `.env` → Changes not applied
- Manual restart needed → Changes take effect

---

## NPM vs NPX

### Understanding Package Managers

Before understanding NPM, let's understand package managers concept:

**What is a Package Manager?**

A package manager automatically:
1. Identifies dependencies of a package
2. Fetches dependencies of those dependencies (and so on)
3. Installs everything in correct order

**Real-world analogy**: When you want to install TensorFlow:
```
TensorFlow depends on NumPy and Pandas
  ↓
NumPy depends on Python 3.x
Pandas depends on Python 3.x, NumPy
  ↓
Package Manager solves this dependency tree
```

This is similar to **topological sorting** algorithm.

**Examples across languages**:
- Python: `pip` (pip install numpy)
- Ruby: `gem` (gem install rails)
- Linux: `apt-get` (apt-get install curl)
- macOS: `Homebrew` (brew install node)

### What is NPM?

**NPM (Node Package Manager)**:
- Official package manager for Node.js
- Manages dependencies and versions
- Resolves dependency trees using topological sorting
- Installs packages in `node_modules/` folder

### What is NPX?

**NPX (Node Package Executor)**:
- Tool to **execute** NPM packages directly from terminal
- Runs locally installed packages without global installation
- Available since NPM 5.2+
- Different from NPM (which installs packages)

### Why NPX is Needed

Problem without NPX:

```bash
# ❌ Error: command not found
nodemon source/index.js

# Why? Nodemon is in node_modules/, not in system PATH
```

Solution with NPX:

```bash
# ✓ Works with NPX
npx nodemon source/index.js

# NPX finds nodemon in node_modules/ and executes it
```

### Flow: How NPX Works

```
npx nodemon source/index.js
    ↓
NPX checks local node_modules/
    ↓
Found nodemon in node_modules/
    ↓
Execute nodemon with arguments
    ↓
Server starts with nodemon watching
```

### NPM Scripts: The Shorthand Approach

Most projects use NPM scripts in `package.json` to avoid typing NPX:

```json
{
  "scripts": {
    "start": "npx nodemon source/index.js",
    "dev": "npx nodemon source/index.js"
  }
}
```

Now you can simply run:
```bash
npm start
# Instead of: npx nodemon source/index.js
```

### Special NPM Keywords

Some script names have special behavior:

```bash
npm start      # Works directly (no "run" needed)
npm test       # Works directly (no "run" needed)
npm run dev    # Requires "run" keyword
npm run build  # Requires "run" keyword
```

**Why this difference?**
- `start` and `test` are standard lifecycle scripts
- Custom scripts require `run` keyword

---

## Environment Variables

### The Problem: Hardcoding Configuration

Hardcoding configuration creates serious issues:

```javascript
// ❌ Bad Practice
const PORT = 3000;
const EMAIL = "myemail@gmail.com";
const PASSWORD = "secretpassword";
const DATABASE_URL = "mongodb://localhost:27017";
```

**Two Critical Problems**:

1. **Not Configurable**:
   - Every change requires code modification
   - Every change needs git commit
   - Switching between environments is manual
   - Local development needs different values than production

2. **Security Risk**:
   - Secrets exposed in version control
   - Everyone with repo access sees passwords
   - Production credentials visible to all developers
   - API keys compromised

### Solution: Environment Variables

Environment variables are **key-value pairs** available to your running process from the operating system.

#### Accessing System Environment Variables

Every process can access system environment variables:

```javascript
// View all environment variables
process.env

// Access specific variables
console.log(process.env.USER);    // Your username
console.log(process.env.HOME);    // Home directory
console.log(process.env.PATH);    // System PATH
```

#### Setting Custom Environment Variables

**In Linux/Mac Terminal**:
```bash
export COMPANY=Microsoft
export PORT=3000
export API_KEY=abc123xyz
```

**In Windows (Command Prompt)**:
```cmd
set COMPANY=Microsoft
set PORT=3000
set API_KEY=abc123xyz
```

**In Windows (PowerShell)**:
```powershell
$env:COMPANY="Microsoft"
$env:PORT="3000"
$env:API_KEY="abc123xyz"
```

#### Accessing in Node.js

```javascript
console.log(process.env.COMPANY);  // "Microsoft"
console.log(process.env.PORT);     // "3000"
console.log(process.env.API_KEY);  // "abc123xyz"
```

**Important Limitation**: Environment variables are **temporary**.
- Only exist while process runs
- Lost when process stops
- Must be set again next time

### Problem with Manual Environment Variables

Setting environment variables manually every time is tedious:

```bash
# Every session, you need to do this
export PORT=3000
export EMAIL=user@gmail.com
export DATABASE_URL=mongodb://localhost
export JWT_SECRET=supersecretkey

# Then start server
npm start
```

### Solution: .env Files with Dotenv

Use `.env` file with `dotenv` package for persistence.

#### Installation

```bash
npm install dotenv
```

#### Creating .env File

Create `.env` in project root:

```
PORT=3000
EMAIL=user@example.com
DATABASE_URL=mongodb://localhost:27017
JWT_SECRET=your_secret_key_here
NODE_ENV=development
API_TIMEOUT=5000
```

#### Loading .env Variables

In your main file (before using any env vars):

```javascript
require('dotenv').config();

const PORT = process.env.PORT;
const EMAIL = process.env.EMAIL;
const DATABASE_URL = process.env.DATABASE_URL;

console.log(PORT);              // 3000
console.log(EMAIL);             // user@example.com
console.log(DATABASE_URL);      // mongodb://localhost:27017
```

**Important**: Call `require('dotenv').config()` **before** accessing environment variables!

#### Security: .gitignore

**Never commit `.env` files to Git!**

Create `.gitignore`:

```
.env
node_modules/
.DS_Store
```

Now `.env` is ignored by git and won't be pushed to repository.

#### Sharing Configuration with Team

Create `.env.sample` as a template:

```
PORT=3000
EMAIL=example@gmail.com
DATABASE_URL=mongodb://localhost:27017
JWT_SECRET=example_secret_key
NODE_ENV=development
```

**For team members**:
```bash
# Clone project
git clone <repo>

# Copy template
cp .env.sample .env

# Fill in actual values
# (edit .env with your local values)
```

#### Production Deployment

For hosting services (Heroku, AWS, Render, Vercel):

1. They provide **dashboard UI** to set environment variables
2. Internally they run: `export VARIABLE=value`
3. Your `.env` file isn't pushed or needed in production
4. Each environment has its own configuration

**Example (Heroku)**:
```
UI → Settings → Config Vars

KEY              VALUE
PORT             3000
DATABASE_URL     postgres://...
JWT_SECRET       production_key_xyz
```

---

## Configuration Layer

### Problem: Scattered Environment Variable Access

Repeating `process.env.PORT` throughout code creates issues:

```javascript
// File 1: index.js
const PORT = process.env.PORT;

// File 2: controllers/user.js
const timeout = process.env.API_TIMEOUT;

// File 3: utils/db.js
const dbUrl = process.env.DATABASE_URL;

// ❌ Problems:
// 1. Repetitive and verbose
// 2. Pollutes multiple files
// 3. Hard to manage centrally
// 4. Type-unsafe (strings everywhere)
```

### Solution: Configuration Layer

Create a dedicated **config folder** to centralize all configuration:

```
src/
  ├── config/
  │   ├── server.config.js
  │   ├── database.config.js
  │   └── auth.config.js
  ├── controllers/
  ├── routes/
  └── index.js
```

#### Creating Server Configuration

`src/config/server.config.js`:

```javascript
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    EMAIL: process.env.EMAIL,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    API_TIMEOUT: parseInt(process.env.API_TIMEOUT) || 5000
};
```

#### Using Configuration Elsewhere

`src/index.js`:

```javascript
const express = require('express');
const { PORT, NODE_ENV } = require('./config/server.config');

const app = express();

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT} in ${NODE_ENV} mode`);
});
```

`src/controllers/user.controller.js`:

```javascript
const { API_TIMEOUT } = require('../config/server.config');

const getUserController = async (req, res) => {
    try {
        // Use timeout configuration
        // ...
    } catch (error) {
        // Error handling
    }
};

module.exports = { getUserController };
```

#### Benefits of Configuration Layer

✓ All configuration in one place
✓ Clean, readable code everywhere else
✓ Easy to switch between environments
✓ No hardcoded values in business logic
✓ Type checking possible (if using TypeScript)
✓ Centralized defaults

---

## MVC Architecture in Practice

### Recap: MVC Pattern

MVC (Model-View-Controller) consists of:

- **Model**: Database layer, data structures
- **View**: Frontend, user interface
- **Controller**: Request handler, business logic orchestrator
- **Service**: Business logic, calculations, transformations
- **Repository**: Database queries, data access

### Understanding Controllers

A **controller** is like a **waiter in a restaurant**:

```
Customer (Request)
    ↓
Waiter (Controller) - Takes order
    ↓
Kitchen (Service) - Prepares food
    ↓
Waiter (Controller) - Brings response
    ↓
Customer (Response)
```

**Controller responsibilities**:
1. Receive request from client
2. Pass data to service layer
3. Get result from service
4. Send response back

#### Creating Controllers Directory

```
src/
  ├── controllers/
  │   ├── home.controller.js
  │   ├── user.controller.js
  │   ├── product.controller.js
  │   └── order.controller.js
  ├── config/
  ├── routes/
  └── index.js
```

#### Example: Home Controller

`src/controllers/home.controller.js`:

```javascript
const homePingController = (req, res) => {
    try {
        return res.json({
            message: 'Welcome home!',
            timestamp: new Date()
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const homeHealthCheckController = (req, res) => {
    return res.json({ status: 'Server is running' });
};

module.exports = {
    homePingController,
    homeHealthCheckController
};
```

#### Using Controller in Route

`src/index.js`:

```javascript
const express = require('express');
const { homePingController, homeHealthCheckController } = require('./controllers/home.controller');

const app = express();

app.get('/home', homePingController);
app.get('/health', homeHealthCheckController);

module.exports = app;
```

#### Benefits of Controllers

✓ Separates concerns (routing vs logic)
✓ Reusable across different routes
✓ Easier to test individually
✓ Cleaner main file (index.js)
✓ Better code organization

---

## Express Router Fundamentals

### Problem: Unscalable Route Management

Putting all routes in one file doesn't scale:

```javascript
// ❌ Unscalable - all 500+ routes in one file
app.get('/home', homeController);
app.get('/users/:id', userGetController);
app.post('/users', userCreateController);
app.put('/users/:id', userUpdateController);
app.delete('/users/:id', userDeleteController);

app.get('/products', productListController);
app.post('/products', productCreateController);
// ... 500+ more routes

// Problems:
// 1. File becomes massive
// 2. Hard to find specific routes
// 3. Mixed concerns
// 4. Difficult for team collaboration
```

### Solution: Express Router

**Express Router** modularizes routes into separate files and groups them logically.

#### Creating a Router

`src/routes/home.routes.js`:

```javascript
const express = require('express');
const {
    homePingController,
    homeHealthCheckController
} = require('../controllers/home.controller');

const router = express.Router();

// Define routes for this router
router.get('/ping', homePingController);
router.get('/health', homeHealthCheckController);

module.exports = router;
```

`src/routes/user.routes.js`:

```javascript
const express = require('express');
const {
    getUserController,
    createUserController,
    updateUserController,
    deleteUserController
} = require('../controllers/user.controller');

const router = express.Router();

// All user-related routes
router.get('/:id', getUserController);
router.post('/', createUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

module.exports = router;
```

#### Registering Router with App

`src/index.js`:

```javascript
const express = require('express');
const homeRouter = require('./routes/home.routes');
const userRouter = require('./routes/user.routes');

const app = express();

// Register routers
app.use('/home', homeRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server started at port 3000');
});
```

**Resulting Routes**:
- `GET /home/ping` → homePingController
- `GET /home/health` → homeHealthCheckController
- `GET /users/:id` → getUserController
- `POST /users` → createUserController
- `PUT /users/:id` → updateUserController
- `DELETE /users/:id` → deleteUserController

### Router Prefix Concept

```javascript
app.use('/home', homeRouter);
```

This means: **All routes in `homeRouter` get prefixed with `/home`**

So if router has `router.get('/ping')`, it becomes `GET /home/ping`.

### Grouping Multiple Routers

`src/routes/index.js`:

```javascript
const express = require('express');
const userRouter = require('./user.routes');
const productRouter = require('./product.routes');
const orderRouter = require('./order.routes');

const router = express.Router();

// Group all API routes
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);

module.exports = router;
```

`src/index.js`:

```javascript
const express = require('express');
const apiRouter = require('./routes');

const app = express();

// All routes now under /api prefix
app.use('/api', apiRouter);

app.listen(3000);
```

**Resulting Routes**:
- `GET /api/users/:id` → userRouter → getUserController
- `POST /api/products` → productRouter → createProductController
- `DELETE /api/orders/:id` → orderRouter → deleteOrderController

### Router Execution Flow

**Request**: `POST /api/users`

```
1. Request arrives at /api/users
2. Express checks app-level routes
3. Sees app.use('/api', apiRouter)
4. Routes to apiRouter
5. Remaining path is /users
6. apiRouter checks its routes
7. Sees router.use('/users', userRouter)
8. Routes to userRouter
9. Remaining path is empty
10. userRouter matches POST route with no path
11. Executes userCreateController
12. Sends response
```

---

## API Versioning Strategy

### What is API Versioning?

As your API evolves, you need to support multiple versions simultaneously:

**Scenario**:
- **Version 1**: Simple product list (name, price)
- **Version 2**: Enhanced product list (name, price, ratings, reviews, stock)

Both versions should work for backward compatibility:
- Old clients use V1
- New clients use V2
- No breaking changes for existing users

### Versioning Routes

```
/api/v1/products       → Version 1 endpoints
/api/v2/products       → Version 2 endpoints (enhanced)
/api/v1/categories     → Version 1 endpoints
/api/v2/categories     → Version 2 endpoints
```

### Implementing API Versioning

Directory structure:

```
src/routes/
  ├── v1/
  │   ├── index.js
  │   ├── product.routes.js
  │   ├── category.routes.js
  │   └── user.routes.js
  ├── v2/
  │   ├── index.js
  │   ├── product.routes.js
  │   ├── category.routes.js
  │   └── user.routes.js
  └── index.js
```

#### Version 1 Router

`src/routes/v1/product.routes.js`:

```javascript
const express = require('express');
const router = express.Router();

// V1: Simple product response
router.get('/', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 }
    ];
    res.json(products);
});

router.get('/:id', (req, res) => {
    const product = { id: req.params.id, name: 'Product', price: 100 };
    res.json(product);
});

module.exports = router;
```

`src/routes/v1/index.js`:

```javascript
const express = require('express');
const productRouter = require('./product.routes');
const categoryRouter = require('./category.routes');

const router = express.Router();

router.use('/products', productRouter);
router.use('/categories', categoryRouter);

module.exports = router;
```

#### Version 2 Router (Enhanced)

`src/routes/v2/product.routes.js`:

```javascript
const express = require('express');
const router = express.Router();

// V2: Enhanced product response with ratings and reviews
router.get('/', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            rating: 4.5,
            reviews: 120,
            stock: 50
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            rating: 4.8,
            reviews: 350,
            stock: 100
        }
    ];
    res.json(products);
});

router.get('/:id', (req, res) => {
    const product = {
        id: req.params.id,
        name: 'Product',
        price: 100,
        rating: 4.5,
        reviews: 120,
        stock: 50,
        description: 'Detailed description',
        images: ['img1.jpg', 'img2.jpg']
    };
    res.json(product);
});

module.exports = router;
```

`src/routes/v2/index.js`:

```javascript
const express = require('express');
const productRouter = require('./product.routes');
const categoryRouter = require('./category.routes');

const router = express.Router();

router.use('/products', productRouter);
router.use('/categories', categoryRouter);

module.exports = router;
```

#### Main Routes File

`src/routes/index.js`:

```javascript
const express = require('express');
const v1Router = require('./v1');
const v2Router = require('./v2');

const router = express.Router();

// Register versioned routers
router.use('/v1', v1Router);
router.use('/v2', v2Router);

module.exports = router;
```

#### Server Setup

`src/index.js`:

```javascript
const express = require('express');
const apiRouter = require('./routes');

const app = express();

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server started at port 3000');
});
```

### Resulting Versioned Routes

```
GET    /api/v1/products           → V1 list (simple)
GET    /api/v2/products           → V2 list (enhanced with ratings)
GET    /api/v1/products/:id       → V1 single product
GET    /api/v2/products/:id       → V2 single product
GET    /api/v1/categories         → V1 categories
GET    /api/v2/categories         → V2 categories
POST   /api/v1/products           → V1 create
POST   /api/v2/products           → V2 create
```

### Why Versioning Matters

**Backward Compatibility**: Old clients continue working
**Gradual Migration**: Clients upgrade at their own pace
**Testing**: Test new version before deprecating old one
**Support**: Support multiple versions simultaneously
**No Breaking Changes**: Old API remains stable

---

## Questions & Answers

### Package Management

**Q: What's the difference between installing packages locally vs globally?**

A:
- **Local** (`npm install package`):
  - Installs in `node_modules/` folder
  - Stored per project
  - Safe, isolated from other projects
  - Recommended approach

- **Global** (`npm install -g package`):
  - Installs system-wide
  - Can cause version conflicts between projects
  - Generally not recommended
  - Use only for CLI tools

**Q: Why should we avoid global package installation?**

A: Version conflicts. Project A needs version 1.0 of a package, Project B needs version 2.0. Global installation creates conflicts.

**Q: How do NPM packages resolve dependencies?**

A: NPM uses **topological sorting** algorithm:
```
Package A needs B and C
Package B needs D
Package C needs E and D

NPM solves dependency order: D → E → B → C → A
```

### Environment Variables

**Q: Why shouldn't we commit `.env` files to Git?**

A:
- **Security**: Secrets (API keys, passwords) exposed to everyone with repo access
- **Different environments**: Local, staging, production need different values
- **Team safety**: Different team members have different secrets
- **Compliance**: Many companies prohibit secrets in version control

**Q: What's the difference between `.env` and `.env.sample`?**

A:
- **`.env`**: Contains actual values, never committed, gitignored
- **`.env.sample`**: Template with example values, committed to Git for reference

**Q: Do environment variables persist after the process stops?**

A: No. Environment variables are **only available to the running process**. When the process stops, they're cleared. This is why `.env` files are needed for persistence.

**Q: Can I set environment variables in production deployment?**

A: Yes. Most hosting platforms (Heroku, AWS, Vercel, Render) provide UI to set environment variables without needing `.env` files.

**Q: What if a `.env` variable is missing?**

A: Use default values:
```javascript
PORT: process.env.PORT || 3000
// If PORT is not set, use 3000
```
**Q: How does a .env file become an environment variable? What happens in the background?**
A: When your application starts, the `.env` file itself is not automatically understood by Node.js or the OS. A library like dotenv reads it and loads the values into the process environment.

Step-by-step what happens internally:
```bash
# App starts
node index.js


# dotenv loads first
require('dotenv').config();


# dotenv reads .env file
PORT=3000
DB_URL=mongodb://localhost


# dotenv parses the file
 - Reads key-value pairs
 - Converts them into JavaScript strings

# Variables are injected into process.env
process.env.PORT = "3000"
process.env.DB_URL = "mongodb://localhost"


# Your app can now access them
const port = process.env.PORT;
```

**Q: Where are these variables stored?**
A: 
- They exist only in memory
- Stored inside Node.js process environment
- Not written to disk
- Destroyed when the process exits

**Q: Why .env is not part of Node.js by default?**
A:
 - Node.js is platform-independent
 - OS-level environment variables already exist
 - .env is just a developer convenience layer

### Nodemon & Hot Reloading

**Q: Why does Nodemon not track `.env` file changes?**

A: By default, Nodemon only watches JavaScript and JSON files. Configuration files like `.env` are ignored.

**Q: What files does Nodemon watch by default?**

A:
- JavaScript files (`.js`)
- TypeScript files (`.ts`)
- JSON files (`.json`)

It ignores:
- `.env` files
- `.gitignore` files
- `node_modules/` directory

**Q: Is it necessary to use Nodemon?**

A: Not mandatory, but highly recommended. Alternatives:
- Node 19+ built-in `--watch` flag
- Manual restart every time
- IDE extensions

### Routing & Architecture

**Q: Why separate routes into different files?**

A:
- **Scalability**: Manage thousands of routes across multiple files
- **Maintainability**: Related routes grouped together
- **Testability**: Easier to test route handlers independently
- **Team collaboration**: Different developers work on different route files

**Q: What's the difference between `app.use()` and `app.get()`?**

A:
- **`app.use()`**: Registers middleware/router for ALL requests (global)
- **`app.get()`**: Registers route handler for GET requests only
- **`app.post()`**: Registers route handler for POST requests only

**Q: How does Express Router match incoming requests?**

A: Step-by-step matching with prefix stripping:
```
Request: POST /api/v1/products

1. App receives request at /api/v1/products
2. Checks if path starts with /api ✓
3. Routes to mainRouter, strips /api prefix
4. Remaining path: /v1/products
5. mainRouter checks if path starts with /v1 ✓
6. Routes to v1Router, strips /v1 prefix
7. Remaining path: /products
8. v1Router checks if path starts with /products ✓
9. Routes to productRouter, strips /products prefix
10. Remaining path: empty (matched)
11. Calls POST handler
12. Executes controller
```

**Q: Should the order of `app.use()` matter?**

A: Yes! Express processes routes in order:
```javascript
// More specific routes first
app.use('/api/v2', v2Router);  // More specific
app.use('/api', apiRouter);    // General

// If reversed, v2 matches in apiRouter instead of v2Router
```

**Q: Can I have the same route in different routers?**

A: Yes, if they're under different prefixes:
```javascript
app.use('/api/v1', v1Router);  // /api/v1/products
app.use('/api/v2', v2Router);  // /api/v2/products
```

They're different routes pointing to same controller.

### API Design

**Q: Why use API versioning?**

A:
- **Backward compatibility**: Old clients still work
- **Gradual migration**: Clients can upgrade at their own pace
- **Testing**: Test new version before deprecating old one
- **Support**: Support multiple versions simultaneously
- **Risk mitigation**: New features don't break existing apps

**Q: What's the difference between URL params and versioning?**

A:
- **URL params**: `/products/:id` - identifies a **specific resource**
- **Versioning**: `/v1/products` - identifies **API version**

They serve different purposes and can coexist:
```
GET /api/v1/products/:id
GET /api/v2/products/:id
```

**Q: How long should we support old API versions?**

A: Depends on business needs:
- Communication period: 6-12 months notice
- Support period: 1-3 years typical
- Then deprecation: Remove old versions
- Document migration path

---

## Best Practices Summary

### Project Structure

```
project/
├── src/
│   ├── config/
│   │   └── server.config.js
│   ├── controllers/
│   │   ├── product.controller.js
│   │   ├── category.controller.js
│   │   └── user.controller.js
│   ├── routes/
│   │   ├── v1/
│   │   │   ├── index.js
│   │   │   ├── product.routes.js
│   │   │   ├── category.routes.js
│   │   │   └── user.routes.js
│   │   ├── v2/
│   │   │   ├── index.js
│   │   │   ├── product.routes.js
│   │   │   ├── category.routes.js
│   │   │   └── user.routes.js
│   │   └── index.js
│   └── index.js
├── .env
├── .env.sample
├── .gitignore
├── package.json
└── package-lock.json
```

### Package.json Configuration

```json
{
  "name": "todo-api",
  "version": "1.0.0",
  "description": "Todo API with versioning",
  "main": "src/index.js",
  "scripts": {
    "start": "npx nodemon src/index.js",
    "dev": "npx nodemon src/index.js",
    "test": "jest",
    "build": "tsc"
  },
  "dependencies": {
    "express": "^4.18.2",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### Environment Configuration

Best practices:

```javascript
// ✓ Good: Centralized config
const { PORT, EMAIL, DATABASE_URL } = require('./config/server.config');

// ❌ Avoid: Scattered env access
const port = process.env.PORT;
const email = process.env.EMAIL;
const dbUrl = process.env.DATABASE_URL;
```

### Routing Organization

Best practices:

```javascript
// ✓ Good: Modularized routing
const v1Router = require('./routes/v1');
const v2Router = require('./routes/v2');

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

// ❌ Avoid: All routes in main file
app.get('/route1', handler1);
app.get('/route2', handler2);
// ... 500+ routes scattered everywhere
```

### Controller Organization

Best practices:

```javascript
// ✓ Good: One responsibility per controller
const getProductsController = (req, res) => { /* ... */ };
const createProductController = (req, res) => { /* ... */ };
const updateProductController = (req, res) => { /* ... */ };
const deleteProductController = (req, res) => { /* ... */ };

// ❌ Avoid: Multiple concerns in one function
const productController = (req, res) => {
    // Handles get, post, put, delete all in one function
};
```

---

## Key Takeaways

1. **Nodemon** enables hot reloading during development
2. **NPX** runs local packages without global installation
3. **Environment variables** store configuration separate from code
4. **`.env` files** manage variables easily without hardcoding
5. **`.gitignore`** prevents secrets from version control
6. **Configuration layer** centralizes all settings in one place
7. **Controllers** separate route handlers from routing logic
8. **Express Router** modularizes routes at scale
9. **API Versioning** maintains backward compatibility
10. **Proper structure** makes code maintainable and scalable

---

## Industry Verification

These architecture practices are verified at:
- **Google**: Large-scale backend systems
- **Microsoft**: Enterprise application architecture
- **LinkedIn**: Social network API design
- **Zepto**: Fast-growing backend infrastructure
- **Open-source projects**: Express.js community standards

---

**End of Lecture Notes**

*These comprehensive notes cover Express.js fundamentals, project setup, MVC implementation, and scalable routing architecture based on industry best practices verified at companies like Google, Microsoft, LinkedIn, and Zepto.*
