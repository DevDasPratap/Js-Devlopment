# MongoDB Aggregation

## Introduction

Aggregation in MongoDB is used to process data records and return computed results. It allows grouping data from multiple documents into a single document based on a specified expression.

The **aggregation pipeline** consists of multiple stages, where the output of one stage is the input to the next. MongoDB provides several built-in **aggregation stages**, such as `$group`, `$sum`, `$avg`, `$min`, `$max`, `$match`, `$project`, and `$sort`, to perform different operations on the data.

### Aggregation Syntax

```javascript
db.collectionName.aggregate(pipeline, options)
```

- **pipeline**: An array of stages to process the data.
- **options**: Optional settings for the aggregation query.

## Aggregation Pipeline Stages

### 1. `$match`

Filters documents to pass only those that match the specified condition.

```javascript
// Find all male documents
db.collectionName.aggregate([
    { $match: { gender: "male" } }
])
```

### 2. `$group`

Groups documents by a specific field and performs aggregation operations.

```javascript
// Group by age
db.collectionName.aggregate([
    { $group: { _id: "$age" } }
])
```

```javascript
// Group by age and collect names in an array
db.collectionName.aggregate([
    { $group: { _id: "$age", names: { $push: "$name" } } }
])
```

```javascript
// Group by age and include the complete document
db.collectionName.aggregate([
    { $group: { _id: "$age", students: { $push: "$$ROOT" } } }
])
```

- **`$push`**: Adds values to an array for each group.
- **`$$ROOT`**: Represents the entire document being processed.

### 3. `$sum`

Counts the number of documents in each group.

```javascript
// Count the number of male documents per age
db.collectionName.aggregate([
    { $match: { gender: "male" } },
    { $group: { _id: "$age", count: { $sum: 1 } } }
])
```

- The `$sum: 1` increments the count for each document.

### 4. `$addToSet`

Adds unique values to an array (prevents duplicates).

```javascript
// Group by age and add unique names to an array
db.collectionName.aggregate([
    { $group: { _id: "$age", uniqueNames: { $addToSet: "$name" } } }
])
```

### 5. `$avg`

Calculates the average value of a numeric field.

```javascript
// Calculate the average age of all documents
db.collectionName.aggregate([
    { $group: { _id: null, averageAge: { $avg: "$age" } } }
])
```

- Using `_id: null` groups all documents into a single group.

### 6. `$unwind`

Deconstructs an array field into separate documents for each element.

```javascript
// Unwind an array field called "hobbies"
db.collectionName.aggregate([
    { $unwind: "$hobbies" }
])
```

### 7. `$filter`

Filters elements in an array based on a condition.

```javascript
db.collectionName.aggregate([
    {
        $project: {
            filteredScores: {
                $filter: {
                    input: "$scores",
                    as: "score",
                    cond: { $gt: ["$$score", 70] }
                }
            }
        }
    }
])
```

- **`input`**: Specifies the array field to filter.
- **`as`**: Assigns a variable name to each element in the array.
- **`cond`**: Defines the condition for inclusion.

### 8. `$bucket`

Categorizes documents into specified range groups.

```javascript
db.collectionName.aggregate([
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [18, 30, 50, 65],
            default: "65+",
            output: { count: { $sum: 1 } }
        }
    }
])
```

- **`groupBy`**: Specifies the field to categorize.
- **`boundaries`**: Defines the range intervals.
- **`default`**: Assigns documents that do not fit into defined boundaries.
- **`output`**: Defines aggregation results for each group.

### 9. `$project`

Shapes the output document by specifying the fields to include or modify.

```javascript
db.collectionName.aggregate([
    {
        $project: {
            name: 1,
            age: 1,
            fullName: { $concat: ["$firstName", " ", "$lastName"] }
        }
    }
])
```

- **`1`**: Includes the field in the output.
- **`$concat`**: Combines string fields.

### 10. `$sort`

Sorts the results in ascending (`1`) or descending (`-1`) order.

```javascript
// Sort documents by age in descending order
db.collectionName.aggregate([
    { $sort: { age: -1 } }
])
```

### 11. `$lookup` (Join Operation)

Performs a left outer join between collections.

```javascript
db.orders.aggregate([
    {
        $lookup: {
            from: "customers",
            localField: "customerId",
            foreignField: "_id",
            as: "customerDetails"
        }
    }
])
```

- **`from`**: Specifies the collection to join with.
- **`localField`**: Field in the current collection.
- **`foreignField`**: Field in the other collection.
- **`as`**: The output field containing the joined data.

### 12. `$facet`

Executes multiple aggregation pipelines in a single query.

```javascript
db.products.aggregate([
    {
        $facet: {
            "priceSummary": [
                { $group: { _id: null, avgPrice: { $avg: "$price" } } }
            ],
            "categorySummary": [
                { $group: { _id: "$category", total: { $sum: 1 } } }
            ]
        }
    }
])
```

- **`$facet`** allows different operations to run in parallel.

## Conclusion

MongoDB aggregation provides a powerful framework for data processing. By leveraging different pipeline stages, you can filter, group, transform, and analyze data efficiently. Understanding these stages enables you to perform complex queries and extract valuable insights from your database.

