"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Truck, Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation({
  mobileMenuOpen,
  setMobileMenuOpen
}: {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}) {
  const router = useRouter()

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <Truck className="size-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                RouteMate
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Testimonials
              </a>
              <Button
                variant="outline"
                className="border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                onClick={() => router.push('/login')}
              >
                Sign In
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => router.push('/signup')}
              >
                Get Started
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg">
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" onClick={() => router.push('/login')}>
                    Sign In
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    onClick={() => router.push('/signup')}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
  )
}