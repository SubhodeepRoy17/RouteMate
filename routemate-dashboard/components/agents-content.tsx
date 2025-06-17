"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Phone, MessageSquare, MapPin, Star, UserPlus, Filter } from "lucide-react"

export function AgentsContent() {
  const agents = [
    {
      id: "AG001",
      name: "Mike Rodriguez",
      avatar: "/placeholder-user.jpg",
      status: "online",
      currentOrders: 12,
      completedToday: 8,
      totalOrders: 247,
      rating: 4.9,
      efficiency: 94,
      location: "Downtown District",
      phone: "+1 (555) 123-4567",
      joinDate: "Jan 2023",
    },
    {
      id: "AG002",
      name: "Sarah Chen",
      avatar: "/placeholder-user.jpg",
      status: "online",
      currentOrders: 8,
      completedToday: 12,
      totalOrders: 189,
      rating: 4.8,
      efficiency: 87,
      location: "Midtown Area",
      phone: "+1 (555) 234-5678",
      joinDate: "Mar 2023",
    },
    {
      id: "AG003",
      name: "James Parker",
      avatar: "/placeholder-user.jpg",
      status: "busy",
      currentOrders: 15,
      completedToday: 6,
      totalOrders: 312,
      rating: 4.7,
      efficiency: 91,
      location: "Uptown Zone",
      phone: "+1 (555) 345-6789",
      joinDate: "Dec 2022",
    },
    {
      id: "AG004",
      name: "Lisa Thompson",
      avatar: "/placeholder-user.jpg",
      status: "online",
      currentOrders: 6,
      completedToday: 14,
      totalOrders: 156,
      rating: 4.9,
      efficiency: 89,
      location: "Suburban Area",
      phone: "+1 (555) 456-7890",
      joinDate: "Apr 2023",
    },
    {
      id: "AG005",
      name: "David Kim",
      avatar: "/placeholder-user.jpg",
      status: "offline",
      currentOrders: 0,
      completedToday: 0,
      totalOrders: 98,
      rating: 4.6,
      efficiency: 85,
      location: "East District",
      phone: "+1 (555) 567-8901",
      joinDate: "May 2023",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "busy":
        return "bg-yellow-500"
      case "offline":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "online":
        return "default"
      case "busy":
        return "secondary"
      case "offline":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Delivery Agents</h2>
          <p className="text-muted-foreground">Manage and monitor your delivery team performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Agent
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">4 active, 1 offline</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">41</div>
            <p className="text-xs text-muted-foreground">Currently in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">Customer satisfaction</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">Route optimization</p>
          </CardContent>
        </Card>
      </div>

      {/* Agents Table */}
      <Card>
        <CardHeader>
          <CardTitle>Agent Overview</CardTitle>
          <CardDescription>Current status and performance metrics for all delivery agents</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Current Orders</TableHead>
                <TableHead>Completed Today</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Efficiency</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agents.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={agent.avatar || "/placeholder.svg"} alt={agent.name} />
                        <AvatarFallback>
                          {agent.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{agent.name}</div>
                        <div className="text-sm text-muted-foreground">{agent.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className={`h-2 w-2 rounded-full ${getStatusColor(agent.status)}`} />
                      <Badge variant={getStatusVariant(agent.status)}>{agent.status}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{agent.currentOrders}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{agent.completedToday}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{agent.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{agent.efficiency}%</span>
                      </div>
                      <Progress value={agent.efficiency} className="h-1" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{agent.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
