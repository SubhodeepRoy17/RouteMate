"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import { Session } from "next-auth"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  image?: string
  password?: string // Only for mock users
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  activePage: string
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => Promise<void>
  signInWithGoogle: () => Promise<{ success: boolean; message?: string }>
  signInWithGithub: () => Promise<{ success: boolean; message?: string }>
  setActivePage: (page: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const getMockUsers = (): User[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('mockUsers')
    return stored ? JSON.parse(stored) : [
      { id: "1", name: "John Doe", email: "john@example.com", password: "password123" },
      { id: "2", name: "Jane Smith", email: "jane@example.com", password: "password123" }
    ]
  }
  return []
}

export function AuthProvider({ 
  children,
  session 
}: { 
  children: React.ReactNode,
  session: Session | null 
}) {
  const router = useRouter()
  const [activePage, setActivePage] = useState("dashboard")
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [mockUsers, setMockUsers] = useState<User[]>(getMockUsers())
  const [isInitialized, setIsInitialized] = useState(false)

  // Handle authentication state
  useEffect(() => {
    if (!isInitialized) {
      const savedUser = localStorage.getItem("routemate_user")
      if (savedUser) {
        setUser(JSON.parse(savedUser))
        setIsAuthenticated(true)
      }
      setIsInitialized(true)
    }

    if (session?.user) {
      const userData = {
        id: session.user.email || '',
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || undefined
      }
      
      if (JSON.stringify(user) !== JSON.stringify(userData)) {
        setUser(userData)
        setIsAuthenticated(true)
        localStorage.setItem("routemate_user", JSON.stringify(userData))
      }
    }
  }, [session, isInitialized, user])

  // Redirect logic - only run after initialization
  // Persist mock users to localStorage
  useEffect(() => {
    localStorage.setItem('mockUsers', JSON.stringify(mockUsers))
  }, [mockUsers])

  const login = async (email: string, password: string): Promise<{ success: boolean; message?: string }> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      const existingUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())

      if (!existingUser) {
        return { success: false, message: "No account found with this email address." }
      }

      if (existingUser.password !== password) {
        return { success: false, message: "Incorrect password. Please try again." }
      }

      const userData = {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      }

      setUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem("routemate_user", JSON.stringify(userData))
      
      // Add this line to force redirect after state updates
      setTimeout(() => router.push('/dashboard'), 0)
      
      return { success: true }
    } catch (error) {
      return { success: false, message: "Login failed. Please try again." }
    }
  }

  const signup = async (
    name: string,
    email: string,
    password: string,
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const existingUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())

      if (existingUser) {
        return {
          success: false,
          message: "An account with this email already exists.",
        }
      }

      if (!name.trim()) {
        return { success: false, message: "Please enter your full name." }
      }

      if (password.length < 6) {
        return { success: false, message: "Password must be at least 6 characters long." }
      }

      const newUser = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.toLowerCase(),
        password: password,
      }

      setMockUsers([...mockUsers, newUser])
      router.push('/?page=login')

      return { 
        success: true, 
        message: "Account created successfully! Please log in." 
      }
    } catch (error) {
      return { success: false, message: "Registration failed. Please try again." }
    }
  }

  const signInWithGoogle = async () => {
    try {
      // Option 1: Let NextAuth handle redirect (simpler)
      await signIn("google", { 
        redirect: true,
        callbackUrl: "/dashboard"
      });
      
      // Option 2: Manual redirect (more control)
      // const result = await signIn("google", { redirect: false });
      // if (result?.error) throw new Error(result.error);
      // if (result?.url) window.location.href = result.url;
      
      return { success: true }; // Will only be reached if redirect:false
    } catch (error: any) {
      console.error("Google sign-in error:", error);
      return {
        success: false,
        message: error.message || "Failed to sign in with Google"
      };
    }
  };

  const signInWithGithub = async () => {
    try {
      await signIn("github", { 
        redirect: true,
        callbackUrl: "/dashboard"
      });
      return { success: true }; // Will only be reached if redirect:false
    } catch (error: any) {
      console.error("GitHub sign-in error:", error);
      return {
        success: false,
        message: error.message || "Failed to sign in with GitHub"
      };
    }
  };

  const logout = async () => {
    try {
      await signOut({ redirect: false })
      setUser(null)
      setIsAuthenticated(false)
      localStorage.removeItem("routemate_user")
      router.push('/')
    } catch (error) {
      console.error("Logout failed:", error)
      router.push('/')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        activePage,
        login,
        signup,
        logout,
        signInWithGoogle,
        signInWithGithub,
        setActivePage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}