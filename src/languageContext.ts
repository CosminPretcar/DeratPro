import { createContext } from 'react'
import type { Language, TranslationSet } from './i18n'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: TranslationSet
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
