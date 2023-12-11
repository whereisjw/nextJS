import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink.";
import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("jdb");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <DetailLink></DetailLink>
      <ListItem result={result}></ListItem>
    </div>
  );
}

// 유저가 db에 글저장하기로하면 db로바로저장하는게아니라 중간프로그램으로 글을보내면 프로그램은 글을 검토후 db에 넣는다
//3티어 아키텍쳐
