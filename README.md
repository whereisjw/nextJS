# 글작성

// 유저가 db에 글저장하기로하면 db로바로저장하는게아니라 중간프로그램으로 글을보내면 프로그램은 글을 검토후 db에 넣는다
//3티어 아키텍쳐

```
   await db
    .collection("post")
    .updateOne(수정할게시물정보,{$set:{수정할내용}});
```

# 배포방법

```
npm run build
npm run start
```

```
export const dynamic = "force-dynamic";
export const dynamic = "force-static";
```

static 으로되는지 다이나믹으로되는지 체크하기

# @next 소셜로그인

npm i next-auth@4.21.1

pages/api/auth/[nextauth].js 파일생성

```
import NextAuth from "next-auth"; import GithubProvider from "next-auth/providers/github"; export const authOptions = { providers: [ GithubProvider({ clientId: 'Github에서 발급받은ID', clientSecret: 'Github에서 발급받은Secret', }), ], secret : 'jwt생성시쓰는암호' }; export default NextAuth(authOptions);
```

```
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
```

signIn 이라는 라이브러리함수쓰면 자동으로 로그인페이지 만들어짐

```
  let session = await getServerSession(authOptions);
  console.log(session);
```

```
{
  user: {
    name: '깃허브닉넴',
    email: '이멜@gmail.com',
    image: '유저프사'
  }
}
```

# session 방식으로 로그인 구현하기

npm install @next-auth/mongodb-adapter

이런식으로 뜸


# 다크모드만들기

document.cookie = '쿠키이름 = 값,max-age=3600' //최대 400일까지 초단위로 설정가능함
import {cookies} from 'next/headers'
let res = cookies().get('쿠키이름')
console.log(res);