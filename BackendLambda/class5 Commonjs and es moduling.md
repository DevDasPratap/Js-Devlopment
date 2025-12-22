# CommonJS vs ES Modules in Node.js — Complete Documentation

## 1. Overview
Node.js supports **two module systems**:

1. **CommonJS (CJS)** — Traditional Node.js module system  
2. **ECMAScript Modules (ESM)** — Modern standard module system

Both can coexist, but their syntax, behavior, and configuration differ.

By default, Node.js treats files as **CommonJS modules**, unless explicitly configured to use **ESM**.

---

## 2. CommonJS Module System

### 2.1 Syntax
#### Export:
```js
module.exports = { func1, func2 };
```

#### Import:
```js
const module = require("./module");
```

### 2.2 When is CommonJS Used?
Node.js treats a file as **CommonJS** when:
- No configuration is done (default behavior)
- File extension is **`.cjs`**
- `package.json` has:
```json
{
  "type": "commonjs"
}
```

### 2.3 Example
#### searching.js
```js
function linearSearch() {}
function binarySearch() {}

module.exports = { linearSearch, binarySearch };
```

#### index.js
```js
const { linearSearch } = require("./searching.js");
```

---

## 3. Enabling ES Modules

Node.js loads ES modules when any of the following is true:
- File extension is **`.mjs`**
- `package.json` contains:
```json
{
  "type": "module"
}
```
- Using CLI flag:  
`node --input-type=module file.js`

---

## 4. ES Module Syntax

### 4.1 Named Export
```js
export function bubbleSort() {}
export function selectionSort() {}
```

### 4.2 Default Export
```js
export default function mergeSort() {}
```

### 4.3 Import Syntax
#### Import default:
```js
import mergeSort from "./sorting.mjs";
```

#### Import named exports:
```js
import { bubbleSort, selectionSort } from "./sorting.mjs";
```

#### Aliasing:
```js
import { bubbleSort as bs } from "./sorting.mjs";
```

#### Import all:
```js
import * as sorting from "./sorting.mjs";

sorting.bubbleSort(arr);
```

---

## 5. Important Rule: `.mjs` Requires `.js/.mjs` Extensions in Imports
When using ESM:

```js
import algo from "./searching"; // ❌ ERROR
import algo from "./searching.js"; // ✅ Works
```

Node.js requires explicit extensions when using ES modules.

---

## 6. Converting a CJS Project to ESM

### Step 1: Rename file to `.mjs`
Example:  
`index.js → index.mjs`

### Step 2: Replace `require` with `import`
```js
import searchingAlgo from "./searching.js";
```

### Step 3: Update exports inside modules
```js
export function bubbleSort() {}
export function insertionSort() {}
export default mergeSort;
```

### Step 4: Import correctly
```js
import mergeSort, { bubbleSort } from "./sorting.mjs";
```

---

## 7. Named vs Default Exports

### Named Export
```js
export function quickSort() {}
export function bubbleSort() {}
```

Imported using destructuring:
```js
import { quickSort, bubbleSort } from "./sorting.mjs";
```

### Default Export
```js
export default quickSort;
```

Imported without destructuring:
```js
import qs from "./sorting.mjs";
```

---

## 8. Mixing CJS and ESM

Node.js allows **importing CJS into ESM**, but not always the opposite.

### Importing CJS in ESM
```js
import searching from "./searching.js"; // Works
```

Node wraps CJS exports as a **default export** inside ESM.

---

## 9. Package.json Configuration

### Enable ES Modules Globally
```json
{
  "type": "module"
}
```

### Enable CommonJS Globally
```json
{
  "type": "commonjs"
}
```

---

## 10. Summary Table

| Feature | CommonJS (CJS) | ES Modules (ESM) |
|--------|-----------------|------------------|
| Import | require() | import |
| Export | module.exports | export / export default |
| Extension | .js, .cjs | .mjs, .js (with type: module) |
| Default behavior | Yes | No |
| Syntax style | Runtime-based | Compile-time static |
| Supports top-level await | No | Yes |

---

## 11. Cheatsheet

### CJS
```js
const x = require("./file.js");
module.exports = y;
```

### ESM
```js
import x from "./file.js";
export default y;
export const z = 10;
```

---

## 12. Example: Full Sorting Module in ESM

### sorting.mjs
```js
export function bubbleSort(arr) {}
export function selectionSort(arr) {}

export default function mergeSort(arr) {}
```

### index.mjs
```js
import mergeSort, { bubbleSort } from "./sorting.mjs";

const arr = [5, 4, 3, 2, 1];
console.log(mergeSort(arr));
```

---

## 13. Final Notes
- CJS is older and still widely used.
- ESM is the future: modern, cleaner, supports tree-shaking, async/await at top level.
- Node.js supports both for backward compatibility.
- Choose one module system per project for consistency.

