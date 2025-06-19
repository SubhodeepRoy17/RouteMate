"use client"

import { useState } from "react"
import { useAuth } from "@/components/auth-provider"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { HeroSection } from "@/components/home-page/hero-section"
import { StatsSection } from "@/components/home-page/stats-section"
import { FeaturesSection } from "@/components/home-page/features-section"
import { HowItWorks } from "@/components/home-page/how-it-works"
import { Testimonials } from "@/components/home-page/testimonials"
import { PricingSection } from "@/components/home-page/pricing-section"
import { CtaSection } from "@/components/home-page/cta-section"
import { Footer } from "@/components/home-page/footer"
import { Navigation } from "@/components/home-page/navigation"

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorks />
        <Testimonials />
        <PricingSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}