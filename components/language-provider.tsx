"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { type Language, getTranslation } from "@/lib/i18n"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslation>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [t, setT] = useState(() => getTranslation("en"))

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language
    if (stored && ["en", "fr", "de"].includes(stored)) {
      setLanguageState(stored)
      setT(getTranslation(stored))
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setT(getTranslation(lang))
    localStorage.setItem("language", lang)
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
