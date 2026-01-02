"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "./language-provider"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const products = [
  {
    key: "bottle" as const,
    image: "/tavoangy2.png",
  },
  {
    key: "minerals" as const,
    image: "/compo_mineral.png",
  },
  {
    key: "source" as const,
    image: "/montagne.png",
  },
  {
    key: "bottling" as const,
    image: "/amboutaillage.png",
  },
  {
    key: "quality" as const,
    image: "/usine.png",
  },
]

export function ProductPreview() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.products.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const isExpanded = expandedProduct === product.key
            const productData = t.products[product.key]
            const delay = index * 100

            return (
              <div
                key={product.key}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={productData.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {productData.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 transition-all duration-300">
                      {isExpanded ? productData.fullDesc : productData.shortDesc}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedProduct(isExpanded ? null : product.key)}
                      className="gap-1 group-hover:text-primary transition-colors duration-300"
                    >
                      {isExpanded ? (
                        <>
                          {t.products.viewLess}
                          <ChevronUp className="h-4 w-4 transition-transform duration-300" />
                        </>
                      ) : (
                        <>
                          {t.products.viewMore}
                          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link href="/products">
            <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-300">
              {t.products.viewMore}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
