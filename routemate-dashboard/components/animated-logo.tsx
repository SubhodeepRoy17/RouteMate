"use client"

import { useEffect, useState } from "react"
import { Truck } from "lucide-react"

export function AnimatedLogo() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Animated SVG Background */}
        <svg
          className="absolute inset-0 w-25 h-25 -m-3"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            className={`${isAnimating ? "animate-draw-circle" : ""}`}
            strokeDasharray="283"
            strokeDashoffset={isAnimating ? "283" : "0"}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Logo Icon */}
        <div className="flex aspect-square size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-indigo-800 text-white shadow-lg transform transition-all duration-500 hover:scale-110">
          <Truck className={`size-6 ${isAnimating ? "animate-bounce" : ""}`} />
        </div>
      </div>

      <div className="grid text-left">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          RouteMate
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Delivery Platform</span>
      </div>
    </div>
  )
}
