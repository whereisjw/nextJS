import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "65c73fbc8c4956f8c678",
      clientSecret: "c5cb6089d899882629ce151140056fe68fb12eaf",
    }),

    // ...add more providers here
  ],
  secret: "qwer1234",
};
export default NextAuth(authOptions);
