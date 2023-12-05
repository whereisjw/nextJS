import { client } from "@/util/database";

export default async function Home() {
  const clients = await client;
  const db = clients.db("jdb");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return <div>ㅎㅇ</div>;
}
