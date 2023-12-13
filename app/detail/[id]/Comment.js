"use client";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Comment({ session, parent }) {
  let [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState();

  useEffect(() => {
    axios.get(`/api/comment/${parent}`).then((res) => setCommentList(res.data));
  }, [commentList]);
  const handleClick = () => {
    axios
      .post(`/api/comment/new`, {
        content: comment,
        author: session.user.email,
        parent: parent,
      })
      .then()
      .catch();
  };

  return (
    <>
      <div>
        <ul>
          {!commentList ? (
            <p>로딩중...</p>
          ) : (
            commentList?.map((v, i) => (
              <li key={i}>
                <span>아이디:{v.author}</span>
                <br></br>
                <span>내용:{v.content}</span>
              </li>
            ))
          )}
        </ul>
      </div>
      <input type="text" onChange={(e) => setComment(e.target.value)} />
      <button onClick={(e) => handleClick(e)}>전송</button>
    </>
  );
}
