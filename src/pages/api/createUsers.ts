import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import client from "../../libs/mongodb";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.query.email;
  const password: any = req.query.password;
  const name = req.query.name;
  if (!email.length || !email.includes("@")) {
    return res
      .status(403)
      .json({ message: "Email is required or This is email is already used" });
  } else if (password.length > 6) {
    return res
      .status(403)
      .json({ message: "Password should be at least 6 characters" });
  } else if (!name.length) {
    return res.status(403).json({ message: "Name should be there" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  let connect = await client.connect();

  const db = connect.db("local");
  db.collection("user").insertOne({ email });

  res.status(200).json({ message: "Thank you for making account" });
};
