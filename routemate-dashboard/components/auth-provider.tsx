"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { signIn, signOut } from "next-auth/react"
import { Session } from "next-auth"

interface User {
  id: string
  name: string
  email: string
  image?: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  currentPage: "home" | "login" | "signup" | "dashboard"
  activePage: string
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => void
  signInWithGoogle: () => Promise<{ success: boolean; message?: string }>
  signInWithGithub: () => Promise<{ success: boolean; message?: string }>
  setCurrentPage: (page: "home" | "login" | "signup" | "dashboard") => void
  setActivePage: (page: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ 
  children,
  session 
}: { 
  children: React.ReactNode,
  session: Session | null 
}) {
  const [currentPage, setCurrentPage] = useState<"home" | "login" | "signup" | "dashboard">("home")
  const [activePage, setActivePage] = useState("dashboard")
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Sync session with auth state
  useEffect(() => {
    if (session?.user) {
      const userData = {
        id: session.user.email || '',
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || undefined
      }
      setUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem("routemate_user", JSON.stringify(userData))
    } else {
      setUser(null)
      setIsAuthenticated(false)
      localStorage.removeItem("routemate_user")
    }
  }, [session])

  const mockUsers = [
  { id: "1", name: "John Doe", email: "john@example.com", password: "password123" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", password: "password123" },
]

  const login = async (email: string, password: string): Promise<{ success: boolean; message?: string }> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Check if user exists and password matches
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
    setCurrentPage("dashboard")
    localStorage.setItem("routemate_user", JSON.stringify(userData))

    return { success: true }
  }

  const signup = async (
    name: string,
    email: string,
    password: string,
  ): Promise<{ success: boolean; message?: string }> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Check if user already exists
    const existingUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists. Please use a different email or try logging in.",
      }
    }

    // Validation
    if (!name.trim()) {
      return { success: false, message: "Please enter your full name." }
    }

    if (password.length < 6) {
      return { success: false, message: "Password must be at least 6 characters long." }
    }

    // Add user to mock database
    const newUser = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.toLowerCase(),
      password: password,
    }
    mockUsers.push(newUser)

    // Redirect to login page after successful signup
    setCurrentPage("login")

    return { success: true, message: "Account created successfully! Please log in with your credentials." }
  }

  const signInWithGoogle = async () => {
    try {
      const result = await signIn("google", { redirect: false })
      return { 
        success: !result?.error,
        message: result?.error || undefined
      }
    } catch (error) {
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to sign in with Google" 
      }
    }
  }

  const signInWithGithub = async () => {
    try {
      const result = await signIn("github", { redirect: false })
      return { 
        success: !result?.error,
        message: result?.error || undefined
      }
    } catch (error) {
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to sign in with GitHub" 
      }
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    setCurrentPage("home")
    localStorage.removeItem("routemate_user")
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        currentPage,
        activePage,
        login,
        signup,
        logout,
        signInWithGoogle,
        signInWithGithub,
        setCurrentPage,
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