import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials;
        try {
          const response = await fetch(`http://localhost:3001/users/email/${email}`, {
            method: "GET",
          });
      
          if (!response.ok) {
            throw new Error('Failed to fetch user');
          }
      
          const user = await response.json();
                
          const passwordsMatch = await bcrypt.compare(password, user[0]?.password);

          
          if (!passwordsMatch) {
            return null;
          }
      
          return user[0];
        } catch (error) {
          console.error("Error: ", error);
          throw error;
        }
      }      
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
