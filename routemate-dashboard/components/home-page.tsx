"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Truck,MapPin,Clock,BarChart3,Users,Zap,Shield,Star,ArrowRight,CheckCircle,TrendingUp,Globe,Phone,Mail,Menu,X,Upload,Play,Award,Target,
        Sparkles,Rocket,Heart,MessageCircle} from "lucide-react"
import { useAuth } from "@/components/auth-provider"

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const { setCurrentPage } = useAuth()

  useEffect(() => {
    setIsLoaded(true)
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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

  const stats = [
    { number: "50K+", label: "Deliveries Completed", icon: Truck, color: "text-blue-600" },
    { number: "98%", label: "Customer Satisfaction", icon: Star, color: "text-yellow-500" },
    { number: "40%", label: "Cost Reduction", icon: TrendingUp, color: "text-green-600" },
    { number: "24/7", label: "Support Available", icon: Globe, color: "text-purple-600" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "QuickDelivery Co.",
      content:
        "RouteMate transformed our delivery operations. We've seen a 35% reduction in delivery times and our customers love the real-time tracking.",
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

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: ["Up to 100 deliveries/month", "Basic route optimization", "Email support", "Mobile app access"],
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

  const handleDemoClick = () => {
    alert("Demo video would open here! 🎥")
  }

  const handleContactClick = () => {
    alert("Contact form would open here! 📧")
  }

  const handleScheduleDemo = () => {
    alert("Demo scheduling would open here! 📅")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <Truck className="size-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                RouteMate
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Testimonials
              </a>
              <Button
                variant="outline"
                className="border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                onClick={() => setCurrentPage("login")}
              >
                Sign In
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => setCurrentPage("signup")}
              >
                Get Started
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg">
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" onClick={() => setCurrentPage("login")}>
                    Sign In
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    onClick={() => setCurrentPage("signup")}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-float delay-500"></div>

          {/* Floating Icons */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="p-3 bg-white/10 backdrop-blur-lg rounded-lg">
              <Truck className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <div className="absolute top-32 right-20 animate-float delay-1000">
            <div className="p-3 bg-white/10 backdrop-blur-lg rounded-lg">
              <MapPin className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div className="absolute bottom-32 left-20 animate-float delay-500">
            <div className="p-3 bg-white/10 backdrop-blur-lg rounded-lg">
              <BarChart3 className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-200 border-0 px-4 py-2 text-sm font-semibold">
                <Rocket className="mr-2 h-4 w-4" />
                Optimize Your Last-Mile Delivery
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
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
                  onClick={() => setCurrentPage("signup")}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold border-2 hover:bg-slate-50 dark:hover:bg-slate-800 backdrop-blur-lg"
                  onClick={handleDemoClick}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">Industry Leading</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">Loved by 10K+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
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

      {/* Enhanced Features Section */}
      <section
        id="features"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900"
      >
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
              Comprehensive tools to optimize, track, and manage your delivery operations with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer group ${
                  activeFeature === index ? "ring-2 ring-blue-500 shadow-blue-500/25" : ""
                } ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
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
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <Zap className="mr-2 h-4 w-4" />
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
            {[
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
            ].map((step, index) => (
              <div
                key={step.step}
                className={`text-center group transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <step.icon className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                  </div>

                  {/* Connecting Line */}
                  {index < 2 && (
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

      {/* Enhanced Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900"
      >
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
              <Card
                key={testimonial.name}
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
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
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
              <Card
                key={plan.name}
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
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
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
                    onClick={() => setCurrentPage("signup")}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    {plan.popular && <Sparkles className="ml-2 h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
            Join thousands of businesses already using RouteMate to optimize their deliveries and delight customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-2xl"
              onClick={() => setCurrentPage("signup")}
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

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex aspect-square size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                  <Truck className="size-6" />
                </div>
                <span className="text-2xl font-bold">RouteMate</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Revolutionizing last-mile delivery with AI-powered route optimization and real-time tracking for
                businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  onClick={handleContactClick}
                >
                  <Globe className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  onClick={handleContactClick}
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  onClick={handleContactClick}
                >
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Product</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    API
                  </button>
                </li>
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    Integrations
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    Careers
                  </button>
                </li>
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Support</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    Help Center
                  </button>
                </li>
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    Documentation
                  </button>
                </li>
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    Status
                  </button>
                </li>
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-400">
            <p>&copy; 2024 RouteMate. All rights reserved. Built with ❤️ for better deliveries.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
