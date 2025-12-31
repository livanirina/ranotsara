"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    key: "bottle" as const,
    image: "/model_tavoangy.png",
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

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t.products.title}</h1>
            <p className="text-xl text-muted-foreground">{t.whyChoose.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {products.map((product, index) => {
              const productData = t.products[product.key]
              const isEven = index % 2 === 0

              return (
                <Card key={product.key} className="border-none shadow-xl overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-8 ${isEven ? "" : "md:grid-flow-dense"}`}>
                    <div className={`relative h-80 md:h-auto ${isEven ? "" : "md:col-start-2"}`}>
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={productData.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{productData.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">{productData.shortDesc}</p>
                      <p className="text-muted-foreground leading-relaxed">{productData.fullDesc}</p>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
