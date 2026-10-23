import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import Header, { Logo } from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import { ArrowUp } from './components/Icons.jsx'
import ModuleNav from './components/ModuleNav.jsx'
import ModuleSection from './components/ModuleSection.jsx'
import { CONTENT, UI } from './content/index.js'
import { useScrolled, useStoredState, useTheme } from './hooks.js'

const browserLang = navigator.language?.toLowerCase() ?? ''
const defaultLang = browserLang.startsWith('pt') ? 'pt' : browserLang.startsWith('es') ? 'es' : 'en'

function normalize(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

export default function App() {
  const [lang, setLangRaw] = useStoredState('cg-lang', defaultLang)
  const [theme, toggleTheme] = useTheme()
  const [query, setQuery] = useState('')
  const showTop = useScrolled(900)

  const setLang = (l) => {
    setLangRaw(l)
    setQuery('')
  }

  const t = UI[lang] ?? UI.pt
  const allModules = CONTENT[lang] ?? CONTENT.pt

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang
  }, [lang])

  const modules = useMemo(() => {
    const q = normalize(query.trim())
    if (!q) return allModules
    return allModules
      .map((m) => {
        if (normalize(m.title).includes(q)) return m
        const tutorials = m.tutorials.filter((tut) =>
          normalize(`${tut.title} ${tut.description}`).includes(q)
        )
        return tutorials.length ? { ...m, tutorials } : null
      })
      .filter(Boolean)
  }, [allModules, query])

  const videoCount = allModules.reduce((n, m) => n + m.tutorials.length, 0)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />

      <Header lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} t={t} />

      <main>
        <Hero
          t={t}
          query={query}
          setQuery={setQuery}
          moduleCount={allModules.length}
          videoCount={videoCount}
        />

        {modules.length > 0 && <ModuleNav modules={modules} />}

        <motion.div
          key={lang}
          className="container modules"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {modules.map((m) => (
            <ModuleSection key={m.id} module={m} index={allModules.findIndex((x) => x.id === m.id)} t={t} />
          ))}

          {modules.length === 0 && (
            <div className="empty">
              <p>
                {t.noResults} <strong>“{query}”</strong>
              </p>
              <button className="button" onClick={() => setQuery('')}>
                {t.clear}
              </button>
            </div>
          )}
        </motion.div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Logo />
          <p>
            © {new Date().getFullYear()} Corporate Games. {t.footer}
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="to-top"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t.backToTop}
            title={t.backToTop}
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
