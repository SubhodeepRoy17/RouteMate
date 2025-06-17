import NextAuth, { Session, DefaultUser } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

interface ExtendedUser extends DefaultUser {
  id: string
}

declare module 'next-auth' {
  interface Session {
    user?: ExtendedUser
  }
}
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          redirect_uri: "http://localhost:3004/api/auth/callback/google"
        }
      }
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: any }) {
      try {
        if (session.user) {
          session.user.id = token.sub || token.user?.id || '';
          // Add any additional user fields here
        }
        return session;
      } catch (error) {
        console.error("Session callback error:", error);
        throw new Error("Failed to create session");
      }
    },
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/erroring", // Custom error page
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
