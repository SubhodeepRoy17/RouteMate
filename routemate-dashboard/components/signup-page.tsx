"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Loader2, AlertCircle, ArrowLeft } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { AnimatedLogo } from "@/components/animated-logo"
import { Icons } from "@/components/icons"

export function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [isGithubLoading, setIsGithubLoading] = useState(false)
  const [error, setError] = useState("")

  const { signup, signInWithGoogle, signInWithGithub, setCurrentPage } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please check and try again.")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long for security.")
      return
    }

    if (!name.trim()) {
      setError("Please enter your full name.")
      return
    }

    setIsLoading(true)

    try {
      const result = await signup(name, email, password)
      if (result.success) {
        // Redirect to login with success message
        window.history.pushState(
          {},
          "",
          `/?message=${encodeURIComponent(result.message || "Account created successfully!")}`,
        )
        setCurrentPage("login")
      } else {
        setError(result.message || "Registration failed. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setError("")
    setIsGoogleLoading(true)
    
    try {
      const result = await signInWithGoogle()
      if (!result?.success) {
        setError(result?.message || "Google sign in failed. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred during Google sign in.")
    } finally {
      setIsGoogleLoading(false)
    }
  }

  const handleGithubSignUp = async () => {
    setError("")
    setIsGithubLoading(true)
    
    try {
      const result = await signInWithGithub()
      if (!result?.success) {
        setError(result?.message || "GitHub sign in failed. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred during GitHub sign in.")
    } finally {
      setIsGithubLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-80 to-indigo-120 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-2xl border-0 bg-white/100 dark:bg-slate-900/80 backdrop-blur-xl my-8">
        <CardHeader className="space-y-1 text-center pb-4">
          <Button variant="ghost" className="absolute top-4 left-4 p-2" onClick={() => setCurrentPage("home")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center justify-center mb-4">
            <AnimatedLogo />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Join RouteMate
          </CardTitle>
          <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
            Create your account to start optimizing deliveries
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="animate-shake">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-1">
              <Label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                className="h-10 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="h-10 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  minLength={6}
                  className="h-10 pr-10 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  minLength={6}
                  className="h-10 pr-10 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="h-10 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all duration-200"
              onClick={handleGoogleSignUp}
              disabled={isGoogleLoading || isGithubLoading || isLoading}
            >
              {isGoogleLoading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Icons.google className="h-4 w-4 mr-2" />
              )}
              Google
            </Button>

            <Button
              variant="outline"
              className="h-10 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all duration-200"
              onClick={handleGithubSignUp}
              disabled={isGithubLoading || isGoogleLoading || isLoading}
            >
              {isGithubLoading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Icons.github className="h-4 w-4 mr-2" />
              )}
              GitHub
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">Already have an account?</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full h-10 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold transition-all duration-200 transform hover:scale-[1.02]"
            onClick={() => setCurrentPage("login")}
            disabled={isLoading || isGoogleLoading || isGithubLoading}
          >
            Sign In Instead
          </Button>

          <div className="text-center space-y-1">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">Secure • Encrypted • Professional</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}