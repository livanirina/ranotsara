import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RANO TSARA - Pure Natural Water from Madagascar",
  description:
    "Experience the pristine essence of Madagascar's natural mineral springs. Pure water from the mountains of Maneva Ambositra.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
