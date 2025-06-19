"use client"

import { MessageCircle, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    company: "QuickDelivery Co.",
    content: "RouteMate transformed our delivery operations...",
    rating: 5,
    avatar: "SJ",
    savings: "$15K/month saved",
  },
  {
      name: "Michael Chen",
      role: "CEO",
      company: "Urban Logistics",
      content:
        "The analytics dashboard gives us insights we never had before. Route optimization has saved us thousands in fuel costs.",
      rating: 5,
      avatar: "MC",
      savings: "40% fuel reduction",
    },
    {
      name: "Emily Rodriguez",
      role: "Fleet Manager",
      company: "Metro Express",
      content:
        "Managing our 50+ delivery agents is now effortless. The platform's efficiency tracking helps us optimize performance.",
      rating: 5,
      avatar: "ER",
      savings: "25% faster deliveries",
    },
]

export function Testimonials() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            <MessageCircle className="mr-2 h-4 w-4" />
            Customer Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Loved by
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Thousands
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            See how businesses like yours are transforming their delivery operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name} 
              testimonial={testimonial} 
              isLoaded={isLoaded}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  isLoaded,
  index
}: {
  testimonial: typeof testimonials[0]
  isLoaded: boolean
  index: number
}) {
  return (
    <Card
      className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-6 italic text-lg leading-relaxed">
          "{testimonial.content}"
        </p>
        <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          {testimonial.savings}
        </Badge>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-slate-100 text-lg">{testimonial.name}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}