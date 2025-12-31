import { HeroSlider } from "@/components/hero-slider"
import { WhyChoose } from "@/components/why-choose"
import { ProductPreview } from "@/components/product-preview"
import { FAQ } from "@/components/faq"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <WhyChoose />
      <ProductPreview />
      <FAQ />
    </main>
  )
}
