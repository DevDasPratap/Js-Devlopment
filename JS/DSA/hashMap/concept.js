// ============================================
// 1. HASHING APPLICATIONS & BASIC CONCEPTS
// ============================================

/**
 * Direct Address Table - when keys are small integers
 */
class DirectAddressTable {
    constructor(maxKey) {
        this.table = new Array(maxKey).fill(null);
    }
    
    insert(key, value) {
        this.table[key] = value;
    }
    
    search(key) {
        return this.table[key];
    }
    
    delete(key) {
        this.table[key] = null;
    }
}

// ============================================
// 2. CHAINING - Collision Handling
// ============================================

class HashTableWithChaining {
    constructor(size = 10) {
        this.size = size;
        this.table = Array.from({ length: size }, () => []);
    }
    
    hash(key) {
        return key % this.size;
    }
    
    insert(key, value) {
        const index = this.hash(key);
        // Check if key exists, update it
        for (let item of this.table[index]) {
            if (item[0] === key) {
                item[1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
    }
    
    search(key) {
        const index = this.hash(key);
        for (let item of this.table[index]) {
            if (item[0] === key) return item[1];
        }
        return null;
    }
    
    delete(key) {
        const index = this.hash(key);
        this.table[index] = this.table[index].filter(item => item[0] !== key);
    }
}

// ============================================
// 3. OPEN ADDRESSING - Linear Probing
// ============================================

class HashTableLinearProbing {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }
    
    hash(key) {
        return key % this.size;
    }
    
    insert(key, value) {
        let index = this.hash(key);
        let i = 0;
        
        while (this.table[(index + i) % this.size] !== null) {
            if (this.table[(index + i) % this.size][0] === key) {
                this.table[(index + i) % this.size][1] = value;
                return;
            }
            i++;
            if (i >= this.size) throw new Error("Hash table is full");
        }
        this.table[(index + i) % this.size] = [key, value];
    }
    
    search(key) {
        let index = this.hash(key);
        let i = 0;
        
        while (this.table[(index + i) % this.size] !== null) {
            if (this.table[(index + i) % this.size][0] === key) {
                return this.table[(index + i) % this.size][1];
            }
            i++;
        }
        return null;
    }
}

// ============================================
// 4. OPEN ADDRESSING - Quadratic Probing
// ============================================

class HashTableQuadraticProbing {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }
    
    hash(key) {
        return key % this.size;
    }
    
    insert(key, value) {
        let index = this.hash(key);
        let i = 0;
        
        while (this.table[(index + i * i) % this.size] !== null) {
            if (this.table[(index + i * i) % this.size][0] === key) {
                this.table[(index + i * i) % this.size][1] = value;
                return;
            }
            i++;
        }
        this.table[(index + i * i) % this.size] = [key, value];
    }
    
    search(key) {
        let index = this.hash(key);
        let i = 0;
        
        while (this.table[(index + i * i) % this.size] !== null) {
            if (this.table[(index + i * i) % this.size][0] === key) {
                return this.table[(index + i * i) % this.size][1];
            }
            i++;
        }
        return null;
    }
}

// ============================================
// 5. DOUBLE HASHING
// ============================================

class HashTableDoubleHashing {
    constructor(size = 11) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }
    
    hash1(key) {
        return key % this.size;
    }
    
    hash2(key) {
        return 7 - (key % 7); // Must be prime and less than table size
    }
    
    insert(key, value) {
        let i = 0;
        let index = this.hash1(key);
        
        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index][1] = value;
                return;
            }
            i++;
            index = (this.hash1(key) + i * this.hash2(key)) % this.size;
        }
        this.table[index] = [key, value];
    }
    
    search(key) {
        let i = 0;
        let index = this.hash1(key);
        
        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            i++;
            index = (this.hash1(key) + i * this.hash2(key)) % this.size;
        }
        return null;
    }
}

// ============================================
// 6. SET vs MAP in JavaScript
// ============================================

// SET - unique values only
const mySet = new Set([1, 2, 2, 3, 3]);
console.log(mySet); // Set { 1, 2, 3 }
mySet.add(4);
mySet.has(2); // true
mySet.delete(1);
mySet.size; // 3

// MAP - key-value pairs
const myMap = new Map();
myMap.set("name", "John");
myMap.set(1, "one");
myMap.get("name"); // "John"
myMap.has(1); // true
myMap.delete("name");
myMap.size; // 1

// ============================================
// 7. COMPARISON: CHAINING vs OPEN ADDRESSING
// ============================================

/**
 * CHAINING:
 * Pros: Simple, deletion is easy, works well with load factor > 1
 * Cons: Extra memory for pointers, cache unfriendly
 * 
 * OPEN ADDRESSING:
 * Pros: Better cache locality, less memory overhead
 * Cons: Complex deletion, load factor must be < 1
 */
