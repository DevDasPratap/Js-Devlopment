import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        // who is subcribing
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel:{
        // whom is subcribing
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)