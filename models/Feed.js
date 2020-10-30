import mongoose from "mongoose";
const FeedSchema = new mongoose.Schema({
    title: {
        type:String,
        required:"Title is needed"
    },
    description:{
        type:String,
        required:"Descriptions is required"
    },
    views:{
        type:Number,
        default:0
    },
    imageUrls:[
        {
        type:String
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
        }
    ],
});
const model = mongoose.model("Feed", FeedSchema);
export default model;