import { NextApiRequest, NextApiResponse } from "next";
import userModelCreate from "../../schemas/createUserSchema";
import dbConnect from "../../libs/connectDb";
import createToken from "../../libs/createToken";
import { setCookies } from "cookies-next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (typeof req.body === "string") {
      req.body = JSON.parse(req.body);
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const user = new userModelCreate({
      email,
      password,
      name,
    });
    await dbConnect();
    await user.save();
    const token = createToken(user._id);
    console.log(typeof token);
    setCookies("user", token, {
      maxAge: 60 * 60,
      res: res,
      req: req,
      secure: true,
    });
    res
      .status(200)
      .json({ message: "Thank you for signing up", user: user._id });
  } catch (err) {
    res.status(403).json({ message: Message(err.message) });
  }
}

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
export default handler;
