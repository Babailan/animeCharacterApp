import jwt from "jsonwebtoken";
export default function (_id: any) {
  var token = jwt.sign({ _id }, "O8jt60RaO5q7d", {
    expiresIn: "60m",
  });
  return token;
}
