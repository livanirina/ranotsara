"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const slides = [
  {
    media: { type: "video" as const, src: "/logo anime.mp4" },
    slideKey: "slide1" as const,
  },
  {
    media: { type: "video" as const, src: "/maki anime.mp4" },
    slideKey: "slide2" as const,
  },
  {
    media: { type: "image" as const, src: "/montagne2.png" },
    slideKey: "slide3" as const,
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { t } = useLanguage()

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        goToSlide((currentSlide + 1) % slides.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide, isAnimating])

  const slide = slides[currentSlide]

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Media with Ken Burns effect */}
      <div className="absolute inset-0">
        {slide.media.type === "video" ? (
          <video
            key={currentSlide}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-[10000ms] ease-out scale-105 hover:scale-110"
            poster={slide.media.src}
          >
            <source src={slide.media.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={slide.media.src || "/placeholder.svg"}
            alt="RANO TSARA"
            className="h-full w-full object-cover transition-transform duration-[10000ms] ease-out scale-105 hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Animated water droplets overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/15 rounded-full animate-float animate-delay-200" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-white/10 rounded-full animate-float animate-delay-400" />
      </div>

      {/* Content with staggered animations */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div key={currentSlide} className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance opacity-0 animate-fade-in-up">
              {t.hero[`${slide.slideKey}Title`]}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-pretty opacity-0 animate-fade-in-up animate-delay-300">
              {t.hero[`${slide.slideKey}Desc`]}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators with enhanced animations */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70 hover:w-4"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
