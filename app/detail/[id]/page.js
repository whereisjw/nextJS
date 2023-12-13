import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Detail(props) {
  const db = (await connectDB).db("jdb");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  let session = await getServerSession(authOptions);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
      <Comment parent={props.params.id} session={session} />
    </div>
  );
}
