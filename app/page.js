import { connectDB } from "@/util/database";

export const revalidate = 60;

export default async function Home() {
  const db = (await connectDB).db("jdb");
  let result = await db.collection("post").find().toArray();

  return <div>ㅎㅇ</div>;
}
