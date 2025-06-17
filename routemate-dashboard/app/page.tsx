"use client"
import { AuthProvider, useAuth } from "@/components/auth-provider"
import { LoginPage } from "@/components/login-page"
import { SignUpPage } from "@/components/signup-page"
import { DashboardLayout } from "@/components/dashboard-layout"
import { HomePage } from "@/components/home-page"

function AppContent() {
  const { isAuthenticated, currentPage } = useAuth()

  if (isAuthenticated) {
    return <DashboardLayout />
  }

  switch (currentPage) {
    case "login":
      return <LoginPage />
    case "signup":
      return <SignUpPage />
    default:
      return <HomePage />
  }
}

export default function Page() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
