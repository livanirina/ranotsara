"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "./language-provider"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const languageNames = {
    en: "English",
    fr: "Français",
    de: "Deutsch",
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="RANO TSARA" className="h-30 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors">
              {t.nav.products}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t.nav.contact}
            </Link>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                  {languageNames[language]}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")}>Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("de")}>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.products}
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <div className="flex gap-2 pt-2">
                <Button variant={language === "en" ? "default" : "outline"} size="sm" onClick={() => setLanguage("en")}>
                  EN
                </Button>
                <Button variant={language === "fr" ? "default" : "outline"} size="sm" onClick={() => setLanguage("fr")}>
                  FR
                </Button>
                <Button variant={language === "de" ? "default" : "outline"} size="sm" onClick={() => setLanguage("de")}>
                  DE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
