import { connectDB } from "@/util/database";

export default async function New(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    if (req.body.title.trim() === "") {
      return res.status(500).json("너 왜 제목안씀");
    }
    const db = (await connectDB).db("jdb");
    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).redirect("/list");
  }
}
