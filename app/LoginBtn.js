"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LgoinBtn() {
  return (
    <button
      onClick={() => {
        signIn();
      }}>
      로그인
    </button>
  );
}
