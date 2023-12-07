import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let { title, content, _id } = req.body;
  if (req.method === "POST") {
    const db = (await connectDB).db("jdb");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(_id) }, { $set: { title, content } });
  }
  res.status(200).redirect("/list");
}
