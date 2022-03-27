import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/local");
const createUser = new mongoose.Schema({
  name: { type: String, required: true },
  password: {
    type: String,
    required: true,
    min: [6, "Minimium is 6 characters"],
  },
  email: { String, required: true },
});

const createUserModel = mongoose.model("UserCreate", createUser);

export default createUserModel;
