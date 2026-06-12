import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { translations } from '../data/translations.js'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('ssc-lang') || 'en')
  const [scale, setScale] = useState(() => Number(localStorage.getItem('ssc-scale')) || 1)

  useEffect(() => {
    document.body.setAttribute('data-lang', lang)
    document.documentElement.lang = lang
    localStorage.setItem('ssc-lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.style.fontSize = `${16 * scale}px`
    localStorage.setItem('ssc-scale', String(scale))
  }, [scale])

  // t() returns a string by dotted key, falling back to English then the key itself.
  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations.en
      const parts = key.split('.')
      let cur = dict
      for (const p of parts) cur = cur?.[p]
      if (cur == null) {
        let fb = translations.en
        for (const p of parts) fb = fb?.[p]
        return fb ?? key
      }
      return cur
    },
    [lang]
  )

  const value = {
    lang,
    setLang,
    toggleLang: () => setLang((l) => (l === 'en' ? 'kn' : 'en')),
    scale,
    incScale: () => setScale((s) => Math.min(1.4, +(s + 0.1).toFixed(2))),
    decScale: () => setScale((s) => Math.max(0.85, +(s - 0.1).toFixed(2))),
    resetScale: () => setScale(1),
    t,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
