"use client"

import { Rocket, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CtaSection() {
  const router = useRouter()

  const handleScheduleDemo = () => {
    alert("Demo scheduling would open here! 📅")
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Ready to Transform Your
          <span className="block">Delivery Operations?</span>
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
          Join thousands of businesses already using RouteMate to optimize their deliveries.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-2xl"
            onClick={() => router.push('/signup')}
          >
            <Rocket className="mr-2 h-6 w-6" />
            Start Your Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 text-xl font-semibold backdrop-blur-lg"
            onClick={handleScheduleDemo}
          >
            <Phone className="mr-2 h-6 w-6" />
            Schedule Demo
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}