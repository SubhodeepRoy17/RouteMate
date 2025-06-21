// app/api/auth/[...nextauth]/route.ts
import NextAuth, { type Session, type DefaultUser, type SessionStrategy } from "next-auth"
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
    async signIn({ user, account }: { user: ExtendedUser; account: any }) {
      if (account?.provider === "github") return true
      if (user.email?.endsWith('@heritageit.edu.in')) return true
      return '/auth/error?error=AccessDenied'
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // 1. Force dashboard redirect after auth callbacks
      if (url.includes('/api/auth/callback')) {
        return `${baseUrl}/dashboard`
      }
      
      // 2. Allow explicit callbackUrls from signIn()
      if (url.startsWith('/')) return `${baseUrl}${url}`
      
      // 3. Default to home page for all other cases
      return baseUrl
    },
    async session({ session, token }: { session: Session; token: any }) {
      if (session.user) {
        session.user.id = token.sub || token.id || ''
        session.user.role = token.role || 'user'
      }
      return session
    },
    async jwt({ token, user, account }: { token: any; user?: ExtendedUser; account?: any }) {
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
    signOut: "/" // Redirect to home after sign out
  },
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 30 * 24 * 60 * 60,
  },
  events: {
    async signOut({  }) {
    // Clear NextAuth session cookies
    if (typeof window !== 'undefined') {
      document.cookie = `__Secure-next-auth.session-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure=${process.env.NODE_ENV === 'production'}; sameSite=lax`
    }
    
    // Clear any stored user data
    localStorage.removeItem('routemate_user')
    
    // Clear auth-related session storage
    sessionStorage.removeItem('redirectPath')
    sessionStorage.removeItem('authState')
    
    // For debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('User signed out - cleaned all auth data')
    }
  }
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