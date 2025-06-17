"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AnalyticsPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to main page, which will handle routing
    router.push("/")
  }, [router])

  return null
}
