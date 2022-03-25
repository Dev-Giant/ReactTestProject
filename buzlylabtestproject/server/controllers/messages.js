import Message from "../models/messages.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getSingleMessage = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const message = await Message.findById(_id);
    res.status(200).json(message);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};