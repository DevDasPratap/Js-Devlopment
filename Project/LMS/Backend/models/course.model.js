import { Schema, model } from "mongoose";
const courseSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minLength: [8, 'Title must be atleast 8 characters'],
            maxLength: [30, 'Title should be least 30 characters'],
            trim: true
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            minLength: [8, 'Description must be atleast 8 characters'],
            maxLength: [100, 'Description should be least 100 characters'],
            trim: true
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
        },
        thumnail: {
            public_id: {
                type: String,
                required: true
            },
            secure_url: {
                type: String,
                required: true
            }
        },
        lectures: [
            {
                title: String,
                description: String,
                lecture: {
                    public_id: {
                        type: String,
                        required: true
                    },
                    secure_url: {
                        type: String,
                        required: true
                    }
                }
            }
        ],
        numberOfLectures: {
            type: Number,
            default: 0
        },
        createdBy: {
            type: String,
            required: true
        },
    }, {
    timestamps: true
}
)

const Course = model('Course', courseSchema)
export default Course