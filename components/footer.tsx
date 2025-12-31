"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="RANO TSARA" className="h-30 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/products"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.products}
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.followUs}</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>
            © {currentYear} RANO TSARA. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
