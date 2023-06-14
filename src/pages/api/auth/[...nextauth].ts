import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as any,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as any,
      userinfo: 
    }),
  ],
}

export default NextAuth(authOptions)