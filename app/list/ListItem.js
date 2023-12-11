"use client";

import axios from "axios";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <>
      {result?.map((v, i) => (
        <div className="list-item">
          <Link key={i} href={`/detail/${v._id}`}>
            {" "}
            <h4>{v.title}</h4>{" "}
          </Link>
          <Link href={`/edit/${v._id}`}>수정</Link>
          <span
            onClick={(e) => {
              axios
                .delete("/api/post/delete", { data: { _id: v._id } })
                .then((res) => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                });
            }}>
            삭제
          </span>
          <p>1월 1일</p>
        </div>
      ))}
    </>
  );
}
