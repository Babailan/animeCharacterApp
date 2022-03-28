import { NextApiRequest, NextApiResponse } from "next";
import userModelCreate from "../../schemas/createUserSchema";
import dbConnect from "../../libs/connectDb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const email = req.query.email;
    const password: any = req.query.password;
    const name = req.query.name;
    const usersss = new userModelCreate({
      email,
      password,
      name,
    });
    await dbConnect();
    await usersss.save();
    res.status(200).json({ message: "Thank you for signing up" });
  } catch (err) {
    res.status(403).json({ message: Message(err.message) });
  }
};

function Message(message: string) {
  if (message.includes("Password is required")) {
    return "Password is required";
  }
  if (message.includes("Email is required")) {
    return "Email is required";
  }
  if (message.includes("Please enter a valid email")) {
    return "Please enter a valid email";
  }
  if (message.includes("Name is required")) {
    return "Name is required";
  }
  if (message.includes("Minimium is 6 characters long")) {
    return "Minimium is 6 characters long";
  }
  if (message.includes("duplicate key error collection")) {
    return "this email is already exists";
  }
}
