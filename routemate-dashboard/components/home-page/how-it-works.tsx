"use client"

import { Upload, Zap, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Zap as ZapIcon } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Upload Your Orders",
    description: "Import delivery orders via CSV or add them manually through our intuitive interface.",
    icon: Upload,
    color: "from-blue-500 to-blue-600",
  },
  {
    step: "02",
    title: "AI Optimizes Routes",
    description: "Our advanced algorithms automatically create the most efficient delivery routes.",
    icon: Zap,
    color: "from-purple-500 to-purple-600",
  },
  {
    step: "03",
    title: "Track & Deliver",
    description: "Monitor deliveries in real-time and keep customers informed with live updates.",
    icon: MapPin,
    color: "from-green-500 to-green-600",
  },
]

export function HowItWorks() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <ZapIcon className="mr-2 h-4 w-4" />
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Get Started in
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Minutes
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our streamlined onboarding process gets you up and running quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`text-center group transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <step.icon className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-600"></div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}