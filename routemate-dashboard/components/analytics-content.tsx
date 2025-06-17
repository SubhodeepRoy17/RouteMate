"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, TrendingDown, Clock, Package } from "lucide-react"

export function AnalyticsContent() {
  const deliveryTrends = [
    { day: "Mon", deliveries: 45, orders: 52 },
    { day: "Tue", deliveries: 52, orders: 58 },
    { day: "Wed", deliveries: 48, orders: 55 },
    { day: "Thu", deliveries: 61, orders: 67 },
    { day: "Fri", deliveries: 55, orders: 62 },
    { day: "Sat", deliveries: 67, orders: 71 },
    { day: "Sun", deliveries: 43, orders: 48 },
  ]

  const agentPerformance = [
    { name: "Mike Rodriguez", deliveries: 89, efficiency: 94 },
    { name: "Sarah Chen", deliveries: 76, efficiency: 87 },
    { name: "James Parker", deliveries: 95, efficiency: 91 },
    { name: "Lisa Thompson", deliveries: 68, efficiency: 89 },
    { name: "David Kim", deliveries: 54, efficiency: 85 },
  ]

  const deliveryStatus = [
    { name: "Delivered", value: 189, color: "#10b981" },
    { name: "In Transit", value: 34, color: "#f59e0b" },
    { name: "Pending", value: 24, color: "#6b7280" },
    { name: "Failed", value: 8, color: "#ef4444" },
  ]

  const timeAnalysis = [
    { hour: "8AM", avgTime: 25, orders: 12 },
    { hour: "10AM", avgTime: 28, orders: 18 },
    { hour: "12PM", avgTime: 32, orders: 24 },
    { hour: "2PM", avgTime: 29, orders: 21 },
    { hour: "4PM", avgTime: 26, orders: 19 },
    { hour: "6PM", avgTime: 31, orders: 16 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">Insights and performance metrics for your delivery operations</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2.1%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Delivery Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28 min</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">-3 min</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Distance</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247 km</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+5.2%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trends">Delivery Trends</TabsTrigger>
          <TabsTrigger value="performance">Agent Performance</TabsTrigger>
          <TabsTrigger value="status">Order Status</TabsTrigger>
          <TabsTrigger value="time">Time Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Delivery Trends</CardTitle>
              <CardDescription>Comparison of orders received vs deliveries completed</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={deliveryTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#8884d8" name="Orders" />
                  <Bar dataKey="deliveries" fill="#82ca9d" name="Deliveries" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Performance Comparison</CardTitle>
              <CardDescription>Deliveries completed vs efficiency rating by agent</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={agentPerformance} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="deliveries" fill="#8884d8" name="Deliveries" />
                  <Bar dataKey="efficiency" fill="#82ca9d" name="Efficiency %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="status" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Status Distribution</CardTitle>
                <CardDescription>Current status of all orders in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deliveryStatus}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {deliveryStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status Summary</CardTitle>
                <CardDescription>Detailed breakdown of order statuses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {deliveryStatus.map((status) => (
                  <div key={status.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }} />
                      <span className="text-sm font-medium">{status.name}</span>
                    </div>
                    <span className="text-sm font-bold">{status.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="time" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Time Analysis</CardTitle>
              <CardDescription>Average delivery time and order volume by hour</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={timeAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="avgTime" stroke="#8884d8" name="Avg Time (min)" />
                  <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#82ca9d" name="Orders" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
