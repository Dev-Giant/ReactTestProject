import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  id: Number,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;