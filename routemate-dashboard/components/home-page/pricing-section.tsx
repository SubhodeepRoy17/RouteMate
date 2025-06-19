"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Target, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses",
    features: ["Up to 100 deliveries/month", "Basic route optimization", "Email support"],
    popular: false,
    color: "from-slate-600 to-slate-700",
  },
  {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 1,000 deliveries/month",
        "Advanced analytics",
        "Real-time tracking",
        "Priority support",
        "API access",
      ],
      popular: true,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Unlimited deliveries",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "White-label solution",
      ],
      popular: false,
      color: "from-purple-600 to-purple-700",
    },
]

export function PricingSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            <Target className="mr-2 h-4 w-4" />
            Flexible Plans
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={plan.name}
              plan={plan}
              isLoaded={isLoaded}
              index={index}
              router={router}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  plan,
  isLoaded,
  index,
  router
}: {
  plan: typeof pricingPlans[0]
  isLoaded: boolean
  index: number
  router: ReturnType<typeof useRouter>
}) {
  return (
    <Card
      className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 relative group ${
        plan.popular ? "ring-2 ring-blue-500 transform scale-105 shadow-blue-500/25" : "hover:scale-105"
      } ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
            <Star className="mr-1 h-4 w-4" />
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-8">
        <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
          <span className="text-white font-bold text-xl">{plan.name[0]}</span>
        </div>
        <CardTitle className="text-3xl font-bold text-slate-900 dark:text-slate-100">{plan.name}</CardTitle>
        <div className="mt-6">
          <span className="text-5xl font-bold text-slate-900 dark:text-slate-100">{plan.price}</span>
          <span className="text-slate-600 dark:text-slate-400 text-xl">{plan.period}</span>
        </div>
        <CardDescription className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 px-8 pb-8">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-slate-600 dark:text-slate-400">{feature}</span>
          </div>
        ))}
        <Button
          className={`w-full mt-8 h-12 font-semibold text-lg transition-all duration-200 ${
            plan.popular
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl"
              : "hover:scale-105"
          }`}
          variant={plan.popular ? "default" : "outline"}
          onClick={() => router.push('/signup')}
        >
          {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
          {plan.popular && <Sparkles className="ml-2 h-4 w-4" />}
        </Button>
      </CardContent>
    </Card>
  )
}