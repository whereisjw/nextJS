import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function New(req, res) {
    if(req.method === 'POST'){
let {content,author,parent} = req.body
          const db = (await connectDB).db('jdb')
        let result = db.collection('comment').insertOne({content : content,author:author,parent: new ObjectId(parent)}) 
        res.status(200).json('댓글저장완료') 
    }
 
}