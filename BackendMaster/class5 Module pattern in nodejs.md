# Module Pattern in Node.js (CJS & Basics) — Complete Documentation

## 1. What Is a Module?

A **module** is a mechanism for splitting JavaScript programs into small, manageable, reusable chunks.  
A module helps in:
- Code reusability
- Separation of concerns
- Better readability
- Maintainability
- Following **DRY principle**

Examples:
- A module for searching algorithms
- A module for sorting algorithms
- A module for utilities (date functions, string helpers, etc.)

Modules allow JavaScript code to be organized exactly like:
- Header files in C++
- Classes/libraries in Java
- Packages in other languages

---

## 2. Why Modules?

If all code is written in one file, it becomes:
- Hard to read  
- Hard to maintain  
- Hard to reuse  

Instead, related functions are grouped together:
- Searching algorithms → *searching.js*
- Sorting algorithms → *sorting.js*
- Stack or LinkedList → separate module files

---

## 3. Module Systems in Node.js

Node.js supports **two module systems**:

### 1. **CJS (CommonJS)** — Traditional system  
Used in older Node.js projects, Express.js, legacy codebase.

### 2. **ESM (ES Modules)** — Modern system  
Used in React, Next.js, modern Node.js.

Both systems still work in Node.js.

---

## 4. CJS (CommonJS) Modules

This system uses:

### - `module.exports` → To export
### - `require()` → To import

Example folder:
```
project/
 ├─ searching.js
 └─ index.js
```

---

## 5. Creating a Searching Module

### **searching.js**
```js
function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return undefined;
}

function binarySearch(arr, x) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) return mid;
    if (arr[mid] < x) low = mid + 1;
    else high = mid - 1;
  }
}
```

### **Export using CommonJS**
```js
module.exports = {
  linearSearch,
  binarySearch
};
```

---

## 6. Importing Searching Module

### **index.js**
```js
const searchingFunctions = require("./searching");

console.log(searchingFunctions.linearSearch([1,2,3], 3));
```

---

## 7. Using Destructuring

```js
const { linearSearch, binarySearch } = require("./searching");

console.log(linearSearch([10,20,30], 20));
```

### Aliasing (renaming)
```js
const { linearSearch: ls } = require("./searching");

console.log(ls([10,20,30], 10));
```

---

## 8. What Is `module.exports`?

Node.js provides a global object called **module**.

Inside it is an **exports** object:
```js
console.log(module);
```

You will see:
```
{
  exports: {}
}
```

### Adding exports manually:
```js
module.exports.linearSearch = linearSearch;
module.exports.binarySearch = binarySearch;
```

Equivalent to:
```js
module.exports = {
  linearSearch,
  binarySearch
};
```

---

## 9. Example: Sorting Module

### sorting.js
```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}

module.exports = {
  bubbleSort,
  insertionSort
};
```

---

## 10. Default Export in CommonJS

If you want to export only one function:

```js
module.exports = quickSort;
```

### Import:
```js
const quickSort = require("./quicksort");

quickSort([4,3,2,1]);
```

This behaves similar to **default export** in ES modules.

---

## 11. Named Exports vs Default Exports

| Type | Syntax | CJS Equivalent |
|------|--------|----------------|
| Named Export | `export { func }` | `module.exports = { func }` |
| Default Export | `export default func` | `module.exports = func` |

---

## 12. When to Use Which Module System?

### Use **ESM** when:
- Writing modern apps  
- Using React/Next.js  
- Using top-level await  
- Project uses `"type": "module"` in package.json  

### Use **CJS** when:
- Working with older projects  
- Using Express.js legacy style  
- Using modules not compatible with ESM  

Both are fine — just **stay consistent** in a project.

---

## 13. Summary

- A **module** is a reusable, manageable piece of code.
- Node.js supports two module systems: **CJS** and **ESM**.
- CJS uses:
  - `module.exports`
  - `require()`
- You can export:
  - Objects  
  - Functions  
  - Single default export  
- Destructuring and aliasing improve readability.

---

