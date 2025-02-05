import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "../../../../models/UserModel"; // Adjust the path to your User model
import {connect} from "../../../../dbConfig/dbConfig"; // MongoDB connection helper

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();

        // Find user by email
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email");
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValidPassword) {
          throw new Error("Invalid credentials");
        }

        // Return user data
        return {
          _id: user._id,
          name: user.name,
          email: user.email,
          roles: user.roles,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.roles = user.roles;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.roles = token.roles;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login", // Optional custom sign-in page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
