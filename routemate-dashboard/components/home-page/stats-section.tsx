"use client"

import { Truck, Star, TrendingUp, Globe } from "lucide-react"
import { useState, useEffect } from "react"

const stats = [
  { number: "50K+", label: "Deliveries Completed", icon: Truck, color: "text-blue-600" },
  { number: "98%", label: "Customer Satisfaction", icon: Star, color: "text-yellow-500" },
  { number: "40%", label: "Cost Reduction", icon: TrendingUp, color: "text-green-600" },
  { number: "24/7", label: "Support Available", icon: Globe, color: "text-purple-600" },
]

export function StatsSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-slate-600 dark:text-slate-400">Real results from real businesses</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center group cursor-pointer transition-all duration-700 hover:scale-110 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl group-hover:shadow-xl transition-all duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}