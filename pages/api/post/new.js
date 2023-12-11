import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function New(req, res) {
  let session = await getServerSession(req, res, authOptions);

  if (session) {
    req.body.author = session.user.email;
  }
  console.log(req.body);
  if (req.method == "POST") {
    console.log(req.body);
    if (req.body.title.trim() === "") {
      return res.status(500).json("너 왜 제목안씀");
    }
    const db = (await connectDB).db("jdb");
    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).json();
  }
}
