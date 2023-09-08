// Using mongodb

// const MongoClient = require('mongodb').MongoClient
// or
// const {MongoClient} = require('mongodb')

// const url = 'mongodb://localhost:27017'
// const client = new MongoClient(url)
// const dbName = 'college'

// async function getData() {
//     const result = await client.connect()
//     const db = result.db(dbName)
//     const collection = db.collection('students')
//     const response = await collection.find({}).toArray()
//     console.log(response)
// }
// getData()


// Using mongoose
const mongoose = require('mongoose')
const validator = require('validator')
const url = mongoose.connect('mongodb://localhost:27017/college')
    .then(() => {
        console.log(`Connected successfull`)
    })
    .catch((err) => {
        console.log(`Error: ${err}`)
    })

// Schema
const studentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true, //Build in validation
        trim: true, //Build in validation
        // minlength: 4, //Build in validation
        minlength: [4, 'Min length must be 4'], //Build in validation
        maxlength: [10, 'Max length upto 10'], //Build in validation
    },
    mob: {
        type: Number,
        required: true,
        // min:[70, 'Min 70'], //Build in validation
        // max:[99, 'Max 99'], //Build in validation
        // enum: [77, 81] //only 77, 81 => only accept 2 value other value showing error
        validate(value) { //Custom validation
            if (value.toString().length < 10 || value.toString().length > 10) {
                throw new Error('Mobile number is incorrect')
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is in valid')
            }
        }
    },
    fees: {
        type: Boolean,
        required: true
    },
    isActive: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
})

const Student = mongoose.model('Student', studentsSchema)

// Insert

// const createStudent = new Student({
//     name: 'Pratap Das',
//     mob: 900000000,
//     fees: true,
//     isActive: true,
// })
// const studentsData = createStudent.save()
// console.log(studentsData)

// or

// const createStudents = async () => {
//     try {
//         const createStudent = new Student({
//             name: 'hello',
//             mob: 111111,
//             fees: false,
//             isActive: false,
//         })
//         const studentsData = await createStudent.save()
//         console.log(studentsData)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// createStudents()
// console.log(createStudents)


// Insert Multiple

// const createStudents = async () => {
//     try {
//         const createStudent1 = new Student({
//             name: 'a',
//             mob: 2,
//             fees: true,
//             isActive: true,
//         })
//         const createStudent2 = new Student({
//             name: 'b',
//             mob: 4,
//             fees: false,
//             isActive: false,
//         })
//         const studentsData = await Student.insertMany([createStudent1, createStudent2])
//         console.log(studentsData)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// createStudents()

// Read Document
// const readDocument = async ()=>{
//     try {
//         const result = await Student.find();
//         console.log(`Result: ${result}`)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// readDocument()

// Read perticular Document
// const readPerticularDocument = async ()=>{
//     try {
//         // const result = await Student.find({fees:true, name: 'Pratap'}); //filter
//         const result = await Student.find({fees:true, name:'Pratap'}).select({_id:0, name:1, fees:1}) //filter with show key value
//         console.log(`Result: ${result}`)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// readPerticularDocument()

// Check comparison query operator =>$eq $gt $gte $in $lt $ne $lte
// const comparisonQuery = async () => {
//     try {
//         const result = await Student
//             .find({ fees: { $eq: false } })
//             .find({ mob: { $gt: 90000000 } })
//             .find({ mob: { $gte: 7000000 } })
//             .find({ mob: { $lte: 7000000 } })
//             .find({ mob: { $ne: 7000000 } })
//             .find({ mob: { $in: [7000000, 900000000] } })
//             .select({ _id: 0, name: 1, fees: 1, mob: 1 })
//         console.log(`Result: ${result}`)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// comparisonQuery()

//Check logical query operator
// const logicalQuery = async () => {
//     try {
//         const result = await Student
//             // .find({ $and: [{ fees: true }, { name: 'Pratap' }] })
//             // .find({ $or: [{ fees: true }, { name: 'das' }] })
//             // .find({ $nor: [{ fees: true }, { name: 'das' }] })
//             .find({ mob: { $not: { $gt: 4 } } })
//             .select({ _id: 0, name: 1, fees: 1, mob: 1 })
//         console.log(`Result: ${result}`)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// logicalQuery()


// Sorting and Count query

// const sortingQuery = async () => {
//     try {
//         const result = await Student
//             .find({ mob: { $not: { $gt: 9 } } })
//             .select({ _id: 0, name: 1, fees: 1, mob: 1 })
//             // .countDocuments() //count
//             // .sort({name: 1})
//             // .sort({name: -1})
//             .sort({mob: -1})
//         console.log(`Result: ${result}`)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// sortingQuery()

// Upadte
// const updateDocument = async (id) => {
//     try {
//         const result = await Student.updateOne({ _id: id }, {
//             $set: {
//                 name: 'a'
//             }
//         })
//         console.log(result)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// updateDocument('645ef79857e3d97c021e25bc')

// or

// const updateDocument = async (_id) => {
//     try {
//         const result = await Student.findByIdAndUpdate({ _id}, {
//             $set: {
//                 name: 'a'
//             }
//         },
//             {new:true} // findByIdAndUpdate result return last updated value but new:true return current updated value
//         )
//         console.log(result)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// updateDocument('645ef79857e3d97c021e25bc')


// Delete
// const deleteDocument = async(id)=>{
//     try {
//         const result = await Student.deleteOne({_id:id})
//         console.log(result)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// deleteDocument('645f1535bd1dd284c0b013fd')

// const deleteDocument = async(mob)=>{
//     try {
//         const result = await Student.deleteMany({mob})
//         console.log(result)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// deleteDocument('10')

// const deleteDocument = async(_id)=>{
//     try {
//         const result = await Student.findByIdAndUpdate({_id})
//         console.log(result)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// deleteDocument('645f17c5bd1dd284c0b0140a')


// Build in validation

// const createStudents = async () => {
//     try {
//         const createStudent1 = new Student({
//             name: 'DEVa  ',
//             mob: 90,
//             fees: true,
//             isActive: true,
//         })
//         const createStudent2 = new Student({
//             name: ' QQQQqqqqq ',
//             mob: 88,
//             fees: false,
//             isActive: false,
//         })
//         const studentsData = await Student.insertMany([createStudent1, createStudent2])
//         console.log(studentsData)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// createStudents()

// Custom validation
const createStudents = async () => {
    try {
        const createStudent1 = new Student({
            name: 'DEVa  ',
            mob: 9000000000,
            email: 'p@d.com',
            fees: true,
            isActive: true,
        })
        const createStudent2 = new Student({
            name: ' QQQQqqqqq ',
            mob: 9000000000,
            email: 'p@d.im',
            fees: false,
            isActive: false,
        })
        const studentsData = await Student.insertMany([createStudent1, createStudent2])
        console.log(studentsData)
    } catch (error) {
        console.log(error.message)
    }
}
createStudents()