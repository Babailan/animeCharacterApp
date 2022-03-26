import client from "../../libs/mongodb";
export default async (req: any, res: any) => {
  let yes = await client.connect();
  const db = yes.db("local");
  console.log(await db.collection("users").findOne({ name: "Leanne Graham" }));
  res.status(200).json({ rongrong: "BABI" });
};
