# MongoDB Indexing

## Introduction
Indexing in MongoDB improves query performance by allowing faster lookups of documents within a collection. By default, MongoDB performs a **collection scan (COLLSCAN)**, which is a linear search. When an index is created, MongoDB organizes the data in a **B-tree** structure, enabling **index scan (IXSCAN)** with **binary search**.

An index stores:
- **Index keys** (sorted order)
- **Pointers** to the documents in the collection

When a query is executed, MongoDB can use the index to quickly locate the relevant documents without scanning the entire collection.

## Trade-offs of Indexing
While indexes improve **read performance**, they come with some drawbacks:
- **Increased storage space** (Indexes consume additional disk space)
- **Slower write operations** (Each insert/update/delete operation also updates the indexes)

## Types of Indexes in MongoDB
MongoDB supports several types of indexes:

### 1. Single-Field Index
An index created on a **single field**.

#### Creating a Single-Field Index
```javascript
// Ascending Order Index
 db.collectionName.createIndex({"age": 1})

// Descending Order Index
 db.collectionName.createIndex({"age": -1})
```

#### Checking and Dropping Indexes
```javascript
// View all indexes
 db.collectionName.getIndexes()

// Drop a specific index
 db.collectionName.dropIndex("indexName")
```

#### Query Using a Single-Field Index
```javascript
// Find documents where age is 30
db.collectionName.find({age: 30}).explain("executionStats")
```

### 2. Compound Index
An index on **multiple fields** in a single index.

#### Creating a Compound Index
```javascript
db.collectionName.createIndex({"age": 1, "gender": 1})
```

#### Query with Compound Index
```javascript
// Find all males under the age of 30
db.collectionName.find({age: {'$lt':30}, gender: "male"}).explain("executionStats")
```

### 3. TTL (Time-To-Live) Index
Automatically deletes documents after a specified time.

#### Creating a TTL Index
```javascript
db.collectionName.createIndex({"expires": 1}, {expireAfterSeconds: 3600})
```

#### Query Using TTL Index
```javascript
// Find all documents that are set to expire
db.collectionName.find({expires: {$exists: true}}).explain("executionStats")
```

### 4. Covered Query
A query that is entirely covered by an index, meaning:
- All the fields in the query are **part of an index**
- All the fields **returned** in the query are **from the same index**

#### Creating an Index for a Covered Query
```javascript
db.collectionName.createIndex({name: 1})
```

#### Query Example
```javascript
// Find document where name is "mark" and return only the name field
db.collectionName.find({name: "mark"}, {_id: 0, name: 1}).explain("executionStats")
```

### 5. Index Selection and Winning Plan
When multiple indexes exist for a query, MongoDB evaluates their performance and selects the **winning plan**.

#### Example Indexes
```javascript
db.collectionName.getIndexes()
[
    {v: 2, key: {_id:1}, name: '_id_'},
    {v: 2, key: {name:1}, name: 'name_1'},
    {v: 2, key: {name:1, age: 1}, name: 'name_1_age_1'}
]
```
#### Query Execution Plan
```javascript
// Check which index is being used
db.collectionName.find({name: "mark"}).explain("allPlansExecution")
```
MongoDB evaluates the indexes and stores the **winning plan** in cache for future queries.

### 6. Multi-Key Index
Multi-key indexes allow indexing **array fields**. MongoDB creates a separate index entry for each array value.

#### Creating a Multi-Key Index
```javascript
db.collectionName.createIndex({tags: 1})
```

#### Query Using Multi-Key Index
```javascript
// Find documents where tags contain "mongodb"
db.collectionName.find({tags: "mongodb"}).explain("executionStats")
```

### 7. Text Index
Used for **full-text search** capabilities.

#### Creating a Text Index
```javascript
db.collectionName.createIndex({name: "text", bio: "text"})
```

#### Performing Text Search
```javascript
// Basic search
db.collectionName.find({$text: {$search: "any word"}})

// Sorting by text relevance score
db.collectionName.find({$text: {$search: "any word"}}, {score: {$meta: "textScore"}}).sort({score: {$meta: "textScore"}})

// Excluding a word from the search
db.collectionName.find({$text: {$search: "any word -excludeWord"}})
```

### 8. Hashed Index
Used for **sharded clusters** to distribute data evenly.

#### Creating a Hashed Index
```javascript
db.collectionName.createIndex({userId: "hashed"})
```

#### Query Using Hashed Index
```javascript
// Find document using hashed index
db.collectionName.find({userId: "12345"}).explain("executionStats")
```

### 9. Wildcard Index
Wildcard indexes are used when the structure of documents is unpredictable.

#### Creating a Wildcard Index
```javascript
db.collectionName.createIndex({"$**": 1})
```

#### Query Using Wildcard Index
```javascript
// Search on any field in the document
db.collectionName.find({randomField: "someValue"}).explain("executionStats")
```

## When Not to Use Indexing
Indexes are not always beneficial. Avoid creating indexes when:
- The **collection is small** (A full scan is faster than maintaining an index)
- The collection is **frequently updated** (Indexes slow down inserts/updates/deletes)
- Queries involve **complex conditions** across multiple fields
- The collection is **very large** (Having too many indexes can increase storage usage)

## Conclusion
Indexes are powerful tools for optimizing queries in MongoDB. However, they should be used wisely to balance read performance, write efficiency, and storage space. Use **explain()** to analyze query execution plans and ensure optimal index usage.

