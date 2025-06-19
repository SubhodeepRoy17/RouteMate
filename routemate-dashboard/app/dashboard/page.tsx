//routemate-dashboard/app/dashboard/page.tsx
"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { useAuth } from "@/components/auth-provider"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Package, CheckCircle, Clock, Fuel, TrendingUp, TrendingDown, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  const { isAuthenticated, isLoading, user } = useAuth()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  // Handle mounting and auth state
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Redirect logic
  useEffect(() => {
    if (!isMounted || isLoading) return
    
    if (!isAuthenticated) {
      // Store current path for post-login redirect
      sessionStorage.setItem('redirectPath', '/dashboard')
      router.replace('/auth/signin')
    }
  }, [isAuthenticated, isLoading, isMounted, router])

  // Loading states (in order of priority)
  if (!isMounted) {
    return null // Prevents hydration mismatch
  }

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
        <span className="sr-only">Loading authentication status...</span>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
        <span className="sr-only">Redirecting to sign-in page...</span>
      </div>
    )
  }

  const metrics = [
    {
      title: "Total Orders Today",
      value: "247",
      change: "+12%",
      trend: "up",
      icon: Package,
      description: "vs yesterday",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Deliveries Completed",
      value: "189",
      change: "+8%",
      trend: "up",
      icon: CheckCircle,
      description: "76% completion rate",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Average Delivery Time",
      value: "28 min",
      change: "-5%",
      trend: "down",
      icon: Clock,
      description: "3 min faster than avg",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Fuel Saved",
      value: "142L",
      change: "+15%",
      trend: "up",
      icon: Fuel,
      description: "Route optimization",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const recentOrders = [
    { id: "#RM-001", customer: "Alice Johnson", address: "123 Main St", status: "delivered", time: "2 min ago" },
    { id: "#RM-002", customer: "Bob Smith", address: "456 Oak Ave", status: "in-transit", time: "5 min ago" },
    { id: "#RM-003", customer: "Carol Davis", address: "789 Pine Rd", status: "pending", time: "8 min ago" },
    { id: "#RM-004", customer: "David Wilson", address: "321 Elm St", status: "delivered", time: "12 min ago" },
  ]

  const activeAgents = [
    { name: "Mike Rodriguez", orders: 12, status: "online", efficiency: 94 },
    { name: "Sarah Chen", orders: 8, status: "online", efficiency: 87 },
    { name: "James Parker", orders: 15, status: "busy", efficiency: 91 },
    { name: "Lisa Thompson", orders: 6, status: "online", efficiency: 89 },
  ]

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full flex-col">
        <TopNavbar user={user} onLogout={logout} />
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar />
          <SidebarInset>
            <main className="flex-1 space-y-4 overflow-auto p-4 md:p-8 pt-6">
              <div className="space-y-8">
                <div className={`transition-all duration-1000 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                    Dashboard Overview
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mt-2">
                    Welcome back! Here's what's happening with your deliveries today.
                  </p>
                </div>

                {/* Metrics Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {metrics.map((metric, index) => (
                    <Card
                      key={metric.title}
                      className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5`}></div>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                        <CardTitle className="text-sm font-semibold text-slate-700 dark:text-slate-300">{metric.title}</CardTitle>
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${metric.color} text-white`}>
                          <metric.icon className="h-4 w-4" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{metric.value}</div>
                        <div className="flex items-center space-x-2 text-sm">
                          <div className={`flex items-center ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                            {metric.trend === "up" ? (
                              <TrendingUp className="h-3 w-3 mr-1" />
                            ) : (
                              <TrendingDown className="h-3 w-3 mr-1" />
                            )}
                            <span className="font-semibold">{metric.change}</span>
                          </div>
                          <span className="text-slate-500 dark:text-slate-400">{metric.description}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                  {/* Recent Orders */}
                  <Card
                    className={`col-span-4 border-0 shadow-lg transition-all duration-700 ${
                      isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Recent Orders</CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        Latest delivery orders and their current status
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentOrders.map((order, index) => (
                          <div
                            key={order.id}
                            className={`flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 ${
                              isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                            }`}
                            style={{ transitionDelay: `${500 + index * 100}ms` }}
                          >
                            <div className="flex items-center space-x-4">
                              <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{order.id}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{order.customer}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-3 w-3 text-slate-400" />
                                <span className="text-xs text-slate-500 dark:text-slate-400">{order.address}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Badge
                                variant={
                                  order.status === "delivered"
                                    ? "default"
                                    : order.status === "in-transit"
                                      ? "secondary"
                                      : "outline"
                                }
                                className="font-medium"
                              >
                                {order.status}
                              </Badge>
                              <span className="text-xs text-slate-400">{order.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Active Agents */}
                  <Card
                    className={`col-span-3 border-0 shadow-lg transition-all duration-700 ${
                      isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Active Agents</CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        Current delivery agent performance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {activeAgents.map((agent, index) => (
                          <div
                            key={agent.name}
                            className={`space-y-3 transition-all duration-300 ${
                              isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                            }`}
                            style={{ transitionDelay: `${700 + index * 100}ms` }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`h-3 w-3 rounded-full ${
                                    agent.status === "online"
                                      ? "bg-green-500 animate-pulse"
                                      : agent.status === "busy"
                                        ? "bg-yellow-500"
                                        : "bg-slate-400"
                                  }`}
                                />
                                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{agent.name}</span>
                              </div>
                              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                {agent.orders} orders
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className="text-slate-600 dark:text-slate-400">Efficiency</span>
                                <span className="font-semibold text-slate-900 dark:text-slate-100">{agent.efficiency}%</span>
                              </div>
                              <Progress value={agent.efficiency} className="h-2 bg-slate-200 dark:bg-slate-700" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}