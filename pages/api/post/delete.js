import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let { _id } = req.body;
  console.log(req.body);
  if (req.method === "DELETE") {
    const db = (await connectDB).db("jdb");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(_id) });
    console.log(result);
    res.status(200).json("완료");
  }
}
