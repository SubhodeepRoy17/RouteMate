"use client"

import { Truck, Globe, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const handleContactClick = () => {
    alert("Contact form would open here! 📧")
  }

  return (
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
              Revolutionizing last-mile delivery with AI-powered route optimization.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800" onClick={handleContactClick}>
                <Globe className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800" onClick={handleContactClick}>
                <Mail className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800" onClick={handleContactClick}>
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer columns */}
          <FooterColumn title="Product" items={[
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "API", onClick: handleContactClick },
            { label: "Integrations", onClick: handleContactClick }
          ]} />

          <FooterColumn title="Company" items={[
            { label: "About", onClick: handleContactClick },
            { label: "Blog", onClick: handleContactClick },
            { label: "Careers", onClick: handleContactClick },
            { label: "Contact", onClick: handleContactClick }
          ]} />

          <FooterColumn title="Support" items={[
            { label: "Help Center", onClick: handleContactClick },
            { label: "Documentation", onClick: handleContactClick },
            { label: "Status", onClick: handleContactClick },
            { label: "Privacy Policy", onClick: handleContactClick }
          ]} />
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-400">
          <p>&copy; 2024 RouteMate. All rights reserved. Built with ❤️ for better deliveries.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  items
}: {
  title: string
  items: Array<{ label: string; href?: string; onClick?: () => void }>
}) {
  return (
    <div>
      <h3 className="font-semibold mb-6 text-lg">{title}</h3>
      <ul className="space-y-3 text-slate-400">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ) : (
              <button onClick={item.onClick} className="hover:text-white transition-colors">
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}