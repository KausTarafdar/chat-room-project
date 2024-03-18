import mongoose from "mongoose";

const conversationModel = new mongoose.Schema({
    participants: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Users',
        }
    ],
    messages: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Messages',
            default:[],
        }
    ]
}, {timestamps: true})

const Conversation = mongoose.model("Conversation", conversationModel);

export default Conversation;