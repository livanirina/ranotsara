"use client"

import { Droplets, Leaf, Award, Globe } from "lucide-react"
import { useLanguage } from "./language-provider"
import { Card, CardContent } from "./ui/card"
import { useEffect, useRef, useState } from "react"

const icons = [Droplets, Leaf, Award, Globe]

export function WhyChoose() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const cards = [
    { icon: icons[0], title: t.whyChoose.card1Title, desc: t.whyChoose.card1Desc },
    { icon: icons[1], title: t.whyChoose.card2Title, desc: t.whyChoose.card2Desc },
    { icon: icons[2], title: t.whyChoose.card3Title, desc: t.whyChoose.card3Desc },
    { icon: icons[3], title: t.whyChoose.card4Title, desc: t.whyChoose.card4Desc },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.whyChoose.title}</h2>
          <p className="text-lg text-muted-foreground text-pretty">{t.whyChoose.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon
            const delay = index * 150
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
