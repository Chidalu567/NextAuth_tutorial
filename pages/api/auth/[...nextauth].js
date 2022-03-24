import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import dotenv from "dotenv";

dotenv.config();

// Export NextAuth object containing the providers that we support for Authentication
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.client_Id,
      clientSecret: process.env.client_Secret,
    }),
  ],
});
