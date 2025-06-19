"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Clock, Truck, Route, Play, Pause, RotateCcw } from "lucide-react"

export default function DeliveryMapPage() {
  const routes = [
    {
      id: "Route A",
      agent: "Mike Rodriguez",
      stops: 8,
      completed: 5,
      estimated: "2h 15m",
      distance: "24.5 km",
      color: "bg-blue-500",
    },
    {
      id: "Route B",
      agent: "Sarah Chen",
      stops: 6,
      completed: 3,
      estimated: "1h 45m",
      distance: "18.2 km",
      color: "bg-green-500",
    },
    {
      id: "Route C",
      agent: "James Parker",
      stops: 10,
      completed: 7,
      estimated: "2h 30m",
      distance: "31.8 km",
      color: "bg-purple-500",
    },
  ]

  const upcomingStops = [
    {
      id: "#RM-045",
      customer: "Emma Wilson",
      address: "456 Oak Avenue, Downtown",
      timeWindow: "2:00 PM - 4:00 PM",
      priority: "high",
      route: "Route A",
    },
    {
      id: "#RM-046",
      customer: "Robert Chen",
      address: "789 Pine Street, Midtown",
      timeWindow: "3:00 PM - 5:00 PM",
      priority: "normal",
      route: "Route B",
    },
    {
      id: "#RM-047",
      customer: "Lisa Garcia",
      address: "321 Elm Road, Uptown",
      timeWindow: "4:00 PM - 6:00 PM",
      priority: "urgent",
      route: "Route C",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Delivery Map</h2>
          <p className="text-muted-foreground">Real-time tracking of optimized delivery routes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RotateCcw className="mr-2 h-4 w-4" />
            Refresh Routes
          </Button>
          <Button size="sm">
            <Route className="mr-2 h-4 w-4" />
            Optimize All
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Interactive Route Map
              </CardTitle>
              <CardDescription>Live view of delivery routes and agent locations</CardDescription>
            </CardHeader>
            <CardContent className="h-full">
              {/* Mock Map Interface */}
              <div className="relative h-full bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
                  {/* Mock map elements */}
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Route A - 5/8 stops</span>
                    </div>
                  </div>

                  <div className="absolute top-20 left-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Route B - 3/6 stops</span>
                    </div>
                  </div>

                  <div className="absolute top-36 left-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Route C - 7/10 stops</span>
                    </div>
                  </div>

                  {/* Mock route paths */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d="M 100 200 Q 200 150 300 200 T 500 250"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M 150 300 Q 250 250 350 300 T 550 350"
                      stroke="#10b981"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M 80 400 Q 180 350 280 400 T 480 450"
                      stroke="#8b5cf6"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>

                  {/* Mock delivery pins */}
                  <div className="absolute top-48 left-24">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      <Truck className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <div className="absolute top-72 left-36">
                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      <Truck className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <div className="absolute top-96 left-20">
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      <Truck className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Map controls */}
                  <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <Button size="sm" variant="secondary">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Pause className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Route Information */}
        <div className="space-y-4">
          {/* Active Routes */}
          <Card>
            <CardHeader>
              <CardTitle>Active Routes</CardTitle>
              <CardDescription>Current delivery routes in progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {routes.map((route) => (
                <div key={route.id} className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${route.color}`}></div>
                      <span className="font-medium">{route.id}</span>
                    </div>
                    <Badge variant="outline">
                      {route.completed}/{route.stops} stops
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{route.agent}</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {route.estimated}
                    </span>
                    <span className="flex items-center gap-1">
                      <Navigation className="h-3 w-3" />
                      {route.distance}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Stops */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Stops</CardTitle>
              <CardDescription>Next deliveries in queue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingStops.map((stop) => (
                <div key={stop.id} className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{stop.id}</span>
                    <Badge
                      variant={
                        stop.priority === "urgent" ? "destructive" : stop.priority === "high" ? "default" : "secondary"
                      }
                    >
                      {stop.priority}
                    </Badge>
                  </div>
                  <p className="text-sm">{stop.customer}</p>
                  <p className="text-xs text-muted-foreground">{stop.address}</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{stop.timeWindow}</span>
                    <span className="font-medium">{stop.route}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}