const { MongoClient, ObjectId } = require('mongodb');
// or
// const {MongoClient} = require('mongodb')

const express = require('express');
const app = express();

const url = 'mongodb://localhost:27017/';
const dbName = 'college';
let dbConnection;

const connectToDB = function (cb) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(client => {
            dbConnection = client.db(dbName);
            return cb();
        })
        .catch(err => {
            console.error(err);
            return cb(err);
        });
};

const getDB = function () {
    return dbConnection;
};

// Connect to the database
let db;
connectToDB((err) => {
    if (!err) {
        console.log(`DB connected`);
        db = getDB();
    }
});

// all books
// app.get('/books', async (req, res) => {
//     try {
//         const books = await db.collection('books').find().sort({ author: 1 }).toArray();
//         res.status(200).json(books);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Could not fetch the documents' });
//     }
// });

// Pagination => http://localhost:3000/books?page=0
app.get('/books', async (req, res) => {
    
    try {
        const page = parseInt(req.query.page) || 0;
        const booksPerPage = 2
        const books = await db.collection('books').find().sort({ author: 1 }).skip(page * booksPerPage).limit(booksPerPage).toArray();
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not fetch the documents' });
    }
});


app.get('/book/:id', async (req, res)=>{
    const bookID = req.params.id
    try {
    const getBook = await db.collection('books').findOne({_id: new ObjectId(bookID)})
        if (getBook) {
            res.status(200).json(getBook)
        }else{
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not fetch the book' });
    }
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
