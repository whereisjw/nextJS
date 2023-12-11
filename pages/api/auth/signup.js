import { connectDB } from "@/util/database";

import bcrypt from "bcrypt";
export default async function handler(req, res) {
  if (req.method === "POST") {
    let hashPass = await bcrypt.hash(req.body.password, 8);
    req.body.password = hashPass;
    let db = (await connectDB).db("jdb");
    let result = await db.collection("user_cred").insertOne(req.body);
    res.status(200).json("가입성공");
  }
}
