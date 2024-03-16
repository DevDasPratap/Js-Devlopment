import mongoose from "mongoose";

// stric disabled - if does not exist no error send
mongoose.set('strictQuery', false)

const connectionToDB = async () => {
    try {
        const { connection } = await mongoose.connect( // get(return) instatnce
            process.env.MONGO_URI || `mongodb://127.0.0.1:27017/lms`
        )
        if (connection) {
            console.log(`Connected to MongoDB ${connection.host}`)
        }
    } catch (error) {
        console.log(error)
        process.exit(1) // if get error(db not connect/exit) terminate this
    }
}
export default connectionToDB