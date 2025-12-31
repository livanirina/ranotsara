"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Leaf, Users, Globe } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  const commitments = [
    { icon: Award, title: t.about.commitmentQuality, desc: t.about.commitmentQualityText },
    { icon: Heart, title: t.about.commitmentHealth, desc: t.about.commitmentHealthText },
    { icon: Leaf, title: t.about.commitmentEnvironment, desc: t.about.commitmentEnvironmentText },
    { icon: Users, title: t.about.commitmentCommunity, desc: t.about.commitmentCommunityText },
    { icon: Globe, title: t.about.commitmentInternational, desc: t.about.commitmentInternationalText },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/montagne2.png"
          alt="Madagascar Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{t.about.title}</h1>
          <p className="text-xl md:text-2xl text-white/90">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-primary">{t.about.mission}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t.about.missionText}</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-accent">{t.about.vision}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t.about.visionText}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">{t.about.story}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.about.storyText}</p>

            <h2 className="text-4xl font-bold mb-6">{t.about.journey}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.journeyText}</p>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.about.commitment}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{commitment.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{commitment.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
