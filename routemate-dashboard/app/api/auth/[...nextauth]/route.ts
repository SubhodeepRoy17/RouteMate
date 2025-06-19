// app/api/auth/[...nextauth]/route.ts
import NextAuth, { type Session, type DefaultUser } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

const baseUrl = process.env.NEXTAUTH_URL || 
  (process.env.CODESPACES 
    ? `https://${process.env.CODESPACE_NAME}-3003.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`
    : "http://localhost:3003")

interface ExtendedUser extends DefaultUser {
  id: string
  role?: string
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
          redirect_uri: `${baseUrl}/api/auth/callback/google`
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          redirect_uri: `${baseUrl}/api/auth/callback/github`
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github") return true
      if (user.email?.endsWith('@heritageit.edu.in')) return true
      return '/auth/error?error=AccessDenied'
    },
    async redirect({ url, baseUrl }) {
      // 1. Force dashboard redirect after auth callbacks
      if (url.includes('/api/auth/callback') || url.includes('/auth/signin')) {
        return `${baseUrl}/dashboard`
      }
      
      // 2. Allow explicit callbackUrls
      if (url.startsWith('/dashboard')) return `${baseUrl}${url}`
      
      // 3. Fallback for other cases
      return url.startsWith('/') ? `${baseUrl}/dashboard` : baseUrl
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub || token.id || ''
        session.user.role = token.role || 'user'
      }
      return session
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
        token.role = user.role || 'user'
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    }
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }