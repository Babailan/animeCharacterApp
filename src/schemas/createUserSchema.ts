import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const createUserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Minimium is 6 characters long"],
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
});

createUserSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});
createUserSchema.methods.authenticate = function () {
  var token = jwt.sign(
    { name: this.name, email: this.email, password: this.password },
    "O8jt60RaO5q7d",
    {
      expiresIn: "60m",
    }
  );
  return token;
};

export default mongoose.models.users ||
  mongoose.model("users", createUserSchema);
