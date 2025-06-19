"use client"

import { 
  Truck, MapPin, BarChart3, Rocket, ArrowRight, Play, 
  Shield, Award, Heart 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function HeroSection() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handleDemoClick = () => {
    // Consider replacing with a proper modal or video player
    alert("Demo video would open here! 🎥")
  }

  return (
    <section 
      className="relative overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      aria-labelledby="hero-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full blur-3xl ${
              i === 0 ? "-top-40 -right-40 w-80 h-80 bg-blue-400/20 animate-pulse" :
              i === 1 ? "-bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 animate-pulse delay-1000" :
              i === 2 ? "top-1/4 left-1/4 w-32 h-32 bg-purple-400/10 blur-2xl animate-float" :
              "bottom-1/4 right-1/4 w-24 h-24 bg-green-400/10 blur-2xl animate-float delay-500"
            }`}
          />
        ))}

        {/* Floating icons */}
        {[
          { icon: Truck, position: "top-20 left-10", color: "text-blue-500" },
          { icon: MapPin, position: "top-32 right-20", color: "text-green-500", delay: "delay-1000" },
          { icon: BarChart3, position: "bottom-32 left-20", color: "text-purple-500", delay: "delay-500" }
        ].map((item, index) => (
          <div 
            key={index}
            className={`absolute ${item.position} animate-float ${item.delay || ""}`}
          >
            <div className="p-3 bg-white/10 backdrop-blur-lg rounded-lg">
              <item.icon className={`h-6 w-6 ${item.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Badge 
              className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-200 border-0 px-4 py-2 text-sm font-semibold"
              aria-label="Feature badge"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Optimize Your Last-Mile Delivery
            </Badge>
            
            <h1 id="hero-heading" className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Revolutionize Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Delivery Operations
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              RouteMate uses <span className="font-semibold text-blue-600">AI-powered route optimization</span> to
              reduce delivery times by 40%, cut fuel costs, and provide real-time tracking for exceptional customer
              experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-blue-500/25"
                onClick={() => router.push('/signup')}
                aria-label="Start Free Trial"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-slate-50 dark:hover:bg-slate-800 backdrop-blur-lg"
                onClick={handleDemoClick}
                aria-label="Watch Demo"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500 dark:text-slate-400">
              {[
                { icon: Shield, text: "Enterprise Security", color: "text-green-500" },
                { icon: Award, text: "Industry Leading", color: "text-yellow-500" },
                { icon: Heart, text: "Loved by 10K+ Users", color: "text-red-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}