import mongoose from "mongoose";

const pataintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    diagonsedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    baloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum: ['M', 'F', 'O'],
        requirded: true
    },
    admittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }
  },
  { timestamps: true }
);

export const Pataint = mongoose.model("Pataint", pataintSchema);
