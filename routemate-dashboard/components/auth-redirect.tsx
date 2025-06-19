// components/auth-redirect.tsx
"use client"

import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export function AuthRedirect() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  useEffect(() => {
    if (status === "authenticated") {
      // Redirect to either the callbackUrl or dashboard
      const redirectUrl = callbackUrl || '/dashboard'
      router.replace(redirectUrl)
    }
    else if (status === "unauthenticated") {
      router.replace('/auth/signin')
    }
  }, [status, callbackUrl, router])

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      <span className="sr-only">Redirecting...</span>
    </div>
  )
}