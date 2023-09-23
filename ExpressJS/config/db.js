const mongoose = require('mongoose')

const connectDB = async()=>{
    // todo
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`Connected to MongoDB ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.message)
        process.exit(1)
    })
}

module.exports = connectDB