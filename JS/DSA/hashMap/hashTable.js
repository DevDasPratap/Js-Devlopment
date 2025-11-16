// key value pair
const person = {
    name: "Pratap",
    profassion: 'Software Developer'
}

// console.log(person.name)
const otherPerson = {
    name: "pd",
    profassion: 'Software Developer'
}

// console.log(otherPerson.name)

// A hash function is a speacial type of function
// it takes some value key as input
// it converts key into a fixed size numerical value called a hash code

/**
 * Efficient data retrival through key-value paris
 * Fast insertion, delete, lookup operation, constant time O(1)
 * Hash function is used to convert key to index of hash index
 * Collisions occur when keys are hashed to the same index
 * We use chaning to allowing to allow multiple key-va;ue pairs at same index
 */
function hashFunction(key, maxValue) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
        let asciiCode = key[i].charCodeAt()
        total = total + asciiCode
    }
    // console.log('total: ', total)
    return total % maxValue
}

const res = hashFunction('Pratap', 50)
// console.log(res)



// 1️⃣ What is a Hash Table?

// 2️⃣ How Hash Tables work in JavaScript?

// 3️⃣ Step-by-step Practical Example

// Why Learn Hash Tables?

class HashTable {
    constructor(size) {
        this.table = new Array(size); // fixed size array
        this.size = size;
    }

    // Hash function — converts a string key into a numeric index
    _hash(key, max) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i); // ✅ charCodeAt(i) not charCodeAt()
        }
        return hash % max; // ensure index is within array bounds
    }

    // Insert or update a key-value pair
    set(key, value) {
        const index = this._hash(key, this.size);

        if (!this.table[index]) {
            this.table[index] = []; // initialize bucket if empty
        }

        // Check if key already exists → update value
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value; // update value
                return;
            }
        }

        // Otherwise, push new key-value pair
        this.table[index].push([key, value]);
    }

    // Retrieve value by key
    get(key) {
        const index = this._hash(key, this.size);
        const bucket = this.table[index];

        if (!bucket) return undefined;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return undefined;
    }

    // Remove a key-value pair
    remove(key) {
        const index = this._hash(key, this.size);
        const bucket = this.table[index];

        if (!bucket) return false;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // remove element
                if (bucket.length === 0) {
                    this.table[index] = undefined; // clear empty bucket
                }
                return true;
            }
        }
        return false;
    }

    // Check if a key exists
    has(key) {
        return this.get(key) !== undefined;
    }
}

// Example usage
const hash = new HashTable(50);
hash.set('Apple', 50);
hash.set('Banana', 40);
hash.set('Orange', 60);
hash.set('Papaya', 100);

// Collision example (same hash bucket)
hash.set('elppA', 99); // Reverse of "Apple" → possible collision

console.log(hash.get('Apple')); // 50
console.log(hash.get('Banana')); // 40
console.log(hash.has('Orange')); // true
console.log(hash.remove('Banana')); // true
console.log(hash.get('Banana')); // undefined

console.log(hash);
