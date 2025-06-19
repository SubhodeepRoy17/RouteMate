"use client"

import { MapPin, Clock, BarChart3, Users, Zap, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Smart Route Optimization",
    description: "AI-powered algorithms optimize delivery routes in real-time, reducing travel time by up to 40%.",
    color: "from-blue-500 to-blue-600",
    benefit: "Save 40% on fuel costs",
  },
  {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Monitor all deliveries in real-time with live GPS tracking and instant status updates.",
      color: "from-green-500 to-green-600",
      benefit: "99.9% delivery accuracy",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reports to optimize your delivery operations and reduce costs.",
      color: "from-purple-500 to-purple-600",
      benefit: "Data-driven decisions",
    },
    {
      icon: Users,
      title: "Agent Management",
      description: "Efficiently manage your delivery team with performance tracking and workload distribution.",
      color: "from-orange-500 to-orange-600",
      benefit: "Boost team efficiency",
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Keep customers informed with automated SMS and email notifications throughout delivery.",
      color: "from-yellow-500 to-yellow-600",
      benefit: "98% customer satisfaction",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encrypted data transmission and secure cloud infrastructure.",
      color: "from-red-500 to-red-600",
      benefit: "100% secure & compliant",
    },
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <Target className="mr-2 h-4 w-4" />
            Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Delivery
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive tools to optimize, track, and manage your delivery operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              isActive={activeFeature === index}
              isLoaded={isLoaded}
              index={index}
              onMouseEnter={() => setActiveFeature(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  isActive,
  isLoaded,
  index,
  onMouseEnter
}: {
  feature: typeof features[0]
  isActive: boolean
  isLoaded: boolean
  index: number
  onMouseEnter: () => void
}) {
  return (
    <Card
      className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer group ${
        isActive ? "ring-2 ring-blue-500 shadow-blue-500/25" : ""
      } ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={onMouseEnter}
    >
      <CardHeader className="pb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <feature.icon className="h-7 w-7" />
        </div>
        <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
          {feature.title}
        </CardTitle>
        <Badge variant="secondary" className="w-fit text-xs">
          {feature.benefit}
        </Badge>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}