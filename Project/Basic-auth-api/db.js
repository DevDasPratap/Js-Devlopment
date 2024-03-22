const mongoose = require('mongoose');
const DB_HOST = process.env.DBHOST || 'mongodb://localhost:27017/basic_auth_api';

mongoose.connect(DB_HOST)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while Mongo Conn..', err);
    })