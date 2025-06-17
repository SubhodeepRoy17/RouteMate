"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { DashboardContent } from "@/components/dashboard-content"
import { UploadOrdersContent } from "@/components/upload-orders-content"
import { DeliveryMapContent } from "@/components/delivery-map-content"
import { AgentsContent } from "@/components/agents-content"
import { AnalyticsContent } from "@/components/analytics-content"
import { useAuth } from "@/components/auth-provider"

export function DashboardLayout() {
  const { activePage } = useAuth()

  const renderContent = () => {
    switch (activePage) {
      case "upload-orders":
        return <UploadOrdersContent />
      case "delivery-map":
        return <DeliveryMapContent />
      case "agents":
        return <AgentsContent />
      case "analytics":
        return <AnalyticsContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNavbar />
        <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">{renderContent()}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
