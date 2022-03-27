import mongoose from "mongoose";
const createUser = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

const createUserModel = mongoose.model("UserCreate", createUser);

export default createUserModel;
